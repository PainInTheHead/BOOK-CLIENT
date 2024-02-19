import { StyledFormChange } from "./form.styled";
import Image from "next/image";



const FormChangeProfile = () => {
  return (
    <StyledFormChange>
     
          <form action="">
            <div className="pers-info-header">
              <h1>Personal information</h1>
              <button className="ChangeInformation">Change information</button>
            </div>
            <div className="user-name">
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
            </div>
            <div className="user-name">
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
            </div>
            <div className="pers-info-header">
              <h1>Password</h1>
              <button className="ChangeInformation">Change password</button>
            </div>
            <div className="user-name">
              <Image
                className="icon-username"
                src="/profilePage/nameIcon.svg"
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
            </div>
            <div className="user-name">
              <Image
                className="icon-username"
                src="/profilePage/nameIcon.svg"
                width={24}
                height={24}
                alt="user-icon"
              />
              <div className="wrapper-name-input">
                <input
                  className="input-name"
                  type="text"
                  value={`kenzi.lawson@example.com`}
                  readOnly
                />
              </div>
            </div>
                <span className="label-pass">Enter your password</span>
            <div className="user-name">
              <Image
                className="icon-username"
                src="/profilePage/nameIcon.svg"
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

            </div>
              <span className="label-pass">Repeat your password without errors</span>
          </form>
    </StyledFormChange>
  );
};

export default FormChangeProfile;
