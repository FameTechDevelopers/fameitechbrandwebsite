import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestImg from "./Sections/images/test-girl.png";
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
    slidesToShow: 3,
    speed: 500,
    // rows: 2,
    arrows: false,
    slidesToScroll: 1,
    slidesPerRow: 1,
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
          <h2 className=" text-[#fff] md:text-[60px] text-[40px] leading-[70px] font-bold ">
            <span className=" text-[45px] font-bold ">OUR SERVICES</span> <br />{" "}
            ARE CHERISHED BY <span className="text-[#FE7524]">ALL!</span>
          </h2>
          <p className=" text-[#fff] text-[21px] font-light pt-3 pb-5 ">
            We have served hundreds of brands, and look at what they have to say
            for us.
          </p>
        </div>

        <div className=" relative max-w-[1700px] pb-14 px-12 mx-auto  z-[999]">
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
            <div className="lg:col-span-4 col-span-12 ">
              <div className=" border border-[#073A9C] rounded-lg  py-10 m-3 ">
                <div className="testiBgQuote w-100 flex flex-col justify-center items-center ">
                  <Image src={TestImg} className=" w-[60px] h-[60px]" />
                </div>
                <h4 className=" text-white pb-5 text-center pt-3 ">
                  Golette Bowen
                </h4>
                <p className=" text-white text-center pb-7 text-[14px] px-10 ">
                  I am the post-production supervisor for Zach King. We worked
                  with Remy's company on VFX for a recent brand deal. Fameitech
                  did a fantastic job. They handled the client notes quickly and
                  efficiently. I highly recommend them.
                </p>
                <h5 className=" text-white text-center pt-3 ">⭐⭐⭐⭐⭐</h5>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 ">
              <div className=" border border-[#073A9C] rounded-lg  py-10 m-3 ">
                <div className="testiBgQuote w-100 flex flex-col justify-center items-center ">
                  <Image src={TestImg} className=" w-[60px] h-[60px]" />
                </div>
                <h4 className=" text-white pb-5 text-center pt-3 ">
                  Golette Bowen
                </h4>
                <p className=" text-white text-center pb-7 text-[14px] px-10 ">
                  I am the post-production supervisor for Zach King. We worked
                  with Remy's company on VFX for a recent brand deal. Fameitech
                  did a fantastic job. They handled the client notes quickly and
                  efficiently. I highly recommend them.
                </p>
                <h5 className=" text-white text-center pt-3 ">⭐⭐⭐⭐⭐</h5>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 ">
              <div className=" border border-[#073A9C] rounded-lg  py-10 m-3 ">
                <div className="testiBgQuote w-100 flex flex-col justify-center items-center ">
                  <Image src={TestImg} className=" w-[60px] h-[60px]" />
                </div>
                <h4 className=" text-white pb-5 text-center pt-3 ">
                  Golette Bowen
                </h4>
                <p className=" text-white text-center pb-7 text-[14px] px-10 ">
                  I am the post-production supervisor for Zach King. We worked
                  with Remy's company on VFX for a recent brand deal. Fameitech
                  did a fantastic job. They handled the client notes quickly and
                  efficiently. I highly recommend them.
                </p>
                <h5 className=" text-white text-center pt-3 ">⭐⭐⭐⭐⭐</h5>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LogoTestimonials;
