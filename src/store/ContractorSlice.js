import { createSlice } from "@reduxjs/toolkit";

const contractorSlice = createSlice({
  name: "contractor",
  initialState: {
    assignItems: [],
    test: [],
  },
  reducers: {
    assignItems(state, action) {
      const indexFound = state.assignItems.findIndex(function (item) {
        return item.name === action.payload.name;
      });

      // Index found
      if (indexFound >= 0) {
        state.test.push(indexFound);
        state.assignItems[indexFound].itemsInCart.push(
          ...action.payload.itemsInCart
        );
      } else {
        state.assignItems.push(action.payload);
        state.test.push(indexFound);
      }
    },
    // state.assignItems.forEach(function (item, index) {
    //   if (item.name === action.payload.name) {
    //     state.assignItems[index].itemsInCart.push(action.payload.itemsInCart);
    //   }
    // });

    // state.assignItems.push(action.payload);
  },
});

export const { assignItems } = contractorSlice.actions;
export default contractorSlice.reducer;
