import React from 'react'
import Logo from "../../assets/logo.png"
import Image from 'next/image'
import { FaPhoneVolume } from 'react-icons/fa'
import Link from 'next/link'



const CheckOutNavbar = () => {
  return (
    <header className='bg-gray-900 p-3 w-full flex justify-center items-center'>

        <div className="container flex justify-between items-center gap-2">

      
     <Link href={"/"}><Image width={1000} height={1000} src={Logo} alt="logo" className=' sm:w-52 w-36 object-contain'/></Link>


<div className="flex items-center justify-center space-x-2">
            {" "}
            <span className="p-3 bg-[#f2d119] rounded-full">
              <FaPhoneVolume className=" text-white " />
            </span>{" "}
            <div className="flex flex-col sm:text-sm text-[12px]">
              <span className=" font-thin text-white">Call Us Now</span>
              <span className="text-white font-normal">
                +1 (302) 501 - 7152
              </span>
            </div>
          </div>


        </div>


    </header>
  )
}

export default CheckOutNavbar
