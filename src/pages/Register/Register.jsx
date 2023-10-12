import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { LoginContainer } from "../Login/styled";
import ButtonToBack from "../../components/ButtonToBack/ButtonToBack";


const Register = () => {
  return (
    <LoginContainer>
      <ButtonToBack path="/"/>
      <RegisterForm />
    </LoginContainer>
  );
};

export default Register;
