import React from "react";
import Wrapper from "../common/Wrapper";
import Image from "next/image";
import recognize from "../../../assets/recognize.webp"
import banner1 from "../../../assets/banner1.webp"
import LiveChatBtnLanding from "../livechatBlue";

function CustomLogoBanner() {
  return (
    <div className='size-full flex flex-col  justify-center items-center px-2'>
      <Wrapper
        className={"size-full items-center justify-center flex-col md:flex-row"}
      >
        <div className='size-full customLogoBannerBg bg-fixed bg-no-repeat bg-cover bg-center flex flex-col md:flex-row justify-around items-center md:space-x-4 py-8 px-2  md:px-10 rounded-[3rem]   text-white text-center font-bold tracking-widest mb-10'>
          <Image
            src={recognize}
            alt=''
            width={1000}
            height={1000}
            className='w-[150px] lg:w-[300px]'
          />
          <div className='flex flex-col space-y-10'>
            <p className='text-3xl lg:text-6xl leading-[50px] md:!leading-[80px]'>
              Get Your Custom Logo Designed in just $19
            </p>
            <div className='flex space-x-2 md:space-x-6 justify-center *:px-4 *:py-2 md:*:px-6 md:*:py-4 *:text-sm md:*:text-lg'>
              <button className=' bg-pri_blue'>Order Now</button>
              <LiveChatBtnLanding />

              <button className=' bg-pri_blue'>Call Now</button>
            </div>
          </div>
          <Image
          width={1000}
          height={1000}
            src={banner1}
            alt=''
            className='w-[150px] lg:w-[250px]'
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default CustomLogoBanner;
