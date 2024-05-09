"use client";
import { useState } from "react";
import Wrapper from "../common/Wrapper";
import Lottie from "react-lottie";
import SuccessAnim from "@/lottieAnimation/succesAnimation.json";
import axios from "axios";
import LiveChat from "@/components/LiveChat";
function Form() {
  const [visibility,setVisibility] = useState("minimized")

  const maximizeChat = async () => {
      if (visibility === "minimized") {
          setVisibility("maximized")
      //   setTimeout(() => {
      //     setVisibility("minimized")
          
      //   }, 1000);
      }else{   
          setVisibility("minimized")
      }
  };
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    formData.append("web_type", window.location.pathname);
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
      setMessage("");
      setPending(false);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: SuccessAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className='bgLogoForm bg-cover bg-center bg-no-repeat size-full flex justify-center items-center text-white py-20 px-4'>
      <Wrapper className={"flex flex-col md:flex-row space-y-10  "}>
        <div className='w-full md:w-[50%] flex flex-col space-y-3 '>
          <p className='font-bold text-xl md:text-3xl'>
            Let{`'`}s get the Ball Rolling
          </p>
          <p className='font-poppins md:text-xl md:max-w-[500px]'>
            Ask us anything; our customer care representatives are the most
            welcoming.
          </p>
          <div className='flex flex-col py-10'>
            <p className='font-bold font-poppins text-lg md:text-2xl'>
              +1 302-501-7152
            </p>
            <p className='font-bold font-poppins text-lg md:text-2xl'>
              info@fameitech.com
            </p>
          </div>
          <button onClick={maximizeChat} className='bg-pri_orange w-fit text-black sm:text-xl px-2 py-2 sm:px-6 sm:py-4'>
            Live Chat To Avail Offer!
          </button>
          <LiveChat visibility={visibility} setVisibility={setVisibility} />
        </div>
        <div className='w-full md:w-[50%] flex space-y-5 flex-col'>
          <p className='font-bold text-4xl md:text-6xl'>
            Let{`'`}s Get Started!
          </p>
          <form
            onSubmit={handleSubmit}
            className='size-full flex flex-col font-poppins space-y-2 *:text-sm md:*:text-base *:p-2 md:*:p-3 *:rounded-sm  text-black'
            id="logoDesign_ContactForm"
          >
            <input
            required
            id="name_field"
              type='text'
              placeholder='Enter Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
            required
              type='text'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
            required
              type='text'
              placeholder='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
            required
              name=''
              id=''
              cols='30'
              rows='3'
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {success && (
              <p className='text-green-500 mt-2 font-semibold'>
                Successful We Will Get In Touch With You Shortly
              </p>
            )}

            <button className='text-xl py-2 bg-pri_blue px-0 md:!px-20 text-white  w-full md:w-fit font-oswald'>
              {success ? (
                <Lottie options={defaultOptions} height={50} width={50} />
              ) : pending === true ? (
                "Submitting...."
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}

export default Form;
