import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { access_token } from "./authSlice"

const RequireAuth = () => {
    
    const token = useSelector(access_token)
    const location = useLocation()

    return (
        token
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    )
}
export default RequireAuth