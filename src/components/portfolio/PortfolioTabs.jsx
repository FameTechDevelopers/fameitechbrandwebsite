import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import AbstractLogo from "./AbstractLogo";
import MinimalLogo from "./MinimalLogo";
import CreativeLogo from "./CreativeLogo";
import MascotLogo from "./MascotLogo";
import AllLogo from "./AllLogo";
import Image from "next/image";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "All", content: <AllLogo /> },
    { title: "ABSTRACY", content: <AbstractLogo /> },
    { title: "MINIMAL", content: <MinimalLogo /> },
    { title: "CREATIVE", content: <CreativeLogo /> },
    { title: "MASCOT", content: <MascotLogo /> },
  ];

  const goToNextTab = () => {
    setActiveTab((prevTab) => (prevTab === tabs.length - 1 ? 0 : prevTab + 1));
  };

  const goToPrevTab = () => {
    setActiveTab((prevTab) => (prevTab === 0 ? tabs.length - 1 : prevTab - 1));
  };

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-black px-12 py-32 p-4 relative z-50">
      <div className="size-full max-w-[1700px] px-12 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <button
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
            </button>
          </div>

          <div className="flex border-2 border-[#073A9C] p-3 rounded-full items-center space-x-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => changeTab(index)}
                className={`px-4 rounded-[200px] text-[17px] w-[120px] py-3 ${
                  index === activeTab
                    ? "bg-white font-[500] text-[#FE7524]"
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
  );
};

export default Portfolio;
