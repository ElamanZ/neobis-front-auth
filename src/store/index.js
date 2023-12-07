import {configureStore} from "@reduxjs/toolkit";
import { registerReducer } from './registerSlice';
const store = configureStore({
    reducer: {
        auth: registerReducer,
    },
});

export default store;