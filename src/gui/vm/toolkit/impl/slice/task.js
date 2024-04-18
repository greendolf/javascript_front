import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    values: {
        nx: 0,
        ny: 0,
        time_end: 0,
        length: 0,
        width: 0,
        lambda: 0,
        ro: 0,
        c: 0,
        t_start: 0,
        t_left: 0,
        t_right: 0,
    },
};

const postTask = createAsyncThunk(
    "task/postTask",
    async (empty, thunkAPI) => {
        const token = thunkAPI.getState().auth.token
        const values = thunkAPI.getState().task.values
        console.log(values);
        const result = await (
            await import("../../../../transport/transport.js")
        ).postTask({ token, values });
        console.log(result.message);
        return result.message;
    }
);

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        saveValues(state, action) {
            state.values[0] = action.payload[0];
            state.values[1] = action.payload[1];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postTask.fulfilled, (state, action) => {
                console.log(action);
            })
            .addCase(postTask.rejected, (state, action) => {
                console.log(action);
            });
    },
});

export const { saveValues } = taskSlice.actions;
export { postTask };
export default taskSlice.reducer;
