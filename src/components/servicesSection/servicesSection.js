import React, { useState, useRef } from "react";
import ExplainArticle from "../explainArticle/explainArticle";
import ServicesGrid from "../sevicesGrid/servicesGrid";
import "./servicesSection.scss";

const Services = () => {
  const articleText = {
    headerText: "Предоставление Юридической помощи ",
    paragraphText:
      "в Lorem Ipsum passages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum.LoremIpsum passages, and more recently with desktop publishing softwarelike Aldus PageMaker including versions of Lorem Ipsum.",
  };

  const [isOpen, setIsOpen] = useState(false);
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <section className="services" ref={myRef}>
      <ExplainArticle {...articleText}></ExplainArticle>
      <ServicesGrid isOpen={isOpen}></ServicesGrid>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          isOpen && executeScroll();
        }}
      >
        {(!isOpen && "Посмотреть всё") || "Скрыть"}
      </button>
    </section>
  );
};

export default Services;
