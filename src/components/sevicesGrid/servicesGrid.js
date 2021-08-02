import React from "react";
import "./servicesGrid.scss";
import { services } from "../services";

const ServicesGrid = (props) => {
  return (
    <div className={`servicesGrid ${props.isOpen ? "open" : ""}`}>
      {services.map((service, id) => {
        return (
          <div key={id} className="service">
            <div className="icon">{service.icon}</div>
            <h3>{service.headerText}</h3>
            <div className="hr"></div>
            <p>{service.paragraphText}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
