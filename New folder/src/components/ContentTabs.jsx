import React from "react";
import ShadeTabs from "./ShadeTabs";
import ServiceCard from "./ServiceCard";
import serviceData from "@/Data";

const ContentTabs = () => {
  return (
    <div className=" service-tabs py-8 lg:px-14 px-8">
      <div className=" max-w-[1600px] mx-auto">
        <h2 className="md:text-[46px] text-[36px] mb-2 text-center font-bold service-heading">
          We Are The
          <span className="italic text-[#060605]"> Design</span> Allrounders!
        </h2>
        <p className="text-[18px] font-[400] mb-8 lg:w-[60%] mx-auto text-center">
          Reveal the potency of our logo design services, manifesting the
          fundamental essence of your business idea through our logo and brand
          design services. Our team's specialized expertise in niche markets
          positions us as the top choice in the business area.
        </p>
        <ShadeTabs
          title1={"WORD MARK LOGO"}
          title2={"ABSRACT LOGO"}
          title3={"ILLUSTRATIVE LOGO"}
          title4={"EMBLEM LOGO"}
          title1Content={<ServiceCard service={serviceData[0]} />}
          title2Content={<ServiceCard service={serviceData[1]} />}
          title3Content={<ServiceCard service={serviceData[2]} />}
          title4Content={<ServiceCard service={serviceData[3]} />}
        />
      </div>
    </div>
  );
};

export default ContentTabs;
