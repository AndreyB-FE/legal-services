import React from "react";
import "./footer.scss";
import OrderButton from "../orderButton/orderButton";
import HeaderLinks from "../headerLinks/headerLinks";
import SocialIcons from "../socialIcons/socialIcons";

const Footer = () => {
  return (
    <footer>
      <OrderButton></OrderButton>
      <HeaderLinks></HeaderLinks>
      <SocialIcons></SocialIcons>
      <p>&copy; Copyright since 2021</p>
    </footer>
  );
};

export default Footer;
