import BrandNumbers from "@/components/brandNumbers";
import Image from "next/image";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const page = () => {
  return (
    <div>
      <div className="md:h-[60vh] h-[55vh] p-2.5 ">
        <div className="package-hero flex h-full justify-center md:items-center">
          <div className="container z-30 max-md:mt-10">
            <p className="text-white w-full font-semibold my-8 flex items-center text-sm">
              Home{" "}
              <span className="mx-2.5">
                <MdArrowForwardIos />
              </span>{" "}
              Our Packages
            </p>
            <div className="font-semibold text-white ">
              <h1 className="xl:text-6xl lg:text-5xl text-4xl lh">
                Explore Our{" "}
                <span className="text-primary italic"> Packages </span>
              </h1>
              <p className="lg:text-2xl md:mt-4 mt-8">
                Discover tailored solutions for every need. Explore our range of
                packages designed to fit your requirements and budget.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-2 bg-white z-30">
      <div class="tailored-container">
          <video className=" w-full h-[100%] object-cover" autoPlay muted loop>
            <source
              src="https://fameitech.com/portfolio/videos/section2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="overlay"></div>
        </div>
        <div className=" flex tailored-packages justify-center items-center">
          <div className="container py-8 z-30">
            <div className="text-white text-lg max-md:text-center max-md:px-4 text-center">
              <h1 className="lg:text-5xl text-4xl lh font-semibold text-white">
                Discover Our
                <span className="text-primary italic"> Tailored </span> Packages
              </h1>

              <p className="mt-2">
                Discover personalized solutions to suit your needs. Explore our
                range of packages, each meticulously designed for your
                convenience and satisfaction. Whether you're seeking essentials
                or luxuries, find the perfect fit with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BrandNumbers />
    </div>
  );
};

export default page;
