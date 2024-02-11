import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../../axios";

export const fetchBetHistory = createAsyncThunk(
  "lots/fetchAllLots",
  async ({
    limit,
    skip,
    auctionId,
  }: {
    limit: number;
    skip: number;
    auctionId: string;
  }) => {
    const response = {
      data: [
        {
          user: "@bigboy0001",
          betPrice: 120,
        },
        {
          user: "@peppa_pig",
          betPrice: 80,
        },
        {
          user: "@arnold_shwarznegger",
          betPrice: 45,
        },
        {
          user: "@bella55",
          betPrice: 35,
        },
        {
          user: "@therichestmenhere",
          betPrice: 20,
        },
        {
          user: "@2349173741375",
          betPrice: 10,
        },
        {
          user: "@bigboy0001",
          betPrice: 120,
        },
        {
          user: "@peppa_pig",
          betPrice: 80,
        },
        {
          user: "@arnold_shwarznegger",
          betPrice: 45,
        },
        {
          user: "@bella55",
          betPrice: 35,
        },
        {
          user: "@therichestmenhere",
          betPrice: 20,
        },
        {
          user: "@2349173741375",
          betPrice: 10,
        },
        {
          user: "@bigboy0001",
          betPrice: 120,
        },
        {
          user: "@peppa_pig",
          betPrice: 80,
        },
        {
          user: "@arnold_shwarznegger",
          betPrice: 45,
        },
        {
          user: "@bella55",
          betPrice: 35,
        },
        {
          user: "@therichestmenhere",
          betPrice: 20,
        },
        {
          user: "@2349173741375",
          betPrice: 10,
        },
        {
          user: "@bigboy0001",
          betPrice: 120,
        },
        {
          user: "@peppa_pig",
          betPrice: 80,
        },
        {
          user: "@arnold_shwarznegger",
          betPrice: 45,
        },
        {
          user: "@bella55",
          betPrice: 35,
        },
        {
          user: "@therichestmenhere",
          betPrice: 20,
        },
        {
          user: "@2349173741375",
          betPrice: 10,
        },
        {
          user: "@bigboy0001",
          betPrice: 120,
        },
        {
          user: "@arnold_shwarznegger",
          betPrice: 45,
        },
        {
          user: "@bella55",
          betPrice: 35,
        },
        {
          user: "@therichestmenhere",
          betPrice: 20,
        },
        {
          user: "@2349173741375",
          betPrice: 10,
        },
      ],
      meta: {
        hasNext: true,
      },
    };

    // const response = await myAxios.get("/bets", {
    //   params: { limit, skip, auctionId },
    // });

    return response;
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
