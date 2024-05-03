import React from "react";
import { FaMapMarked } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

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
                  <FaFacebookF className=" text-[20px] text-white" />
                </li>
                <li className=" bg-primary rounded-full mx-1 p-4 flex justify-center items-center">
                  <FaPinterestP className=" text-[20px] text-white" />
                </li>
                <li className=" bg-primary rounded-full mx-1 p-4 flex justify-center items-center">
                  <BsTwitterX className=" text-[20px] text-white" />
                </li>
                <li className=" bg-primary rounded-full mx-1 p-4 flex justify-center items-center">
                  <FaInstagram className=" text-[20px] text-white" />
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
            <div className=" lg:col-span-3 col-span-12 mr-8">
              <p>
                Fameitech is an innovative tech company that wants to change
                online technology. Fameitech provides creative solutions using
                AI, blockchain, and data analytics to help people and
                organizations.
              </p>
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
              <h2 className=" text-[26px] font-[800] mb-8">Quick Links</h2>
              <ul>
                <li>About Us</li>
                <li>Logo Design</li>
                <li>Website Design</li>
                <li>Video Animation</li>
                <li>Video Our Package</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className=" lg:col-span-2 col-span-12">
              <h2 className=" text-[26px] font-[800] mb-8">Location</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
