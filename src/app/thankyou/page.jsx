import React from "react";
import FooterLogo from "@/components/FooterLogo";
import Image from "next/image";
import logo from "../../components/assets/main-logo.png";
import Navbar from "@/components/Sections/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex lg:hidden p-12 sm:hidden bg-black justify-between">
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
      <div className=" thank-bg  bg-black relative md:mt-[-130px]">
        <div className="max-w-[1300px] px-12 mx-auto">
          <div className="flex justify-start items-center h-[55vh] ">
            <div>
              <h2 className="  text-[2.5rem] mt-20 md:text-[4rem] mt font-oswald-bold font-bold text-white">
                Thank <span className="text-[#f2d119]">You</span>
              </h2>
              <p className=" text-[#fff] text-[28px] font-light pt-3 pb-5 ">
                We appreciate you contacting{" "}
                <span className="text-[#f2d119] font-oswald-bold text-[2rem] pl-2">
                  Fameitech{" "}
                </span>
                <br />
                One of our representatives will be getting back to you shortly,
                <br />
                Have a great day!
              </p>
              <a href="/custom-business-logo">
                <button className=" md:w-auto md:text-[22px] py-3 px-8 md:mb-0 mb-4 flex lg:mr-8 justify-center items-center font-medium text-center text-white bg-[#073A9C] rounded-full">
                  Back to home
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterLogo />
    </>
  );
};

export default page;
