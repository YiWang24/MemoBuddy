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

const { setToken, clearUserInfo } = authSlice.actions;

const authReducer = authSlice.reducer;

const fetchLogin = (data) => {
  return async (dispatch) => {
    const { user, token } = await authApi.login(data);
    dispatch(setToken(token));
  };
};
