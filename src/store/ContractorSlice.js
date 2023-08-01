import { createSlice } from "@reduxjs/toolkit";

const contractorSlice = createSlice({
  name: "contractor",
  initialState: {
    assignItems: [],
  },
  reducers: {
    assignItems(state, action) {
      state.assignItems.push(action.payload);

      // const newAssignItems = state.assignItems.reduce(function (
      //   results,
      //   assignProducts
      // ) {
      //   const { name } = assignProducts;

      //   if (!results[name]) {
      //     results[name] = [];
      //   }
      //   results[name].push(assignProducts);
      //   return results;
      // },
      // {});
      // state.contractorsAssignProducts = newAssignItems;
      // state.assignItems.sort(function (a, b) {
      //   if (a.name < b.name) return -1;
      //   if (a.name > b.name) return 1;
      //   return 0;
      // });
    },
  },
});

export const { assignItems } = contractorSlice.actions;
export default contractorSlice.reducer;
