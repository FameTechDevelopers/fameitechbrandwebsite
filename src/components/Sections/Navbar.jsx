import React from "react";
import logo from "../assets/main-logo.png";
import Wrapper from "../../components/more-components/Wrapper";
import { FaPhoneVolume } from "react-icons/fa6";
import Image from "next/image";

function Navbar() {
  return (
    <section className="flex relative z-10 justify-center items-center font-oswald  pt-2 px-5">
      <Wrapper className="flex flex-col py-6 space-y-3 space-x-3 sm:flex-row sm:justify-between sm:items-center sm:px-4">
        <Image
          width={1000}
          height={1000}
          src={logo}
          alt="logo fameitech"
          className="w-[200px]"
        />
        <div className="flex flex-col text-white space-y-2 sm:flex-row sm:px-8 sm:py-1 bg-transparent sm:rounded-full sm:justify-center sm:items-center sm:gap-4">
          <div className="flex justify-center items-center *:px-4 *:py-2 space-x-2">
            <button className="bg-transparent mr-6 font-poppins border border-[#FE7524] rounded-full flex justify-center items-center">
              {" "}
              <span>
                <Image
                  width={10}
                  height={10}
                  src="/images/message-icon.png"
                  alt=""
                />
              </span>
              <span className=" text-[#FE7524] text-[20px]">Live Chat</span>
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2">
            {" "}
            <span className="p-3 bg-pri_orange rounded-full bg-[#073A9C]">
              <FaPhoneVolume className=" text-white " />
            </span>{" "}
            <div className="flex flex-col sm:text-sm">
              <span className=" font-thin">Call Us Now</span>
              <span className="text-white font-bold">+1 (872) 233 - 3612</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Navbar;
