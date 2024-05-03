import React from "react";
import ShadeTabs from "./ShadeTabs";

const Portfolio = () => {
  return (
    <div>
      <div className=" max-w-[1600px] mx-auto">
        <h2 className="md:text-[46px] text-[36px] mb-2 text-center font-bold service-heading">
          A<span className="italic text-[#060605]"> Collection</span> That Will
          Win Your Heart Over
        </h2>
        <p className="text-[18px] font-[400] mb-8 lg:w-[60%] mx-auto text-center">
          Reveal the potency of our logo design services, manifesting the
          fundamental essence of your business idea through our logo and brand
          design services. Our team's specialized expertise in niche markets
          positions us as the top choice in the business area.
        </p>
        <ShadeTabs
          title1={"LOGO DESIGN"}
          title2={"ART & ILLUSTRATIONS"}
          title3={"B2B & B2C PORTALS"}
          title4={"WEBSITES"}
          title5={"VIDEO ANIMATION"}
          title1Content={" content 1"}
          title4Content={" content 4"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
