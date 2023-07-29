import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider } from "react-router-dom";

{
  /* creating page routes */
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
