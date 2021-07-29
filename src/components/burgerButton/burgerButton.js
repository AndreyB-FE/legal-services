import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAsideWindow } from "../../actions";
import "./burgerButton.scss";

const BurgerButton = (props) => {
  const dispatch = useDispatch();
  const windowState = useSelector((state) => state.asideWindowReducer);

  useEffect(() => {
    props.headerRef.current.scrollIntoView();
    if (windowState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div
      id="burgerButton"
      className={`menu${windowState ? " cross" : ""}`}
      onClick={() => dispatch(toggleAsideWindow())}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
