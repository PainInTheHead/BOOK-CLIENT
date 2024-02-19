import { StyledLogIn } from "./registration.styled";
import LoginForm from "./Form/Form";
import Image from "next/image";

const RegistragionPage = () => {
  return (
    <StyledLogIn>
      <LoginForm />
      <Image className="chel" src="/login/chel1.png" width={612} height={522} alt="chel" />
    </StyledLogIn>
  );
};

export default RegistragionPage;
