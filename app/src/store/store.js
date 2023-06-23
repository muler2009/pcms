import { configureStore } from "@reduxjs/toolkit"; 
import  apiSlice from "../services/api/apiSlice";

// creating the store for pcms
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    // The default Middleware configured
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),


});

export default store;

