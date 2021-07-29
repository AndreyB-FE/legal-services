import React from "react";
import "./mobileHeaderMenu.scss";
import HeaderLinks from "../headerLinks/headerLinks";
import OrderButton from "../orderButton/orderButton";
import SocialIcons from "../socialIcons/socialIcons";
import { useSelector, useDispatch } from "react-redux";
import { toggleAsideWindow } from "../../actions";

const MobileHeaderMenu = () => {
  const dispatch = useDispatch();
  const windowState = useSelector((state) => state.asideWindowReducer);

  return (
    <div
      className={`dropDown${windowState ? "" : " hideMenu"}`}
      onClick={() => dispatch(toggleAsideWindow())}
    >
      <div className="dropDownInfo" onClick={(e) => e.stopPropagation()}>
        <HeaderLinks></HeaderLinks>
        <OrderButton></OrderButton>
        <SocialIcons></SocialIcons>
      </div>
    </div>
  );
};

export default MobileHeaderMenu;
