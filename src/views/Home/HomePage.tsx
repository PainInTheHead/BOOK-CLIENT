import { StyledHome } from "./homePage.styled";
import DropDowns from "./UIHome/DropDowns/DropDowns";
import Card from "../../components/Card/Card";
import { Poppins } from "next/font/google";
import BookSlider from "./UIHome/Pagination";
import Image from "next/image";
import CardHolder from "./UIHome/CardHolder";
import { useSession } from "next-auth/react";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const HomePage = () => {
const session = useSession()
  
  return (
    <StyledHome>
      <div className="banner-header">
        <Image 
        alt="banner" 
        width="1280"
        height="400" 
        priority
        src="/banner.png" 
        />
      </div>
      <div className="catalog-filter">
        <h1 className={`${poppins.className} h1-home-page`}>Catalog</h1>
        <DropDowns />
      </div>
      <CardHolder />
      <BookSlider />
      {!session.data &&(
        <Image
          src="/banner/bannerLow.svg"
          width={1280}
          height={462}
          alt="banner-low"
        />
      )}
    </StyledHome>
  );
};

export default HomePage;
