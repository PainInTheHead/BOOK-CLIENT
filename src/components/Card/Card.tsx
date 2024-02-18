import { StyledCard } from "./card.styled";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";


const poppins = Poppins({ subsets: ["latin"], weight: "500" });



const Card = () => {
  const [liked, setLiked] = useState(false)
  const handleClickLikeBtn = () => {
    setLiked(!liked)
  }

  return (
    <StyledCard className={poppins.className}>
      <div className="cover-card">
        <Image
          src="/card/Rectangle 1.png"
          width={305}
          height={448}
          alt="Picture of the author"
        />
        <button className="like-btn"
        onClick={handleClickLikeBtn}>
          <Image
            src={`/card/${liked ? `liked` : `unliked`}.svg`}
            width={26}
            height={26}
            alt="Picture of the author"
          />
        </button>
      </div>
      <div className="about-card">
        <div className="name-athor">
          <span>The Chronicles of Narnia</span>
          <span>C. S. Lewis</span>
        </div>
        <div className="stars">
          <button>
            <Image
              src="/card/Star.svg"
              width={26}
              height={26}
              alt="Picture of the author"
            />
          </button>
          <button>
            <Image
              src="/card/Star.svg"
              width={26}
              height={26}
              alt="Picture of the author"
            />
          </button>
          <button>
            <Image
              src="/card/Star.svg"
              width={26}
              height={26}
              alt="Picture of the author"
            />
          </button>
          <button>
            <Image
              src="/card/Star.svg"
              width={26}
              height={26}
              alt="Picture of the author"
            />
          </button>
          <button>
            <Image
              src="/card/Star.svg"
              width={26}
              height={26}
              alt="Picture of the author"
            />
          </button>
          <span>5.0</span>
        </div>
        <div>
          <button className="btn-price">
            <span>$14.99 USD</span>
          </button>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
