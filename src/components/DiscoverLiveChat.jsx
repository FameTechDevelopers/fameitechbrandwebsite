"use client"
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import LiveChat from './LiveChat';

const DiscoverLiveChat = () => {

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


  return (
    <>
    <button className=" discover-btn flex justify-center items-center" onClick={maximizeChat}>
    Live Chat
    <FaArrowRight className=" ml-2" />
  </button>

  <LiveChat visibility={visibility} setVisibility={setVisibility} />

    </>

  )
}

export default DiscoverLiveChat
