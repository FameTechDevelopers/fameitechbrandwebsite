"use client";
import axios from "axios";
import React, { useState } from "react";
import Lottie from "react-lottie"
import SuccessAnim from "@/lottieAnimation/succesAnimation.json"

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
    <form
      className="mt-8 text-gray-800 flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          className="my-1 w-full text-white font-medium"
          htmlFor="fullName"
        >
          Full Name <span className="text-red-700">*</span>
        </label>

        <input
          className="w-full rounded-md p-2.5 mt-2"
          type="text"
          required
          id="fullName"
          placeholder="John Smith"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <small className="text-gray-500">Enter your first name here</small>
      </div>

      <div>
        <label className="my-1 w-full text-white font-medium" htmlFor="email">
          Email Address <span className="text-red-700">*</span>
        </label>

        <input
          className="w-full rounded-md p-2.5 mt-2"
          type="email"
          required
          id="email"
          placeholder="Add Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <small className="text-gray-500">Example: user@website.com</small>
      </div>

      <div>
        <label className="my-1 w-full text-white font-medium" htmlFor="phone">
          Telephone <span className="text-red-700">*</span>
        </label>

        <input
          className="w-full rounded-md p-2.5 mt-2"
          type="number"
          required
          id="phone"
          placeholder="+(602) 448 763 22"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>

      <div>
        <label className="my-1 w-full text-white font-medium" htmlFor="inquiry">
          Inquiry <span className="text-red-700">*</span>
        </label>

        <textarea
          className="w-full rounded-md mt-2 p-2.5"
          id="inquiry"
          cols="30"
          rows="10"
          placeholder="Add Text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>

        {success && <p className="text-green-500 mt-2 font-semibold">Successful We Will Get In Touch With You Shortly</p>}
      </div>

      <button className="btn-submit rounded-md w-fit" type="submit">

      {
        success ?
        <Lottie options={defaultOptions} height={50} width={50}/>
: pending === true ? "Submitting...." :
        "Send Message"
        
        }
      </button>
    </form>
  );
};

export default ContactForm;
