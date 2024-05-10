import { BsTabletLandscape } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import logo from "/public/images/logo.png";
import Image from "next/image";
import LiveChatBtnLanding from "../livechatBlue";
import Link from "next/link";
import Wrapper from "./Wrapper";

function Navbar() {
  return (
    <section className="flex justify-center relative z-[99] items-center font-oswald  pt-4 px-5 xl:px-0">
      <Wrapper className="flex justify-between space-y-3 space-x-3 sm:flex-row  sm:items-center ">
        <Image
          src={logo}
          alt="logo fameitech"
          className="w-[150px] md:w-[240px]"
        />
        <div className="flex flex-col text-white gap-y-1 md:gap-y-2 sm:space-y-0 sm:flex-row sm:px-8 sm:py-3 xl:px-12 xl:py-6 sm:bg-white sm:rounded-full sm:justify-center sm:items-center sm:gap-3">
          <div className="flex flex-col sm:flex-row justify-center items-center space-x-2 text-xs sm:text-base">
            {" "}
            <span>
              <FaPhoneFlip color="gray" className="hidden sm:block" />
              <span className="font-oswald-light sm:hidden">CALL US NOW</span>
            </span>{" "}
            <span className="sm:text-black  md:text-lg">
              +1 (302) 501 - 7152
            </span>
          </div>
          <div className="hidden  sm:flex *:px-4 *:py-2 space-x-2">
            {/* <button className='bg-pri_orange font-poppins font-bold'>Live Chat</button> */}
            <LiveChatBtnLanding />
            <Link
              href={"#name_field"}
              className="bg-pri_blue flex items-center justify-center space-x-2"
            >
              <span>
                <BsTabletLandscape color="white" size={20} />
              </span>{" "}
              <span className="text-xs md:text-sm text-center font-oswald">
                {" "}
                GET A FREE QUOTE
              </span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Navbar;
