import React from "react";
import experience from "./images/image-7.png";
import emp from "./images/image-8.png";
import logo from "./images/image-9.png";
import project from "./images/image-10.png";
import count from "./images/image-11.png";
import client from "./images/image-12.png";
import ArrowD from "./images/arrow-down.png";
import Image from "next/image";


const WhyChooseUs = () => {
  return (
    <div className=" bg-black">
      <div className="max-w-[1700px] px-12 mx-auto ">
        <div className=" grid grid-cols-12 py-4 pb-10 ">
          <div className=" col-span-4">
            <h2 className=" text-[3.2rem] font-bold text-white leading-[70px] ">
              <span className=" text-[45px] font-bold ">WHY</span> <br />{" "}
              <span className="text-[4.5rem]">CHOOSE</span>{" "}
              <span className="text-[4.5rem] text-[#FE7524]">US?</span>
            </h2>
            <div className=" w-full flex justify-center ">
              <Image src={ArrowD} className=" w-[200px] h-[200px] mt-12" />
            </div>
          </div>
          <div className=" col-span-8">
            <div className=" grid grid-cols-12">
              <div className=" col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
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
              <div className=" col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
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
              <div className=" col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
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
              <div className=" col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
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
              <div className=" col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
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
              <div className=" col-span-4 rounded m-3 px-4 py-8 border border-[#073A9C] text-center flex justify-center flex-col items-center">
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
        
        <div>
          <h2 className=" text-[#fff] text-[60px] leading-[70px] font-bold ">
            <span className=" text-[45px] font-bold ">OUR SERVICES</span> <br />{" "}
            ARE CHERISHED BY <span className="text-[#FE7524]">ALL!</span>
          </h2>
          <p className=" text-[#fff] text-[21px] font-light pt-3 pb-5 ">
            We have served hundreds of brands, and look at what they have to say
            for us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
