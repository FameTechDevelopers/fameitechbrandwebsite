"use client";
import React, { useState } from "react";
import logo from "../assets/main-logo.png";
import Wrapper from "../../components/more-components/Wrapper";
import { FaPhoneVolume } from "react-icons/fa6";
import Image from "next/image";
import LiveChat from "../LiveChat";

function Navbar() {
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
    <section className="lg:bg-[#00113000] bg-[#001130] flex relative z-10 justify-center items-center font-oswald pt-2 px-5 lg:block md:block sm:block hidden">
      <Wrapper className="flex flex-col py-6 space-y-3 space-x-3 sm:flex-row sm:justify-between sm:items-center">
        <a href="/">
          <Image
            width={1000}
            height={1000}
            src={logo}
            alt="logo fameitech"
            className="w-[200px]"
          />
        </a>
        <div className="flex flex-col text-white space-y-2 sm:flex-row sm:px-8 sm:py-1 bg-transparent sm:rounded-full sm:justify-center sm:items-center sm:gap-4">
          <div className="flex justify-center items-center *:px-4 *:py-2 space-x-2">
            <button
              onClick={maximizeChat}
              className="bg-transparent mr-6 font-poppins border border-[#f2d119] rounded-full flex justify-center items-center"
            >
              {" "}
              <span>
                <Image
                  width={10}
                  height={10}
                  src="/images/message-icon.png"
                  alt=""
                />
              </span>
              <span className=" text-[#f2d119] text-[20px]">Live Chat</span>
            </button>
            <LiveChat visibility={visibility} setVisibility={setVisibility} />
          </div>
          <div className="flex items-center justify-center space-x-2">
            {" "}
            <span className="p-3 bg-[#f2d119] rounded-full bg-[#073A9C]">
              <FaPhoneVolume className=" text-white " />
            </span>{" "}
            <div className="flex flex-col sm:text-sm">
              <span className=" font-thin">Call Us Now</span>
              <span className="text-white font-normal">
                +1 (302) 501 - 7152
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Navbar;
