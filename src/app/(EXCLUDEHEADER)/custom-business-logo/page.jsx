"use client";

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
    </>
  );
}

export default CustomBusinessLogo;