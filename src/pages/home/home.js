import React from "react";
import Header from "../../components/header/header";
import OrderCall from "../../components/orderCall/orderCall";
import SliderSection from "../../components/sliderSection/sliderSection";
import ServicesSection from "../../components/servicesSection/servicesSection";
import AboutSection from "../../components/aboutSection/aboutSection";
import FindSection from "../../components/findSection/findSection";
import UpButton from "../../components/upButton/upButton";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div className="container">
      <Header></Header>
      <OrderCall></OrderCall>
      <SliderSection></SliderSection>
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <FindSection></FindSection>
      <UpButton></UpButton>
      <Footer></Footer>
    </div>
  );
};

export default Home;
