import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PageLayout } from "./layout/PageLayout";
import Main from "./containers/public/main/Main";
import ManagerDashoard from "./containers/private/manager/manager_layout/ManagerDashoard";

{
  /* creating page routes */
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      {/* public route */}
      <Route path="/" element={<Main />} />
      <Route path="/manager/*" element={<ManagerDashoard />} />

      {/* <Route element={<RequireAuth/>} >
        <Route path="admin/*" element={<AdminDashboardLayout />} />        
      </Route> */}
    </Route>
  )
);

export default router;
