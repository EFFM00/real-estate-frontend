import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedLogin = () => {

    const {auth} = useAuth();

    if(auth) {
        return <Outlet />
    } else {
        return <Navigate to="/" />
    }
}

export default ProtectedLogin;