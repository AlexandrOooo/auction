import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user/slice";
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const UseAppDispatch = () => useDispatch<AppDispatch>();
