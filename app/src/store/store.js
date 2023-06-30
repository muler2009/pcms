import { configureStore } from "@reduxjs/toolkit"; 
import { apiSlice } from "../services/api/apiSlice";
import authenticationReducers from '../services/features/auth/authSlice'

// creating the store for pcms
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        authentication: authenticationReducers,
    },

    // The default Middleware configured
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),


});

export default store;

