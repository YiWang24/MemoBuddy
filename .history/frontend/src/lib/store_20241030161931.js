import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/lib/modules/auth";


export const makeStore = () =>{
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  })
}

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
