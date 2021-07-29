import React from "react";
import { useDispatch } from "react-redux";
import { toggleOrderWindow } from "../../actions";
import "./orderButton.scss";

const OrderButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      id="orderButton"
      className="orderButton"
      title="записаться на приём"
      onClick={() => dispatch(toggleOrderWindow())}
    >
      Записаться
    </button>
  );
};

export default OrderButton;
