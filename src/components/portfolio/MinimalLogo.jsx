import React, { useRef } from "react";
import minimal1 from "../../assets/slider-data/minimal/i (1).webp";
import minimal2 from "../../assets/slider-data/minimal/i (2).webp";
import minimal3 from "../../assets/slider-data/minimal/i (3).webp";
import minimal4 from "../../assets/slider-data/minimal/i (4).webp";
import minimal5 from "../../assets/slider-data/minimal/i (5).webp";
import minimal6 from "../../assets/slider-data/minimal/i (6).webp";
import minimal7 from "../../assets/slider-data/minimal/i (7).webp";
import minimal8 from "../../assets/slider-data/minimal/i (8).webp";
import minimal9 from "../../assets/slider-data/minimal/i (9).webp";
import minimal10 from "../../assets/slider-data/minimal/i (10).webp";
import minimal11 from "../../assets/slider-data/minimal/i (11).webp";
import minimal12 from "../../assets/slider-data/minimal/i (12).webp";
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
    <div className=" p-2">
      <div className=" mb-4 flex justify-center items-center">
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
        <div>
          <Image
            src={minimal1}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal2}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal4}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal5}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal6}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal7}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal9}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal8}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal10}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal11}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={minimal12}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </Slider>
    </div>
  );
};

export default AbstractLogo;
