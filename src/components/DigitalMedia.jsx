import React from "react";
import increase from "@/assets/increase.png";
import complete from "@/assets/complete.png";
import clients from "@/assets/clients.png";
import cloud from "@/assets/cloud.png";
import Image from "next/image";

const DigitalMedia = () => {
  return (
    <div className="mt-8">
      <div className=" flex justify-center items-center">
        <div className="container py-8 z-30">
          <div className="text-black text-lg max-md:text-center max-md:px-4 text-center">
            <h1 className="lg:text-5xl text-4xl lh font-semibold text-black">
              Introduce Your Brand To
              <span className="text-primary italic"> Digital Media </span>!
            </h1>

            <p className="mt-2">
              Your brand will steal the limelight from top tier names in the
              marketspace with our creative digital services.
            </p>
          </div>

          <div className="grid grid-cols-12 ga-6 mt-8">
            <div className="md:col-span-3 sm:col-span-6 col-span-12 flex justify-center items-center flex-col">
              <Image
                src={increase}
                width={1000}
                height={1000}
                className="w-40"
              />

              <div className="text-center text-black">
                <h4 className="text-5xl font-semibold my-2">90%</h4>
                <p className="font-semibold text-xl my-2">Increase in ROI</p>
              </div>
            </div>

            <div className="md:col-span-3 sm:col-span-6 col-span-12 flex justify-center items-center flex-col">
              <Image
                src={complete}
                width={1000}
                height={1000}
                className="w-40"
              />

              <div className="text-center text-black">
                <h4 className="text-5xl font-semibold my-2">500+</h4>
                <p className="font-semibold text-xl my-2">Projects Completed</p>
              </div>
            </div>

            <div className="md:col-span-3 sm:col-span-6 col-span-12 flex justify-center items-center flex-col">
              <Image
                src={clients}
                width={1000}
                height={1000}
                className="w-40"
              />

              <div className="text-center text-black">
                <h4 className="text-5xl font-semibold my-2">200+</h4>
                <p className="font-semibold text-xl my-2">
                  Daily Websites Visits
                </p>
              </div>
            </div>

            <div className="md:col-span-3 sm:col-span-6 col-span-12 flex justify-center items-center flex-col">
              <Image src={cloud} width={1000} height={1000} className="w-40" />

              <div className="text-center text-black">
                <h4 className="text-5xl font-semibold my-2">1000+</h4>
                <p className="font-semibold text-xl my-2">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMedia;
