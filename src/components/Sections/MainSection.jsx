"use client"
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

const MainSection = () => {
  const [visibility,setVisibility] = useState("minimized")

  const maximizeChat = async () => {
      if (visibility === "minimized") {
          setVisibility("maximized")
      //   setTimeout(() => {
      //     setVisibility("minimized")
          
      //   }, 1000);
      }else{   
          setVisibility("minimized")
      }
  };

  return (
    <div className=" bg-black relative sm:py-32 py-5 ">
      <Image src={circle1} className=" absolute left-0 top-0" />
      <Image src={circle2} className=" absolute right-0 top-0" />
      <div className=" max-w-[1700px] px-12 mx-auto grid grid-cols-12">
        <div className=" lg:col-span-7 col-span-12 flex items-center relative">
          <Image
            src={arrow}
            className=" absolute hidden lg:block right-28 top-20"
          />
          <div className=" mt-12 lg:mt-0">
            <h2 className=" text-[3.2rem] font-bold text-white leading-[70px]">
              Logo
              <br />{" "}
              <span className=" md:text-[7rem] sm:text-[6rem] text-6xl">Design </span>
              <br />
              <span className="border-text text-[3rem]">Starting</span>{" "}
              <span className=" text-[4.2rem]">From</span>{" "}
              <span className="text-[#FE7524] font-[800]">$19</span>{" "}
              <span className=" text-[2.8rem] line-through">$45</span>
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
                    <FaCheck className=" mr-2 bg-white text-[#FE7524] h-5 w-5 p-1 rounded-full" />
                    Custom Logo Concept
                  </li>
                  <li className=" flex items-center mb-2">
                    <FaCheck className="  mr-2 bg-white text-[#FE7524] h-5 w-5 p-1 rounded-full" />
                    Dedicated Designer
                  </li>
                  <li className=" flex items-center mb-2">
                    <FaCheck className="  mr-2 bg-white text-[#FE7524] h-5 w-5 p-1 rounded-full" />
                    Quick Turnaround Time
                  </li>
                </ul>
              </div>
              <div className=" col-span-6">
                <ul>
                  <li className=" flex items-center mb-2">
                    <FaCheck className="  mr-2 bg-white text-[#FE7524] h-5 w-5 p-1 rounded-full" />
                    Attractuve modern logo design
                  </li>
                  <li className=" flex items-center mb-2">
                    <FaCheck className="  mr-2 bg-white text-[#FE7524] h-5 w-5 p-1 rounded-full" />
                    100% Ownership Rights
                  </li>
                  <li className=" flex items-center mb-2">
                    <FaCheck className="  mr-2 bg-white text-[#FE7524] h-5 w-5 p-1 rounded-full" />
                    Attractive modern logo design
                  </li>
                </ul>
              </div>
            </div>
            <div className=" md:flex items-center mt-12">
              <a
              href="#customLogo_topForm"
                class=" w-[60%] py-3 px-3 text-sm md:mb-0 mb-4 flex lg:mr-8 justify-center items-center font-medium text-center text-white bg-[#073A9C] rounded-full"
              >
                RESERVE THE DISCOUNT
                <FaArrowRight />
              </a>
              <button
              onClick={maximizeChat}
                class="py-3 px-12 text-sm font-medium flex justify-center items-center text-center text-white bg-[#FE7524] rounded-full"
              >
                <IoChatbubbleEllipsesOutline className=" mr-3 text-[25px]" />
                LIVE CHAT
              </button>
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
