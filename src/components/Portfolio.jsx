import React from "react";
import ShadeTabs from "./ShadeTabs";
import LogoDesignSlider from "./LogoDesignSlider";
import ArtDesign from "./ArtDesign";
import B2bPortals from "./B2bPortals";
import Websites from "./Websites";
import YouTubeVideos from "./YouTubeVideos";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className=" max-w-[1600px] pt-20 pb-16 lg:px-14 px-8 mx-auto">
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
          title1Content={<LogoDesignSlider />}
          title2Content={<ArtDesign />}
          title3Content={<B2bPortals />}
          title4Content={<Websites />}
          title5Content={<YouTubeVideos/>}
        />
        {/* <button className=" discover-btn mx-auto flex justify-center items-center">
          VIEW OUR PORTFOLIO
        </button> */}
      </div>
    </div>
  );
};

export default Portfolio;
