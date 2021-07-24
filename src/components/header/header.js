import React, { useState } from "react";
import "./header.scss";
import BurgerButton from "../burgerButton/burgerButton";
import HeaderLinks from "../headerLinks/headerLinks";
import OrderButton from "../orderButton/orderButton";
import Logo from "../logo/logo";
import MobileMenu from "../mobileHeaderMenu/mobileHeaderMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <Logo width={"50px"}></Logo>
      <HeaderLinks></HeaderLinks>
      <OrderButton></OrderButton>
      <BurgerButton
        isOpen={isOpen}
        clickHandler={() => setIsOpen(!isOpen)}
      ></BurgerButton>
      <MobileMenu isOpen={isOpen}></MobileMenu>
    </header>
  );
};

export default Header;
