import React, { useState, useEffect } from "react";
import "./upButton.scss";

const UpButton = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const executeScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 2000) {
      setIsVisible(true);
      return;
    }
    setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`upButton ${!isVisible && "invisible"}`}
      onClick={() => executeScroll()}
      title="подняться наверх"
    >
      <svg
        width="40"
        height="25"
        viewBox="0 0 40 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 0L40 25L20 11.5566L0 25L20 0Z" fill="#EFEFEF" />
      </svg>
    </button>
  );
};

export default UpButton;
