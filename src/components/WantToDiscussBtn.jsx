"use client"
import React, { useState } from 'react'
import LiveChat from './LiveChat';

const WantToDiscussBtn = () => {
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
    <button onClick={maximizeChat} className=" discover-btn flex justify-center items-center">
                Want To Discuss?
              </button>
              <LiveChat visibility={visibility} setVisibility={setVisibility} />
              </>


  )
}

export default WantToDiscussBtn