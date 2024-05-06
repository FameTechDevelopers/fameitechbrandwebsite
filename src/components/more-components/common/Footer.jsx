import React from "react";
import { FaMapMarked } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "/public/images/logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Wrapper from "./Wrapper";
const Footer = () => {
  return (
    <>
      <div className="relative footer bg-[url('/public/images/footerBg.webp')] text-white bg-center bg-cover">
        {/* <div className="absolute size-full bg-gradient-to-b from-[rgba(0,85,255,.83)] " /> */}
        <div className=" max-w-[1600px] mx-auto z-[999]">
          <div className="grid grid-cols-12 pb-10 mb-10 border-b-2 border-[#ffffff6f]">
            <div className=" col-span-4 mb-6 flex items-center">
              <img src={logo} />
            </div>
            <div className=" lg:col-span-4 mb-6 col-span-12 footer-social-icons flex lg:justify-center items-center">
              <ul className=" flex justify-center items-center *:p-3 *:bg-pri_orange space-x-4">
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
              <img src="/public/images/payment.webp" alt="" />
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d99001.35564669345!2d-75.524212!3d39.156704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7657e0f270c79%3A0x3cc77cd9d14827e8!2s8%20The%20Green%2C%20Dover%2C%20DE%2019901!5e0!3m2!1sen!2sus!4v1714793425856!5m2!1sen!2sus" width="250" height="170" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-dark_blue text-white font-poppins pt-12 px-8">
        <Wrapper className={"flex-col space-y-5"}>

        <div className="flex flex-col space-y-4 px-3 md:px-0">
          <p className="font-bold text-xl">Disclaimer:</p>
          <p className="text-sm leading-10">The logo, name and graphics of Fameitech and its products & services are the trademarks of Fameitech. All other company names, brand names, trademarks and logos mentioned on this website are the property of their respective owners and do not constitute or imply endorsement, sponsorship or recommendation thereof by Fameitech and do not constitute or imply endorsement, sponsorship or recommendation of Fameitech by the respective trademark owner.</p>
        </div>
        <div className="size-full flex flex-col md:flex-row items-center md:items-center space-y-5 justify-center md:justify-between">
          <div className="flex  space-x-4">
          <FaInstagram size={20}  />
          <FaLinkedinIn size={20}  />
          <FaFacebookF size={20}  />
          <FaTwitter  size={20} />




          </div>
          <div className="">
            <p className="font-bold">©2024, Fameitech LLC. All Rights Reserved.</p>
          </div>

        </div>
        </Wrapper>
      </div>
    </>
  );
};
export default Footer;