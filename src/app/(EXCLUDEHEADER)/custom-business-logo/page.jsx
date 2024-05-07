"use client";

import PricingForm from "@/components/pricingform/PricingForm.jsx";
import CustomLogoPricing from "@/components/Sections/pricing.jsx";
// import { useState } from "react";
// import "./App.css";
import MainSection from "../../../components/Sections/MainSection.jsx";
import Navbar from "../../../components/Sections/Navbar.jsx";
import ServingClients from "../../../components/Sections/ServingClients.jsx";
import WhyChooseUs from "../../../components/Sections/WhyChooseUs.jsx";
import PortfolioTabs from "../../../components/portfolio/PortfolioTabs.jsx";
import CustomLogoBanner from "@/components/CustomLogoBanner.jsx";
// import circle1 from "@/components/assets/grad-circle1.png"
// import circle2 from "@/components/assets/grad-circle3.png"

function CustomBusinessLogo() {
  return (
    <>
      <Navbar />
      <MainSection />
      <div className=" relative">
        <ServingClients />
        <PortfolioTabs />
      </div>
      {/* <WhyChooseUs /> */}
      <CustomLogoBanner />
      <CustomLogoPricing />
      <PricingForm />
    </>
  );
}

export default CustomBusinessLogo;
