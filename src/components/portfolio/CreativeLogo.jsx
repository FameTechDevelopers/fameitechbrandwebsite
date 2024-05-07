import React, { useRef } from "react";
import creative1 from "../../assets/slider-data/creative/1.webp";
import creative2 from "../../assets/slider-data/creative/2.webp";
import creative3 from "../../assets/slider-data/creative/3.webp";
import creative4 from "../../assets/slider-data/creative/4.webp";
import creative5 from "../../assets/slider-data/creative/5.webp";
import creative6 from "../../assets/slider-data/creative/6.webp";
import creative7 from "../../assets/slider-data/creative/7.webp";
import creative8 from "../../assets/slider-data/creative/8.webp";
import creative9 from "../../assets/slider-data/creative/9.webp";
import creative10 from "../../assets/slider-data/creative/10.webp";
import creative11 from "../../assets/slider-data/creative/11.webp";
import creative12 from "../../assets/slider-data/creative/12.webp";
import creative13 from "../../assets/slider-data/creative/13.webp";
import creative14 from "../../assets/slider-data/creative/14.webp";
import creative15 from "../../assets/slider-data/creative/15.webp";
import creative16 from "../../assets/slider-data/creative/16.webp";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CreativeLogo = () => {
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
    <div>
      <div className=" mb-4">
        <button
          onClick={handlePrev}
          className="px-4 py-4 rounded-full lg:mr-12 border-2 border-[#073A9C] hover:bg-[#073A9C] text-white"
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
            src={creative1}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative2}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative4}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative5}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative6}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative7}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative8}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative9}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative10}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative11}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative12}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative13}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative14}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative15}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={creative16}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </Slider>
    </div>
  );
};

export default CreativeLogo;
