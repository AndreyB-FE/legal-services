import React from "react";
// import { Link } from "react-router-dom";
import "./headerLinks.scss";

const HeaderLinks = () => {
  const links = [
    { text: "Главная", link: "/home" },
    { text: "Контакты", link: "/contacts" },
    { text: "Услуги", link: "/services" },
    { text: "Задать Вопрос", link: "/ask" },
    { text: "О Нас", link: "/about" },
  ];

  return (
    <nav className="headerLinks">
      <ul>
        {links.map((link, id) => {
          return (
            <li key={id}>
              <a href={link.link}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderLinks;
