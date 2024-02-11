import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../../axios";

export const getBetHistory = createAsyncThunk(
  "bets/getAllLots",
  async ({
    limit,
    skip,
    auctionId,
  }: {
    limit: number;
    skip: number;
    auctionId: string;
  }) => {

    const response = await myAxios.get("/bets", {
      params: { limit, skip, auctionId },
    })

    return response.data;
  }
);

export const makeNewBet = createAsyncThunk(
  "bets/makeNewBet",
  async ({ auctionId, betPrice } : { auctionId: string; betPrice: number }) => {
    const { data } = await myAxios.post("/bets", 
      {
        auctionId,
        betPrice,
      },
    ); 

    return data;
  }
);
