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
import Welcome from './pages/testpage/Welcome';
import RequireAuth from './services/features/auth/RequireAuth';
import UserRegistration from './pages/registration/UserRegistration';


{/* creating page routes */}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      {/* public route */}
      <Route path='/' element={<Login />} />
      
      <Route path='register' element={<UserRegistration />} />
      <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />   
      </Route>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
      <RouterProvider router={router} />
  </Provider>

);

