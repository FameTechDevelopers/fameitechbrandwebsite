import React, { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
import AbstractLogo from "./AbstractLogo";
import MinimalLogo from "./MinimalLogo";
import CreativeLogo from "./CreativeLogo";
import MascotLogo from "./MascotLogo";
import AllLogo from "./AllLogo";
import experience from "../Sections/images/image-7.png";
import emp from "../Sections/images/image-8.png";
import logo from "../Sections/images/image-9.png";
import project from "../Sections/images/image-10.png";
import count from "../Sections/images/image-11.png";
import client from "../Sections/images/image-12.png";
import ArrowD from "../Sections/images/arrow-down.png";
import Image from "next/image";

// import circle1 from "@/components/assets/grad-circle1.png"
// import circle2 from "@/components/assets/grad-circle3.png"
import circle1 from "../../components/assets/grad-circle1.png";
import circle2 from "../../components/assets/grad-circle3.png";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "All", content: <AllLogo /> },
    { title: "ABSTRACT", content: <AbstractLogo /> },
    { title: "MINIMAL", content: <MinimalLogo /> },
    { title: "CREATIVE", content: <CreativeLogo /> },
    { title: "MASCOT", content: <MascotLogo /> },
  ];

  // const goToNextTab = () => {
  //   setActiveTab((prevTab) => (prevTab === tabs.length - 1 ? 0 : prevTab + 1));
  // };

  // const goToPrevTab = () => {
  //   setActiveTab((prevTab) => (prevTab === 0 ? tabs.length - 1 : prevTab - 1));
  // };

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className=" bg-black relative">
      <Image src={circle1} className=" absolute w-[1100px] left-0 top-0" />
      <Image src={circle2} className=" absolute right-0 top-0" />
      <div className=" py-12 relative z-50">
        <div className="size-full mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              {/* <button
              onClick={goToPrevTab}
              className="px-4 py-4 rounded-full lg:mr-12 border-2 border-[#073A9C] hover:bg-[#073A9C] text-white"
            >
              <FaArrowLeft className=" md:text-[21px] text-[16px]" />
            </button>
            <button
              onClick={goToNextTab}
              className="px-4 py-4 rounded-full border-2 border-[#073A9C] hover:bg-[#073A9C] text-white"
            >
              <FaArrowRight className="md:text-[21px] text-[16px]" />
            </button> */}
            </div>

            <div className="flex flex-wrap justify-center lg:p-3 rounded-full items-center lg:space-x-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => changeTab(index)}
                  className={`md:px-6 px-2 rounded-full font-oswald-light m-2 border-2 md:text-[20px] text-[14px] md:w-[150px] w-[100px] md:py-4 py-2 ${
                    index === activeTab
                      ? "bg-white rounded-[100px] font-[500] text-[#FE7524]"
                      : "bg-transparent text-white"
                  } rounded-md`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-md">
            <p>{tabs[activeTab].content}</p>
          </div>
        </div>
      </div>

      <div className=" z-[99]">
        <div className="max-w-[1300px] mt-6 md:px-12 px-4 mx-auto ">
          <div className="  py-4 pb-10 ">
            <div className="">
              <h2 className=" font-oswald-light  text-[2.2rem] md:text-[3.2rem] mt-6 font-[Oswald]-700 text-center font-bold text-white md:leading-[70px] leading-[50px]">
                WHY CHOOSE
                <span className="text-[2.2rem] md:text-[3.2rem] text-[#FE7524]"> US?</span>
              </h2>
              <div className=" w-full flex justify-center ">
                {/* <Image src={ArrowD} className=" w-[200px] h-[200px] mt-12" /> */}
              </div>
            </div>
            <div className="">
              <div className=" grid grid-cols-12">
                <div className=" col-span-6 lg:col-span-4 rounded m-1 md:m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={experience} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="md:text-[3.2rem] text-[2.2rem] font-bold text-[#fff] pt-2 ">
                    12+
                  </h4>
                  <h6 className="md:text-[21px] text-[16px] font-light text-[#fff] pt-1 ">
                    Year Of Experience
                  </h6>
                </div>
                <div className=" col-span-6  lg:col-span-4 rounded m-1 md:m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={emp} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="md:text-[3.2rem] text-[2.2rem] font-bold text-[#fff] pt-2 ">
                    100+
                  </h4>
                  <h6 className="md:text-[21px] text-[16px] font-light text-[#fff] pt-1 ">
                    Employees
                  </h6>
                </div>
                <div className=" col-span-6  lg:col-span-4 rounded m-1 md:m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={logo} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="md:text-[3.2rem] text-[2.2rem] font-bold text-[#fff] pt-2 ">
                    5000+
                  </h4>
                  <h6 className="md:text-[21px] text-[16px] font-light text-[#fff] pt-1 ">
                    Logo Designs
                  </h6>
                </div>
                <div className=" col-span-6  lg:col-span-4 rounded m-1 md:m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={project} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="md:text-[3.2rem] text-[2.2rem] font-bold text-[#fff] pt-2 ">
                    95%
                  </h4>
                  <h6 className="md:text-[21px] text-[16px] font-light text-[#fff] pt-1 ">
                    Project Delivery
                  </h6>
                </div>
                <div className=" col-span-6  lg:col-span-4 rounded m-1 md:m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={count} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="md:text-[3.2rem] text-[2.2rem] font-bold text-[#fff] pt-2 ">
                    10+
                  </h4>
                  <h6 className="md:text-[21px] text-[16px] font-light text-[#fff] pt-1 ">
                    Countries
                  </h6>
                </div>
                <div className=" col-span-6  lg:col-span-4 rounded m-1 md:m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={client} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="md:text-[3.2rem] text-[2.2rem] font-bold text-[#fff] pt-2 ">
                    75%
                  </h4>
                  <h6 className="md:text-[21px] text-[16px] font-light text-[#fff] pt-1 ">
                    Client Retention Rate
                  </h6>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
