import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMailSharp, IoCall } from "react-icons/io5";
import PricingCard from "@/components/PricingCard";

const page = () => {
  return (
    <div className="">
      <div className="md:h-[50vh] h-[35vh] p-2.5">
        <div className="contact-hero flex h-full justify-center items-center">
          <div className="container z-30">
            <p className="text-white w-full font-semibold my-8 flex items-center text-sm">
              Home{" "}
              <span className="mx-2.5">
                <MdArrowForwardIos />
              </span>{" "}
              Contact Us{" "}
            </p>
            <div className="font-semibold text-white">
              <h1 className="xl:text-6xl lg:text-5xl text-4xl">
                Get In Touch with Our{" "}
                <span className="text-primary italic"> Professionals </span> .
              </h1>
              <p className="lg:text-xl mt-4">
                Get Your Brands Connected With Your Customers 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative" >

      <div className="w-full contact-form flex py-8 justify-center  px-4">
        <div className="container z-30 w-full h-full">


<div className="grid grid-cols-12 md:gap-16 w-full">


          <section className="text-white col-span-12 md:col-span-6 h-auto w-full">
            <p className="uppercase mb-6 font-medium">Contact Us</p>

            <h1 className="text-6xl my-6 font-bold">Get In Touch</h1>

            <div className="w-36 bg-primary p-[1.5px] rounded"></div>

            <p className="mt-6 font-medium">
              Ready to elevate your brand with Fameitech? Contact us today to
              explore our digital marketing and web development solutions.
            </p>
            <p className="font-medium">
              Let's create something extraordinary together. Get in touch now!
            </p>

            <div className="md:mt-24 mt-8 flex flex-col gap-8 font-semibold text-lg">
              <div className="flex gap-8 items-center">
                <FaMapMarkedAlt size={30} color="#ff7400" />{" "}
                <p>8 The Green #14675; Dover, DE 19901</p>
              </div>

              <div className="flex gap-8 items-center">
                <IoMailSharp size={30} color="#ff7400" />{" "}
                <p>info@fameitech.com</p>
              </div>

              <div className="flex gap-8 items-center">
                <IoCall size={30} color="#ff7400" /> <p>+1 302-501-7152</p>
              </div>
            </div>
          </section>

          <section className="col-span-12 md:col-span-6 max-md:mt-10 text-white h-auto w-full ">
            <p className="font-bold text-2xl">Your Details</p>
            <p className="font-medium mt-3 mb-6">
              Let us know how to get back to you.
            </p>

            <div className="p-[1px] w-full bg-white "></div>

            <form className="mt-8 text-gray-800 flex flex-col gap-6 ">
              <div>
                <label
                  className="my-1 w-full text-white font-medium"
                  htmlFor="fullName"
                >
                  Full Name <span className="text-red-700">*</span>
                </label>

                <input
                  className="w-full rounded-md p-2.5 mt-2"
                  type="text"
                  required
                  id="fullName"
                  placeholder="John Smith"
                />
                <small className="text-gray-500">
                  Enter your first name here
                </small>
              </div>

              <div>
                <label
                  className="my-1 w-full text-white font-medium"
                  htmlFor="email"
                >
                  Email Address <span className="text-red-700">*</span>
                </label>

                <input
                  className="w-full rounded-md p-2.5 mt-2"
                  type="email"
                  required
                  id="email"
                  placeholder="Add Email"
                />

                <small className="text-gray-500">
                  Example: user@website.com
                </small>
              </div>

              <div>
                <label
                  className="my-1 w-full text-white font-medium"
                  htmlFor="phone"
                >
                  Telephone <span className="text-red-700">*</span>
                </label>

                <input
                  className="w-full rounded-md p-2.5 mt-2"
                  type="number"
                  required
                  id="phone"
                  placeholder="+(602) 448 763 22"
                />
              </div>

              <div>
                <label
                  className="my-1 w-full text-white font-medium"
                  htmlFor="inquiry"
                >
                  Inquiry <span className="text-red-700">*</span>
                </label>

                <textarea
                  className="w-full rounded-md mt-2 p-2.5"
                  id="inquiry"
                  cols="30"
                  rows="10"
                  placeholder="Add Text"
                ></textarea>
              </div>

              <button className="btn-submit rounded-md w-fit" type="submit">
                Send Message
              </button>
            </form>
          </section>

</div>

        </div>
      </div>

      </div>


{/* <div className="grid grid-cols-12 bg-gray-100 gap-4 p-3">

      <PricingCard/>

</div> */}

    </div>
  );
};

export default page;
