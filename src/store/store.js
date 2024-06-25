import { configureStore } from "@reduxjs/toolkit";

//15-06-2024 LoginCode
import userLogin from './Slice/UserLoginSlice';
const store = configureStore({
    reducer: {
        user: userLogin,
    }
})


export default store;