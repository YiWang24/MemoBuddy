import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

const

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
