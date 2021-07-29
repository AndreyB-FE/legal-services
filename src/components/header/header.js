import React, { useRef } from "react";
import "./header.scss";
import BurgerButton from "../burgerButton/burgerButton";
import HeaderLinks from "../headerLinks/headerLinks";
import OrderButton from "../orderButton/orderButton";
import Logo from "../logo/logo";
import MobileMenu from "../mobileHeaderMenu/mobileHeaderMenu";

const Header = () => {
  const myRef = useRef(null);
  return (
    <header ref={myRef}>
      <Logo width={"50px"}></Logo>
      <HeaderLinks></HeaderLinks>
      <OrderButton></OrderButton>
      <BurgerButton headerRef={myRef}></BurgerButton>
      <MobileMenu></MobileMenu>
    </header>
  );
};

export default Header;
