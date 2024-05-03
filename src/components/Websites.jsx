"use client"

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Websites = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  return (
    <>
    <div className="portfolio-slider mt-12">
      <Slider {...settings}>
        <div>
          <Image
            style={{ width: "380px", margin: "auto" }}
            width={1000}
            height={1000}
            src="https://fameitech.com/portfolio/websites/affordable.webp"
          />
        </div>
        <div>
          <Image
            style={{ width: "380px", margin: "auto" }}
            width={1000}
            height={1000}
            src="https://fameitech.com/portfolio/websites/cleve.webp"
          />
        </div>
        <div>
          <Image
            style={{ width: "380px", margin: "auto" }}
            width={1000}
            height={1000}
            src="https://fameitech.com/portfolio/websites/davis.webp"
          />
        </div>
        <div>
          <Image
            style={{ width: "380px", margin: "auto" }}
            width={1000}
            height={1000}
            src="https://fameitech.com/portfolio/websites/maison.webp"
          />
        </div>
      </Slider>
    </div>
    <div className=" mt-4">
      <Slider {...settings}>
        <div>
          <Image
            style={{ width: "380px", margin: "auto" }}
            width={1000}
            height={1000}
            src="https://fameitech.com/portfolio/websites/market.webp"
          />
        </div>
        <div>
          <Image
            style={{ width: "380px", margin: "auto" }}
            width={1000}
            height={1000}
            src="https://fameitech.com/portfolio/websites/risk.webp"
          />
        </div>
        <div>
          <Image
            style={{ width: "380px", margin: "auto" }}
            width={1000}
            height={1000}
            src="https://fameitech.com/portfolio/websites/sunnyside.webp"
          />
        </div>
        <div>
          <Image
            style={{ width: "380px", margin: "auto" }}
            width={1000}
            height={1000}
            src="https://fameitech.com/portfolio/websites/transformation.webp"
          />
        </div>
      </Slider>
    </div>
  </>
  )
}

export default Websites