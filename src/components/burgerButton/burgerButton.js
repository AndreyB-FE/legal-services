import React from "react";
import "./burgerButton.scss";

const BurgerButton = (props) => {
  return (
    <div
      id="burgerButton"
      className={`menu${props.isOpen ? " cross" : ""}`}
      onClick={props.clickHandler}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
