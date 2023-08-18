import { createSlice } from "@reduxjs/toolkit";

const contractorSlice = createSlice({
  name: "contractor",
  initialState: {
    assignItems: [{ name: "Armantest", itemsInCart: 5 }],
    contractorsList: [
      {
        name: "Arman Bhatia",
        phone: 5144485939,
        referedBy: "Happy",
        address: "ABC road",
        message: "Hardworker and honest",
      },
    ],
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
