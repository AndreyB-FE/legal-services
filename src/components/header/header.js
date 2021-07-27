import React, { useState, useRef } from "react";
import "./header.scss";
import BurgerButton from "../burgerButton/burgerButton";
import HeaderLinks from "../headerLinks/headerLinks";
import OrderButton from "../orderButton/orderButton";
import Logo from "../logo/logo";
import MobileMenu from "../mobileHeaderMenu/mobileHeaderMenu";

const Header = () => {
  const myRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header ref={myRef}>
      <Logo width={"50px"}></Logo>
      <HeaderLinks></HeaderLinks>
      <OrderButton></OrderButton>
      <BurgerButton
        isOpen={isOpen}
        headerRef={myRef}
        clickHandler={() => setIsOpen(!isOpen)}
      ></BurgerButton>
      <MobileMenu
        isOpen={isOpen}
        clickHandler={() => setIsOpen(!isOpen)}
      ></MobileMenu>
    </header>
  );
};

export default Header;
