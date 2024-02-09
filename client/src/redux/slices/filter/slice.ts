import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  currentPage: 1,
  amountOfPages: 10,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setAmountOfPages(state, action: PayloadAction<number>) {
      state.amountOfPages = action.payload;
    },
  },
});

export const { setCurrentPage, setAmountOfPages } = filterSlice.actions;

export default filterSlice.reducer;
