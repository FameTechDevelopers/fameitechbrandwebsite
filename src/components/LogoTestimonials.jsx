import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const LogoTestimonials = () => {
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
    <>
      <div className=" bg-black">
        <div className="max-w-[1700px] px-12 mx-auto ">
          <h2 className=" text-[#fff] md:text-[60px] text-[50px] leading-[70px] font-bold ">
            <span className=" text-[45px] font-bold ">OUR SERVICES</span> <br />{" "}
            ARE CHERISHED BY <span className="text-[#FE7524]">ALL!</span>
          </h2>
          <p className=" text-[#fff] text-[21px] font-light pt-3 pb-5 ">
            We have served hundreds of brands, and look at what they have to say
            for us.
          </p>
        </div>

        <div className=" relative max-w-[1700px] px-12 mx-auto  z-[999]">
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
            <div className=" p-2">sa</div>
            <div className=" p-2">sa</div>
            <div className=" p-2">sa</div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LogoTestimonials;
