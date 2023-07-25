import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addTocart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state) {
      state.items = [];
    },
  },
});
export const { addTocart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
