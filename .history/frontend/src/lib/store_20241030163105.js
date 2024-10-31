import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "./features/auth/authSlice";
const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
};

export default makeStore;
