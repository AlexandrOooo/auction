import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user/slice";
import filter from "./slices/filter/slice";
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    user,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const UseAppDispatch = () => useDispatch<AppDispatch>();
