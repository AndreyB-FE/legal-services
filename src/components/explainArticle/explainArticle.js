import React, { useState, useEffect, useRef } from "react";
import "./explainArticle.scss";

const ExplainArticle = (props) => {
  const [isOpened, setIsOpened] = useState(false); // is paragraph opened?
  const [ifSmall, setIfSmall] = useState(false); // is block small enougth?
  const ref = useRef();

  const handleResize = () => {
    if (ref.current.offsetWidth < 430) {
      setIsOpened(false);
      setIfSmall(true);
    } else {
      setIsOpened(true);
      setIfSmall(false);
    }
  };

  useEffect(() => {
    if (ref.current.offsetWidth < 430) {
      setIfSmall(true);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <article className="explain">
      <span ref={ref} className={`${isOpened ? "" : "close"}`}>
        {/*collect whole paragraph and header to count every line*/}
        <h3>{props.headerText}</h3>
        <p>{props.paragraphText}</p>
      </span>
      {ifSmall && (
        <button onClick={() => setIsOpened(!isOpened)} className="readMore">
          {(!isOpened && "читать еще...") || "скрыть"}
        </button>
      )}
    </article>
  );
};

export default ExplainArticle;
