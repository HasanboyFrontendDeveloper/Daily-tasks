import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
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
      state.isLoading = true;
      state.tasks = action.payload;
    },
    getTasksFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateTasks: (state,  action) => {
        state.tasks = action.payload
    }
  },
});

export const { getTasksSuccess, getTasksStart, getTasksFailure, updateTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
