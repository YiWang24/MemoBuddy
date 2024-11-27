import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

const preloadedState = {
  auth: {
    isAuthenticated: false,
    user: null,
    loading: false,
  },
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
