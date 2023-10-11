import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedLogin = () => {

    const {logged} = useAuth();
    console.log("LOGGED", logged);


    if(logged) {
        return <Outlet />
    } else {
        return <Navigate to="/login" replace/>
    }
}

export default ProtectedLogin;