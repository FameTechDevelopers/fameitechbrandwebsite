import Image from 'next/image'
import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import LogoBrandingSlider from '@/components/LogoBrandingSlider'
import kya from "../../assets/kya.webp"
import bbc from "../../assets/bbc.webp"
import msfut from "../../assets/msfut.webp"
import ascend from "../../assets/ascend-guitar.webp"
import mcnasty from "../../assets/mcnasty.webp"
import rnl from "../../assets/randl.webp"
import pizzera from "../../assets/pizzera.webp"
import fishon from "../../assets/fishon.webp"
import dwelo from "../../assets/dwelo.webp"
import johnhook from "../../assets/johnhook.webp"
import floki from "../../assets/floki.webp"
import rosemount from "../../assets/rosemount.webp"
import Testimonials from '@/components/testimonials'
import LogoPricingCard from '@/components/LogoPricingCard'

const page = () => {
  return (
    <div>
      
      <div className="md:h-[70vh] h-[55vh] p-2.5 ">
        <div className="contact-hero flex h-full justify-center md:items-center">
          <div className="container z-30 max-md:mt-10">
            <p className="text-white w-full font-semibold my-8 flex items-center text-sm">
              Home{" "}
              <span className="mx-2.5">
                <MdArrowForwardIos />
              </span>{" "}
              Logo Designing And Branding
            </p>
            <div className="font-semibold text-white ">
              <h1 className="xl:text-6xl lg:text-5xl text-4xl lh">
              Logo{" "}
                <span className="text-primary italic"> Design Company </span> That Connects Customers With Your Brand
              </h1>
              <p className="lg:text-2xl md:mt-4 mt-8">
                Get Your Brands Connected With Your Customers 24/7.
              </p>
<button className='btn mt-6 leading-10'>Live Chat</button>

            </div>
          </div>
        </div>
      </div>

<div className="relative">

<div className="logo-branding flex justify-center items-center">

<div className="container z-30">

<div className="grid grid-cols-12 py-8 md:gap-8">

    <div className="md:col-span-6 col-span-12 flex justify-center items-center w-full">
        <LogoBrandingSlider />
    </div>

    <div className="md:col-span-6 col-span-12 max-md:items-center flex flex-col items-stretch h-full">

<div className='text-white text-lg max-md:text-center max-md:px-4'>
    <h1 className="lg:text-5xl text-4xl lh font-semibold text-white"><span className="text-primary italic"> Logo </span> & Branding Services</h1>

    <p>Consider us as your dedicated branding collaborators and commence your branding expedition with Fameitech, encompassing logo creation and comprehensive branding solutions.</p>
    <p className='mt-2'>We create logos and build designer brands that mesh well with your target demographic. Our extensive logo design portfolio includes mascots, abstract marks, emblems, logos, and monograms, so every company can stand out</p>

</div>

<div className="btn w-fit rounded mt-6">Contact Us</div>


    </div>

</div>

</div>

</div>

</div>


<div className="bg-white py-8">

<div className="flex justify-center items-center flex-col">

<div className="container text-center">
<h1 className="lg:text-5xl text-4xl lh font-semibold text-gray-900 ">Choose The <span className="text-primary italic"> Right </span> Type of Logo That Fits Your Business</h1>
<p className='mt-2'>The impressive logo and branding services that Fameitech offers are proof of our competence. We use our expertise as digital agents to pick fonts with care and combine them with colour and imagery in a way that accurately represents your brand's values. Businesses of all sizes, from fledgling startups to long-standing corporations, can benefit from our expert branding services, which include logo and brand design customization.</p>

</div>


</div>


<div className="mt-6 grid grid-cols-12 p-1 w-full">

    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={kya} width={1000} height={1000}  className="w-full h-96 object-cover"/>
    </div>

    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack ">
        <Image src={bbc} width={1000} height={1000}  className="w-full h-96 object-cover"/>
    </div>
    
    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={msfut} width={1000} height={1000}  className="w-full h-96 object-cover"/>
    </div> 
    
     <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={ascend} width={1000} height={1000}  className="w-full h-96 object-cover"/>
    </div>

    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={mcnasty} width={1000} height={1000}  className="w-full h-96 object-cover"/>
    </div>

    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={rnl} width={1000} height={1000}  className="w-full h-96 object-cover"/>
    </div>
   
    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={pizzera} width={1000} height={1000}  className="w-full h-96 object-cover"/>
    </div>
    
    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={fishon} width={1000} height={1000}  className="w-full h-96 object-cover"/>
    </div>

    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={dwelo} width={1000} height={1000}  className="w-full h-96 object-cover"/>
    </div>

    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={johnhook} width={1000} height={1000}  className="w-full h-96"object-cover/>
    </div>

    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={floki} width={1000} height={1000}  className="w-full h-96"object-cover/>
    </div>

    <div className="xl:col-span-3 md:col-span-4 col-span-6 relative afterBlack">
        <Image src={rosemount} width={1000} height={1000}  className="w-full h-96"object-cover/>
    </div>

</div>

<div className="mt-8">

<div className="flex justify-center items-center">
<div className="container text-center">
<h1 className="lg:text-5xl text-4xl lh font-semibold text-gray-900 "><span className="text-primary italic"> Pricing </span> & Packages For Businesses Of <span className="text-primary italic"> All Sizes </span></h1>
<p className='mt-2'>We guarantee that you will receive design and development services that focus on generating a high return on investment with our smart web design services. Our web design pricing and combo packages are affordable and customized to match your business goals with a unique approach that maximizes your brand’s revenue.</p>


<div className="my-6">

<LogoPricingCard/>

</div>




</div>

</div>


</div>

<div className="mt-4">
<Testimonials/>
</div>


</div>





    </div>
  )
}

export default page
