import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";
import CartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    authentication: AuthReducer,
    cartItems: CartReducer,
  },
});
