import {
    asyncThunkCreator,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
export const Login = asyncThunkCreator(
    'auth/Login', ({
        email,
        password
    }) => {
        return axios.post(`${baseUrl}/login`, {
                email,
                password
            })
            .then((response) => {
                alert("Login Success");
                return response.data;
            })
            .catch((error) => {
                throw error.response.data;
            });
    }
);

AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
    
    },
    extraReducers: 
    {
        [Login.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [Login.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
        },
        [Login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
        },
    }
});

export default AuthSlice.reducer;