import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../../axios";

export const fetchAllLots = createAsyncThunk(
  "lots/fetchAllLots",
  async ({ limit, skip }: { limit: number; skip: number }) => {
    const response = {
      data: [
        {
          id: 0,
          name: "The first car ever",
          lastBet: 120000,
          expiredAt: Date.now() + 5 * 24 * 60 * 60 * 1000,
          photos: [
            "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
          ],
        },
        {
          id: 1,
          name: "The second car ever",
          lastBet: 10000,
          expiredAt: Date.now() + 12 * 24 * 60 * 60 * 1000,
          photos: [
            "https://www.iliketowastemytime.com/sites/default/files/mercedes-benz-300sl-old-restoration1.jpg",
          ],
        },
        {
          id: 3,
          name: "Nokia 3310",
          lastBet: 120,
          expiredAt: Date.now() + 4 * 60 * 60 * 1000,
          photos: [
            "https://content2.rozetka.com.ua/goods/images/big/310881485.jpg",
          ],
        },
      ],
      meta: {
        hasNext: true
      }
    };

    // const response = await myAxios.get("/auctions", {
    //   params: { limit, skip },
    // });

    return response;
  }
);

export const fetchLot = createAsyncThunk("lots/fetchLot", async () => {
  const response = {
    data: {
      id: 0,
      name: "The first car ever",
      startPrice: 0,
      lastBet: 120000,
      isArchived: false,
      archivedAt: false,
      expiredAt: 32,
      isOwner: false,
      photos: [
        "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
        "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
        "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
        "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
        "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
        "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
        "https://group.mercedes-benz.com/bilder/konzern/tradition/geschichte/anfaenge-des-automobils/benz-patent-motorwagen-w1680xh945-cutout.png",
      ],
      description: `This is the first car ever. I want to sell it to spend all money on poor children that don't have ability to buy food and can't afford enough water for living and growing up. When I was a child I had to work hard by my own to earn a living and I want noone to have as hard childhood as I had.
          The car was created in 1824 by my dad that spent all salary on this prototipe instead of buying food for me and my sisters, so I hate this car more than you can imagine. I hope you will crash this car as soon as you buy it.`,
    },
  };

  return response.data;
});

export const updateLot = createAsyncThunk(
  "lots/updateLot",
  async (newData: {
    id: number;
    name: string;
    description: string;
    photos: string[];
  }) => {
    const response = {
      data: {
        id: newData.id,
        name: newData.name,
        startPrice: 0,
        lastBet: 120000,
        isArchived: false,
        archivedAt: false,
        expiredAt: 32,
        isOwner: false,
        photos: newData.photos,
        description: newData.description,
      },
    };

    return response.data;
  }
);

export const createLot = createAsyncThunk(
  "lots/createLot",
  async (newData: {
    id: number;
    name: string;
    description: string;
    photos: string[];
    startPrice: number;
  }) => {
    const response = {
      data: {
        id: newData.id,
        name: newData.name,
        startPrice: 0,
        lastBet: newData.startPrice,
        isArchived: false,
        archivedAt: false,
        expiredAt: 32,
        isOwner: false,
        photos: newData.photos,
        description: newData.description,
      },
    };

    return response.data;
  }
);
