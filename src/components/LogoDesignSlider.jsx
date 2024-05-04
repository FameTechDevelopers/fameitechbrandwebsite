"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const LogoDesignSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="portfolio-slider mt-12">
        <Slider {...settings}>
          <div>
            <Image
              style={{ width: "300px", margin: "auto" }}
              unoptimized
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/logodesigns/barber.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "300px", margin: "auto" }}
              unoptimized
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/logodesigns/demand.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "300px", margin: "auto" }}
              unoptimized
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/logodesigns/gorilla.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "300px", margin: "auto" }}
              unoptimized
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/logodesigns/mcb.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "300px", margin: "auto" }}
              unoptimized
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/logodesigns/mediatune.webp"
            />
          </div>
        </Slider>
      </div>
      <div className=" mt-4">
        <Slider {...settings}>
          <div>
            <Image
              style={{ width: "300px", margin: "auto" }}
              unoptimized
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/logodesigns/papach.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "300px", margin: "auto" }}
              unoptimized
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/logodesigns/rivertown.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "300px", margin: "auto" }}
              unoptimized
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/logodesigns/supreme.webp"
            />
          </div>
          <div>
            <Image
              style={{ width: "300px", margin: "auto" }}
              unoptimized
              width={1000}
              height={1000}
              src="https://fameitech.com/portfolio/logodesigns/tilov.webp"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default LogoDesignSlider;
