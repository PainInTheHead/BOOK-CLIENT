import { StyledHome } from "./homePage.styled";
import DropDowns from "./UIHome/DropDowns/DropDowns";
import Card from "../../components/Card/Card";
import { Poppins } from "next/font/google";
import BookSlider from "./UIHome/Pagination";
import Image from "next/image";
import CardHolder from "./UIHome/CardHolder";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const HomePage = () => {
  return (
    <StyledHome>
      <div className="banner-header">
        <Image src="/banner.png" alt="banner" width={1280} height={400} />
      </div>
      <div className="catalog-filter">
        <h1 className={poppins.className}>Catalog</h1>
        <DropDowns />
      </div>
      <CardHolder />
      <BookSlider />
      <Image
        src="/banner/bannerLow.svg"
        width={1280}
        height={462}
        alt="banner-low"
      />
    </StyledHome>
  );
};

export default HomePage;
