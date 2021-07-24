import React from "react";
import "./logo.scss";

const Logo = (props) => {
  return (
    <img
      className="logo"
      alt="Benissimo"
      src="./assets/logo.png"
      style={{ width: props.width }}
    ></img>
  );
};

export default Logo;
