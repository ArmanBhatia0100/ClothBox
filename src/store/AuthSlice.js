import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state) => {
      return (state.isLoggedIn = true);
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
