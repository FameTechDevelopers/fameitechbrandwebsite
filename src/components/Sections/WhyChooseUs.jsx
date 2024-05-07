import React from "react";
import experience from "./images/image-7.png";
import emp from "./images/image-8.png";
import logo from "./images/image-9.png";
import project from "./images/image-10.png";
import count from "./images/image-11.png";
import client from "./images/image-12.png";
import logoEg from "./images/image-13.png";
import ArrowD from "./images/arrow-down.png";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className=" bg-black">
      <div className="max-w-[1700px] px-12 mx-auto ">
        <div className=" grid grid-cols-12 py-4 pb-10 ">
          <div className=" col-span-4">
            <h2 className=" text-[#fff] text-[60px] leading-[70px] font-bold ">
              <span className=" text-[45px] font-bold ">WHY</span> <br /> CHOOSE{" "}
              <span className="text-[#FE7524]">US?</span>
            </h2>
            <div className=" w-full flex justify-center ">
              <Image src={ArrowD} className=" w-[150px] h-[150px]" />
            </div>
          </div>
          <div className=" col-span-8">
            <div className="flex justify-end ">
              <div className=" w-[25%] m-2  rounded px-4 py-6 border border-[#073A9C] text-center flex justify-center flex-col items-center ">
                <div>
                  <Image src={experience} className=" w-[50px] h-[50px]" />
                </div>
                <h4 className="text-[26px] font-bold text-[#fff] pt-2 ">12+</h4>
                <h6 className="text-[16px] font-light text-[#fff] pt-1 ">
                  Year Of Experience
                </h6>
              </div>
              <div className="w-[25%] m-2  rounded px-4 py-6 border border-[#073A9C] text-center flex justify-center flex-col items-center ">
                <div>
                  <Image src={emp} className=" w-[50px] h-[50px]" />
                </div>
                <h4 className="text-[26px] font-bold text-[#fff] pt-2 ">
                  100+
                </h4>
                <h6 className="text-[16px] font-light text-[#fff] pt-1 ">
                  Employees
                </h6>
              </div>
              <div className="w-[25%] m-2  rounded px-4 py-6 border border-[#073A9C] text-center flex justify-center flex-col items-center ">
                <div>
                  <Image src={logo} className=" w-[50px] h-[50px]" />
                </div>
                <h4 className="text-[26px] font-bold text-[#fff] pt-2 ">
                  5000+
                </h4>
                <h6 className="text-[16px] font-light text-[#fff] pt-1 ">
                  Logo Designs
                </h6>
              </div>
            </div>
            <div className="flex justify-end ">
              <div className=" w-[25%] m-2  rounded px-4 py-6 border border-[#073A9C] text-center flex justify-center flex-col items-center ">
                <div>
                  <Image src={project} className=" w-[50px] h-[50px]" />
                </div>
                <h4 className="text-[26px] font-bold text-[#fff] pt-2 ">95%</h4>
                <h6 className="text-[16px] font-light text-[#fff] pt-1 ">
                  Project Delivery
                </h6>
              </div>
              <div className="w-[25%] m-2  rounded px-4 py-6 border border-[#073A9C] text-center flex justify-center flex-col items-center ">
                <div>
                  <Image src={count} className=" w-[50px] h-[50px]" />
                </div>
                <h4 className="text-[26px] font-bold text-[#fff] pt-2 ">10+</h4>
                <h6 className="text-[16px] font-light text-[#fff] pt-1 ">
                  Countries
                </h6>
              </div>
              <div className="w-[25%] m-2  rounded px-4 py-6 border border-[#073A9C] text-center flex justify-center flex-col items-center ">
                <div>
                  <Image src={client} className=" w-[50px] h-[50px]" />
                </div>
                <h4 className="text-[26px] font-bold text-[#fff] pt-2 ">75%</h4>
                <h6 className="text-[16px] font-light text-[#fff] pt-1 ">
                  Client Retention Rate
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[30px]">
          <div className="bg-CustomLogo">
            <div className="grid grid-cols-12 px-10 py-10">
              <div className=" col-span-5 pl-[25px] pt-10 ml-10 ">
                <h2 className=" text-[#fff] font-bold text-[60px] leading-[70px] capitalize ">
                  Get Your Custom <br /> Logo Designed in just
                </h2>
                <div className="pt-10 flex gap-4  ">
                  <button className=" uppercase text-[#fff] bg-[#FE7524] px-8 py-2 rounded-full shadow-stone-400 ">
                    LIVE CHAT
                  </button>
                  <button className="uppercase text-[#000000] bg-[#ffffff] px-8 py-2 rounded-full shadow-stone-400 ">
                    Call now
                  </button>
                  <button className=" uppercase text-[#fff] bg-[#FE7524] px-8 py-2 rounded-full shadow-stone-400 ">
                    LIVE CHAT
                  </button>
                </div>
              </div>
              <div className="col-span-7">
                <Image
                  src={logoEg}
                  className=" w-[100%] h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className=" text-[#fff] text-[60px] leading-[70px] font-bold ">
            <span className=" text-[45px] font-bold ">OUR SERVICES</span> <br />{" "}
            ARE CHERISHED BY <span className="text-[#FE7524]">ALL!</span>
          </h2>
          <p className=" text-[#fff] text-[16px] font-light pt-3 pb-5 ">
            We have served hundreds of brands, and look at what they have to say
            for us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
