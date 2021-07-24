import React from "react";
import "./burgerButton.scss";

const BurgerButton = (props) => {
  return (
    <div
      id="burgerButton"
      className={`menu ${props.isOpen ? "cross" : null}`}
      onClick={props.clickHandler}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
