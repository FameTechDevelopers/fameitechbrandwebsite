import React from "react";
import mascot1 from "../../assets/slider-data/mascot/i (1).png";
import mascot2 from "../../assets/slider-data/mascot/i (2).webp";
import mascot3 from "../../assets/slider-data/mascot/i (3).webp";
import mascot4 from "../../assets/slider-data/mascot/i (4).webp";
import mascot5 from "../../assets/slider-data/mascot/i (4).webp";
import mascot6 from "../../assets/slider-data/mascot/i (5).webp";
import mascot7 from "../../assets/slider-data/mascot/i (6).webp";
import mascot8 from "../../assets/slider-data/mascot/i (1).png";
import Image from "next/image";

const MascotLogo = () => {
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={mascot1}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={mascot2}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={mascot3}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={mascot4}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className="col-span-3 m-2">
          <Image
            src={mascot5}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          {" "}
          <Image
            src={mascot6}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={mascot7}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
        <div className="col-span-3 m-2">
          <Image
            src={mascot8}
            className="border-2 border-[#073A9C] rounded-[20px] "
          />
        </div>
      </div>
    </div>
  );
};

export default MascotLogo;
