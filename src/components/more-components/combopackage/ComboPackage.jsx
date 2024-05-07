import React from "react";
// import mockupImage from "@/assets/images/mockup.webp";
import mockupImage from "@/assets/images/mockup.webp"

import { FaAngleDoubleRight } from "react-icons/fa";
import Wrapper from "../common/Wrapper";
import Image from "next/image";
import LiveChatBtnLanding from "../livechatBlue";

function ComboPackage() {
  return (
    <section className='size-full flex justify-center comboBgImage text-white'>
      <Wrapper>
        <div className='size-full flex flex-col '>
          <div className='size-full flex flex-col items-center md:flex-row justify-between md:justify-center px-4 py-6'>
            <div className='w-full md:w-[50%] flex flex-col justify-center  space-y-4'>
              <p className='font-oswald-bold font-bold'>
                ULTIMATE VALUE FOR START-UPS AND BUSINESSES
              </p>
              <h6
                style={{ textShadow: "1px 1px 10px #00000" }}
                className='italic text-6xl flex flex-col font-bold space-y-4'
              >
                <span className='text-[#B82929] '>ALL IN ONE</span>
                <span className='text-pri_yellow flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:items-center'>
                  <span>COMBO</span>{" "}
                  <div className='h-[6px] w-20 bg-pri_yellow' />
                </span>
              </h6>
              <p className='text-pretty max-w-[450px] text-lg leading-[33px]'>
                This logo design package offers remarkable value for companies
                looking to establish their online presence and increase their
                market reach with innovative digital solutions. Benefit from our
                power-packed combo package, custom made to suit your needs.
              </p>
            </div>

            <div className='w-full md:w-[50%]  flex justify-center items-center'>
              <div className='flex justify-between border p-2 md:p-10 space-x-10'>
                <div className='flex flex-col md:justify-center'>
                  <p className='text-xl md:text-2xl font-bold'>COMBO PACKAGE</p>
                  <p className='text-xs md:text-lg text-pri_yellow font-bold'>
                    COMPLETE BRANDING SOLUTION
                  </p>
                </div>
                <div className='flex flex-col space-y-3'>
                  <p>
                    <sub className='text-2xl md:text-5xl font-bold'>$</sub>
                    <span className='text-4xl md:text-8xl font-bold'>999</span>
                  </p>
                  <p className='text-lg md:text-2xl font-bold flex space-x-2 self-end'>
                    <span className='line-through'>$3,330</span>
                    <span>ONLY</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='size-full flex flex-col md:flex-row justify-between  px-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10'>
              <div className='flex flex-col space-y-4'>
                <p className='text-3xl font-bold'>Logo Design</p>
                <ul className=''>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Unlimited Logo Design Concepts</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Unlimited Revisions</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Icon Design</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>All Final File Formats</span>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col space-y-4'>
                <p className='text-3xl font-bold'>Stationary Design</p>
                <ul className=''>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Unlimited Logo Design Concepts</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Unlimited Revisions</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Icon Design</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>All Final File Formats</span>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col space-y-4'>
                <p className='text-3xl font-bold'>Value Added Services</p>
                <ul className=''>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Dedicated Account Manager</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Customizable</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Complete Deployment</span>
                  </li>
                  <li className='flex  space-x-5 items-center py-10'>
                    <button className='bg-pri_yellow px-7 py-2 text-black italic'>
                      Order Now
                    </button>
                    <LiveChatBtnLanding />

                  </li>
                </ul>
              </div>
              <div className='flex flex-col space-y-4'>
                <p className='text-3xl font-bold'>Website Design</p>
                <ul className=''>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>UNLIMITED Pages Website</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Content Management System (CMS)</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Complete Deployment</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>5 Stock Photos + 3 Banner Designs</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Any 3 Social Media Platforms</span>
                  </li>
                  <li className='flex space-x-2 items-center'>
                    <span>
                      <FaAngleDoubleRight color={"#0074C3"} />
                    </span>
                    <span>Complete W3C Certified HTML</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* MOCKUP IMAGE  */}
            <div className='w-[50%] flex items-center space-x-4 justify-center'>
          
                  <Image  width={1000}
          height={1000} src={mockupImage} alt="" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default ComboPackage;
