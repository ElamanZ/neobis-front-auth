import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import {requester} from "../configs/axiosConfig.js";

export const registerUser  = createAsyncThunk(
    'auth/registerUser',
    async function (userData, { dispatch, rejectWithValue }) {
        try {
            const response = await axios.post('https://backend-production-aaf6.up.railway.app/api/v1/auth/registration', userData);

            if (response.status === 200) {
                return response.data;

            }else if (response.status === 302) {
                throw new Error('Данная почта уже зарегистрирована');
            }

            else {
                throw new Error(`Error ${response.status}`);
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        form: {
            email: '',
            username: '',
            password: '',
        },
        error: '',
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.form = action.payload;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.error = action.payload;
            alert(action.payload);
        });
    },
});

export const { reducer: registerReducer  } = authSlice;