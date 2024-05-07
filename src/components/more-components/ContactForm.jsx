"use client"
import React, { useState } from "react";
import Lottie from "react-lottie"
import SuccessAnim from "@/lottieAnimation/succesAnimation.json"
import axios from "axios";
const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    formData.append("web_type", "fameitech-contact");
    setPending(true)
    try {
      const response = await axios.post(
        "https://portal.famewheels.com/contact-us",
        formData
      );

      console.log(response.data);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setPending(false)
      setSuccess(true)
    } catch (error) {
      console.log(error);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SuccessAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <section class="main-contact w-full z-30 rounded-2xl border-[#073A9C] border-1 p-[32px]">
      <div class=" mx-auto">
        <h2 class="mb-4 text-4xl text-white tracking-tight font-extrabold text-center  ">
          CHAT WITH US
        </h2>
        <p className=" text-center text-white text-[1.4rem] font-medium">
          TO AVAIL{" "}
          <span className="text-[#FE7524] font-bold text-[1.8rem]">70%</span>{" "}
          DISCOUNT
        </p>
        <form id="customLogo_topForm" className="space-y-8 px-4 text-white" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-transparent border border-[#073A9C] bg-[#04112c] w-full text-sm rounded-lg p-4"
              placeholder="Enter your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-transparent border border-[#073A9C] bg-[#04112c] w-full text-sm rounded-lg p-4"
              placeholder="Enter Your Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              className="shadow-sm bg-transparent border border-[#073A9C] bg-[#04112c] w-full text-sm rounded-lg p-4"
              placeholder="Enter Your Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div class="sm:col-span-2">
            <textarea
              id="message"
              rows="6"
              class="shadow-sm bg-transparent border border-[#073A9C] bg-[#04112c] w-full text-sm rounded-lg p-4"
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          {success && <p className="text-green-500 mt-2 font-semibold">Successful We Will Get In Touch With You Shortly</p>}

          <div className=" flex justify-center items-center">
            <button
              type="submit"
              class="py-3 px-12 text-sm font-medium text-center text-white bg-[#073A9C] rounded-full"
            >

{
        success ?
        <Lottie options={defaultOptions} height={50} width={50}/>
: pending === true ? "Submitting...." :
        "RESERVE THE DISCOUNT"
        
        }

              
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
