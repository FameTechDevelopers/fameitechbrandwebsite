import { BsTabletLandscape } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import logo from "/public/images/logo.png";
import Image from "next/image";
import LiveChatBtnLanding from "../livechatBlue";
import Link from "next/link";
import Wrapper from "./Wrapper";

function Navbar() {
  return (
    <section className="flex justify-center items-center font-oswald  pt-4 px-5 md:px-0">
      <Wrapper className="flex flex-col space-y-3 space-x-3 sm:flex-row sm:justify-between sm:items-center ">
        <Image
          src={logo}
          alt="logo fameitech"
          className="w-[150px] md:w-[240px]"
        />
        <div className="flex flex-col text-white space-y-2 sm:space-y-0 sm:flex-row sm:px-12 sm:py-6 sm:bg-white sm:rounded-full sm:justify-center sm:items-center sm:gap-4">
          <div className="flex justify-center items-center space-x-2">
            {" "}
            <span>
              <FaPhoneFlip color="gray" />
            </span>{" "}
            <span className="sm:text-black text-sm sm:text-lg">
              +1 (302) 501 - 7152
            </span>
          </div>
          <div className="flex *:px-4 *:py-2 space-x-2">
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
