import React from "react";

const ServingClients = () => {
  return (
    <div className=" bg-black pt-20">
      <div className=" max-w-[1700px] px-12 mx-auto grid grid-cols-12">
        <div className=" col-span-8">
          <h2 className="  text-[3.2rem] font-bold text-white leading-[70px]">
            WE ARE <br />
            <span className=" text-[4rem]">
              {" "}
              SERVING <span className="text-[#FE7524]">
                {" "}
                2000+{" "}
              </span> CLIENTS{" "}
            </span>
          </h2>
          <p className=" text-white text-[18px]">
            We create experiences that transform brands & grow businesses.
          </p>
        </div>
        <div className=" col-span-4"></div>
      </div>
    </div>
  );
};

export default ServingClients;
