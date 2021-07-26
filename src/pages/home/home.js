import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SliderSection from "../../components/sliderSection/sliderSection";
import Services from "../../components/services/services";

const Home = () => {
  return (
    <div className="container">
      <Header></Header>
      <SliderSection></SliderSection>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
