"use client";
import React, { useState } from "react";
import ContactForm from "../../components/more-components/ContactForm";
import { FaCheck } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import arrow from "../../components/assets/arrow-blue.png";
import circle1 from "../../components/assets/grad-circle1.png";
import circle2 from "../../components/assets/grad-circle2.png";
import Image from "next/image";
import LiveChat from "../LiveChat";
import logo from "../assets/main-logo.png";

const MainSection = () => {
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
    <div className=" bg-black relative mt-[-130px] sm:pt-32 pt-5 ">
      <Image src={circle1} className=" absolute left-0 top-0" />
      <Image src={circle2} className=" absolute right-0 top-0" />

      <div className=" max-w-[1300px] mt-6 md:px-12 px-6 mx-auto grid grid-cols-12">
        <div className=" lg:col-span-7 col-span-12 flex items-center relative">
          <Image
            src={arrow}
            className=" absolute hidden lg:block right-28 top-20"
          />

          <div className=" mt-12 font-oswald-light lg:mt-0">
            <div className="flex lg:hidden mb-6 sm:hidden mt-14 justify-between">
              <a href="#">
                <Image
                  width={1000}
                  height={1000}
                  src={logo}
                  alt="logo fameitech"
                  className="w-[100px]   "
                />
              </a>
              <div className="flex flex-col sm:text-sm">
                <span className="text-white font-thin text-[0.8rem]">
                  Call Us Now
                </span>
                <span className="text-white font-bold text-[0.8rem]">
                  +1 (302) 501 - 7152
                </span>
              </div>
            </div>
            <h2 className="font-oswald-bold text-[2.2rem] md:text-[3.2rem]  md:mt-0 font-bold text-white md:leading-[70px] leading-[50px]">
              Logo
              <br />{" "}
              <span className=" md:text-[5rem] sm:text-[6rem] text-[3rem]">
                Design{" "}
              </span>
              <br />
              <span className="text-[#f2d119]  text-[3rem]">Starting</span>{" "}
              <span className=" md:text-[4.2rem] text-[3.5rem]">From</span>{" "}
              <span className="text-[#f2d119] font-[800]">$19</span>{" "}
              <span className=" md:text-[1.8rem] text-[1.4rem] line-through">
                $45
              </span>
            </h2>
            <div className=" lg:w-[55%]">
              <p className=" text-white mt-6">
                Your company deserves a brand that is as distinctive as it is.
                Give us the chance to help you stand out from the crowd with
                attention-grabbing and enduring Custom Logo Designs.
              </p>
            </div>

            <div className="md:flex justify-start text-white mt-12">
              <div className=" col-span-6 lg:mr-6">
                <ul>
                  <li className=" flex items-center mb-2">
                    <FaCheck className=" mr-2 bg-white text-[#f2d119] h-5 w-5 p-1 rounded-full" />
                    Custom Logo Concept
                  </li>
                  <li className=" flex items-center mb-2">
                    <FaCheck className="  mr-2 bg-white text-[#f2d119] h-5 w-5 p-1 rounded-full" />
                    Dedicated Designer
                  </li>
                  <li className=" flex items-center mb-2">
                    <FaCheck className="  mr-2 bg-white text-[#f2d119] h-5 w-5 p-1 rounded-full" />
                    Quick Turnaround Time
                  </li>
                </ul>
              </div>
              <div className=" col-span-6">
                <ul>
                  <li className=" flex items-center mb-2">
                    <FaCheck className="  mr-2 bg-white text-[#f2d119] h-5 w-5 p-1 rounded-full" />
                    Attractuve modern logo design
                  </li>
                  <li className=" flex items-center mb-2">
                    <FaCheck className="  mr-2 bg-white text-[#f2d119] h-5 w-5 p-1 rounded-full" />
                    100% Ownership Rights
                  </li>
                  <li className=" flex items-center mb-2">
                    <FaCheck className="  mr-2 bg-white text-[#f2d119] h-5 w-5 p-1 rounded-full" />
                    Attractive modern logo design
                  </li>
                </ul>
              </div>
            </div>
            <div className=" md:flex items-center mt-12">
              <div>
                <a
                  href="#customLogo_topForm"
                  class=" md:w-auto w-[250px]  py-3 px-3 text-sm md:mb-0 mb-4 flex lg:mr-8 justify-center items-center font-medium text-center text-white bg-[#073A9C] rounded-full"
                >
                  RESERVE THE DISCOUNT
                  <FaArrowRight />
                </a>
              </div>
              <div>
                <button
                  onClick={maximizeChat}
                  class="py-3 md:w-auto w-[250px] font-bold px-12 text-sm  flex justify-center items-center text-center text-black bg-[#f2d119] rounded-full"
                >
                  <IoChatbubbleEllipsesOutline className=" mr-3 text-[18px] " />
                  LIVE CHAT
                </button>
              </div>
              <LiveChat visibility={visibility} setVisibility={setVisibility} />
            </div>
          </div>
        </div>
        <div className=" lg:col-span-5 col-span-12 flex justify-end items-end lg:pl-24 py-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
