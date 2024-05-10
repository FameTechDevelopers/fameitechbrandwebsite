"use client";
import React, { useState } from "react";
import LiveChatButton from "./LiveChatButton";
import axios from "axios";
import Lottie from "react-lottie";
import SuccessAnim from "@/lottieAnimation/succesAnimation.json";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MainSection = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("web_type", "fameitech.com");
    setPending(true);
    try {
      const response = await axios.post(
        "https://portal.famewheels.com/contact-us",
        formData
      );

      console.log(response.data);

      setName("");
      setEmail("");
      setPhone("");
      setPending(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);

        router.push("/thankyou");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SuccessAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className=" main-section">
        <div class="video-container">
          <video className=" w-full h-[100%] object-cover" autoPlay muted loop>
            <source
              src="https://gallery.famewheels.com/portfolio/top-bg.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="overlay"></div>
        </div>
        <div className=" main-content sm:px-14 px-2">
          <h1 className=" lg:text-6xl sm:text-4xl text-3xl">
            Creating
            <span className="text-primary font-bold italic">
              {" "}
              Superior{" "}
            </span>{" "}
            Digital Experience
          </h1>
          <p className=" sm:text-4xl text-2xl font-medium mt-5">
            CUSTOM WEBSITES, BRANDING & DIGITAL MARKETING SOLUTIONS
          </p>

          <div className=" grid grid-cols-12 lg:mt-16 mt-6 lg:w-[64%] w-full py-8 px-4 mx-auto bg-[#00000076]">
            <div className=" md:col-span-3 col-span-12">
              <input
                className="border-2 border-white w-[92%] m-2 py-3 px-6 bg-transparent"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=" md:col-span-3 col-span-12">
              {" "}
              <input
                className="border-2 border-white w-[92%] m-2 py-3 px-6 bg-transparent"
                placeholder="Add email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" md:col-span-3 col-span-12">
              {" "}
              <input
                className="border-2 border-white w-[92%] m-2 py-3 px-6 bg-transparent"
                placeholder="Phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className=" md:col-span-3 flex justify-center items-center col-span-12">
              {" "}
              <button
                className="btn w-full m-2 btn-main"
                onClick={handleSubmit}
              >
                {success ? (
                  <Lottie options={defaultOptions} height={35} width={35} />
                ) : pending === true ? (
                  "Submitting...."
                ) : (
                  "Get A Quote"
                )}
              </button>
            </div>
            {success && (
              <p className="text-green-500 mt-2 font-semibold col-span-12">
                Successful We Will Get In Touch With You Shortly
              </p>
            )}
          </div>

          <div className="flex justify-center items-center lg:mt-12 sm:mt-6 mt-3">
            <Link href={"/contact-us"}>
              <button className="btn mr-6">Get A Quote</button>
            </Link>
            <LiveChatButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
