import React from "react";
import "./slideContent.scss";

const SlideContent = (props) => {
  return (
    <div className="contentBlock">
      <h2 className="contentHeader">
        {props.headerText[0]}
        <span className="coloredText">{props.headerText[1]}</span>
        {props.headerText[2]}
      </h2>
      <p className="contentText">{props.mainText}</p>
      <button className="learnMore">Узнать больше</button>
    </div>
  );
};

export default SlideContent;
