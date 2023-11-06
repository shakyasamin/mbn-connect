import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Status } from "@/enum/common";
import { RootState } from "@/app/store";
import { loginUser } from "./loginRequest";
import { cookiesStore } from "@/utils/cookiesHandler";
import { ILoginResponseModel } from "@/model/authModel";

interface CurrentUserState {
  loginResponseModel: ILoginResponseModel | null;
  status: Status;
  error?: string;
}

const initialState: CurrentUserState = {
  loginResponseModel: null,
  status: Status.Idle,
  error: undefined,
};

const loginSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUserStatus(state, status: PayloadAction<Status>) {
      state.status = status.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loginResponseModel = payload;

        cookiesStore.saveItem({
          key: "access_token",
          data: payload.accessToken,
        });
        cookiesStore.saveItem({
          key: "refresh_token",
          data: payload.refreshToken,
        });

        state.status = Status.Succeeded;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;

export const { setCurrentUserStatus } = loginSlice.actions;
export const getUserStatus = (state: RootState) =>
  state.currentUser.loginResponseModel;
