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

            }else if (response.status === 302 || response.status === 403) {
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


export const signIn = createAsyncThunk(
    'auth/signIn',
    async function (signIn, { dispatch, rejectWithValue }) {
        try {
            const response = await axios.post('https://backend-production-aaf6.up.railway.app/api/v1/auth/authenticate', signIn);

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(`Error ${response.status}`);
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const sendMessage = createAsyncThunk(
    'auth/sendMessage',
    async function (messageData, { dispatch, rejectWithValue }) {
        try {
            const response = await axios.post('https://backend-production-aaf6.up.railway.app/api/v1/auth/send-message?link=http://localhost:3000/confirm', messageData);

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(`Error ${response.status}`);
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const confirm = createAsyncThunk(
    'auth/confirm',
    async function (token, { dispatch, rejectWithValue }) {
        try {
            const response = await axios.post(`https://backend-production-aaf6.up.railway.app/api/v1/auth/registerConfirm?token=${token}`, token);

            if (response.status === 200) {
                return response.data;
            } else {
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
            alert('Данная почта уже зарегистрирована');
        });
        builder.addCase(sendMessage.fulfilled, (state, action) => {
            state.form = action.payload;
        });
        builder.addCase(sendMessage.rejected, (state, action) => {
            state.error = action.payload;
            alert("Ошибка, попробуйте снова");
        });
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.form = action.payload;
        });
        builder.addCase(signIn.rejected, (state, action) => {
            state.error = action.payload;
            alert("Вы не подтвердили аккаунт или неправильный пароль!");
        })
    },
});

export const authReducer = authSlice.reducer;