import { createAsyncThunk } from "@reduxjs/toolkit";

import { AuthFormData } from "../../../@types/types";
import myAxios from "../../../axios";

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ username, password }: AuthFormData) => {
    console.log('asyncThunk..')
    const { data } = await myAxios.post("/users/register", {
      login: username,
      password,
    });

    return data;
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ username, password }: AuthFormData) => {
    const { data } = await myAxios.post("/user/login", {
      username,
      password,
    });

    return data;
  }
);
