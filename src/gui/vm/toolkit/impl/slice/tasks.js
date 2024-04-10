import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { list: [] };

const getTasks = createAsyncThunk("tasks/getTasks", async (token) => {
    const list = await (
        await import("../../../../transport/transport.js")
    ).getTasks({ token });
    return list;
});

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        saveValue1(state, action) {
            state.value1 = action.payload;
        },
        saveValue2(state, action) {
            state.value2 = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },
});

export const { saveLogin, savePassword } = tasksSlice.actions;
export { getTasks };
export default tasksSlice.reducer;
