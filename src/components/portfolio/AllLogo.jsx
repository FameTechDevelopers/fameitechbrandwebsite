import React from "react";
import all1 from "../../assets/slider-data/all/i (1).jpg";
import all2 from "../../assets/slider-data/all/i (1).png";
import all3 from "../../assets/slider-data/all/i (2).jpg";
import all4 from "../../assets/slider-data/all/i (2).png";
import all5 from "../../assets/slider-data/all/i (3).jpg";
import all6 from "../../assets/slider-data/all/i (3).png";
import all7 from "../../assets/slider-data/all/i (3).webp";
import all8 from "../../assets/slider-data/all/i (4).jpg";
import all9 from "../../assets/slider-data/all/i (4).png";
import all10 from "../../assets/slider-data/all/i (4).webp";
import all11 from "../../assets/slider-data/all/i (5).jpg";
import all12 from "../../assets/slider-data/all/i (5).png";
import all13 from "../../assets/slider-data/all/i (5).webp";
import all14 from "../../assets/slider-data/all/i (6).jpg";
import all15 from "../../assets/slider-data/all/i (6).png";
import all16 from "../../assets/slider-data/all/i (6).webp";
import all17 from "../../assets/slider-data/all/i (7).webp";
import all18 from "../../assets/slider-data/all/i (8).jpg";
import Image from "next/image";

const AllLogo = () => {
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={all1}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={all2}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={all3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={all4}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={all5}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={all6}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={all7}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={all8}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={all9}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={all10}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={all11}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={all12}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>

      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={all13}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={all14}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={all15}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={all16}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
    </div>
  );
};

export default AllLogo;
