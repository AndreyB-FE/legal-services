import React from "react";
import "./slideContent.scss";

const SlideContent = () => {
  return (
    <div className="contentBlock">
      <h2 className="contentHeader">
        Прозрачные услуги, <span className="coloredText">и так далее,</span>{" "}
        lorem ipsum xns.
      </h2>
      <p className="contentText">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button className="learnMore">Узнать больше</button>
    </div>
  );
};

export default SlideContent;
