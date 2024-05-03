import React from "react";
import Image from "next/image";
import { LuMessagesSquare } from "react-icons/lu";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="grid grid-cols-12 mt-12">
        <div className=" md:col-span-6 col-span-12 flex justify-center items-center">
          <Image
            className=" w-full h-[95%] object-cover"
            width={1000}
            height={1000}
            src={service?.image}
          />
        </div>
        <div className=" md:col-span-6 col-span-12 pl-6 flex justify-center items-center">
          <div>
            <h2 className="text-[34px] mb-4 font-bold">{service?.title}</h2>
            <p className=" text-[16px]">{service?.description}</p>

            <div className=" flex items-center mt-4">
              <button className=" flex justify-center mr-6 text-[#ff7400] font-medium items-center">
                <LuMessagesSquare className=" text-[18px] font-bold" />
                WANT TO DISCUSS?
              </button>
              <button className=" discover-btn flex justify-center items-center">
                Lets Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
