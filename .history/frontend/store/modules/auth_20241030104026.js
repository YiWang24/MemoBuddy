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
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state) {
      state.userInfo = {};
      state.token = null;
      removeToken();
      ;
    },
  },
});

const { setToken, setUserInfo, clearUserInfo } = authSlice.actions;

const authReducer = authSlice.reducer;

const fetchLogin = (data) =>{
  return async (dispatch)
}
