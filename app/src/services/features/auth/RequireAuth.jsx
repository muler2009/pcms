import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { access_token, is_Authenticated, csrf_token } from "./authSlice";

const RequireAuth = () => {
  const token = useSelector(access_token);
  const isAuthenticated = useSelector(is_Authenticated);
  const location = useLocation();

  return token && isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );

  // if (!isAuthenticated || !token) {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }
  // return <Outlet />;
};
export default RequireAuth;

// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { access_token, is_Authenticated } from "./authSlice";

// const RequireAuth = () => {
//   const token = useSelector(access_token);
//   const location = useLocation();
//   const isAuthenticated = useSelector(is_Authenticated);

//   return token && isAuthenticated ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/" state={{ from: location }} replace />
//   );
// };
// export default RequireAuth;
