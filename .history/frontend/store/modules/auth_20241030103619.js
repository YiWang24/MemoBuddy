import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "@/utils";

const initialState = {
  token: getToken || null,
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
