"use client"
import React, {useRef} from "react";
import image1 from "../../assets/slider-data/abstract/i (1).png";
import image2 from "../../assets/slider-data/abstract/i (2).png";
import image3 from "../../assets/slider-data/abstract/i (3).png";
import image4 from "../../assets/slider-data/abstract/i (4).png";
import image5 from "../../assets/slider-data/abstract/i (5).png";
import image6 from "../../assets/slider-data/abstract/i (6).png";
import image7 from "../../assets/slider-data/abstract/i (7).png";
import image8 from "../../assets/slider-data/abstract/i (8).png";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AbstractLogo = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  var settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    arrows: false,
    slidesToScroll: 1,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" relative z-[999]">
      <div className=" mb-4">
        <button
          onClick={handlePrev}
          className="px-4 py-4  rounded-full lg:mr-12 border-2 border-[#073A9C] hover:bg-[#073A9C] text-white"
        >
          <FaArrowLeft className=" text-[21px]" />
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-4 rounded-full border-2 border-[#073A9C] hover:bg-[#073A9C] text-white"
        >
          <FaArrowRight className="text-[21px]" />
        </button>
      </div>
      <Slider {...settings} ref={sliderRef}>
        <div className=" p-2">
          <Image
            src={image1}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={image2}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div>
          <Image
            src={image3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div>
          <Image
            src={image3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div>
          <Image
            src={image4}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div>
          <Image
            src={image5}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div>
          <Image
            src={image6}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div>
          <Image
            src={image7}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div>
          <Image
            src={image8}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </Slider>
    </div>
  );
};

export default AbstractLogo;
