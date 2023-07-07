import { useRoutes, Route, Routes } from "react-router-dom";
import Test from "../pages/test_page/Test";
import MainDashboard from "../pages/private/sys_admin/admin_pages/MainDashboard";
import UserList from "../pages/private/sys_admin/admin_pages/UserList";
import UserManagementLayout from "../pages/private/sys_admin/admin_layout/UserManagementLayout";

export const AdminPrivateRoutes = () =>{
    let adminRoutes = useRoutes([
        { path: "/", element: <MainDashboard /> },
        { path: "dashboard", element: <Test />},
        { path: "nested_test", element: <h1>Registration</h1>},
        { 
          
          element: <UserManagementLayout />, 
          children: [
            { path: "/user", element: <UserList /> },
            { path: "access_control", element: <h1>sadas</h1> },
            { path: "report", element: <h1 className="text-center text-[25px] font-Oswald">Report Section</h1> },
            { path: "remove", element: <h1 className="text-center text-[25px] font-Oswald">Users REMOVING  Section</h1> }


          ]
        },
        { path: "cmp", element: <h1>Content Management</h1> },
        { path: "help", element: <h1>System Help</h1> },

      ]);
    
      return adminRoutes;
}



