import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from "../slice/tasks";

export default configureStore({
  reducer: { 
    tasks: TasksReducer,
   },
  devTools: process.env.NODE_ENV !== 'production',
});
