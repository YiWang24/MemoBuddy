import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from "@/utils";
import { authApi } from "@/api";
import {dis}
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
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      _setToken(action.payload.token);
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      removeToken();
    },
  },
});

const { loginSuccess, loginFailure, logout } = authSlice.actions;

const authReducer = authSlice.reducer;

const fetchLogin = async (credentials) => {
  try {
    const response = await authApi.login(credentials);
    console.log(response)
    dispatch(loginSuccess(response));
  } catch {
    dispatch(loginFailure(error));
    throw error;
  }
};

export { fetchLogin, authReducer, logout };
export default authReducer;
