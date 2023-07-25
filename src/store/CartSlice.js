import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: { items: [] },
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, payload) {
      return { ...state };
      console.log(state);
    },
    removeFromCart() {
      console.log("Removed from the cart");
    },
  },
});
export const { addTocart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
