import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: {},
  tasks: [],
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasksStart: (state) => {
      state.isLoading = true;
    },
    getTasksSuccess: (state, action) => {
      state.isLoading = false;
      state.tasks = action.payload;
    },
    getTasksFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateTasks: (state,  action) => {
        state.tasks = action.payload
    },
    getUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { getTasksSuccess, getTasksStart, getTasksFailure, updateTasks, getUser } =
  tasksSlice.actions;

export default tasksSlice.reducer;
