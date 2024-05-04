import Image from "next/image";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import pinkLaptop from "../../assets/pink-laptop.webp";
import blackLaptop from "../../assets/laptop-black.webp";
import whiteLaptop from "../../assets/laptop-white.webp";
import macbook from "../../assets/macbook.webp";
import magazine from "../../assets/magazine.webp";
import magazines from "../../assets/magazines.webp";
import yellowLaptop from "../../assets/yellow-laptop.webp";
import imac from "../../assets/imac.webp";
import brownMac from "../../assets/brown-imac.webp";
import purpleLaptop from "../../assets/purple-laptop.webp";
import Testimonials from "@/components/testimonials";
import monitors from "../../assets/monitors.webp";
import WhiteBgPortfolio from "@/components/WhiteBgPortfolio";

const page = () => {
  return (
    <div>
      <div className="md:h-[70vh] h-[55vh] p-2.5 ">
        <div className="web-hero flex h-full justify-center md:items-center">
          <div className="container z-30 max-md:mt-10">
            <p className="text-white w-full font-semibold my-8 flex items-center text-sm">
              Home{" "}
              <span className="mx-2.5">
                <MdArrowForwardIos />
              </span>{" "}
              Website Design and Development
            </p>
            <div className="font-semibold text-white ">
              <h1 className="xl:text-6xl lg:text-5xl text-4xl lh">
                Experience higher ROI with our{" "}
                <span className="text-primary italic">revenue-focused</span> web
                design.
              </h1>
              <p className="lg:text-2xl md:mt-4 mt-8">
                Get Your Brands Connected With Your Customers 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="logo-branding flex justify-center items-center">
          <div className="container z-30">
            <div className="grid grid-cols-12 py-8 md:gap-8">
              <div className="md:col-span-6 col-span-12 flex justify-center items-center w-full">
                <Image width={1000} height={1000} src={monitors} />
              </div>

              <div className="md:col-span-6 col-span-12 max-md:items-center flex flex-col items-stretch h-full">
                <div className="text-white text-lg max-md:text-center max-md:px-4">
                  <h1 className="lg:text-5xl text-4xl lh font-semibold text-white">
                    <span className="text-primary italic">
                      {" "}
                      Results-Oriented{" "}
                    </span>{" "}
                    Website Solutions
                  </h1>

                  <p className="mt-2">
                    Fameitech's custom website design and development services
                    allow for a seamless transition into the digital world. As a
                    leading innovator in the field, we provide comprehensive
                    digital business solutions for businesses of all kinds. Our
                    bespoke solutions are designed to suit your specific needs
                    and exceed your expectations. Our expertise covers a wide
                    range of needs, including creating polished and professional
                    websites for small businesses and building strong E-commerce
                    platforms.
                  </p>
                </div>

                <div className="btn w-fit rounded mt-6">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="flex justify-center items-center flex-col">
          <div className="container text-center">
            <h1 className="lg:text-5xl text-4xl lh font-semibold text-gray-900 ">
              Creating Unique Website and Web App Designs for Every{" "}
              <span className="text-primary italic"> Business </span>{" "}
            </h1>

            <p className="mt-2">
              The impressive logo and branding services that Fameitech offers
              are proof of our competence. We use our expertise as digital
              agents to pick fonts with care and combine them with colour and
              imagery in a way that accurately represents your brand's values.
              Businesses of all sizes, from fledgling startups to long-standing
              corporations, can benefit from our expert branding services, which
              include logo and brand design customization.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-12 lg:px-2.5 px-1 w-full h-full gap-2">
          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={pinkLaptop}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={blackLaptop}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={whiteLaptop}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={macbook}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={magazine}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={magazines}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={yellowLaptop}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={magazines}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={imac}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={yellowLaptop}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={purpleLaptop}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="xl:col-span-3 md:col-span-4 col-span-6 relative w-full h-full afterBlack">
            <Image
              src={brownMac}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-center items-center">
            <div className="container text-center">
              <h1 className="lg:text-5xl text-4xl lh font-semibold text-gray-900 ">
                Similar changes as mentioned above. Also add on our packages
                page
              </h1>

              <p className="mt-2">
                We guarantee that you will receive design and development
                services that focus on generating a high return on investment
                with our smart web design services. Our web design pricing and
                combo packages are affordable and customized to match your
                business goals with a unique approach that maximizes your
                brand’s revenue.
              </p>

              <div className="my-6">
                <WhiteBgPortfolio />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default page;
