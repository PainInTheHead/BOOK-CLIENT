import Image from "next/image";
import React from "react";

interface PropsCover {
  handleClickLikeBtn?: () => void;
  liked?: boolean;
  cover: string;
}

const CoverCard: React.FC<PropsCover> = ({
  handleClickLikeBtn,
  liked,
  cover,
}) => {
  return (
    <div className="cover-card">
      <Image
        src={`${cover}.png`}
        width={305}
        height={448}
        alt="Picture of the author"
      />
      <button className="like-btn" onClick={handleClickLikeBtn}>
        <Image
          src={`/card/${liked ? `liked` : `unliked`}.svg`}
          width={48}
          height={48}
          alt="Picture of the author"
        />
      </button>
    </div>
  );
};

export default CoverCard;
