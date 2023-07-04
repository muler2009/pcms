import { useRoutes, Route, Routes } from "react-router-dom";
import Test from "../pages/test_page/Test";
import AdminDashboardLayout from "../pages/private/sys_admin/admin_layout/Dashboard";
import UserRegistration from "../pages/registration/UserRegistration";

export const AdminPrivateRoutes = () =>{
    let adminRoutes = useRoutes([
        {
          path: "/", 
          element: <Test />,
        },
        {
          path: "nested_test", 
          element: <h1>Registration</h1>,
        },
        {
            path: "register", // <-- add a catch-all route to avoid rendering a blank page
            element: <UserRegistration />,
          }
      ]);
    
      return adminRoutes;
}



