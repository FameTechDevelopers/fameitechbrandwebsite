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
      <div className=" lg:px-12 px-6 py-32 p-4 relative z-50">
        <div className="size-full max-w-[1700px] lg:px-12 mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              {/* <button
              onClick={goToPrevTab}
              className="px-4 py-4 rounded-full lg:mr-12 border-2 border-[#073A9C] hover:bg-[#073A9C] text-white"
            >
              <FaArrowLeft className=" text-[21px]" />
            </button>
            <button
              onClick={goToNextTab}
              className="px-4 py-4 rounded-full border-2 border-[#073A9C] hover:bg-[#073A9C] text-white"
            >
              <FaArrowRight className="text-[21px]" />
            </button> */}
            </div>

            <div className="flex flex-wrap border-2 border-[#073A9C] lg:p-3 rounded-full items-center lg:space-x-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => changeTab(index)}
                  className={`px-4 rounded-full text-[17px] w-[120px] py-2 ${
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

          <div className="p-4 rounded-md">
            <p>{tabs[activeTab].content}</p>
          </div>
        </div>
      </div>

      <div className=" z-[99]">
        <div className="max-w-[1700px] px-12 mx-auto ">
          <div className=" grid grid-cols-12 py-4 pb-10 ">
            <div className=" lg:col-span-4 col-span-12">
              <h2 className=" text-[3.2rem] font-bold text-white leading-[70px] ">
                <span className=" text-[45px] font-bold ">WHY</span> <br />{" "}
                <span className="text-[3.2rem]">CHOOSE</span>{" "}
                <span className="text-[3.2rem] text-[#FE7524]">US?</span>
              </h2>
              <div className=" w-full flex justify-center ">
                <Image src={ArrowD} className=" w-[200px] h-[200px] mt-12" />
              </div>
            </div>
            <div className=" lg:col-span-8 col-span-12">
              <div className=" grid grid-cols-12">
                <div className=" col-span-12 lg:col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={experience} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="text-[3.2rem] font-bold text-[#fff] pt-2 ">
                    12+
                  </h4>
                  <h6 className="text-[21px] font-light text-[#fff] pt-1 ">
                    Year Of Experience
                  </h6>
                </div>
                <div className=" col-span-12  lg:col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={emp} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="text-[3.2rem] font-bold text-[#fff] pt-2 ">
                    100+
                  </h4>
                  <h6 className="text-[21px] font-light text-[#fff] pt-1 ">
                    Employees
                  </h6>
                </div>
                <div className=" col-span-12  lg:col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={logo} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="text-[3.2rem] font-bold text-[#fff] pt-2 ">
                    5000+
                  </h4>
                  <h6 className="text-[21px] font-light text-[#fff] pt-1 ">
                    Logo Designs
                  </h6>
                </div>
              </div>

              <div className=" grid grid-cols-12">
                <div className=" col-span-12  lg:col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={project} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="text-[3.2rem] font-bold text-[#fff] pt-2 ">
                    95%
                  </h4>
                  <h6 className="text-[21px] font-light text-[#fff] pt-1 ">
                    Project Delivery
                  </h6>
                </div>
                <div className=" col-span-12  lg:col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={count} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="text-[3.2rem] font-bold text-[#fff] pt-2 ">
                    10+
                  </h4>
                  <h6 className="text-[21px] font-light text-[#fff] pt-1 ">
                    Countries
                  </h6>
                </div>
                <div className=" col-span-12  lg:col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
                  <div>
                    <Image src={client} className=" w-[80px] h-[80px]" />
                  </div>
                  <h4 className="text-[3.2rem] font-bold text-[#fff] pt-2 ">
                    75%
                  </h4>
                  <h6 className="text-[21px] font-light text-[#fff] pt-1 ">
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
