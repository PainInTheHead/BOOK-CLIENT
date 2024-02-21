import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfileAvatar = () => {
  const sessinImg = useSession().data?.user?.image;
  return (
    <div className="profile-images">
      <Image
      className="Ava"
        src={sessinImg ? sessinImg : "/profilePage/noneChel.png"}
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZK4YnjXXPv-qE495K6XT1L5bSxoFkWrz06Q&usqp=CAU"
        width={305}
        height={305}
        alt="Yours Chel?"
        unoptimized
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
  );
};

export default ProfileAvatar;
