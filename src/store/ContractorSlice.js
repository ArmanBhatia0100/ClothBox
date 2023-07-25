import { createSlice } from "@reduxjs/toolkit";

const contractorSlice = createSlice({
  name: "contractor",
  initialState: [],
  reducers: {
    assignItems(state, action) {
      state.push(action.payload);
    },
  },
});

export const { assignItems } = contractorSlice.actions;
export default contractorSlice.reducer;
