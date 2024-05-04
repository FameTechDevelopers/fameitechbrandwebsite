import React from "react";
import ShadeTabs from "./ShadeTabs";
import PricingCard from "./PricingCard";
import pricingData from "../logo-branding-website.js";
import branding from "../branding.js";
import logobranding from "../logobranding.js";
import logo from "../logodesign.js";
import logobrand from "../websitedesign";
import video from "../videoAnimation";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Pricings = () => {
  return (
    <div className=" service-tabs py-8 lg:px-14 px-8">
      <div className=" max-w-[1600px] mx-auto">
        <h2 className="md:text-[46px] text-[36px] mb-2 text-center font-bold service-heading">
          Discover Our Competitive Rates
        </h2>
        <p className="text-[18px] font-[400] mb-8 lg:w-[60%] mx-auto text-center">
          Explore our transparent pricing model designed to offer competitive
          rates tailored to meet your needs. We believe in clarity and fairness,
          ensuring you have full visibility into our pricing structure for a
          seamless experience.
        </p>
        <div className="lg:w-[100%] mx-auto">
          <ShadeTabs
            title1={"Logo Design"}
            title2={"Branding"}
            title3={"Website Design"}
            title4={"Logo + Branding"}
            title5={"Logo + Branding + Website"}
            title6={"Video Animation"}
            title1Content={<PricingCard pricing={logo} />}
            title2Content={<PricingCard pricing={branding} />}
            title3Content={<PricingCard pricing={logobranding} />}
            title4Content={<PricingCard pricing={logobrand} />}
            title5Content={<PricingCard pricing={pricingData} />}
            title6Content={<PricingCard pricing={video} />}
          />
          <div className="flex justify-center items-center">
            <Link href={"/contact-us"} className=" discover-btn mr-[12px] flex justify-center items-center">
              Get A Quote
              <FaArrowRight className=" ml-2" />
            </Link>
            <Link href={"/our-packages"} className=" discover-btn mr-[12px] flex justify-center items-center">
              learn More
              <FaArrowRight className=" ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
