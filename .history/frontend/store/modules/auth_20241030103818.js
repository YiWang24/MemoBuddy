import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from "@/utils";
import { authApi } from "@/api";

const initialState = {
  token: getToken || null,
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.user = action.payload;
      _setToken(action.payload);
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;