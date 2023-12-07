import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import {requester} from "../configs/axiosConfig.js";

export const auth = createAsyncThunk(
    'auth',
    async function (id, { dispatch, rejectWithValue }) {
        try {
            const response = await axios.requester.post('api/v1/auth/registration');

            if (response.status === 200) {
                return response.data;
            } else {
                throw Error(`Error ${response.status}`);
            }
        } catch (e) {
            return rejectWithValue(e.message);
        }

    }
);


const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        form: {
            "email": "",
            "username": "",
            "password": ""
        },
        error: ''
    },
    extraReducers: builder =>  {
        builder.addCase(authSlice.fulfilled, (state, action) => {
            state.form = action.payload
        })
        builder.addCase(authSlice.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export default authSlice.reducer