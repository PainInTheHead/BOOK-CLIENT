import { StyledHome } from "./homePage.styled";
import DropDowns from "../../UI/dropdown/AllComponentsDropDowns/DropDowns";
import Card from "../../Card/Card";
import { Poppins } from "next/font/google";
import BookSlider from "../../UI/bookSlider/BookSlide";
import Image from "next/image";

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
      <div className="catalog-content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
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
