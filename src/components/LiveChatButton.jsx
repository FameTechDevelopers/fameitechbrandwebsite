"use client"
import React, { useState } from 'react'
import LiveChat from './LiveChat';

const LiveChatButton = () => {


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
    <><button className="btn" onClick={maximizeChat}>Live Chat</button><LiveChat visibility={visibility} setVisibility={setVisibility} /></>

  )
}

export default LiveChatButton
