"use client"
import LiveChat from '@/components/LiveChat';
import React, { useState } from 'react'

const LiveChatBtnLanding = () => {

    const [visibility,setVisibility] = useState("minimized")

    const maximizeChat = async () => {
        if (visibility === "minimized") {
            setVisibility("maximized")
        }else{   
            setVisibility("minimized")
        }
    };

  return (
    <>
    <button className="bg-pri_orange w-fit px-6 py-3 font-poppins-semibold" onClick={maximizeChat}>
            LiveChat
          </button>
          <LiveChat visibility={visibility} setVisibility={setVisibility} />
    </>
  )
}

export default LiveChatBtnLanding