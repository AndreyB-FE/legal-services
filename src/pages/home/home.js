import React from "react";
import Header from "../../components/header/header";
import SliderSection from "../../components/sliderSection/sliderSection";
import ServicesSection from "../../components/servicesSection/servicesSection";
import AboutSection from "../../components/aboutSection/aboutSection";
import FindSection from "../../components/findSection/findSection";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div className="container">
      <Header></Header>
      <SliderSection></SliderSection>
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <FindSection></FindSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
