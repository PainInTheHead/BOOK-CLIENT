import { StyledSortPrice } from "./sortPrice.styled";
import ButtonDrop from "../btn-drop/ButtonDrop";
import { useState } from "react";
import { OptionsDrop, Options } from "@/Types/types";
import { handleProprsForDrop } from "@/Types/interfaces";


const SortPrice: React.FC<handleProprsForDrop> = ({
    handleChangeDropDownActive,
    activeDrop,
  }) => {
  
    const handleToggle = () => {
        handleChangeDropDownActive('Sort');
    };
  
    return (
      <StyledSortPrice>
        <ButtonDrop handleToggle={handleToggle} isOpen={activeDrop.Sort} btnName="Sort by price" />
      </StyledSortPrice>
    );
  };
  
  export default SortPrice;