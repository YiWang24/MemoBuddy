import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/lib/modules/auth";




export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
