import {configureStore} from "@reduxjs/toolkit";
import { registerReducer } from './authSlice.js';
const store = configureStore({
    reducer: {
        auth: registerReducer,
    },
});

export default store;