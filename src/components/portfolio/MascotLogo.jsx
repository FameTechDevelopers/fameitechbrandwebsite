import React, { useRef } from "react";
import mascot1 from "../../assets/slider-data/mascot/i (1).png";
import mascot2 from "../../assets/slider-data/mascot/i (2).webp";
import mascot3 from "../../assets/slider-data/mascot/i (3).webp";
import mascot4 from "../../assets/slider-data/mascot/i (4).webp";
import mascot5 from "../../assets/slider-data/mascot/i (4).webp";
import mascot6 from "../../assets/slider-data/mascot/i (5).webp";
import mascot7 from "../../assets/slider-data/mascot/i (6).webp";
import mascot8 from "../../assets/slider-data/mascot/i (1).png";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MascotLogo = () => {
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
        <div className=" p-2">
          <Image
            src={mascot1}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={mascot2}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={mascot3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={mascot4}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={mascot6}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={mascot7}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={mascot8}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </Slider>
    </div>
  );
};

export default MascotLogo;
