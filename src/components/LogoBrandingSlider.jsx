"use client"
import React from 'react'
import Slider from "react-slick";
import PurpleCosmetic from "../assets/purple-cosmetics.webp"
import BrownCoffee from "../assets/brown-coffee.webp"
import BlueBottle from "../assets/blue-bottle.webp"
import Image from 'next/image';


const LogoBrandingSlider = () => {
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
            <Image src={PurpleCosmetic} width={1000} height={1000} className="lg:w-3/4 w-full"/>
          </div>
          <div>
            <Image src={BrownCoffee} width={1000} height={1000} className="lg:w-3/4 w-full"/>
          </div>
          <div>
            <Image src={BlueBottle} width={1000} height={1000} className="lg:w-3/4 w-full"/>
          </div>
          </Slider>
        </div>
      );
}

export default LogoBrandingSlider
