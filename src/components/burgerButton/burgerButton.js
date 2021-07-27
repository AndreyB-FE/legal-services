import React, { useEffect } from "react";
import "./burgerButton.scss";

const BurgerButton = (props) => {
  useEffect(() => {
    props.headerRef.current.scrollIntoView();
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div
      id="burgerButton"
      className={`menu${props.isOpen ? " cross" : ""}`}
      onClick={() => props.clickHandler()}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
