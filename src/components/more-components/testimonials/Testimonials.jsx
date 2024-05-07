import React from "react";
// import whiteQuote from "../../assets/white-quote.PNG"
// import blackQuote from "../../assets/black-quote.PNG"
import { FaStar } from "react-icons/fa";
import ZachImg from "../../assets/zach.webp";
import SydneyImg from "../../assets/sydney.webp";
import AmandaImg from "../../assets/amanda.webp";
import WheellifeImg from "../../assets/wheellife.webp";
const Testimonials = () => {
  const testimonialArr = [
    {
      img: ZachImg.src,
      text: "I am the post-production supervisor for Zach King. We worked with Remy's company on VFX for a recent brand deal. Fame Itech did a fantastic job. They handled the client notes quickly and efficiently. I would recommend them.",
      name: "Colette Brown",
    },
    {
      img: SydneyImg.src,
      text: "Hakeem did an amazing job with my video even after I had several edits and a lot of the videos quality I had were poor. He made them look super professional with a title page and edit the music. The video definitely exceeded my expectations.",
      name: "Sydney Stewart",
    },
    {
      img: AmandaImg.src,
      text: "I had an exceptional experience working with Fameitech - a remarkable team of professionals. Austin Weber responsiveness and consistent communication throughout the process were impressive. In the realm of web development and graphic design.",
      name: "Amanda Parker",
    },
    {
      img: WheellifeImg.src,
      text: "I really had a great experience working with this team. They understand my vision for my first book and they were great with all my questions and requests. They took the time to really understand what I was wanting and were extremely timely with my deadline.",
      name: "WheelLifeConnections",
    },
  ];
  return (
    <div className="py-10 flex justify-center items-center flex-col bg-gray-100 h-full w-full bg-gradient-to-b from-[#060551] from-60% to-100% to-white ">
      <div className="text-center flex flex-col space-y-4 px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl tracking-widest text-white font-semibold">
          OUR SERVICES ARE CHERISHED BY ALL!
        </h1>
        <p className="w-full font-medium text-xl text-white">
          We have served hundreds of brands, and look at what they have to say
          for us.
        </p>
      </div>
      <div className="container w-full h-full">
        <div className="grid grid-cols-12 gap-4 p-2">
          {testimonialArr?.map((test, index) => (
            <div
              key={test.name}
              className="group md:col-span-6 lg:col-span-3 col-span-12 relative py-10 "
            >
              <div className="group-hover:bg-testimonial-hover size-full group-hover:text-white bg-white pt-4 pb-12 px-8 rounded-2xl flex items-center flex-col border  border-white transition-all duration-300">
                {/* {changeQuoteIndex === index ? (
                  changeQuote && (
                    <Image
                      width={100}
                      height={100}
                      src={blackQuote}
                      alt='quote'
                      className='w-14'
                    />
                  )
                ) : (
                  <Image
                    width={100}
                    height={100}
                    src={whiteQuote}
                    alt='quote'
                    className='w-14'
                  />
                )} */}
                {/*  QUOTES */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-14 fill-black group-hover:fill-white transition-all"
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 3873 3873"
                >
                  <linearGradient
                    id="a"
                    x1="621.305"
                    x2="2999.146"
                    y1="2710.223"
                    y2="332.382"
                    gradientTransform="matrix(1 0 0 -1 0 3382.983)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#d33230"></stop>
                    <stop offset="1" stopColor="#fd8f04"></stop>
                  </linearGradient>
                  <path
                    fillRule="evenodd"
                    d="M1485.4 883.9C1347.7 730.4 1165 649.1 957.2 649.1c-416.4 0-755.2 338.8-755.2 755.2 0 416.3 338.7 755.2 755.2 755.2 104.3 0 207.5-21.6 302.4-63.1-47.8 341.2-205.1 779-663.2 1065.6-16.9 10.6-23.3 32.1-15.1 50.2 6.6 14.4 21 23.2 36.2 23.2 3.8 0 7.7-.6 11.6-1.7 849.4-258.9 1201.3-1113.3 1101-1785.7-34-228.6-118.6-423.8-244.7-564.1zM875.8 3046.1c125.2-118.9 227.5-258.8 305.6-418.1 88.4-180.3 144.3-380.9 166-596.1 1.5-14.8-5.4-29.1-17.8-37.2-6.5-4.3-14.2-6.5-21.7-6.5-6.7 0-13.5 1.7-19.5 5.1-100.6 56.7-215.1 86.7-331.2 86.7-372.5 0-675.6-303.1-675.6-675.6 0-372.6 303.1-675.7 675.6-675.7 431.6 0 641.6 377.7 694.3 731.1 83.9 562.9-164.7 1259.7-775.7 1586.3zM3658.5 1448c-34.1-228.6-118.7-423.7-244.8-564.2C3275.9 730.3 3093.2 649 2885.5 649c-416.4 0-755.2 338.8-755.2 755.2 0 416.3 338.7 755.2 755.2 755.2 104.3 0 207.4-21.6 302.4-63.1-47.8 341.2-205 779-663.2 1065.6-16.8 10.6-23.3 32.1-15 50.2 6.5 14.4 20.9 23.2 36.2 23.2 3.9 0 7.7-.6 11.6-1.7 849.3-258.6 1201.1-1113.1 1101-1785.6zm-854.4 1598.1c125.2-118.9 227.4-258.8 305.5-418.1 88.4-180.3 144.4-380.9 166.1-596.1 1.4-14.8-5.4-29.1-17.8-37.2-6.6-4.3-14.2-6.5-21.8-6.5-6.7 0-13.4 1.7-19.4 5.1-100.6 56.7-215.1 86.7-331.2 86.7-372.6 0-675.6-303.1-675.6-675.6 0-372.6 303.1-675.7 675.6-675.7 431.6 0 641.6 377.7 694.3 731.1 83.9 562.9-164.9 1259.7-775.7 1586.3z"
                    clipRule="evenodd"
                    data-original="url(#a)"
                  ></path>
                </svg>

                <p className="text-lg italic text-center my-6 font-medium">
                  {test.text}
                </p>
                <div className="flex gap-4 mt-6">
                  <FaStar color="#FF7400" />
                  <FaStar color="#FF7400" />
                  <FaStar color="#FF7400" />
                  <FaStar color="#FF7400" />
                  <FaStar color="#FF7400" />
                </div>
              </div>
              <div className="rounded-full absolute -bottom-5 flex justify-center items-center w-full flex-col">
                <img
                  width={100}
                  height={100}
                  src={test.img}
                  className="w-20 rounded-full p-1 bg-white"
                />
                <p className="font-semibold">{test.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
