import { StyledBookSlider } from "../PaginationBook";
import Image from "next/image";

const Pagination = () => {
  return (
    <StyledBookSlider>
      <button className="btn-left btn">
        <Image src="/pagination/arrow.svg" width={24} height={24} alt="back" />
      </button>
      <div className="btn-dots">
        <button className="btn">
          <Image src="/pagination/Dots.svg" width={20} height={20} alt="back" />
        </button>
        {[...Array(2)].map((_, index) => (
           <button className="btn" key={index}>
           <Image
             src="/pagination/DotsNone.svg"
             width={20}
             height={20}
             alt="back"
           />
         </button>
        ))}
      </div>
      <button className="btn-right btn">
        <Image src="/pagination/arrow.svg" width={24} height={24} alt="push" />
      </button>
    </StyledBookSlider>
  );
};

export default Pagination;
