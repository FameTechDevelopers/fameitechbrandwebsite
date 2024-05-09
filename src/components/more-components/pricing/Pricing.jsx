import React from "react";
import ic1 from "../../assets/whychooseusicons/1.webp";
import ic2 from "../../assets/whychooseusicons/2.webp";
import ic3 from "../../assets/whychooseusicons/3.webp";
import ic4 from "../../assets/whychooseusicons/4.webp";
import ic5 from "../../assets/whychooseusicons/5.webp";
import ic6 from "../../assets/whychooseusicons/6.webp";
import { FaCheckCircle } from "react-icons/fa";
import Wrapper from "../common/Wrapper";

function Pricing() {
  const sectionData = [
    {
      title: "Discounted Logo Package",
      price: "19",
      perks: [
        "1 Logo Concept",
        "By 1 Designer",
        "2 Rounds of Revisions",
        "Final Files Included: JPEG",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      title: "Basic Logo Package",
      price: "55",
      perks: [
        "3 logo concept",
        "By 1 Designer",
        "4 Rounds of Revisions",
        "Final Files Included: JPEG, PNG, PDF",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      title: "Startup Logo Package",
      price: "89",
      perks: [
        "6 logo concepts",
        "By 2 Designers",
        "6 Rounds of Revisions",
        "Final Files Included:",
        "JPEG, PNG, PDF, APS, EPS",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
      ],
    },
  ];

  return (
    <section className='flex flex-col justify-center items-center  '>
      <Wrapper className={" flex-col  space-y-20 py-20"}>
        <div className="flex flex-col gap-y-4 px-2">
        <h4 className='text-4xl text-center  md:text-5xl font-bold tracking-wider leading-[50px]'>
          CHOOSE A <span className='text-pri_purple'>PACKAGE</span> THAT SUITS
          YOU
        </h4>
        <p className="md:text-xl pt-5 text-center">
          Take control of your journey to success by selecting the package
          that's perfectly suited to your needs and preferences.
        </p>
        </div>

        <div className='w-full grid grid-cols-12 place-items-center gap-y-3 md:gap-6 px-6 md:px-4 '>
          {sectionData.map((item, i) => (
            <div className='col-span-12 md:col-span-4 size-full max-w-[400px] relative rounded-3xl text-white bg-sec_blue flex flex-col'>
              <div className='absolute size-full top-0 flex justify-end'>
                <div className='text-[15rem] font-bold opacity-15 '>
                  {item.price}
                </div>
              </div>

              <div className='flex z-[9999]  flex-col justify-center items-center space-y-10 px-6 py-10'>
                <p className='text-2xl text-center'>{item.title}</p>
                <p>
                  <span
                    className={`flex justify-center items-center poppins-bold tracking-widest`}
                  >
                    <sup className='text-2xl font-bold'>$</sup>{" "}
                    <span className='text-6xl md:text-8xl font-bold'>
                      {item.price}
                    </span>
                  </span>
                </p>
                <div className='flex flex-col'>
                  {item.perks.map((perk, i) => (
                    <p className='space-x-2 space-y-1 flex items-center'>
                      <span>
                        <FaCheckCircle className='size-4' />
                      </span>
                      <span>{perk}</span>
                    </p>
                  ))}
                </div>

                <div className='flex flex-col gap-y-2 text-center lg:flex-row lg:space-x-12  *:font-bold *:text-sm '>
                  <a
                    href='#name_field'
                    className='bg-gradient-to-t  transition-all duration-300 font-poppins  from-dark_blue to-sec_blue hover:bg-gradient-to-t hover:from-cyan-900 hover:to-cyan-600 shadow-[2px_2px_40px_1px_rgba(230,81,108,0.5)] hover:shadow-[2px_2px_40px_20px_rgba(3,167,211,0.2)]  px-6 py-3 rounded-full '
                  >
                    Order Now
                  </a>
                  <a
                    href='tel:+18722333612'
                    className='bg-gradient-to-t  transition-all duration-300 font-poppins  from-dark_blue to-sec_blue hover:bg-gradient-to-t hover:from-cyan-900 hover:to-cyan-600 shadow-[2px_2px_40px_1px_rgba(230,81,108,0.5)] hover:shadow-[2px_2px_40px_20px_rgba(3,167,211,0.2)]  px-6 py-3 rounded-full '
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

export default Pricing;
