import { StyledLogInForm } from "./form.styled";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { Poppins } from "next/font/google";
import ButtonPass from "@/components/UI/btnPass/ButtonPass";
import type { MouseEventHandler } from "react";
import { useRouter } from "next/router";


const poppins = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsCommon = Poppins({ subsets: ["latin"], weight: "400" });
const poppinsBtn = Poppins({ subsets: ["latin"], weight: "500" });
type IFormInput = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().email({ message: "Incorrect email address" }),
  password: z
    .string()
    .min(8, { message: "Minimum password length 8 characters" }),
});

const LoginForm = () => {
const router = useRouter()
const {
  register,
  handleSubmit,
  reset,
  watch,
  formState: { errors },
} = useForm<IFormInput>({
  resolver: zodResolver(schema),
});
const emailValue = watch("email");
const passValue = watch("password");


 const handleClearHolderLog = (
   event: React.MouseEvent<HTMLButtonElement>,
   name: "email" | "password"
 ) => {
   if (name === "email") {
    //  event.preventDefault();
     return reset({ email: "", password: passValue });
   }
   return reset({ password: "", email: emailValue });
 };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    if(data) {
      router.push("/");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <StyledLogInForm>
      <h1 className={poppins.className}>Log In</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={poppinsCommon.className}
      >
        <div className="email">
          <div className={`form-input ${errors.email && `error-wrapper`}`}>
            <>
              <Image src="/login/Mail.svg" width={24} height={24} alt="Email" />
              <input
                placeholder="Email"
                id="email"
                type="text"
                {...register("email")}
              />
              {emailValue && (
                <button
                  className="btn-close"
                  onClick={(e) => handleClearHolderLog(e, "email")}
                >
                  <Image
                    src="/login/Close.svg"
                    width={12}
                    height={12}
                    alt="close btn"
                  />
                </button>
              )}
            </>
          </div>
          <span className={`valid ${!errors.email && `hidden`}`}>
            {errors.email && errors.email.message}
          </span>
          <label className="label" htmlFor="email">
            Enter your email
          </label>
        </div>

        <div className="password">
          <div className={`form-input ${errors.password && `error-wrapper`}`}>
            <ButtonPass handleTogglePassword={handleTogglePassword} />
            <input
              placeholder="Password"
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            {passValue && (
              <button
                className="btn-close"
                onClick={(e) => handleClearHolderLog(e, "password")}
              >
                <Image
                  src="/login/Close.svg"
                  width={12}
                  height={12}
                  alt="close btn"
                />
              </button>
            )}
          </div>
          <span className={`valid ${!errors.password && `hidden`}`}>
            {errors.password && errors.password.message}
          </span>
          <label className="label" htmlFor="password">
            Enter your password
          </label>
        </div>

        <button className={`btn-form ${poppinsBtn.className}`} type="submit">
          Log In
        </button>
      </form>
    </StyledLogInForm>
  );
};

export default LoginForm;
