"use client"
import React from 'react'
import Slider from "react-slick";
import Art from "../assets/art.webp"
import Analysis from "../assets/analysis.webp"
import monitors from "../assets/monitors.webp"
import Image from 'next/image';


const WebsiteSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false
      };

      return (
        <div className='w-full'>
          <Slider {...settings}>
          <div>
            <Image src={Art} width={1000} height={1000} className="lg:w-3/4 w-full"/>
          </div>
          <div>
            <Image src={Analysis} width={1000} height={1000} className="lg:w-3/4 w-full"/>
          </div>
          <div>
            <Image src={monitors} width={1000} height={1000} className="lg:w-3/4 w-full"/>
          </div>
          </Slider>
        </div>
      );
}

export default WebsiteSlider
