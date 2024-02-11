import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../../axios";

export const fetchAllLots = createAsyncThunk(
  "lots/fetchAllLots",
  async ({ limit, skip }: { limit: number; skip: number }) => {
    const response = await myAxios.get("/auctions", {
      params: { limit, skip },
    });

    return response.data;
  }
);

export const fetchLot = createAsyncThunk(
  "lots/fetchLot",
  async ({ id }: { id: string }) => {
    const response = await myAxios.post(`/auctions/${id}`);

    return response.data;
  }
);

interface UpdateParams {
  name: string;
  description: string;
  photos: string[];
}

export const updateLot = createAsyncThunk(
  "lots/updateLot",
  async ({ name, description, photos }: UpdateParams) => {
    const response = await myAxios.put("/auctions", {
      body: {
        name: name,
        description: description,
        photos: photos,
      },
    });

    return response.data;
  }
);

interface CreateParams {
  name: string;
  description: string;
  photos: string[];
  startPrice: number;
}

export const createLot = createAsyncThunk(
  "lots/createLot",
  async ({ name, description, photos, startPrice }: CreateParams) => {
    const response = await myAxios.post("/auctions", {
      body: {
        name,
        description,
        photos,
        startPrice,
      },
    });

    return response.data;
  }
);
