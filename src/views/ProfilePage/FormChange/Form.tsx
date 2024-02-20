import { StyledFormChange } from "./form.styled";
import Image from "next/image";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { MouseEventHandler } from "react";
import FormInput from "@/components/UI/btnPass/inputProfile/InputProfile";
import type { IFormInput } from "@/views/Login/Form/Form";
import type { MouseEvent } from "react";
import axios from "axios";

const schema = z
  .object({
    Email: z.string().email({ message: "Incorrect email address" }),
    Password: z
      .string()
      .min(8, { message: "Minimum password length 8 characters" }),
    ConfirmPassword: z
      .string()
      .min(8, { message: "Minimum password length 8 characters" }),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: "Passwords don't match",
    path: ["ConfirmPassword"],
  });




const FormChangeProfile = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleTogglePassword: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

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
  const confirmValue = watch("ConfirmPassword");

  const handleClearHolderLog = (
    event: MouseEvent<HTMLButtonElement>,
    name: "Email" | "Password" | "ConfirmPassword" | "UserName"
  ) => {
    if (name === "Email") {
      //  event.preventDefault();
      return reset({
        Email: "",
        Password: passValue,
        ConfirmPassword: confirmValue,
      });
    } else if (name === "ConfirmPassword") {
      return reset({
        ConfirmPassword: "",
        Password: passValue,
        Email: emailValue,
      });
    }
    return reset({
      Password: "",
      Email: emailValue,
      ConfirmPassword: confirmValue,
    });
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    const response = await axios.post(
      `http://localhost:3002/user/registration`,
      {
        email: data.Email,
        password: data.Password,
      }
    );
    if (!response) {
      return alert("Try again :(");
    }
    return;
    // return console.log(response.data);
  };

  return (
    <StyledFormChange>
      <form 
      onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="pers-info-header">
            <h1>Personal information</h1>
            <button className="ChangeInformation">Change information</button>
          </div>
          <FormInput
            register={register}
            handleClearHolderLog={handleClearHolderLog}
            Value={emailValue}
            name={"Email"}
            error={errors.Email}
            errors={errors}
          />
          {/* <div className="user-name">
              <Image
                className="icon-username"
                src="/profilePage/nameIcon.svg"
                width={24}
                height={24}
                alt="user-icon"
              />
              <div className="wrapper-name-input">
                <span className="nameHolder">Your name</span>
                <input
                  className="input-name"
                  type="text"
                  value={`Guy Hawkins`}
                  readOnly
                />
              </div>
            </div> */}
             <FormInput
            register={register}
            handleClearHolderLog={handleClearHolderLog}
            Value={emailValue}
            name={"Email"}
            error={errors.Email}
            errors={errors}
          />
          {/* <div className="user-name">
            <Image
              className="icon-username"
              src="/login/Mail.svg"
              width={24}
              height={24}
              alt="user-icon"
            />
            <div className="wrapper-name-input">
              <span className="nameHolder">Your email</span>
              <input
                className="input-name"
                type="text"
                value={`kenzi.lawson@example.com`}
                readOnly
              />
            </div>
          </div> */}
          
          <div className="pers-info-header">
            <h1>Password</h1>
            <button className="ChangeInformation">Change password</button>
          </div>
          
          {/* <div className="user-name">
            <Image
              className="icon-username"
              src="/login/Hide.svg"
              width={24}
              height={24}
              alt="user-icon"
            />
            <div className="wrapper-name-input">
              <span className="nameHolder">Old password</span>
              <input
                className="input-name"
                type="password"
                value={`Guy Hawkins`}
                readOnly
              />
            </div>
          </div> */}
          <FormInput register={register} handleClearHolderLog={handleClearHolderLog} Value={passValue} name={'Password'} error={errors.Password} errors={errors} handleTogglePassword={handleTogglePassword} showPassword={showPassword}/>
          {/* <div className="user-name">
            <Image
              className="icon-username"
              src="/login/Hide.svg"
              width={24}
              height={24}
              alt="user-icon"
            />
            <div className="wrapper-name-input">
              <input
                className="input-name"
                type="text"
                placeholder="New password"
              />
            </div>
          </div> */}
          <FormInput register={register} handleClearHolderLog={handleClearHolderLog} Value={passValue} name={'Password'} error={errors.Password} errors={errors} handleTogglePassword={handleTogglePassword} showPassword={showPassword}/>
          <span className="label-pass">Enter your password</span>
          {/* <div className="user-name">
            <Image
              className="icon-username"
              src="/login/Hide.svg"
              width={24}
              height={24}
              alt="user-icon"
            />
            <div className="wrapper-name-input">
              <input
                className="input-name"
                type="text"
                placeholder="Password replay"
              />
            </div>
          </div> */}
          <FormInput register={register} handleClearHolderLog={handleClearHolderLog} Value={passValue} name={'ConfirmPassword'} error={errors.ConfirmPassword} errors={errors} handleTogglePassword={handleTogglePassword} showPassword={showPassword}/>
          <span className="label-pass">
            Repeat your password without errors
          </span>
        </div>
        <button className="btn-confirm" type="submit">
          Confirm
        </button>
      </form>
    </StyledFormChange>
  );
};

export default FormChangeProfile;
