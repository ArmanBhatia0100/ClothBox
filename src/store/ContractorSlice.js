import { createSlice } from "@reduxjs/toolkit";

const contractorSlice = createSlice({
  name: "contractor",
  initialState: {
    assignItems: [],
  },
  reducers: {
    assignItems(state, action) {
      state.assignItems.push(action.payload);
    },
  },
});

export const { assignItems } = contractorSlice.actions;
export default contractorSlice.reducer;
