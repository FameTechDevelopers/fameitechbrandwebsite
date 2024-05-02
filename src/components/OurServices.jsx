import React from "react";
import starIcon from "@/assets/star.PNG";
import handShake from "@/assets/handshake.PNG";
import charts from "@/assets/charts.PNG";
import clock from "@/assets/clock.PNG";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className=" max-w-[1600px] mx-auto">
      <div className="grid grid-cols-12 h-[100vh]">
        <div className=" col-span-4 flex items-center">
          <div>
            <h2 className=" text-[46px] mb-4 text-start font-bold service-heading">
              Digitally Focused
              <span className="italic text-[#fe8209]">
                {" "}
                Quality Design
              </span>{" "}
              Services
            </h2>
            <p className="text-[18px] font-[400]">
              FAMEITECH is committed to creating a digital presence that has a
              lasting impact. At FAMEITECH, we strive to ensure that your brand
              resonates strongly across all online platforms.
            </p>
            <p className="text-[18px] font-[400]">
              Here at FAMEITECH, we can make your brand stand out on any and all
              digital platforms.
            </p>
            <div className=" flex items-center mt-12">
              <button className=" discover-btn mr-[12px] flex justify-center items-center">
                Get A Quote
                <FaArrowRight className=" ml-2" />
              </button>
              <button className=" discover-btn flex justify-center items-center">
                Live Chat
                <FaArrowRight className=" ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className=" col-span-8 pl-12 flex justify-center items-center">
          <div className=" grid grid-cols-12">
            <div className=" col-span-6 p-6">
              <div className=" flex">
                <div className="">
                  <Image src={starIcon} className=" w-[460px]" />
                </div>
                <div className=" ml-4">
                  <h2 className=" text-[24px] font-[600]">Quality Services</h2>
                  <p className=" text-[18px]">
                    Whatever may come our way, we will never give up on our
                    relentless quest of excellence. We are thrilled to meet your
                    expectations with exceptional quality that sets us apart
                    from others, being pioneers in the digital realm.s
                  </p>
                  <button className=" discover-btn mt-[24px] flex justify-center items-center">
                    Discover More
                    <FaArrowRight className=" ml-2" />
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-span-6 p-6">
              <div className=" flex">
                <div className="">
                  <Image src={handShake} className=" w-[460px]" />
                </div>
                <div className=" ml-4">
                  <h2 className=" text-[24px] font-[600]">
                    Team Collaboration
                  </h2>
                  <p className=" text-[18px]">
                    At Fameitech, we believe in the power of teamwork and
                    digital branding. As a group, FAMEITECH's members bring a
                    wealth of knowledge to the table, and the sum of their
                    individual contributions yields remarkable outcomes.
                  </p>
                  <button className=" discover-btn mt-[24px] flex justify-center items-center">
                    Discover More
                    <FaArrowRight className=" ml-2" />
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-span-6 p-6">
              <div className=" flex">
                <div className="">
                  <Image src={charts} className=" w-[280px]" />
                </div>
                <div className=" ml-4">
                  <h2 className=" text-[24px] font-[600]">ROI Focused</h2>
                  <p className=" text-[18px]">
                    Our digital techniques have been thoughtfully developed to
                    be both effective and cost-effective, ensuring that every
                    campaign contributes to increased earnings.
                  </p>
                  <button className=" discover-btn mt-[24px] flex justify-center items-center">
                    Discover More
                    <FaArrowRight className=" ml-2" />
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-span-6 p-6">
              <div className=" flex">
                <div className="">
                  <Image src={clock} className=" w-[380px]" />
                </div>
                <div className=" ml-4">
                  <h2 className=" text-[24px] font-[600]">Quick Delivery</h2>
                  <p className=" text-[18px]">
                    We proudly promote efficiency and precision as our service
                    slogan. Our skilled team will efficiently accomplish your
                    projects, ensuring quality and your pleasure throughout the
                    process.
                  </p>
                  <button className=" discover-btn mt-[24px] flex justify-center items-center">
                    Discover More
                    <FaArrowRight className=" ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
