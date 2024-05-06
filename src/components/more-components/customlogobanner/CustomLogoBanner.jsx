import React from "react";
import Wrapper from "../common/Wrapper";

function CustomLogoBanner() {
  return (
    <div className='size-full flex flex-col  justify-center items-center px-2'>
      <Wrapper
        className={"size-full items-center justify-center flex-col md:flex-row"}
      >
        <div className='size-full bg-[url("/public/images/sec.webp")] bg-fixed bg-no-repeat bg-cover bg-center flex flex-col md:flex-row justify-around items-center md:space-x-4 py-8 px-2  md:px-10 rounded-[3rem]   text-white text-center font-bold tracking-widest mb-10'>
          <img
            src='/public/images/recognize.webp'
            alt=''
            className='w-[150px] lg:w-[300px]'
          />
          <div className='flex flex-col space-y-10'>
            <p className='text-3xl lg:text-6xl leading-[50px] md:!leading-[80px]'>
              Get Your Custom Logo Designed in just $19
            </p>
            <div className='flex space-x-2 md:space-x-6 justify-center *:px-4 *:py-2 md:*:px-6 md:*:py-4 *:text-sm md:*:text-lg'>
              <button className=' bg-pri_blue'>Order Now</button>
              <button className={` bg-pri_orange poppins-bold`}>
                LiveChat
              </button>
              <button className=' bg-pri_blue'>Call Now</button>
            </div>
          </div>
          <img
            src='/public/images/banner1.webp'
            alt=''
            className='w-[150px] lg:w-[250px]'
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default CustomLogoBanner;
