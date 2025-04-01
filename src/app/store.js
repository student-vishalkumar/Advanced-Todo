import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/signupSlice"
import authReducer from "../features/authSlice"
import weatherReducer from "../features/weatherSlice"
import todoReducer from "../features/todoSlice"




const store = configureStore({

    reducer: {
        signup: signupReducer,
        auth: authReducer,
        weather: weatherReducer,
        todos: todoReducer
    }
    
});

export default store;