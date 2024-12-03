import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@/api";

const loadAuthState = () => {
  try {
    const serializedAuth = sessionStorage.getItem("authState");
    if (serializedAuth === null) {
      return {
        isAuthenticated: false,
        user: null,
        error: null,
      };
    }
    return JSON.parse(serializedAuth);
  } catch (error) {
    return {
      isAuthenticated: false,
      user: null,
      error: null,
    };
  }
};

const initialState = loadAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;
      sessionStorage.setItem(
        "authState",
        JSON.stringify({
          isAuthenticated: true,
          user: action.payload.user,
          error: null,
        })
      );
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      sessionStorage.removeItem("authState");
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      sessionStorage.removeItem("authState");
    },
  },
});

const { loginSuccess, loginFailure, logout } = authSlice.actions;

const authReducer = authSlice.reducer;

const fetchLogin = (loginForm) => async (dispatch) => {
  try {
    const response = await authApi.login(loginForm);
    dispatch(loginSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};
console.log("test")
const fetchRegister = (registerForm) => async (dispatch) => {
  try {
    const response = await authApi.register(registerForm);
    // dispatch(loginSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};

const fetchLogout = () => async (dispatch) => {
  try {
    await authApi.logout();
    dispatch(logout());
  } catch (error) {
    dispatch(logout());
  }
};

const fetchCheckUser = (params) => async (dispatch) => {
  try {
    const response = await authApi.checkCurrentUser(params);
    dispatch(loginSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};

export { fetchLogin, fetchRegister, fetchLogout, fetchCheckUser };
export default authReducer;
