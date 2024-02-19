import Image from "next/image";
import FormChangeProfile from "./FormChange/Form";
import { StyledPageProfile } from "./profile.styled";

const ProfilePage = () => {
  return (
    <StyledPageProfile>
      <div className="profile-images">
        <Image
          src="/profilePage/noneChel.png"
          width={305}
          height={305}
          alt="Yours Chel?"
        />
        <button className="btn-changeImage">
          <Image
            src="/profilePage/button_photo.svg"
            width={48}
            height={48}
            alt="Yours Chel?"
          />
        </button>
      </div>
      <FormChangeProfile />
    </StyledPageProfile>
  );
};

export default ProfilePage;
