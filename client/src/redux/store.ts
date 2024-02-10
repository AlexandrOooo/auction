import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import user from "./slices/user/slice";
import lots from "./slices/lots/slice";

export const store = configureStore({
  reducer: {
    user,
    lots,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const UseAppDispatch = () => useDispatch<AppDispatch>();
