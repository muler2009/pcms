import { configureStore } from "@reduxjs/toolkit"; 
import { apiSlice } from "../services/api/apiSlice";
import authenticationReducers from '../services/features/auth/authSlice'
import usersReducers from '../services/features/user/userSlice'

// creating the store for pcms
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        authentication: authenticationReducers,
        users: usersReducers,
    },

    // The default Middleware configured
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),


});

export default store;

