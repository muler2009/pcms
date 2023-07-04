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

import store from './store/store';
import Welcome from './pages/test_page/Welcome';
import RequireAuth from './services/features/auth/RequireAuth';
import UserRegistration from './pages/registration/UserRegistration';
import Main from './pages/public/main/Main';

import AdminDashboardLayout from './pages/private/sys_admin/admin_layout/Dashboard';


{/* creating page routes */}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      {/* public route */}
      <Route path='/' element={<Main />} />
      <Route path='register' element={<UserRegistration />} />
      
      <Route element={<RequireAuth />}>
        <Route path="admin/*" element={<AdminDashboardLayout />} />        
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

