"use client";

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
      {/* <Image src={circle1} className=" absolute left-0 top-0" />
      <Image src={circle2} className=" absolute right-0 top-0" /> */}
        <ServingClients />
        <PortfolioTabs />
      </div>
      <WhyChooseUs />
      <CustomLogoBanner />
    </>
  );
}

export default CustomBusinessLogo;
