import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Wrapper from "../common/Wrapper";
import img1 from "/public/images/slider-logo.webp"
import Image from "next/image";

function HeroSection() {
  return (
    <section className='flex flex-col justify-center items-center pt-16 pb-32'>

      <Wrapper className={"flex flex-col sm:flex-row-reverse sm:justify-between pt-16"}>

      
      {/* CHAT WITH US FORM  */}
      <div className='rounded-full px-6 w-full md:w-[50%] max-w-[500px] 2xl:max-w-[500px]'>
        <div className='text-pri_black flex flex-col justify-center items-center bg-pri_yellow rounded-t-3xl p-4 md:p-7 space-y-2'>
          <p className='font-oswald-bold text-3xl md:text-5xl'>CHAT WITH US</p>
          <p className='text-xl font-oswald font-light leading-6 tracking-wider md:text-3xl'>
            TO AVAIL{" "}
            <span className='text-pri_blue font-oswald-bold'>70% DISCOUNT</span>
          </p>
        </div>
        <div className='w-full flex flex-col justify-center bg-white rounded-b-3xl'>
          <form className='w-full flex flex-col px-12 py-6  '>
            <div className='*:border-[1px] *:border-black w-full flex flex-col space-y-3 *:bg-slate-100 *:rounded-sm *:font-oswald-thin *:px-4 *:py-4'>
              <input
                required
                type='text'
                placeholder='Enter Your Name'
                className=''
              />
              <input
                required
                type='email'
                placeholder='Email Address'
                className=''
              />
              <input
                required
                type='tel'
                placeholder='Phone Number'
                className=''
              />
              <textarea
                required
                name='message'
                id='message'
                cols='30'
                rows='3'
                placeholder='How we can help you'
              />
            </div>
            <button className='bg-pri_blue font-oswald font-bold text-white text-sm letter-space-wide mt-3 px-4 py-2 md:px-8 md:py-4'>
              RESERVE THIS DISCOUNT
            </button>
          </form>
        </div>
      </div>

      {/* Paragraph  */}
      <div className='w-full md:w-[50%]  px-6 text-white space-y-4 md:space-y-6 pt-16 sm:pt-0 '>
        <div className='font-oswald-bold space-y-2 md:space-y-6'>
          <h5 className='text-white text-3xl md:text-7xl'>Logo Design</h5>
          <p className='text-pri_yellow text-3xl md:text-7xl'>
           <span> Starting From $19</span>{" "}
            <span className="size-full relative">
            <sup className='line-through absolute top-0  text-white text-lg md:text-4xl'>$45</sup>
            </span>
          </p>
        </div>

        <p className='text-sm md:text-lg'>
          Your company deserves a brand that is as distinctive as it is. Give us
          the chance to help you stand out from the crowd with
          attention-grabbing and enduring Custom Logo Designs.
        </p>

        <div className='w-full space-y-4 md:space-y-0 flex flex-col md:text-lg md:flex-row '>
          <div className='w-full flex flex-col   *:flex space-y-1  *:items-center *:space-x-2'>
            <span>
              <IoIosArrowDroprightCircle className='size-4' />
              <p>Custom Logo Concept</p>
            </span>
            <span>
              <IoIosArrowDroprightCircle className='size-4' />
              <p>Dedicated Designer</p>
            </span>
            <span>
              <IoIosArrowDroprightCircle className='size-4' />
              <p>Quick Turnaround Time</p>
            </span>
          </div>
          <div className='w-full flex flex-col  *:flex space-y-1 *:items-center *:space-x-2'>
            <span>
              <IoIosArrowDroprightCircle className='size-4' />
              <p>Attractive modern logo design</p>
            </span>
            <span>
              <IoIosArrowDroprightCircle className='size-4' />
              <p>100% Ownership Rights</p>
            </span>
            <span>
              <IoIosArrowDroprightCircle className='size-4' />
              <p>Attractive modern logo design</p>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
          <span className='flex items-center space-x-2 bg-pri_blue w-fit px-4 py-2 font-bold text-lg'>
            <p>REQUEST A QUOTE</p>
            <IoArrowForwardCircleSharp className='size-6' />
          </span>
          <span className="bg-pri_orange w-fit px-6 py-3 font-poppins-semibold">
            LiveChat
          </span>
        </div>

        <div>
          <Image src={img1} alt="images" className="w-[300px] md:w-[350px]" />
        </div>
      </div>

      </Wrapper>
    </section>
  );
}

export default HeroSection;
