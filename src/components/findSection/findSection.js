import React from "react";
import "./findSection.scss";

const FindSection = () => {
  return (
    <section className="howToFind">
      <h3>Как нас найти</h3>
      <div className="contacts">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.041107548233!2d23.83133034564008!3d53.68189277827519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd62686f12c31%3A0x6407fd44993526b1!2sVialikaja%20Trajeckaja%20vulica%2011%2C%20Hrodna!5e0!3m2!1sen!2sby!4v1627387296955!5m2!1sen!2sby"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
        <address className="address">
          <p>Гродно, ул. Большая Троицкая, д.11</p>
          <p>ИП Богушевич Лариса Викентьевна</p>
          <p>УНП 591250620</p>
          <a href="mailto:benissimo@gmail.com">benissimo@gmail.com</a>
          <a href="tel:+375296332816">(29) 633-2826 A1</a>
          <a href="tel:+375338662826">(33) 866-2826 MTC</a>
        </address>
      </div>
    </section>
  );
};

export default FindSection;
