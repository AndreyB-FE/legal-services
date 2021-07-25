import React from "react";
import "./logo.scss";

const Logo = (props) => {
  return (
    <div className="logoWrapper">
      <img
        className="logo"
        alt="Benissimo"
        src="./assets/logo.png"
        style={{ width: props.width }}
      ></img>
    </div>
  );
};

export default Logo;
