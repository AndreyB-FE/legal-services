import React from "react";
import "./mobileServices.scss";
import Modal from "../modal/modal";
import { services } from "../services";

const MobileServices = () => {
  return (
    <div className="mobileServices">
      {services.map((service, id) => {
        return (
          <article key={id} className="service">
            <div className="serviceBody">
              <div className="icon">{service.icon}</div>
              <div className="serviceText">
                <h2>{service.headerText}</h2>
                <p>{service.paragraphText}</p>
              </div>
            </div>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.261272 11.9971C0.117237 11.9973 0.000269353 11.8808 4.04685e-07 11.7367C-0.000121845 11.6673 0.0274577 11.6007 0.0766264 11.5516L5.63007 5.99869L0.0766264 0.445776C-0.0253541 0.343796 -0.0253541 0.178466 0.0766264 0.0764853C0.178607 -0.0254951 0.343937 -0.0254951 0.445917 0.0764853L6.1835 5.81406C6.28531 5.9159 6.28531 6.08098 6.1835 6.18284L0.445917 11.9204C0.397018 11.9695 0.330563 11.9971 0.261272 11.9971Z"
                fill="black"
              />
            </svg>
          </article>
        );
      })}
      <Modal>hhello</Modal>
    </div>
  );
};

export default MobileServices;
