import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth.js";
import taskReducer from "./slice/task.js";
import tasksReducer from "./slice/tasks.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
        task: taskReducer,
        tasks: tasksReducer,
    },
});
export default store;
