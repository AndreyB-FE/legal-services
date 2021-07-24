import React from "react";
import "./mobileHeaderMenu.scss";
import HeaderLinks from "../headerLinks/headerLinks";
import OrderButton from "../orderButton/orderButton";
import SocialIcons from "../socialIcons/socialIcons";

const MobileHeaderMenu = (props) => {
  return (
    <div className={`dropDown${props.isOpen ? "" : " hideMenu"}`}>
      <HeaderLinks></HeaderLinks>
      <OrderButton></OrderButton>
      <SocialIcons></SocialIcons>
    </div>
  );
};

export default MobileHeaderMenu;
