import React, { useState, useEffect, useRef } from "react";
import "./explainArticle.scss";

const ExplainArticle = (props) => {
  const [open, setOpen] = useState(false);
  const [par, setPar] = useState(false);
  const ref = useRef();

  const handleResize = (e) => {
    // if (ref.current.offsetHeight / 18 > 6) {
    //   setOpen(true);
    // } else {
    //   setOpen(false);
    // }
    if (ref.current.offsetWidth < 430) {
      setOpen(false);
      setPar(true);
    } else {
      setOpen(true);
      setPar(false);
    }
  };

  useEffect(() => {
    // if (ref.current.offsetHeight / 18 > 6) {
    //   setOpen(true);
    // }
    if (ref.current.offsetWidth < 430) {
      setPar(true);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <article className="explain">
      <span ref={ref} className={`${open ? "" : "open"}`}>
        <h3>Предоставление Юридической помощи </h3>
        <p>
          в Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.Lorem
          Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </span>
      {par && (
        <div onClick={() => setOpen(!open)} className="readMore">
          {!open && "читать еще..."}
          {open && "скрыть"}
        </div>
      )}
    </article>
  );
};

export default ExplainArticle;
