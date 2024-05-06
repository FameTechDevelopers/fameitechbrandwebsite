"use client";

import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from "/public/images/slider-data/1.png"
// import img2 from "/public/images/slider-data/2.webp"
// import img3 from "/public/images/slider-data/3.jpg"
// import img4 from "/public/images/slider-data/4.webp"
// import img5 from "/public/images/slider-data/5.webp"

const MainSlider = ({ imagesArr }) => {
  const imgsArr = [...imagesArr];

  const settings = {
    // dots: true,
    // infinite: true,
    arrows: false,
    navigator: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full flex flex-col space-y-10 justify-center">
      <Slider {...settings} className="size-full main-slide space-x-2">
        {imgsArr.slice(0, imagesArr.length / 2).map((imgSrc) => (
          <img
            key={imgSrc}
            src={imgSrc}
            className="max-w-[350px] mx-auto rounded-md"
          />
        ))}
      </Slider>
      <Slider {...settings} className="size-full main-slide ">
        {imgsArr.slice(imagesArr.length / 2, imagesArr.length).map((imgSrc) => (
          <img
            key={imgSrc}
            src={imgSrc}
            className="max-w-[350px] mx-auto rounded-md"
          />
        ))}
      </Slider>
    </div>
  );
};
export default MainSlider;
