import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/auth";
import TasksReducer from "../slice/tasks";

export default configureStore({
  reducer: { 
    auth: AuthReducer,
    tasks: TasksReducer,
   },
  devTools: process.env.NODE_ENV !== 'production',
});
