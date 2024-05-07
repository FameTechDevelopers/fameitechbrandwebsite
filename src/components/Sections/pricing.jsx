import React from "react";
import Image from "next/image";
import ListIcon from "./images/pricing-list-icon.png";

const CustomLogoPricing = () => {
  return (
    <div className="bg-black">
      <div className="  bg-[#073A9C] py-16 px-2 rounded-bl-[100px] rounded-br-[100px] ">
        <div className="max-w-[1700px] px-12 mx-auto ">
          <h2 className=" text-[#fff] text-[60px] leading-[70px] font-bold ">
            <span className=" text-[45px] font-bold ">CHOOSE</span> <br /> A{" "}
            <span className="text-[#FE7524]">PACKAGE</span> THAT SUITS YOU
          </h2>
        </div>
        <div className=" max-w-[1700px]  mx-auto">
          <div className=" grid grid-cols-12 py-4 pb-10 ">
            {/* <div className="col-span-1  "></div> */}
            <div className="lg:col-span-4 col-span-12 ">
              <div className="priceTabBorder py-12 px-4 text-center mx-5 mb-10 lg:mb-0 ">
                <h4 className=" text-[#fff] font-medium text-[20px] ">
                  Discounted Logo Package
                </h4>
                <h5 className="text-[#FE7524] text-[55px] font-bold ">$19</h5>
                <div className=" pl-7 priceTabli ">
                  <ul>
                    <li>
                      <div className="flex items-center justify-start ">
                        <Image
                          src={ListIcon}
                          className=" w-[16px] h-[16px] mr-3"
                        />
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">JPEG</h5>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-start ">
                        <Image
                          src={ListIcon}
                          className=" w-[16px] h-[16px] mr-3"
                        />
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
                          100% Satisfaction Guarantee
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center ">
                  <div className="pt-10 flex gap-4  ">
                    <a href="#last_custom_form" className=" uppercase text-[#fff] text-[15px]  bg-[#FE7524] px-5 py-2 rounded-full shadow-stone-400 ">
                      ORDER NOW
                    </a>
                    <a href="tel:+18722333612" className="uppercase text-[#000000] text-[15px] bg-[#ffffff] px-5 py-2 rounded-full shadow-stone-400 ">
                      Call now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 ">
              <div className="priceTabBorder py-12 px-4 text-center mx-5 mb-10 lg:mb-0">
                <h4 className=" text-[#fff] font-medium text-[20px] ">
                  Basic Logo Package
                </h4>
                <h5 className="text-[#FE7524] text-[55px] font-bold ">$55</h5>
                <div className=" pl-7 priceTabli ">
                  <ul>
                    <li>
                      <div className="flex items-center justify-start ">
                        <Image
                          src={ListIcon}
                          className=" w-[16px] h-[16px] mr-3"
                        />
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
                          100% Satisfaction Guarantee
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center ">
                  <div className="pt-10 flex gap-4  ">
                    <a href="#last_custom_form" className=" uppercase text-[#fff] text-[15px]  bg-[#FE7524] px-5 py-2 rounded-full shadow-stone-400 ">
                      ORDER NOW
                    </a>
                    <a href="tel:+18722333612" className="uppercase text-[#000000] text-[15px] bg-[#ffffff] px-5 py-2 rounded-full shadow-stone-400 ">
                      Call now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 ">
              <div className="priceTabBorder py-12 px-4 text-center mx-5 mb-10 lg:mb-0 ">
                <h4 className=" text-[#fff] font-medium text-[20px] ">
                  Business Logo Package
                </h4>
                <h5 className="text-[#FE7524] text-[55px] font-bold ">$100</h5>
                <div className=" pl-7 priceTabli ">
                  <ul>
                    <li>
                      <div className="flex items-center justify-start ">
                        <Image
                          src={ListIcon}
                          className=" w-[16px] h-[16px] mr-3"
                        />
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">JPEG</h5>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-start ">
                        <Image
                          src={ListIcon}
                          className=" w-[16px] h-[16px] mr-3"
                        />
                        <h5 className=" text-[#fff] text-[16px] ">
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
                        <h5 className=" text-[#fff] text-[16px] ">
                          100% Satisfaction Guarantee
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center ">
                  <div className="pt-10 flex gap-4  ">
                    <a href="#last_custom_form" className=" uppercase text-[#fff] text-[15px]  bg-[#FE7524] px-5 py-2 rounded-full shadow-stone-400 ">
                      ORDER NOW
                    </a>
                    <a href="tel:+18722333612" className="uppercase text-[#000000] text-[15px] bg-[#ffffff] px-5 py-2 rounded-full shadow-stone-400 ">
                      Call now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLogoPricing;
