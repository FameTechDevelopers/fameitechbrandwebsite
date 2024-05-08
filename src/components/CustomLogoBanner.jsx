"use client";
import React, { useState } from "react";
import logoEg from "../components/Sections/images/image-13.png";
import Image from "next/image";
import LiveChat from "./LiveChat";

const CustomLogoBanner = () => {
  const [visibility, setVisibility] = useState("minimized");

  const maximizeChat = async () => {
    if (visibility === "minimized") {
      setVisibility("maximized");
      //   setTimeout(() => {
      //     setVisibility("minimized")

      //   }, 1000);
    } else {
      setVisibility("minimized");
    }
  };

  return (
    <div className=" bg-black">
      <div className="pb-[30px]">
        <div className="bg-CustomLogo py-2">
          <div className="max-w-[1300px] mt-6 px-12 mx-auto py-10">
            <div className="lg:pl-[30px] pt-10 lg:ml-10 ">
              <h2 className=" text-[#fff] font-oswald-bold  text-center font-bold text-[2.2rem] md:text-[3.5rem] md:leading-[70px] leading-[50px] capitalize ">
                Get Your Custom Logo Designed in just{" "}
                <span className="text-[#f2d119] ">$19</span>{" "}
                <span className=" md:text-[1rem] text-[1.4rem] line-through">
                  $45
                </span>
              </h2>
              <div className="pt-10 flex justify-center items-center gap-4  ">
                <button
                  onClick={maximizeChat}
                  className=" uppercase text-black bg-[#f2d119] md:px-8 px-4 py-2 rounded-full shadow-stone-400 "
                >
                  LIVE CHAT
                </button>
                <LiveChat
                  visibility={visibility}
                  setVisibility={setVisibility}
                />
                <a
                  href="tel:tel:+18722333612"
                  className="uppercase text-[#000000] bg-[#ffffff] md:px-8 px-4 py-2 rounded-full shadow-stone-400 "
                >
                  Call now
                </a>
                {/* <button className=" uppercase text-[#fff] bg-[#f2d119] px-8 py-2 rounded-full shadow-stone-400 ">
                  LIVE CHAT
                </button> */}
              </div>
            </div>
            <div className="">
              <Image
                src={logoEg}
                className=" w-[100%] hidden h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLogoBanner;
