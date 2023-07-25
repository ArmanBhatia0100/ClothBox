import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addTocart(state, action) {
      console.log("This is payload,", action.payload);
      state.push(action.payload);
    },
    removeFromCart() {
      console.log("Removed from the cart");
    },
  },
});
export const { addTocart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
