import React from "react";
import image1 from "../../assets/slider-data/abstract/i (1).png";
import image2 from "../../assets/slider-data/abstract/i (2).png";
import image3 from "../../assets/slider-data/abstract/i (3).png";
import image4 from "../../assets/slider-data/abstract/i (4).png";
import image5 from "../../assets/slider-data/abstract/i (5).png";
import image6 from "../../assets/slider-data/abstract/i (6).png";
import image7 from "../../assets/slider-data/abstract/i (7).png";
import image8 from "../../assets/slider-data/abstract/i (8).png";
import Image from "next/image";

const AbstractLogo = () => {
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={image1}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={image2}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={image3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={image4}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={image5}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={image6}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={image7}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={image8}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
    </div>
  );
};

export default AbstractLogo;
