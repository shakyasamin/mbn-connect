import { AuthApi } from "@/api/service/authApi";
import { Status } from "@/enum/common";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface TokenState {
  status: Status;
  error: string | undefined;
}

const initialState: TokenState = {
  status: Status.Idle,
  error: undefined,
};

export const verifyToken = createAsyncThunk("token/verifyToken", async () => {
  const response = await AuthApi.verify();

  return response.data;
});

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setTokenStatus: (state, status: PayloadAction<Status>) => {
      state.status = status.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(verifyToken.pending, (state, _) => {
        state.status = Status.Loading;
      })
      .addCase(verifyToken.fulfilled, (state, _) => {
        state.status = Status.Succeeded;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.error.message;
      });
  },
});
export default tokenSlice.reducer;
export const { setTokenStatus } = tokenSlice.actions;
