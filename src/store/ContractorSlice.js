import { createSlice } from "@reduxjs/toolkit";

const contractorSlice = createSlice({
  name: "contractor",
  initialState: {
    assignItems: [],
    contractorsList: [],
  },
  reducers: {
    assignItems(state, action) {
      const indexFound = state.assignItems.findIndex(function (item) {
        return item.name === action.payload.name;
      });

      // Index found
      if (indexFound >= 0) {
        state.assignItems[indexFound].itemsInCart.push(
          ...action.payload.itemsInCart
        );
      } else {
        state.assignItems.push(action.payload);
      }
    },
    addContractor(state, action) {
      state.contractorsList.push(action.payload);
    },
  },
});

export const { assignItems, addContractor } = contractorSlice.actions;
export default contractorSlice.reducer;
