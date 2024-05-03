"use client";
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full flex justify-center items-center sticky top-0 mt-[-90px] z-50">
      {show ? (
        <div className="h-screen w-full">
          <header
            className={`bg-white fixed h-full w-full py-4 ${
              show && "animate-fade"
            }`}
          >
            <div className="w-full flex items-center h-full gap-6 flex-col">
              <button onClick={() => setShow(false)}>
                <IoIosCloseCircleOutline size={35} color="gray" />
              </button>

              <nav className="flex justify-center items-center flex-col h-full">
                <ul className="flex gap-4 font-semibold text-lg flex-col text-slate-200 text-center w-full">
                  <li className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                    ABOUT US{" "}
                  </li>
                  <li className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                    LOGO DESIGN
                  </li>
                  <li className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                    WEBSITE DESIGN
                  </li>
                  <li className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                    VIDEO ANIMATION
                  </li>
                  <li className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                    OUR PACKAGES
                  </li>
                  <li className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                    CONTACT
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      ) : (
        <header className="p-2 max-lg:px-6 xl:container flex justify-between items-center gap-2 w-full">
          <img
            src="https://cdn-ikpnlcj.nitrocdn.com/weiDAkCcNhepGRAFGfsIHxqnlniULSbJ/assets/images/optimized/rev-9e3a27d/fameitech.com/wp-content/uploads/2020/04/fame-itech1-png-ce7d2b56-1.png"
            alt="logo"
            className="w-56 p-2 "
          />

          <nav>
            <ul className="flex lg:gap-6 gap-2 font-semibold xl:text-lg text-base text-slate-200 max-lg:hidden">
              <li className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                ABOUT US{" "}
              </li>
              <li className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                LOGO DESIGN
              </li>
              <li className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                WEBSITE DESIGN
              </li>
              <li className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                VIDEO ANIMATION
              </li>
              <li className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                OUR PACKAGES
              </li>
              <li className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out">
                CONTACT
              </li>
            </ul>

            <button
              className="max-lg:block hidden"
              onClick={() => setShow(true)}
            >
              <LuMenu color="white" size={30} />
            </button>
          </nav>
        </header>
      )}
    </div>
  );
};

export default Navbar;
