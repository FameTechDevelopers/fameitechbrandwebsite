import React from "react";
import { FaMapMarked } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import paymentImg from "@/assets/images/payment.webp";
import footerBg from "../assets/logo-footer-bg.png";
import logo from "../components/assets/main-logo.png";
import { IoIosArrowForward } from "react-icons/io";

const FooterLogo = () => {
  return (
    <div className=" footer-bg md:pt-56 pt-20 pb-20">
      <div className=" max-w-[1300px] md:px-12 px-6 mx-auto">
        <div className=" grid grid-cols-12">
          <div className=" lg:col-span-4 col-span-12 mr-8 pr-12">
            <Image src={logo} className=" mb-6" />
            <p>
              Fameitech is an innovative tech company that wants to change
              online technology. Fameitech provides creative solutions using AI,
              blockchain, and data analytics to help people and organizations.
            </p>
            <Image width={1000} height={1000} src={paymentImg} alt="" />
          </div>

          <div className=" lg:col-span-4 col-span-12">
            <h2 className=" text-[26px] font-[800] mb-8">Contact</h2>

            <ul>
              <li className=" flex items-center mb-6">
                <FaMapMarked className=" mr-3 text-[#f2d119] text-[22px]" /> 8
                The Green #14675; Dover, DE 19901
              </li>
              <li className=" flex items-center mb-6">
                <IoMdMail className=" mr-3 text-[#f2d119] text-[22px]" />{" "}
                info@fameitech.com
              </li>
              <li className=" flex items-center">
                <FaPhoneAlt className=" mr-3 text-[#f2d119] text-[22px]" /> +1
                302-501-7152
              </li>
            </ul>
          </div>
          <div className=" lg:col-span-2 col-span-12">
            <h2 className=" text-[26px] font-[800] mb-8">Location</h2>
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

      <div className=" max-w-[1300px] md:px-12 px-6 mx-2 border-2 border-[#073A9C] mt-6 rounded-2xl py-8 md:mx-auto">
        <h2 className=" text-[24px] font-bold mb-4">Disclaimer:</h2>
        <p className=" leading-[28px]">
          The logo, name and graphics of Fameitech and its products & services
          are the trademarks of Fameitech. All other company names, brand names,
          trademarks and logos mentioned on this website are the property of
          their respective owners and do not constitute or imply endorsement,
          sponsorship or recommendation thereof by Fameitech and do not
          constitute or imply endorsement, sponsorship or recommendation of
          Fameitech by the respective trademark owner.
        </p>
      </div>
    </div>
  );
};

export default FooterLogo;
