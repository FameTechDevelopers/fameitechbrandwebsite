import Wrapper from "../Wrapper";
import { BsTabletLandscape } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import logo from "/public/images/logo.png";

function Navbar() {
  return (
    <section className="flex justify-center items-center font-oswald  pt-2 px-5">
      <Wrapper className="flex flex-col space-y-3 space-x-3 sm:flex-row sm:justify-between sm:items-center sm:px-4">
        <img src={logo} alt="logo fameitech" className="w-[150px]" />
        <div className="flex flex-col text-white space-y-2 sm:flex-row sm:px-8 sm:py-1 sm:bg-white sm:rounded-full sm:justify-center sm:items-center sm:gap-4">
          <div className="flex justify-center space-x-2">
            {" "}
            <span>
              <FaPhoneFlip color="gray" />
            </span>{" "}
            <span className="sm:text-black sm:text-sm">
              +1 (872) 233 - 3612
            </span>
          </div>
          <div className="flex *:px-4 *:py-2 space-x-2">
            <button className="bg-pri_orange font-poppins font-bold">
              Live Chat
            </button>
            <button className="bg-pri_blue flex items-center justify-center space-x-2">
              <span>
                <BsTabletLandscape color="white" size={20} />
              </span>{" "}
              <span className="text-sm font-oswald"> GET A FREE QUOTE</span>
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Navbar;