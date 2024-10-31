import { createSlice } from "@reduxjs/toolkit";
import {setToken as _setToken, getToken } from "@/utils";

const initialState = {
  token: getToken || null,
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
