import { useNavigate } from "react-router-dom";
import { ButtonToBackStyle } from "./style";
import MyIcon from "../../../public/arrow-left-solid.svg"

const ButtonToBack = () => {

    const navigate = useNavigate();

    const handleToBack = () => {
        navigate("/properties")
    }

    return (
        <ButtonToBackStyle onClick={handleToBack}>
            <img src={MyIcon} alt="Your SVG" />
        </ButtonToBackStyle>
    )

}

export default ButtonToBack;