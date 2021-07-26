import React from "react";
import ExplainArticle from "../explainArticle/explainArticle";
import ServicesGrid from "../sevicesGrid/servicesGrid";
import "./services.scss";

const Services = () => {
  const articleText = {
    headerText: "Предоставление Юридической помощи ",
    paragraphText:
      "в Lorem Ipsum passages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum.LoremIpsum passages, and more recently with desktop publishing softwarelike Aldus PageMaker including versions of Lorem Ipsum.",
  };

  return (
    <section className="services">
      <ExplainArticle {...articleText}></ExplainArticle>
      <ServicesGrid></ServicesGrid>
    </section>
  );
};

export default Services;
