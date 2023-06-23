import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, RouterProvider
} from 'react-router-dom'
import { PageLayout } from './layout/PageLayout';
import Login from './pages/login/Login';
import store from './store/store';

{/* creating page routes */}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      {/* public route */}
      <Route path='/' element={<Login />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>

);

