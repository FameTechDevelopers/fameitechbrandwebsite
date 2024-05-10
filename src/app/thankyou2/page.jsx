"use client"
import React, { useEffect } from "react";
import Navbar from "../../components/more-components/common/Navbar";
import Footer from "../../components/more-components/common/Footer";

const page = () => {

  useEffect(() => {
    // Add Google Tag scripts here
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16541545074";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16541545074');
    `;
    document.head.appendChild(script2);
  }, []);
  return (
    <>
      <div className=" bg-pri_blue pb-4">
        <Navbar />
      </div>
      <div className=" thank2-bg bg-[#020053] relative md:mt-[-130px]">
        <div className="max-w-[1300px] px-12 md:px-20 mx-auto">
          <div className="flex justify-start items-center h-[80vh] md:h-[60vh] ">
            <div>
              <h2 className="  text-[2.5rem] md:mt-32 md:text-[4rem] mt font-oswald-bold font-bold text-white">
                Thank <span className="text-[#f2d119]">You</span>
              </h2>
              <p className=" text-[#fff] text-[28px] font-light pt-3 pb-5 ">
                We appreciate you contacting{" "}
                <span className="text-[#f2d119] font-oswald-bold text-[2rem] pl-2">
                  Fameitech{" "}
                </span>
                <br />
                One of our representatives will be getting back to you shortly,
                <br />
                Have a great day!
              </p>
              <a href="/logo-design">
                <button className=" md:w-auto md:text-[22px] py-3 px-8 md:mb-0 mb-4 flex lg:mr-8 justify-center items-center font-medium text-center text-white bg-[#073A9C] rounded-full">
                  Back to home
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
