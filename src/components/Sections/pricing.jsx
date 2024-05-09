import React, { useRef, useState } from "react";
import Image from "next/image";
import ListIcon from "./images/pricing-list-icon.png";
import Slider from "react-slick";
import LiveChat from "../LiveChat";

const CustomLogoPricing = () => {
  const sliderRef = useRef(null);
  const [visibility, setVisibility] = useState("minimized");

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  var settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    // rows: 2,
    arrows: false,
    slidesToScroll: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const maximizeChat = async () => {
    if (visibility === "minimized") {
      setVisibility("maximized");
      //   setTimeout(() => {
      //     setVisibility("minimized")

      //   }, 1000);
    } else {
      setVisibility("minimized");
    }
  };
  return (
    <div className="bg-black">
      <div className="  bg-[#073A9C] pt-16 py-8 px-2 rounded-bl-[100px] rounded-br-[100px] ">
        <div className="max-w-[1300px] px-12 mx-auto text-center">
          <h2 className=" text-[#fff] font-oswald-bold text-[2.2rem] md:text-[3.2rem] md:leading-[70px] leading-[50px] font-bold ">
            <span className=" text-[2.2rem] md:text-[3.2rem] md:leading-[70px] leading-[50px] font-bold ">
              CHOOSE
            </span>{" "}
            A{" "}
            <span className="text-[#f2d119] text-[2.2rem] md:text-[3.2rem] md:leading-[70px] leading-[50px]">
              PACKAGE
            </span>{" "}
            THAT SUITS YOU
          </h2>
          <p className=" text-[#fff] font-oswald-light text-[21px] font-light pt-3 pb-5 ">
            Take control of your journey to success by selecting the package
            that's perfectly suited to your needs and preferences.
          </p>
        </div>
        <div className=" max-w-[1300px]  mx-auto ">
          {/* <div className=" grid grid-cols-12 py-4 pb-10 "> */}
          {/* <div className="col-span-1  "></div> */}
          <div className=" block lg:hidden">
            <Slider {...settings} ref={sliderRef}>
              <div className="lg:col-span-4 col-span-12 ">
                <div className="priceTabBorder py-12 px-4 text-center mx-5 mb-10 lg:mb-0 ">
                  <h4 className=" text-[#fff] font-medium text-[20px] ">
                    Discounted Logo Package
                  </h4>
                  <h5 className="text-[#f2d119] text-[55px] font-bold ">$19</h5>
                  <div className=" pl-7 priceTabli ">
                    <ul>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className="w-[16px] h-[16px] mr-3"
                          />
                          <h5 className="text-start text-[#fff] md:text-[16px] text-[13px] ">
                            1 logo concept
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            By 1 Designer
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            2 Rounds of Revisions
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            Final Files Included:
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            JPEG
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Unique Design Guarantee
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Satisfaction Guarantee
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center ">
                    <div className="pt-10 flex gap-4  ">
                      <a
                        href="#last_custom_form"
                        className=" uppercase text-black text-[15px]  bg-[#f2d119] px-5 py-2 rounded-full shadow-stone-400 "
                      >
                        ORDER NOW
                      </a>
                      <button
                        className="uppercase text-[#000000] text-[15px] bg-[#ffffff] px-5 py-2 rounded-full shadow-stone-400 "
                        onClick={maximizeChat}
                      >
                        Live Chat
                      </button>
                      <LiveChat
                        visibility={visibility}
                        setVisibility={setVisibility}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 ">
                <div className="priceTabBorder py-12 px-4 text-center mx-5 mb-10 lg:mb-0">
                  <h4 className=" text-[#fff] font-medium text-[20px] ">
                    Basic Logo Package
                  </h4>
                  <h5 className="text-[#f2d119] text-[55px] font-bold ">$55</h5>
                  <div className=" pl-7 priceTabli ">
                    <ul>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            3 logo concept
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            By 1 Designer
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            4 Rounds of Revisions
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            Final Files Included:
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            JPEG, PNG, PDF
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Unique Design Guarantee
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Satisfaction Guarantee
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center ">
                    <div className="pt-10 flex gap-4  ">
                      <a
                        href="#last_custom_form"
                        className=" uppercase text-black text-[15px]  bg-[#f2d119] px-5 py-2 rounded-full shadow-stone-400 "
                      >
                        ORDER NOW
                      </a>
                      <button
                        className="uppercase text-[#000000] text-[15px] bg-[#ffffff] px-5 py-2 rounded-full shadow-stone-400 "
                        onClick={maximizeChat}
                      >
                        Live Chat
                      </button>
                      <LiveChat
                        visibility={visibility}
                        setVisibility={setVisibility}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 ">
                <div className="priceTabBorder py-12 px-4 text-center mx-5 mb-10 lg:mb-0 ">
                  <h4 className=" text-[#fff] font-medium text-[20px] ">
                    Business Logo Package
                  </h4>
                  <h5 className="text-[#f2d119] text-[55px] font-bold ">
                    $100
                  </h5>
                  <div className=" pl-7 priceTabli ">
                    <ul>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            6 logo concept
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            By 2 Designer
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            6 Rounds of Revisions
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            Final Files Included:
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            JPEG
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Unique Design Guarantee
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Satisfaction Guarantee
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center ">
                    <div className="pt-10 flex gap-4  ">
                      <a
                        href="#last_custom_form"
                        className=" uppercase text-black text-[15px]  bg-[#f2d119] px-5 py-2 rounded-full shadow-stone-400 "
                      >
                        ORDER NOW
                      </a>
                      <button
                        className="uppercase text-[#000000] text-[15px] bg-[#ffffff] px-5 py-2 rounded-full shadow-stone-400 "
                        onClick={maximizeChat}
                      >
                        Live Chat
                      </button>
                      <LiveChat
                        visibility={visibility}
                        setVisibility={setVisibility}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className=" hidden lg:block">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-4 col-span-12 ">
                <div className="priceTabBorder py-12 px-4 text-center mx-5 mb-10 lg:mb-0 ">
                  <h4 className=" text-[#fff] font-medium text-[20px] ">
                    Discounted Logo Package
                  </h4>
                  <h5 className="text-[#f2d119] text-[55px] font-bold ">$19</h5>
                  <div className=" pl-7 priceTabli ">
                    <ul>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className="w-[16px] h-[16px] mr-3"
                          />
                          <h5 className="text-start text-[#fff] md:text-[16px] text-[13px] ">
                            1 logo concept
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            By 1 Designer
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            2 Rounds of Revisions
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            Final Files Included:
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            JPEG
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Unique Design Guarantee
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Satisfaction Guarantee
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center ">
                    <div className="pt-10 flex gap-4  ">
                      <a
                        href="#last_custom_form"
                        className=" uppercase text-black text-[15px]  bg-[#f2d119] px-5 py-2 rounded-full shadow-stone-400 "
                      >
                        ORDER NOW
                      </a>
                      <button
                        className="uppercase text-[#000000] text-[15px] bg-[#ffffff] px-5 py-2 rounded-full shadow-stone-400 "
                        onClick={maximizeChat}
                      >
                        Live Chat
                      </button>
                      <LiveChat
                        visibility={visibility}
                        setVisibility={setVisibility}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 ">
                <div className="priceTabBorder py-12 px-4 text-center mx-5 mb-10 lg:mb-0">
                  <h4 className=" text-[#fff] font-medium text-[20px] ">
                    Basic Logo Package
                  </h4>
                  <h5 className="text-[#f2d119] text-[55px] font-bold ">$55</h5>
                  <div className=" pl-7 priceTabli ">
                    <ul>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            3 logo concept
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            By 1 Designer
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            4 Rounds of Revisions
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            Final Files Included:
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            JPEG, PNG, PDF
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Unique Design Guarantee
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Satisfaction Guarantee
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center ">
                    <div className="pt-10 flex gap-4  ">
                      <a
                        href="#last_custom_form"
                        className=" uppercase text-black text-[15px]  bg-[#f2d119] px-5 py-2 rounded-full shadow-stone-400 "
                      >
                        ORDER NOW
                      </a>
                      <button
                        className="uppercase text-[#000000] text-[15px] bg-[#ffffff] px-5 py-2 rounded-full shadow-stone-400 "
                        onClick={maximizeChat}
                      >
                        Live Chat
                      </button>
                      <LiveChat
                        visibility={visibility}
                        setVisibility={setVisibility}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 ">
                <div className="priceTabBorder py-12 px-4 text-center mx-5 mb-10 lg:mb-0 ">
                  <h4 className=" text-[#fff] font-medium text-[20px] ">
                    Business Logo Package
                  </h4>
                  <h5 className="text-[#f2d119] text-[55px] font-bold ">
                    $100
                  </h5>
                  <div className=" pl-7 priceTabli ">
                    <ul>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            6 logo concept
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            By 2 Designer
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            6 Rounds of Revisions
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            Final Files Included:
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            JPEG
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Unique Design Guarantee
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-start ">
                          <Image
                            src={ListIcon}
                            className=" w-[16px] h-[16px] mr-3"
                          />
                          <h5 className=" text-start text-[#fff] md:text-[16px] text-[13px] ">
                            100% Satisfaction Guarantee
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center ">
                    <div className="pt-10 flex gap-4  ">
                      <a
                        href="#last_custom_form"
                        className=" uppercase text-black text-[15px]  bg-[#f2d119] px-5 py-2 rounded-full shadow-stone-400 "
                      >
                        ORDER NOW
                      </a>
                      <button
                        className="uppercase text-[#000000] text-[15px] bg-[#ffffff] px-5 py-2 rounded-full shadow-stone-400 "
                        onClick={maximizeChat}
                      >
                        Live Chat
                      </button>
                      <LiveChat
                        visibility={visibility}
                        setVisibility={setVisibility}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CustomLogoPricing;
