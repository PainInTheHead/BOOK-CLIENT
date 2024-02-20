import { StyledDropDowns } from "./dropdown.styled";
import DropdownCategories from "./categories/DropdownCategories";
import PriceSlider from "./sliderPrice/PriceSlider";
import { Poppins } from "next/font/google";
import SortPrice from "./sortPrice/SortPrice";
import { useState } from "react";
import { OptionsDrop } from "@/Types/types";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });
const DropDowns = () => {
  const [activeDrop, setActiveDrop] = useState<OptionsDrop>({
    Genre: false,
    Price: false,
    Sort: false,
  });

  const handleChangeDropDownActive = (optionsDrop: keyof OptionsDrop) => {
    setActiveDrop({
      ...Object.keys(activeDrop).reduce((acc, key) => {
        acc[key as keyof OptionsDrop] = false;
        return acc;
      }, {} as OptionsDrop),
      [optionsDrop]: !activeDrop[optionsDrop],
    });
  };

  return (
    <StyledDropDowns className={poppins.className}>
      <DropdownCategories
        handleChangeDropDownActive={handleChangeDropDownActive}
        activeDrop={activeDrop}
      />
      <PriceSlider handleChangeDropDownActive={handleChangeDropDownActive}
        activeDrop={activeDrop}/>
      <SortPrice handleChangeDropDownActive={handleChangeDropDownActive}
        activeDrop={activeDrop}/>
    </StyledDropDowns>
  );
};

export default DropDowns;
