import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from './authSlice.js'; // Поменяйте на reducer

const store = configureStore({
    reducer: {
        auth: authReducer, // Используйте authReducer
    },
});

export default store;