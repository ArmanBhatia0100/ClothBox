import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: window.localStorage.getItem("loggedIn"),
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      state.isAlreadyLoggedIn = true;
      window.localStorage.setItem("loggedIn", true);
    },
    logout: (state, payload) => {
      console.log(payload);
      state.isLoggedIn = false;
      state.isAlreadyLoggedIn = false;
      window.localStorage.setItem("loggedIn", false);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
