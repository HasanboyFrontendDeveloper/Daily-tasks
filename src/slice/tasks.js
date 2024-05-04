import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  tasks: [
    {
      id: 1,
      title: "Choy ichish",
      status: "To Do",
      date: "2024-05-03",
      done: false,
    },
    {
      id: 2,
      title: "Projectni Tugatish",
      status: "In Progress",
      date: "2024-05-04",
      done: false,
    },
    {
      id: 3,
      title: "Kiyinish",
      status: "Done",
      date: "2024-05-02",
      done: true,
    },
    {
      id: 4,
      title: "uyga borish",
      status: "To Do",
      date: "2024-05-03",
      done: false,
    },
    {
      id: 5,
      title: "uxlash",
      status: "In Progress",
      date: "2024-05-04",
      done: false,
    },
    {
      id: 6,
      title: "oynash",
      status: "Done",
      date: "2024-05-03",
      done: true,
    },
  ],
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
