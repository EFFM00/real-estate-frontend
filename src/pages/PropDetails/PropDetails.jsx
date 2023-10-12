import FormMessage from "../../components/FormMessage/FormMessage";
import { DetailsContainer } from "./style";
import PropDetailsComp from "../../components/PropDetailsComp/PropDetailsComp";
import ButtonLogoutComp from "../../components/ButtonLogoutComp/ButtonLogoutComp";
import ButtonToBack from "../../components/ButtonToBack/ButtonToBack";

const PropDetails = () => {
  return (
    <DetailsContainer>
      <ButtonToBack path={"/properties"}/>
      <ButtonLogoutComp />
      <PropDetailsComp />
      <FormMessage />
    </DetailsContainer>
  );
};

export default PropDetails;
