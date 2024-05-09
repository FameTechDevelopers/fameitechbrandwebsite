import React from "react";
import Wrapper from "../common/Wrapper";
import Image from "next/image";
import recognize from "../../../assets/recognize.webp"
import banner1 from "../../../assets/banner1.webp"
import LiveChatBtnLanding from "../livechatBlue";

function CustomLogoBanner() {
  return (
    <div className='size-full flex flex-col  justify-center items-center'>
      {/* <Wrapper
        className={"size-full items-center justify-center flex-col md:flex-row"}
      > */}
        <div className='relative size-full customLogoBannerBg bg-fixed bg-no-repeat bg-cover bg-center flex flex-col md:flex-row justify-around items-center md:space-x-4 py-8 px-4  md:px-10  space-y-4  text-white text-center font-bold tracking-widest mb-10'>
          <Image
            src={recognize}
            alt=''
            width={1000}
            height={1000}
            className='w-[150px] xl:w-[250px] 2xl:w-[400px] sm:absolute -bottom-5 left-5 '
          />
          <div className='flex flex-col space-y-10 '>
            <p className='max-w-[900px]  text-3xl lg:text-4xl  2xl:text-5xl leading-[50px] md:!leading-[80px]'>
              Get Your Custom <span className="text-pri_orange">Logo Designed</span> in just $19<span className="text-pri_orange text-base md:text-lg line-through  ">$45</span>
            </p>
            <div className='flex space-x-2 md:space-x-6 justify-center *:px-4 *:py-2 md:*:px-6 md:*:py-4 *:text-sm md:*:text-lg'>
              <a href="#name_field" className=' bg-pri_blue'>Order Now</a>
              <LiveChatBtnLanding />

              <a className=' bg-pri_blue' href="tel:+18722333612">Call Now</a>
            </div>
          </div>
          <Image
          width={1000}
          height={1000}
            src={banner1}
            alt=''
            className='w-[150px] xl:w-[250px] 2xl:w-[300px] sm:absolute -bottom-5 right-5'
          />
        </div>
      {/* </Wrapper> */}
    </div>
  );
}

export default CustomLogoBanner;
