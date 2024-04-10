import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { values: [] };

const postTask = createAsyncThunk("task/postTask", async (token, values) => {
    const list = await (
        await import("../../../../transport/transport.js")
    ).createTask({ token, values });
    return;
});

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        saveValues(state, action) {
            state.values[0] = action.payload[0];
            state.values[1] = action.payload[1];
        },
    },
});

export const { saveValues } = taskSlice.actions;
export { postTask };
export default taskSlice.reducer;
