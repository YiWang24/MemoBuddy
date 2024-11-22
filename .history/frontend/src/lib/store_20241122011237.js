import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

const preloadedState = {
  
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
