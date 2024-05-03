import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Testimonials from '@/components/testimonials'
import LogoPricingCard from '@/components/LogoPricingCard'
import animationVideo from "../../assets/package.webm"
import MagicHappens from '@/components/MagicHappens'
import YouTubeVideos from '@/components/YouTubeVideos'

const page = () => {
  return (
    <div>
      
      <div className="md:h-[60vh] h-[55vh] p-2.5 ">
        <div className="contact-hero flex h-full justify-center md:items-center">
          <div className="container z-30 max-md:mt-10">

            <p className="text-white w-full font-semibold my-8 flex items-center text-sm">
              Home{" "}
              <span className="mx-2.5">
                <MdArrowForwardIos />
              </span>{" "}
              Video Animation
            </p>

            <div className="font-semibold text-white lg:w-3/4">
              <h1 className="xl:text-6xl lg:text-5xl text-4xl lh">
              Custom 
                <span className="text-primary italic"> Animated Videos </span> That
Speaks Your Brands Story
              </h1>
              <p className="lg:text-2xl md:mt-4 mt-8">
                Get Your Brands Connected With Your Customers 24/7.
              </p>

            </div>
          </div>
        </div>
      </div>

<div className="relative">

<div className="logo-branding flex justify-center items-center">

<div className="container z-30">

<div className="grid grid-cols-12 py-8 md:gap-8">

    <div className="md:col-span-6 col-span-12 flex justify-center items-center w-full">
   
    <video src="https://fameitech.com/wp-content/uploads/2024/03/2d.webm#t=,5" width="500" height="500" controls loop={true} autoPlay={true} className='h-full w-full'></video>  

  </div>

    <div className="md:col-span-6 col-span-12 max-md:items-center flex flex-col items-stretch h-full">

<div className='text-white text-lg max-md:text-center max-md:px-4'>
    <h1 className="lg:text-5xl text-4xl lh font-semibold text-white"><span className="text-primary italic"> Hand-Crafted </span> Animated Videos</h1>

    <p className='mt-2'>Fameitech's top video animation services unleash incredible stories. As a prominent digital agency, we offer specialized skills in creating captivating and dynamic logo animations that are customized to meet the specific requirements of your business. If you need 2D animation, 3D animation, explainer videos, or motion graphics services, our skill and knowledge will consistently transform your ideas into visually captivating and innovative creations.</p>

</div>

<div className="btn w-fit rounded mt-6">Contact Us</div>


    </div>

</div>

</div>

</div>

</div>


<div className="bg-white py-8">

<div className="flex justify-center items-center flex-col">

<YouTubeVideos />

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
