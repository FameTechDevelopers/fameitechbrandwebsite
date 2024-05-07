import React from "react";
import creative1 from "../../assets/slider-data/creative/1.webp";
import creative2 from "../../assets/slider-data/creative/2.webp";
import creative3 from "../../assets/slider-data/creative/3.webp";
import creative4 from "../../assets/slider-data/creative/4.webp";
import creative5 from "../../assets/slider-data/creative/5.webp";
import creative6 from "../../assets/slider-data/creative/6.webp";
import creative7 from "../../assets/slider-data/creative/7.webp";
import creative8 from "../../assets/slider-data/creative/8.webp";
import creative9 from "../../assets/slider-data/creative/9.webp";
import creative10 from "../../assets/slider-data/creative/10.webp";
import creative11 from "../../assets/slider-data/creative/11.webp";
import creative12 from "../../assets/slider-data/creative/12.webp";
import creative13 from "../../assets/slider-data/creative/13.webp";
import creative14 from "../../assets/slider-data/creative/14.webp";
import creative15 from "../../assets/slider-data/creative/15.webp";
import creative16 from "../../assets/slider-data/creative/16.webp";
import Image from "next/image";

const CreativeLogo = () => {
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={creative1}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={creative2}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={creative3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={creative4}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={creative5}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={creative6}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={creative7}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={creative8}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={creative9}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={creative10}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={creative11}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={creative12}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={creative13}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={creative14}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={creative15}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={creative16}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
    </div>
  );
};

export default CreativeLogo;
