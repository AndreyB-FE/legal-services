import React from "react";
import "./aboutSection.scss";
import ExplainArticle from "../explainArticle/explainArticle";

const AboutSection = () => {
  const articleText = {
    headerText: "О компании. ",
    paragraphText:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing",
  };

  const advantagesList = [
    {
      headerText: "Большой опыт. ",
      advantageText: "Более 20 лет в сфере юридических услуг.",
    },
    {
      headerText: "Быстрые услуги. ",
      advantageText: "Приступаем немедленно к работе.",
    },
    {
      headerText: "Квалифицированные специалисты. ",
      advantageText: "Стаж    специалистов более 10 лет.",
    },
    {
      headerText: "Низкие цены. ",
      advantageText: "Самые низкие цены на рынке.",
    },
    {
      headerText: "Любовь к делу. ",
      advantageText: "Каждый юрист отдается своему делу.",
    },
  ];

  return (
    <section className="about">
      <ExplainArticle {...articleText}></ExplainArticle>
      <div className="advantages">
        <h3>Наши Преимущества</h3>
        <div className="advantagesInfo">
          <ul className="list">
            {advantagesList.map((listItem, id) => {
              return (
                <li key={id} className="listItem">
                  <div className="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse cx="12" cy="12" rx="12" ry="12" fill="#6C8367" />
                      <circle cx="12" cy="12" r="8" fill="white" />
                    </svg>
                  </div>
                  <span>
                    <h2>{listItem.headerText}</h2>
                    <p>{listItem.advantageText}</p>
                  </span>
                </li>
              );
            })}
          </ul>
          <div
            className="photo"
            style={{ backgroundImage: "url(./assets/photo.jpeg)" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
