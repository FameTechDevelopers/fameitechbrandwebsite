"use client"
import React from 'react'
import Slider from "react-slick";
import wordpres from "../assets/wp.png"
import cpp from "../assets/cpp.png"
import figma from "../assets/figma.png"
import laravel from "../assets/laravel.png"
import unreal from "../assets/unreal.png"
import ps from "../assets/ps.png"
import fan from "../assets/fan.webp"
import ae from "../assets/ae.png"
import a from "../assets/a.png"
import Image from 'next/image';

const TechSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:false,
        responsive: [
            {
                breakpoint: 768, // adjust as needed
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 430, // adjust as needed
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
      };
  return (
<div className="flex justify-center items-center w-full p-0 m-0">
    <div className='container '>
      <Slider {...settings}>
        <div className='flex justify-center items-center w-full'>
          <Image src={wordpres} width={1000} height={1000} className='w-24 block mx-auto'/>
        </div>
        <div className='flex justify-center items-center w-full'>
        <Image src={cpp} width={1000} height={1000} className='w-24 block mx-auto'/>
        </div>
        <div className='flex justify-center items-center w-full'>
        <Image src={laravel} width={1000} height={1000} className='w-24 block mx-auto'/>
        </div>
        <div className='flex justify-center items-center w-full'>
          <Image src={unreal} width={1000} height={1000} className='w-24 block mx-auto'/>
        </div>
        <div className='flex justify-center items-center w-full'>
        <Image src={a} width={1000} height={1000} className='w-24 block mx-auto'/>
        </div>
        <div className='flex justify-center items-center w-full'>
          <Image src={fan} width={1000} height={1000} className='w-24 block mx-auto'/>
        </div>
        <div className='flex justify-center items-center w-full'>
          <Image src={figma} width={1000} height={1000} className='w-24 block mx-auto'/>
        </div>
        <div className='flex justify-center items-center w-full'>
          <Image src={ps} width={1000} height={1000} className='w-24 block mx-auto'/>
        </div>
        <div className='flex justify-center items-center w-full'>
          <Image src={ae} width={1000} height={1000} className='w-24 block mx-auto'/>
        </div>
      </Slider>
    </div>
</div>
  )
}

export default TechSlider
