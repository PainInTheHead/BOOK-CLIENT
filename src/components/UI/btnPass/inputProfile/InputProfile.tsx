import { IFormInput } from "@/views/Login/Form/Form";
import { StyledinputProfile } from "./input.styled";
import Image from "next/image";
import type { UseFormRegister, FieldErrors, FieldError } from "react-hook-form";
import ButtonPass from "../ButtonPass";

enum FormNamesEnum {
  Email = "Email",
  Password = "Password",
  ConfirmPassword = "ConfirmPassword",
  UserName = "UserName"
}

type FormTypes =  "Email" | "Password" | "ConfirmPassword" | "UserName"


interface ProrpsFormInput {
  register: UseFormRegister<IFormInput>;
  handleClearHolderLog: (
    event: React.MouseEvent<HTMLButtonElement>,
    name: FormTypes
  ) => void;
  Value: string;
  name: FormTypes;
  errors: FieldErrors<IFormInput>;
  error?: FieldError;
  handleTogglePassword?: React.MouseEventHandler<HTMLButtonElement>;
  showPassword?: boolean;
}

const FormInput: React.FC<ProrpsFormInput> = ({
  register,
  handleClearHolderLog,
  Value,
  name,
  errors,
  error,
  handleTogglePassword,
  showPassword
}) => {
  return (
    <StyledinputProfile className={`${error && `error-wrapper`}`}>
      {handleTogglePassword ? (
        <ButtonPass handleTogglePassword={handleTogglePassword} />
      ) : (
        <Image src={`/login/Email.svg`} width={24} height={24} alt={name} />
      )}
      {/* {"Email"}
      {FormNamesEnum.Email} */}
      {name === "UserName" ? (
        <input
        className="inputForm"
        placeholder={name}
        id="email"
        type= 'text'
        value={name}
        readOnly
        {...register(name)}
      />
      ) : (
        <input
        className="inputForm"
        placeholder={name}
        id="email"
        type={showPassword ? 'password' : 'text'}
        {...register(name)}
      />
      )}
      {/* <input
        className="inputForm"
        placeholder={name}
        id="email"
        type={showPassword ? 'password' : 'text'}
        {...register(name)}
      /> */}
      {Value && (
        <button
          className="btn-close"
          onClick={(e) => handleClearHolderLog(e, name)}
        >
          <Image
            src="/login/Close.svg"
            width={12}
            height={12}
            alt="close btn"
          />
        </button>
      )}
      {name === "Email" ? (
        <span className={`valid ${!errors.Email && `hidden`}`}>
          {errors.Email && errors.Email.message}
        </span>
      ) : name === "Password" ? (
        <span className={`valid ${!errors.Password && `hidden`}`}>
          {errors.Password && errors.Password.message}
        </span>
      ) : (
        <span className={`valid ${errors.ConfirmPassword ? "" : `hidden`}`}>
            {errors.ConfirmPassword?.message}
          </span>
      )}
    </StyledinputProfile>
  );
};

export default FormInput;
