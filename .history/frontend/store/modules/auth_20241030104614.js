import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from "@/utils";
import { authApi } from "@/api";

const initialState = {
  user: null,
  token: getToken || null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login
  },
});

const { setToken, clearUserInfo } = authSlice.actions;

const authReducer = authSlice.reducer;

const fetchLogin = (data) => {
  return async (dispatch) => {
    const { user, token } = await authApi.login(data);
    dispatch(setToken(token));
  };
};
