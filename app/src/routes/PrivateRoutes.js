import { useRoutes, Route, Routes } from "react-router-dom";
import Test from "../pages/test_page/Test";
import AdminDashboardLayout from "../pages/private/sys_admin/admin_layout/Dashboard";
import UserRegistration from "../pages/registration/UserRegistration";
import MainDashboard from "../pages/private/sys_admin/admin_pages/MainDashboard";

export const AdminPrivateRoutes = () =>{
    let adminRoutes = useRoutes([
        { path: "/", element: <MainDashboard /> },
        { path: "dashboard", element: <Test />},
        { path: "nested_test", element: <h1>Registration</h1>},
        { path: "add_user", element: <UserRegistration /> },
        { path: "help", element: <h1>System Help</h1> },

      ]);
    
      return adminRoutes;
}



