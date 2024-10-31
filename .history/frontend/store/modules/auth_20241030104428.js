import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from "@/utils";
import { authApi } from "@/api";

const initialState = {
  token: getToken || null,
  userInfo: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.user = action.payload;
      _setToken(action.payload);
    },
    clearUserInfo(state) {
      state.userInfo = {};
      state.token = null;
      removeToken();
    },
  },
});

const { setToken, clearUserInfo } = authSlice.actions;

const authReducer = authSlice.reducer;

const fetchLogin = (data) => {
  return async (dispatch) => {
    const {user,token} = await authApi.login(data);
    dispatch(setToken(res.token));
  };
};
