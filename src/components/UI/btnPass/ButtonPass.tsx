import Image from "next/image";
import { StyledButtonPass } from "./btnPass.styled";
import type { MouseEventHandler } from "react";

interface PropsPassBtn {
  handleTogglePassword: MouseEventHandler<HTMLButtonElement>;
}

const ButtonPass: React.FC<PropsPassBtn> = ({ handleTogglePassword }) => {
  return (
    <StyledButtonPass onClick={handleTogglePassword}>
      <Image src="/login/Password.svg" width={24} height={24} alt="Email" />
    </StyledButtonPass>
  );
};

export default ButtonPass;
