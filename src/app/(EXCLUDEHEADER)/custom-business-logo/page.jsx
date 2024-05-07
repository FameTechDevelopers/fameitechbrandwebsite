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

function CustomBusinessLogo() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainSection />
      <ServingClients />
      <PortfolioTabs />
      <WhyChooseUs />
      <CustomLogoPricing />
      <PricingForm />
    </>
  );
}

export default CustomBusinessLogo;
