import { createSlice } from "@reduxjs/toolkit";
import { fetchAllLots, fetchLot, updateLot } from "./requests";
import { Lots } from "./types";

const initialState: Lots = {
  lots: [],
  lot: null,
};

export const lotsSlice = createSlice({
  name: "lots",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllLots.fulfilled, (state, action) => {
      state.lots = action.payload;
    });

    builder.addCase(fetchLot.fulfilled, (state, action) => {
      state.lot = action.payload;
    });

    builder.addCase(updateLot.fulfilled, (state, action) => {
      state.lot = action.payload;
    });
  },
});

export default lotsSlice.reducer;
