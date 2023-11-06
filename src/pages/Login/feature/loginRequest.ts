import { AuthApi } from "@/api/service/authApi";
import { ILoginModel } from "@/model/authModel";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "login/userlogin",
  async (loginModel: ILoginModel, { rejectWithValue }) => {
    try {
      const response = await AuthApi.login(loginModel);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
