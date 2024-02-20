import { StyledCard } from "./card.styled";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";
import Rating from "./ratingStars/RatingBook";
import CoverCard from "./coverCard/CoverCard";
import AboutCard from "./aboutCard/aboutCard";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

interface PropsCard {
  id: number;
  cover: string;
  name: string;
  author: string;
  rate: number;
  price: string;
}
// id: 8,
//     cover: "/card/covers/2",
//     name: "The Psychlogy of Money",
//     author: "C. S. Bragich",
//     rate: 5,
//     price: "3",

const Card: React.FC<PropsCard> = ({
  id,
  cover,
  name,
  author,
  rate,
  price,
}) => {
  const [liked, setLiked] = useState(false);
  const handleClickLikeBtn = () => {
    setLiked(!liked);
  };

  return (
    <StyledCard className={poppins.className}>
      <CoverCard
        handleClickLikeBtn={handleClickLikeBtn}
        liked={liked}
        cover={cover}
      />
      <AboutCard name={name} author={author} price={price} value={rate} />
    </StyledCard>
  );
};

export default Card;
