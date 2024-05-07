import React, { useRef } from "react";
import Slider from "react-slick";
import all1 from "../../assets/slider-data/all/i (1).jpg";
import all2 from "../../assets/slider-data/all/i (1).png";
import all3 from "../../assets/slider-data/all/i (2).jpg";
import all4 from "../../assets/slider-data/all/i (2).png";
import all5 from "../../assets/slider-data/all/i (3).jpg";
import all6 from "../../assets/slider-data/all/i (3).png";
import all7 from "../../assets/slider-data/all/i (3).webp";
import all8 from "../../assets/slider-data/all/i (4).jpg";
import all9 from "../../assets/slider-data/all/i (4).png";
import all10 from "../../assets/slider-data/all/i (4).webp";
import all11 from "../../assets/slider-data/all/i (5).jpg";
import all12 from "../../assets/slider-data/all/i (5).png";
import all13 from "../../assets/slider-data/all/i (5).webp";
import all14 from "../../assets/slider-data/all/i (6).jpg";
import all15 from "../../assets/slider-data/all/i (6).png";
import all16 from "../../assets/slider-data/all/i (6).webp";
import all17 from "../../assets/slider-data/all/i (7).webp";
import all18 from "../../assets/slider-data/all/i (8).jpg";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AllLogo = () => {
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
            src={all1}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all2}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all4}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all5}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all6}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all7}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all8}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>

        <div className=" p-2">
          <Image
            src={all9}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all10}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all11}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all12}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all13}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all14}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all15}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all16}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all17}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className=" p-2">
          <Image
            src={all18}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </Slider>
    </div>
  );
};

export default AllLogo;
