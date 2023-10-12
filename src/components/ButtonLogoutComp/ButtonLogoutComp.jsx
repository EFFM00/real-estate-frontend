import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { ButtonLogoutStyle } from "./style";

const ButtonLogoutComp = () => {

    const navigate = useNavigate();
    const {setLogged} = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setLogged(false);
        navigate("/")
    }

    return (
        <ButtonLogoutStyle onClick={handleLogout}>Log out</ButtonLogoutStyle>
    )

}

export default ButtonLogoutComp;