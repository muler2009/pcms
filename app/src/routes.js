import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, RouterProvider
} from 'react-router-dom'
import { PageLayout } from './layout/PageLayout';
import RequireAuth from './services/features/auth/RequireAuth';
import UserRegistration from './pages/registration/UserRegistration';
import Main from './pages/public/main/Main';
import AdminDashboardLayout from './pages/private/sys_admin/admin_layout/Dashboard';
import ManagerDashoard from './pages/private/manager/manager_layout/ManagerDashoard';


{/* creating page routes */}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      {/* public route */}
      <Route path='/' element={<Main />} />
      <Route path='/register' element={<UserRegistration />} />
      <Route path='/manager/*' element={<ManagerDashoard />} />
      
      <Route element={<RequireAuth/>} >
        <Route path="admin/*" element={<AdminDashboardLayout />} />        
      </Route>

    </Route>
  )
)

export default router;


