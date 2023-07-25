import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";
import CartReducer from "./CartSlice";
import ContractorReducer from "./ContractorSlice";

export const store = configureStore({
  reducer: {
    authentication: AuthReducer,
    cartItems: CartReducer,
    contractors: ContractorReducer,
  },
});
