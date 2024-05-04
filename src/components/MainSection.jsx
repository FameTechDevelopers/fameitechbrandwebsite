import React from "react";

const MainSection = () => {
  return (
    <>
      <div className=" main-section">
        <div class="video-container">
          <video className=" w-full h-[100%] object-cover" autoPlay muted loop>
            <source
              src="https://fameitech.com/portfolio/videos/webvid.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="overlay"></div>
        </div>
        <div className=" main-content px-14">
          <h1 className=" lg:text-6xl text-4xl">
            Creating
            <span className="text-primary font-bold italic">
              {" "}
              Superior{" "}
            </span>{" "}
            Digital Experience
          </h1>
          <p className=" text-[28px] font-medium mt-3">
            CUSTOM WEBSITES, BRANDING & DIGITAL MARKETING SOLUTIONS
          </p>

          <div className=" grid grid-cols-12 lg:mt-16 mt-6 lg:w-[64%] w-full py-8 px-4 mx-auto bg-[#00000076]">
            <div className=" md:col-span-3 col-span-12">
              <input
                className="border-2 border-white w-[92%] m-2 py-3 px-6 bg-transparent"
                placeholder="Full Name"
              />
            </div>
            <div className=" md:col-span-3 col-span-12">
              {" "}
              <input
                className="border-2 border-white w-[92%] m-2 py-3 px-6 bg-transparent"
                placeholder="Full Name"
              />
            </div>
            <div className=" md:col-span-3 col-span-12">
              {" "}
              <input
                className="border-2 border-white w-[92%] m-2 py-3 px-6 bg-transparent"
                placeholder="Full Name"
              />
            </div>
            <div className=" md:col-span-3 col-span-12">
              {" "}
              <input
                className="border-2 border-white w-[92%] m-2 py-3 px-6 bg-transparent"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="flex justify-center items-center lg:mt-12 mt-6">
            <button className="btn mr-6">Get A Quote</button>
            <button className="btn">Live Chat</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
