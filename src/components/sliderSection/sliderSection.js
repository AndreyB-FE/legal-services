import React from "react";
import Slider from "react-slick";
import "./sliderSection.scss";
import SlideContent from "../slideContent/slideContent";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={`${className} arrow`}
      style={{ ...style }}
      onClick={onClick}
      width="32"
      height="96"
      viewBox="0 0 32 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 84.72L19.7787 48L0 11.28L6.08907 0L32 48L6.08907 96L0 84.72Z"
        fill="#6C8367"
      />
    </svg>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={`${className} arrow`}
      style={{ ...style }}
      onClick={onClick}
      width="32"
      height="96"
      viewBox="0 0 32 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 84.72L12.2213 48L32 11.28L25.9109 0L0 48L25.9109 96L32 84.72Z"
        fill="#6C8367"
      />
    </svg>
  );
}

const SliderSection = () => {
  const slides = [
    {
      imgSrc: "./assets/legal.jpg",
      style: {
        backgroundImage: 'url("./assets/legal.jpg")',
      },
      className: "slide",
    },
    {
      imgSrc: "./assets/legal.jpg",
      style: {
        backgroundImage: 'url("./assets/legal.jpg")',
      },
      className: "slide",
    },
    {
      imgSrc: "./assets/legal.jpg",
      style: {
        backgroundImage: 'url("./assets/legal.jpg")',
      },
      className: "slide",
    },
  ];

  const settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {slides.map((slide, id) => {
        return (
          <div key={id} className={slide.className} style={slide.style}>
            {/* <img src={slide.imgSrc} alt="" /> */}
            <div className="slide-shadow">
              <SlideContent></SlideContent>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderSection;
