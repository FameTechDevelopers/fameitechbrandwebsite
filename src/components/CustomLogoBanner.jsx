import React from "react";
import logoEg from "../components/Sections/images/image-13.png";
import Image from "next/image";

const CustomLogoBanner = () => {
  return (
    <div className=" bg-black">
      <div className="pb-[30px]">
        <div className="bg-CustomLogo">
          <div className="grid grid-cols-12 px-10 py-10">
            <div className=" col-span-5 pl-[30px] pt-10 ml-10 ">
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
    </div>
  );
};

export default CustomLogoBanner;
