"use client";
import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Update state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div
      className={`w-full flex justify-center items-center sticky top-0 left-0 z-50 animate-fade duration-500 ${
        isScrolled ? "bg-[#303030bb]" : "bg-transparent"
      }`}
    >
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
                  <Link
                    href={"/about-us"}
                    onClick={() => setShow(false)}
                    className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
                  >
                    ABOUT US{" "}
                  </Link>
                  <Link
                    href={"/logo-designs"}
                    onClick={() => setShow(false)}
                    className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
                  >
                    LOGO DESIGN
                  </Link>
                  <Link
                    href={"/website-design"}
                    onClick={() => setShow(false)}
                    className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
                  >
                    WEBSITE DESIGN
                  </Link>
                  <Link
                    href={"/video-animation"}
                    onClick={() => setShow(false)}
                    className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
                  >
                    VIDEO ANIMATION
                  </Link>
                  <Link
                    href={"/our-packages"}
                    onClick={() => setShow(false)}
                    className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
                  >
                    OUR PACKAGES
                  </Link>
                  <Link
                    href={"/contact-us"}
                    onClick={() => setShow(false)}
                    className="text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
                  >
                    CONTACT
                  </Link>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      ) : (
        <header className="py-2 max-lg:px-6 xl:container flex justify-between items-center gap-2 w-full">
          <Image
            src={Logo}
            alt="logo"
            className="lg:w-52 w-36 p-2"
            width={1000}
            height={1000}
            objectFit="contain"
            onClick={handleHome}
          />

          <nav>
            <ul className="flex lg:gap-6 gap-1 font-semibold xl:text-lg text-[0.95rem] text-slate-200 max-lg:hidden px-2">
              <Link
                href={"/about-us"}
                className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
              >
                ABOUT US{" "}
              </Link>
              <Link
                href={"/logo-designs"}
                className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
              >
                LOGO DESIGN
              </Link>
              <Link
                href={"/website-design"}
                className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
              >
                WEBSITE DESIGN
              </Link>
              <Link
                href={"/video-animation"}
                className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
              >
                VIDEO ANIMATION
              </Link>
              <Link
                href={"/our-packages"}
                className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
              >
                OUR PACKAGES
              </Link>
              <Link
                href={"/contact-us"}
                className="hover:text-[#ff7502] border-b-[2px] hover:border-[#ff7502] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
              >
                CONTACT
              </Link>
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
