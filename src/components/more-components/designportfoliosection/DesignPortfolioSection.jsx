import React from "react";
import Wrapper from "../common/Wrapper";
import WhyChooseUs from "../whychooseus/WhyChooseUs";
import Tabs from "../molecules/LogosTab";

function DesignPortfolioSection() {
  return (
    <>
      <section className='size-full flex flex-col justify-center items-center pt-20'>
        <div className='flex justify-center items-center flex-col text-center'>
          <p className='text-4xl md:text-6xl font-oswald-bold tracking-wider leading-[50px] '>
            WE ARE SERVING <span className='text-pri_purple'>2000+</span>{" "}
            CLIENTS
          </p>
          <p className='md:text-xl pt-5 '>
            We create experiences that transform brands & grow businesses
          </p>
        </div>

        <Tabs />
        <Wrapper>
          <div className='size-full text-black flex justify-center items-center flex-col  px-6 sm:px-0'>
            <div className='size-full text-center space-y-10 py-20'>
              <p className='text-3xl md:text-7xl font-bold tracking-wider'>
                WHY <span className='text-pri_purple '>CHOOSE</span> US?
              </p>
              <p className="w-full font-medium text-xl text-black">
                When you choose us, you're choosing a team with years of
                hands on experience and a deep understanding of design industry
              </p>
              <WhyChooseUs />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default DesignPortfolioSection;
