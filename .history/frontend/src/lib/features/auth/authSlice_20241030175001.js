import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@/api";

const initialState = {
  user: null,
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

const fetchLogin = (loginForm) => async (dispatch) => {
  try {
    const response = await authApi.login(loginForm);
    if(response.user){
      dispatch(loginSuccess(response));
      return true;
    } else {
      throw new Error("Login failed");
    }
  } catch {
    dispatch(loginFailure(error.message));
    throw error;
  }
};

export { fetchLogin, authReducer, logout };
export default authReducer;
