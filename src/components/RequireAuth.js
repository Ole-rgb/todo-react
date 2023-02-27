import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    /*replace: if the user goes back, he will not be redirected to the login page again */ 
        return (
            auth?.user ? (
                <Outlet />
            ):(
                <Navigate to="/accounts/login" state={{ from: location }} replace  /> 
            ) 
        )
}

export default RequireAuth