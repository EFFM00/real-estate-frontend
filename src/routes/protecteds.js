import { Navigate, Outlet } from "react-router-dom";

const ProtectedLogin = ({auth}) => {
    if(auth) {
        return <Outlet />
    } else {
        return <Navigate to="/" />
    }
}

export default ProtectedLogin;