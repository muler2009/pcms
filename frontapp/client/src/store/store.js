import { configureStore } from "@reduxjs/toolkit";

// creating the store for pcms
const store = configureStore({
  reducer: {},

  // The default Middleware configured
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
});

export default store;
