import React from "react";

import minimal1 from "../../assets/slider-data/minimal/i (1).webp";
import minimal2 from "../../assets/slider-data/minimal/i (2).webp";
import minimal3 from "../../assets/slider-data/minimal/i (3).webp";
import minimal4 from "../../assets/slider-data/minimal/i (4).webp";
import minimal5 from "../../assets/slider-data/minimal/i (5).webp";
import minimal6 from "../../assets/slider-data/minimal/i (6).webp";
import minimal7 from "../../assets/slider-data/minimal/i (7).webp";
import minimal8 from "../../assets/slider-data/minimal/i (8).webp";
import minimal9 from "../../assets/slider-data/minimal/i (9).webp";
import minimal10 from "../../assets/slider-data/minimal/i (10).webp";
import minimal11 from "../../assets/slider-data/minimal/i (11).webp";
import minimal12 from "../../assets/slider-data/minimal/i (12).webp";
import Image from "next/image";

const AbstractLogo = () => {
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={minimal1}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={minimal2}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={minimal3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={minimal4}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={minimal5}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={minimal6}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={minimal7}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={minimal8}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={minimal9}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={minimal10}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={minimal11}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={minimal12}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
    </div>
  );
};

export default AbstractLogo;
