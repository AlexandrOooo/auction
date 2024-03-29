import { createSlice } from "@reduxjs/toolkit";
import { createLot, fetchAllLots, fetchLot, updateLot } from "./requests";
import { Lots } from "./types";

const initialState: Lots = {
  lots: [],
  lot: null,
  hasNext: false,
};

export const lotsSlice = createSlice({
  name: "lots",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllLots.fulfilled, (state, action) => {
      state.lots = action.payload.data;
      state.hasNext = action.payload.meta?.hasNext;
    });

    builder.addCase(fetchLot.fulfilled, (state, action) => {
      state.lot = action.payload;
    });

    builder.addCase(updateLot.fulfilled, (state, action) => {
      state.lot = action.payload;
    });

    builder.addCase(createLot.fulfilled, (state, action) => {
      state.lots = [...state.lots, action.payload];
    });
  },
});

export default lotsSlice.reducer;
