"use client";

import { useState } from "react";
import MainSlider from "../atoms/MainSlider";

import all1 from "/public/images/slider-data/all/i (1).jpg";
import all2 from "/public/images/slider-data/all/i (1).png";
import all3 from "/public/images/slider-data/all/i (2).jpg";
import all4 from "/public/images/slider-data/all/i (2).png";
import all5 from "/public/images/slider-data/all/i (3).jpg";
import all6 from "/public/images/slider-data/all/i (3).png";
import all7 from "/public/images/slider-data/all/i (3).webp";
import all8 from "/public/images/slider-data/all/i (4).jpg";
import all9 from "/public/images/slider-data/all/i (4).png";
import all10 from "/public/images/slider-data/all/i (4).webp";
import all11 from "/public/images/slider-data/all/i (5).jpg";
import all12 from "/public/images/slider-data/all/i (5).png";
import all13 from "/public/images/slider-data/all/i (5).webp";
import all14 from "/public/images/slider-data/all/i (6).jpg";
import all15 from "/public/images/slider-data/all/i (6).png";
import all16 from "/public/images/slider-data/all/i (6).webp";
import all17 from "/public/images/slider-data/all/i (7).webp";
import all18 from "/public/images/slider-data/all/i (8).jpg";

import abstract1 from "/public/images/slider-data/abstract/i (1).png";
import abstract2 from "/public/images/slider-data/abstract/i (2).png";
import abstract3 from "/public/images/slider-data/abstract/i (3).png";
import abstract4 from "/public/images/slider-data/abstract/i (4).png";
import abstract5 from "/public/images/slider-data/abstract/i (5).png";
import abstract6 from "/public/images/slider-data/abstract/i (6).png";
import abstract7 from "/public/images/slider-data/abstract/i (7).png";
import abstract8 from "/public/images/slider-data/abstract/i (8).png";

import creative1 from "/public/images/slider-data/creative/1.webp";
import creative2 from "/public/images/slider-data/creative/2.webp";
import creative3 from "/public/images/slider-data/creative/3.webp";
import creative4 from "/public/images/slider-data/creative/4.webp";
import creative5 from "/public/images/slider-data/creative/5.webp";
import creative6 from "/public/images/slider-data/creative/6.webp";
import creative7 from "/public/images/slider-data/creative/7.webp";
import creative8 from "/public/images/slider-data/creative/8.webp";
import creative9 from "/public/images/slider-data/creative/9.webp";
import creative10 from "/public/images/slider-data/creative/10.webp";
import creative11 from "/public/images/slider-data/creative/11.webp";
import creative12 from "/public/images/slider-data/creative/12.webp";
import creative13 from "/public/images/slider-data/creative/13.webp";
import creative14 from "/public/images/slider-data/creative/14.webp";
import creative15 from "/public/images/slider-data/creative/15.webp";
import creative16 from "/public/images/slider-data/creative/16.webp";

import mascot1 from "/public/images/slider-data/mascot/i (1).png";
import mascot2 from "/public/images/slider-data/mascot/i (2).webp";
import mascot3 from "/public/images/slider-data/mascot/i (3).webp";
import mascot4 from "/public/images/slider-data/mascot/i (4).webp";
import mascot5 from "/public/images/slider-data/mascot/i (4).webp";
import mascot6 from "/public/images/slider-data/mascot/i (5).webp";
import mascot7 from "/public/images/slider-data/mascot/i (6).webp";
import mascot8 from "/public/images/slider-data/mascot/i (1).png";

import minimal1 from "/public/images/slider-data/minimal/i (1).webp";
import minimal2 from "/public/images/slider-data/minimal/i (2).webp";
import minimal3 from "/public/images/slider-data/minimal/i (3).webp";
import minimal4 from "/public/images/slider-data/minimal/i (4).webp";
import minimal5 from "/public/images/slider-data/minimal/i (5).webp";
import minimal6 from "/public/images/slider-data/minimal/i (6).webp";
import minimal7 from "/public/images/slider-data/minimal/i (7).webp";
import minimal8 from "/public/images/slider-data/minimal/i (8).webp";
import minimal9 from "/public/images/slider-data/minimal/i (9).webp";
import minimal10 from "/public/images/slider-data/minimal/i (10).webp";
import minimal11 from "/public/images/slider-data/minimal/i (11).webp";
import minimal12 from "/public/images/slider-data/minimal/i (12).webp";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const allImagesArr = [
    all1,
    all2,
    all3,
    all4,
    all5,
    all6,
    all7,
    all8,
    all9,
    all10,
    all11,
    all12,
    all13,
    all14,
    all15,
    all16,
    all17,
    all18,
  ];
  const abstractImagesArr = [
    abstract1,
    abstract2,
    abstract3,
    abstract4,
    abstract5,
    abstract6,
    abstract7,
    abstract8,
  ];

  const creativeImagesArr = [
    creative1,
    creative2,
    creative3,
    creative4,
    creative5,
    creative6,
    creative7,
    creative8,
    creative9,
    creative10,
    creative11,
    creative12,
    creative13,
    creative14,
    creative15,
    creative16,
  ];

  const mascotImagesArr = [
    mascot1,
    mascot2,
    mascot3,
    mascot4,
    mascot5,
    mascot6,
    mascot7,
    mascot8,
  ];

  const minimalImagesArr = [
    minimal1,
    minimal2,
    minimal3,
    minimal4,
    minimal5,
    minimal6,
    minimal7,
    minimal8,
    minimal9,
    minimal10,
    minimal11,
    minimal12,
  ];

  const tabs = [
    { title: "ALL", content: <MainSlider imagesArr={allImagesArr} /> },
    { title: "ABSTRACT", content: <MainSlider imagesArr={abstractImagesArr} /> },
    { title: "MINIMAL", content: <MainSlider imagesArr={minimalImagesArr} /> },
    { title: "CREATIVE", content: <MainSlider imagesArr={creativeImagesArr} /> },
    { title: "MASCOT", content: <MainSlider imagesArr={mascotImagesArr} /> },
  ];

  return (
    <div className="w-full  mx-auto mt-10">
      <div className="flex justify-center flex-wrap md:flex-nowrap border-b border-gray-200 space-x-5 *:text-base md:*:text-lg *:tracking-wider">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onMouseEnter={() => setActiveTab(index)}
            className={`${
              activeTab === index
                ? "bg-pri_blue  text-gray-100"
                : "bg-black text-white "
            }  block border-b-2 border-transparent font-semibold md:text-sm py-2 px-4 md:px-8 m-2 md:py-4 `}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              activeTab === index ? "block" : "hidden"
            } pb-4 text-gray-700`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
