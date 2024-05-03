"use client"

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const B2bPortals = () => {
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
              src="https://fameitech.com/portfolio/b2b/chart1.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "380px", margin: "auto" }}
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/b2b/chart2.png"
            />
          </div>
          <div>
            <Image
              style={{ width: "380px", margin: "auto" }}
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/b2b/chart3.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "380px", margin: "auto" }}
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/b2b/chart4.webp"
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
              src="https://fameitech.com/portfolio/b2b/chart5.png"
            />
          </div>
          <div>
            <Image
              style={{ width: "380px", margin: "auto" }}
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/b2b/chart6.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "380px", margin: "auto" }}
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/b2b/chart7.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "380px", margin: "auto" }}
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/b2b/chart8.webp"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default B2bPortals;
