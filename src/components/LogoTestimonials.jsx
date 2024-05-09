import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestImg from "./Sections/images/test-girl.png";
import ZachImg from "../assets/zach.webp";
import SydneyImg from "../assets/sydney.webp";
import AmandaImg from "../assets/amanda.webp";
import WheellifeImg from "../assets/wheellife.webp";
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
    autoplay: true,
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
        <div className="max-w-[1300px] md:px-12 px-6 py-4 mx-auto text-center">
          <h2 className=" text-[#fff] md:text-[45px] text-[2.2rem] font-oswald-bold  md:leading-[70px] leading-[50px] font-bold ">
            <span className=" md:text-[45px] text-[2.2rem] font-bold ">OUR SERVICES</span> ARE
            CHERISHED BY <span className="text-[#f2d119]">ALL!</span>
          </h2>
          <p className=" text-[#fff] font-oswald-light text-[21px] font-light pt-3 pb-5 ">
            Explore the testimonials of brands worldwide and witness the power
            of our unique creation.
          </p>
        </div>

        <div className="text-center relative max-w-[1300px] pb-14 md:px-12 px-6 mx-auto  z-[999]">
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
          <Slider className=" hidden" {...settings} ref={sliderRef}>
            <div className="lg:col-span-4 col-span-12 ">
              <div className=" border border-[#073A9C] rounded-lg  py-10 m-3 ">
                <div className="testiBgQuote w-100 flex flex-col justify-center items-center ">
                  <Image src={ZachImg} className=" w-[60px] h-[60px]" />
                </div>
                <h4 className=" text-white pb-5 text-center pt-3 ">
                  Colette Brown
                </h4>
                <p className=" text-white text-center pb-7 text-[14px] px-10 ">
                  I am the post-production supervisor for Zach King. We worked
                  with Remy's company on VFX for a recent brand deal. Fame Itech
                  did a fantastic job. They handled the client notes quickly and
                  efficiently. I would recommend them.
                </p>
                <h5 className=" text-white text-center pt-3 ">⭐⭐⭐⭐⭐</h5>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 ">
              <div className=" border border-[#073A9C] rounded-lg  py-10 m-3 ">
                <div className="testiBgQuote w-100 flex flex-col justify-center items-center ">
                  <Image src={SydneyImg} className=" w-[60px] h-[60px]" />
                </div>
                <h4 className=" text-white pb-5 text-center pt-3 ">
                  Sydney Stewart
                </h4>
                <p className=" text-white text-center pb-7 text-[14px] px-10 ">
                  Hakeem did an amazing job with my video even after I had
                  several edits and a lot of the videos quality I had were poor.
                  He made them look super professional with a title page and
                  edit the music. The video definitely exceeded my expectations.
                </p>
                <h5 className=" text-white text-center pt-3 ">⭐⭐⭐⭐⭐</h5>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 ">
              <div className=" border border-[#073A9C] rounded-lg  py-10 m-3 ">
                <div className="testiBgQuote w-100 flex flex-col justify-center items-center ">
                  <Image src={AmandaImg} className=" w-[60px] h-[60px]" />
                </div>
                <h4 className=" text-white pb-5 text-center pt-3 ">
                  Amanda Parker
                </h4>
                <p className=" text-white text-center pb-7 text-[14px] px-10 ">
                  I had an exceptional experience working with Fameitech - a
                  remarkable team of professionals. Austin Weber responsiveness
                  and consistent communication throughout the process were
                  impressive. In the realm of web development and graphic
                  design.
                </p>
                <h5 className=" text-white text-center pt-3 ">⭐⭐⭐⭐⭐</h5>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 ">
              <div className=" border border-[#073A9C] rounded-lg  py-10 m-3 ">
                <div className="testiBgQuote w-100 flex flex-col justify-center items-center ">
                  <Image src={WheellifeImg} className=" w-[60px] h-[60px]" />
                </div>
                <h4 className=" text-white pb-5 text-center pt-3 ">
                  WheelLifeConnections
                </h4>
                <p className=" text-white text-center pb-7 text-[14px] px-10 ">
                  I really had a great experience working with this team. They
                  understand my vision for my first book and they were great
                  with all my questions and requests. They took the time to
                  really understand what I was wanting and were extremely timely
                  with my deadline.{" "}
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
