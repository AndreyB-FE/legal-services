import { useEffect } from "react";
import ReactDOM from "react-dom";

import "./modal.scss";

const Modal = (props) => {
  const element = document.createElement("div");
  useEffect(() => {
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  });
  return ReactDOM.createPortal(props.children, element);
};

export default Modal;
