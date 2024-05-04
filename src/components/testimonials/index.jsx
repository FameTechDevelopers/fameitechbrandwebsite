"use client";
import React, { useState } from "react";
import whiteQuote from "../../assets/white-quote.PNG";
import blackQuote from "../../assets/black-quote.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ZachImg from "../../assets/zach.webp";
import SydneyImg from "../../assets/sydney.webp";
import AmandaImg from "../../assets/amanda.webp";
import WheellifeImg from "../../assets/wheellife.webp";

const Testimonials = () => {
  const [changeQuote, setChangeQuote] = useState(false);
  const [changeQuoteIndex, setChangeQuoteIndex] = useState(null);

  const testimonialArr = [
    {
      img: ZachImg,
      text: "I am the post-production supervisor for Zach King. We worked with Remy's company on VFX for a recent brand deal. Fame Itech did a fantastic job. They handled the client notes quickly and efficiently. I would recommend them.",
      name: "Colette Brown",
    },

    {
      img: SydneyImg,
      text: "Hakeem did an amazing job with my video even after I had several edits and a lot of the videos quality I had were poor. He made them look super professional with a title page and edit the music. The video definitely exceeded my expectations.",
      name: "Sydney Stewart",
    },

    {
      img: AmandaImg,
      text: "I had an exceptional experience working with Fameitech - a remarkable team of professionals. Austin Weber responsiveness and consistent communication throughout the process were impressive. In the realm of web development and graphic design.",
      name: "Amanda Parker",
    },

    {
      img: WheellifeImg,
      text: "I really had a great experience working with this team. They understand my vision for my first book and they were great with all my questions and requests. They took the time to really understand what I was wanting and were extremely timely with my deadline.",
      name: "WheelLifeConnections",
    },
  ];

  return (
    <div className="py-10 flex justify-center items-center flex-col bg-gray-100 h-full w-full">
      <div className="text-center">
        <h1 className="text-5xl font-semibold">
          Our Services Are{" "}
          <span className="text-primary italic"> Cherished </span> By All!
        </h1>
        <p className="w-full font-medium my-2.5">
          We have served hundreds of brands, and look at what they have to say
          for us.
        </p>
      </div>

      <div className="container w-full h-full">
        <div className="grid grid-cols-12 gap-4 p-2">
          {testimonialArr?.map((test, index) => (
            <div className="md:col-span-6 lg:col-span-3 col-span-12 relative py-10">
              <div
                className="hover:bg-testimonial-hover hover:text-white bg-white pt-4 pb-12 px-8 rounded-2xl flex items-center flex-col"
                onMouseEnter={() => {
                  setChangeQuote(true);
                  setChangeQuoteIndex(index);
                }}
                onMouseLeave={() => {
                  setChangeQuote(false);
                  setChangeQuoteIndex(null);
                }}
              >
                {changeQuoteIndex === index ? (
                  changeQuote && (
                    <Image
                      width={100}
                      height={100}
                      src={blackQuote}
                      alt="quote"
                      className="w-14"
                    />
                  )
                ) : (
                  <Image
                    width={100}
                    height={100}
                    src={whiteQuote}
                    alt="quote"
                    className="w-14"
                  />
                )}

                <p className="text-lg italic text-center my-6 font-medium">
                  {test.text}
                </p>

                <div className="flex gap-4 mt-6">
                  <FaStar color="#ff7400" />
                  <FaStar color="#ff7400" />
                  <FaStar color="#ff7400" />
                  <FaStar color="#ff7400" />
                  <FaStar color="#ff7400" />
                </div>
              </div>

              <div className="rounded-full absolute -bottom-5 flex justify-center items-center w-full flex-col">
                <Image
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
