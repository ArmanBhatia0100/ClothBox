import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: { items: [] },
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart() {
      console.log("Added to the cart");
    },
    removeFromCart() {
      console.log("Removed from the cart");
    },
  },
});
export const { addTocart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
