import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { login: "", password: "", token: "" };

const getAuth = createAsyncThunk(
    "auth/getAuth",
    async ({ login, password }) => {
        const result = await (
            await import("../../../../transport/transport.js")
        ).getAuth({ login, password });
        console.log(result.message);
        return result.message;
    }
);

const getRegister = createAsyncThunk(
    "auth/postAuth",
    async ({ login, password }) => {
        const result = await (
            await import("../../../../transport/transport.js")
        ).postAuth({ login, password });
        console.log(result.message);
        return result.message;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveLogin: (state, action) => {
            state.login = action.payload;
        },
        savePassword: (state, action) => {
            state.password = action.payload;
        },
        saveToken: (state, action) => {
            state.token = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAuth.fulfilled, (state, action) => {
                state.token = action.payload;
            })
            .addCase(getRegister.fulfilled, (state, action) => {
                state.token = action.payload;
            });
    },
});

export const { saveLogin, savePassword, saveToken } = authSlice.actions;
export { getAuth, getRegister };
export default authSlice.reducer;
