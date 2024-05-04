import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/localstorage";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
  user: null,
  token: null,
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
      state.user = action.payload.user;
      state.token = action.payload.token
      setItem('token', action.payload.token)
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

export const {
  signUserStart,
  signUserSuccess,
  signUserFailure,
  signOut,
} = authSlice.actions;

export default authSlice.reducer;
