import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SliderSection from "../../components/sliderSection/sliderSection";

const Home = () => {
  return (
    <div className="container">
      <Header></Header>
      <SliderSection></SliderSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
