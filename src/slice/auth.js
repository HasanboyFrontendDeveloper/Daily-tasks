import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoggedIn: true,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = true;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure, signOut } =
  authSlice.actions;

export default authSlice.reducer;
