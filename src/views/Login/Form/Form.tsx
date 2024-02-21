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
import axios from "axios";
import FormInput from "@/components/UI/btnPass/inputProfile/InputProfile";
import { signIn } from "next-auth/react";
import { FormTypes, IFormInput } from "@/Types/types";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsCommon = Poppins({ subsets: ["latin"], weight: "400" });
const poppinsBtn = Poppins({ subsets: ["latin"], weight: "500" });

const schema = z.object({
  Email: z.string().email({ message: "Incorrect email address" }),
  Password: z
    .string()
    .min(8, { message: "Minimum password length 8 characters" }),
});

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });
  const emailValue = watch("Email");
  const passValue = watch("Password");

  const handleClearHolderLog = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: FormTypes
  ) => {
    if (name === "Email") {
      //  event.preventDefault();
      return reset({ Email: "", Password: passValue });
    }
    return reset({ Password: "", Email: emailValue });
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    const email = data.Email;
    const password = data.Password;

    const result = await signIn("credentials", {
      redirect: false, // Не перенаправлять при неудаче
      email,
      password,
    });

    if (result?.error) {
      // Показать сообщение об ошибке
      console.error(result.error);
    } else {
      return router.push("/profile");
    }

    // const response = await axios.post(
    //   `http://localhost:3002/user/login`,
    //   {
    //     email: data.Email,
    //     password: data.Password,
    //   })

    // if(!response) {
    //   alert('Error authorize')
    // }
    // // return router.push("/");
    // return console.log(response.data)
  };

  const [showPassword, setShowPassword] = useState(true);

  const handleTogglePassword: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <StyledLogInForm>
      <h1 className={`${poppins.className} h1-login-form`}>Log In</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${poppinsCommon.className} login-form`}
      >
        <div className="email">
          <FormInput
            register={register}
            handleClearHolderLog={handleClearHolderLog}
            Value={emailValue}
            name={"Email"}
            error={errors.Email}
            errors={errors}
          />

          <label className="label" htmlFor="email">
            Enter your email
          </label>
        </div>

        <div className="password">
          <FormInput
            register={register}
            handleClearHolderLog={handleClearHolderLog}
            Value={passValue}
            name={"Password"}
            error={errors.Password}
            errors={errors}
            handleTogglePassword={handleTogglePassword}
            showPassword={showPassword}
          />
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
