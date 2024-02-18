import { StyledBookSlider } from "./bookSlider.styled";
import Image from "next/image";

const BookSlider = () => {
  return (
    <StyledBookSlider>
      <button className="btn-left">
        <Image src="/pagination/arrow.svg" width={24} height={24} alt="back" />
      </button>
      <div className="btn-dots">
        <button>
          <Image src="/pagination/Dots.svg" width={20} height={20} alt="back" />
        </button>
        <button>
          <Image
            src="/pagination/DotsNone.svg"
            width={20}
            height={20}
            alt="back"
          />
        </button>
        <button>
          <Image
            src="/pagination/DotsNone.svg"
            width={20}
            height={20}
            alt="back"
          />
        </button>
      </div>
      <button className="btn-right">
        <Image src="/pagination/arrow.svg" width={24} height={24} alt="push" />
      </button>
    </StyledBookSlider>
  );
};

export default BookSlider;
