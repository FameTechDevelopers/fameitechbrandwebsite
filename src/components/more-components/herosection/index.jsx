"use client";
import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Wrapper from "../common/Wrapper";
import img1 from "/public/images/slider-logo.webp";
import Image from "next/image";
import LiveChatBtnLanding from "../livechatBlue";
import Lottie from "react-lottie";
import SuccessAnim from "@/lottieAnimation/succesAnimation.json";
import axios from "axios";
function HeroSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    formData.append("web_type", window.location.pathname);
    setPending(true);
    try {
      const response = await axios.post(
        "https://portal.famewheels.com/contact-us",
        formData
      );

      console.log(response.data);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setPending(false);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: SuccessAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className='size-full flex flex-col  justify-center items-center  pb-32 px-6 xl:px-0'>
      <Wrapper
        className={"flex flex-col sm:justify-between sm:flex-row  sm:pt-16"}
      >


         {/* Paragraph  */}
         <div className='w-full md:w-[50%] text-white space-y-4 md:space-y-6 pt-10 sm:pt-0 '>
          <div className='font-oswald-bold space-y-2 md:space-y-6'>
            <h5 className='text-white text-3xl md:text-4xl xl:text-6xl'>Logo Design</h5>
            <p className='text-pri_yellow text-3xl md:text-4xl xl:text-6xl'>
              <span> Starting From $19</span>{" "}
              <span className='size-full relative'>
                <sup className='line-through absolute top-0  text-white text-lg md:text-4xl'>
                  $45
                </sup>
              </span>
            </p>
          </div>

          <p className='text-sm md:text-base xl:text-lg'>
            Your company deserves a brand that is as distinctive as it is. Give
            us the chance to help you stand out from the crowd with
            attention-grabbing and enduring Custom Logo Designs.
          </p>

          <div className='w-full space-y-1 md:space-y-0 flex flex-col md:text-base xl:text-lg md:flex-row '>
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
            <div className='w-full flex flex-col  md:text-base xl:text-lg  *:flex space-y-1 *:items-center *:space-x-2'>
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

          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5'>
            <a
              href='#name_field2'
              className='flex items-center space-x-2 bg-pri_blue w-fit px-4 py-2 font-bold text-lg'
            >
              <p>REQUEST A QUOTE</p>
              <IoArrowForwardCircleSharp className='size-6' />
            </a>
            <LiveChatBtnLanding />
          </div>

          <div>
            <Image src={img1} alt='images' className='w-[300px] md:w-[350px]' />
          </div>
        </div>


        {/* CHAT WITH US FORM  */}
        <div className='rounded-full w-full md:w-[50%] max-w-[400px]  2xl:max-w-[460px] pt-16 sm:pt-0 '>
          <div className='text-black flex flex-col justify-center items-center bg-pri_yellow rounded-t-3xl p-4 md:p-7 space-y-2'>
            <p className='font-oswald-bold text-3xl md:text-6xl text-center'>
              CHAT WITH US
            </p>
            <p className='text-xl font-oswald font-light leading-6 tracking-wider md:text-2xl'>
              TO AVAIL{" "}
              <span className='text-pri_blue font-oswald-bold'>
                70% DISCOUNT
              </span>
            </p>
          </div>
          <div className='w-full flex flex-col justify-center bg-white rounded-b-3xl'>
            <form
              id='top_contactForm'
              className='w-full flex flex-col px-4  md:px-12 py-6 text-black '
              onSubmit={handleSubmit}
            >
              <div className='*text-black *border-[1px] *:border-black w-full flex flex-col space-y-3 *:bg-slate-100 *:rounded-sm *:font-oswald-thin *:px-4 *:py-4 '>
                <input
                id="name_field2"
                  required
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter Your Name'
                  className='text-black'
                />
                <input
                  required
                  type='email'
                  placeholder='Email Address'
                  className='text-black'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  required
                  type='tel'
                  placeholder='Phone Number'
                  className='text-black'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                  required
                  name='message'
                  id='message'
                  cols='30'
                  rows='3'
                  className='text-black'
                  placeholder='How we can help you'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {success && (
                <p className='text-green-500 mt-2 font-semibold'>
                  Successful We Will Get In Touch With You Shortly
                </p>
              )}

              <button
                type='submit'
                className='bg-pri_blue font-oswald font-bold text-white text-sm letter-space-wide mt-3 px-4 py-2 md:px-8 md:py-4'
              >
                {success ? (
                  <Lottie options={defaultOptions} height={50} width={50} />
                ) : pending === true ? (
                  "Submitting...."
                ) : (
                  "RESERVE THIS DISCOUNT"
                )}
              </button>
            </form>
          </div>
        </div>

       
      </Wrapper>
    </section>
  );
}

export default HeroSection;
