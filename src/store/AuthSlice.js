import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: { isLoggedIn: false },
  reducers: {
    login: () => {},
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
