import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signIn, signUp } from "./requests";
import { User } from "./types";

const initialState: User = {
  isAuth: false,
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.username = action.payload;
      state.isAuth = true;
    },
    clearUser(state) {
      state = initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.username = action.payload.name;
      window.localStorage.setItem('token', action.payload.token)
      state.isAuth = true;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.username = action.payload.name;
      window.localStorage.setItem('token', action.payload.token)
      state.isAuth = true;
    });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
