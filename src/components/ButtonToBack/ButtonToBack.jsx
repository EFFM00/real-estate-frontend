import { useNavigate } from "react-router-dom";
import { ButtonToBackStyle } from "./style";
import MyIcon from "../../../public/arrow-left-solid.svg";

const ButtonToBack = ({path}) => {
  const navigate = useNavigate();

  const handleToBack = () => {
    navigate(path);
  };

  return (
    <ButtonToBackStyle onClick={handleToBack}>
      <img src={MyIcon} alt="Your SVG" />
    </ButtonToBackStyle>
  );
};

export default ButtonToBack;
