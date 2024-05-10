import React from "react";
import { FaMapMarked } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="lg:px-14 px-8 footer">
        <div className=" max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 pb-10 mb-10 border-b-2 border-[#ffffff6f]">
            <div className=" col-span-4 mb-6 flex items-center">
              <Image src={logo} />
            </div>
            <div className=" lg:col-span-4 mb-6 col-span-12 footer-social-icons flex lg:justify-center items-center">
              <ul className=" flex justify-center items-center">
                <li className=" bg-primary rounded-full mx-1 p-4 flex justify-center items-center">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/fameitechllc"
                  >
                    <FaFacebookF className=" text-[20px] text-white" />
                  </a>
                </li>
                {/* <li className=" bg-primary rounded-full mx-1 p-4 flex justify-center items-center">
                  <FaPinterestP className=" text-[20px] text-white" />
                </li> */}
                <li className=" bg-primary rounded-full mx-1 p-4 flex justify-center items-center">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/fameitech-llc"
                  >
                    <FaLinkedinIn className=" text-[20px] text-white" />
                  </a>
                </li>
                <li className=" bg-primary rounded-full mx-1 p-4 flex justify-center items-center">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/fameitechllc/"
                  >
                    {" "}
                    <FaInstagram className=" text-[20px] text-white" />
                  </a>
                </li>
              </ul>
            </div>
            <div className=" lg:col-span-4 mb-6 col-span-12 flex lg:justify-end items-center">
              <div className="">
                <p className=" text-[#F8B421] font-[22px]">GIVE US A CALL</p>
                <h2 className=" text-[28px] font-bold">+1 302-501-7152</h2>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-12">
            <div className=" lg:col-span-5 col-span-12 mr-24">
              <p className="">
                Fameitech is an innovative tech company that wants to change
                online technology. Fameitech provides creative solutions using
                AI, blockchain, and data analytics to help people and
                organizations.
              </p>
              <div className=" mt-20 flex">
                <Link
                  href={"/terms-conditions"}
                  className="text-[#ff7502] text-[14px] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
                >
                  Terms and Conditions{" "}
                </Link>
                <p className=" text-[#92929272] mx-4">|</p>
                <Link
                  href={"/privacy-policy"}
                  className="text-[#ff7502] text-[14px] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
              </div>
            </div>
            <div className=" lg:col-span-4 col-span-12">
              <h2 className=" text-[26px] font-[800] mb-8">Contact</h2>
              <ul>
                <li className=" flex items-center">
                  <FaMapMarked className=" mr-3 text-[#F58020] text-[22px]" /> 8
                  The Green #14675; Dover, DE 19901
                </li>
                <li className=" flex items-center">
                  <IoMdMail className=" mr-3 text-[#F58020] text-[22px]" />{" "}
                  info@fameitech.com
                </li>
                <li className=" flex items-center">
                  <FaPhoneAlt className=" mr-3 text-[#F58020] text-[22px]" /> +1
                  302-501-7152
                </li>
              </ul>
            </div>

            <div className=" lg:col-span-3 col-span-12">
              <h2 className=" text-[26px] font-[800] mb-8">Location</h2>
              <div className="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d99001.35564669345!2d-75.524212!3d39.156704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7657e0f270c79%3A0x3cc77cd9d14827e8!2s8%20The%20Green%2C%20Dover%2C%20DE%2019901!5e0!3m2!1sen!2sus!4v1714793425856!5m2!1sen!2sus"
                  width="250"
                  height="170"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
