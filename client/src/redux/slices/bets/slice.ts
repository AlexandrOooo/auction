import { createSlice } from "@reduxjs/toolkit";
import { createBet, fetchBetHistory } from "./requests";
import { Bets } from "./types";

const initialState: Bets = {
  bets: [],
  hasNext: false,
};

export const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBetHistory.fulfilled, (state, action) => {
      state.bets = action.payload.data;
      state.hasNext = action.payload.meta.hasNext;
    });

    builder.addCase(createBet.fulfilled, (state, action) => {
      state.bets = [...state.bets, action.payload];
    });
  },
});

export default betsSlice.reducer;
