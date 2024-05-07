"use client"
import { LiveChatWidget } from '@livechat/widget-react'
import React from 'react'

const LiveChat = ({visibility,setVisibility}) => {
  return <LiveChatWidget license="17799057" visibility={visibility} on={(data) => {
    switch (data.visibility) {
      case "maximized":
        setVisibility("maximized")
        break;
      case "minimized":
        setVisibility("minimized")
        break;
      case "hidden":
        break;
    }
  }}
  /> 
}

export default LiveChat
