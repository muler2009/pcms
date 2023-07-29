import { useRoutes } from "react-router-dom";
import Home from "../containers/public/TestPage/Home";
import Login from "../containers/public/login/Login";

export const PublicTestRoutes = () => {
  let publicRoutes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "login", element: <Login /> },
  ]);

  return publicRoutes;
};
