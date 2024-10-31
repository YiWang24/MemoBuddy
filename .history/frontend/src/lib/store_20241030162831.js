import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/lib/modules/auth";

const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
};
