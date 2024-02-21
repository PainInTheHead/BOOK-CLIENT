import Image from "next/image";
import FormChangeProfile from "./FormInfoUser/Form";
import { StyledPageProfile } from "./profile.styled";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";


const ProfilePage = () => {
  return (
    <StyledPageProfile>
      <ProfileAvatar/>
      <FormChangeProfile />
    </StyledPageProfile>
  );
};

export default ProfilePage;
