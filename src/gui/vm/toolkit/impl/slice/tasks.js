import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import Task from "./task.js";
import Task from "../../../../component/task/component.js";

const initialState = { list: [] };

const getTasks = createAsyncThunk("tasks/getTasks", async (token) => {
    const result = await (
        await import("../../../../transport/transport.js")
    ).getTasks({ token });
    return result.message;
});

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },
});

export const { saveLogin, savePassword } = tasksSlice.actions;
export { getTasks };
export default tasksSlice.reducer;
