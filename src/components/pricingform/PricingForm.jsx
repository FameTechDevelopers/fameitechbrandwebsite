import Image from 'next/image'
import React from 'react'
import tick from "../../assets/tick.png"
import walmar from "../../assets/walmar.png"
import call from "../../assets/call-vector.png"
import mail from "../../assets/envolep.png"

const PricingForm = () => {
  return (
    <div className='bg-black flex justify-center items-center pt-16 pb-5 '>
                    
<div className="container">

<div className="grid grid-cols-12 gap-8 jus">

<div className="lg:col-span-4 sm:col-span-6 col-span-12 px-2">
    <h4 className='text-[#FE7524] md:text-xl text-base font-medium'>Ultimate Value For Start-Ups And Businesses</h4>
    <h1 className='text-[3.2rem] font-bold text-white'>All In One Combo</h1>

<p className='text-white text-sm'>This logo design package offers remarkable value for companies looking 
to establish their online presence and increase their market reach with 
innovative digital solutions. Benefit from our power- packed combo 
package, custom made to suit your needs.</p>

<div className="relative border border-white mt-10 h-36">
    <p className="absolute -top-8 left-0 w-fit z-10 bg-black xl:text-2xl text-xl text-center font-light text-gray-300 mx-14">Combo Package Complete
Branding Solution</p>

<div className="mt-16 text-white text-center xl:text-5xl lg:text-3xl sm:text-3xl text-2xl font-bold flex gap-4 items-center justify-center px-4">
    <span className='text-[#FE7524]'>$999</span>
    <div className='relative'>
        <div className="absolute p-0.5 top-5 w-full bg-[#FE7524]"></div>
        $3,330</div>

    <span className='font-medium text-4xl'>Only</span>
</div>

</div>

<div className="pt-10 flex gap-4  ">
                  <button className=" uppercase text-[#fff] bg-[#FE7524] px-8 py-2 rounded-full shadow-stone-400 font-bold text-sm">
Live Chat                  </button>
                  <button className="uppercase text-[#000000] bg-[#ffffff] px-8 py-2 rounded-full shadow-stone-400 font-bold text-sm">
                    Order now
                  </button>

                </div>

</div>

<div className="lg:col-span-4 sm:col-span-6 col-span-12">

<div className="px-2">

<div>
    <h4 className='font-bold text-2xl text-[#FE7524]'>Logo Design</h4>

    <ul className='mt-3'>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Unlimited Logo Design Concepts</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Unlimited Revisions</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Icon Design</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>All Final File Formats</li>
    </ul>
</div>


<div className='mt-8'>
    <h4 className='font-bold text-2xl text-[#FE7524]'>Stationary Design</h4>

    <ul className='mt-3'>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Business Card, Letterhead, Envelope</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>MS Word Letterhead</li>

    </ul>
</div>

<div className='mt-8'>
    <h4 className='font-bold text-2xl text-[#FE7524]'>Value Added Services</h4>

    <ul className='mt-3'>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Dedicated Account Manager</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Customizable</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Complete Deployment</li>

    </ul>
</div>

</div>


</div>

<div className="lg:col-span-4 sm:col-span-6 col-span-12">

<div className="px-2">

<div>
    <h4 className='font-bold text-2xl text-[#FE7524]'>Website Design</h4>

    <ul className='mt-3'>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>UNLIMITED Pages Website</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Content Management System (CMS)</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Complete Deployment</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>5 Stock Photos + 3 Banner Designs</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Any 3 Social Media Platforms</li>
        <li className='text-white flex gap-2 items-center'><span> <Image src={tick} width={1000} height={1000} className='w-3'/> </span>Complete W3C Certified HTML</li>
    </ul>
</div>

<div className="mt-8">
    <Image src={walmar} width={1000} height={1000} className='w-fit'/>
</div>

</div>


</div>

</div>


<div className="bgConatctOrange rounded-3xl mt-10">

    <div className="grid grid-cols-12 gap-6 p-6">

<div className="md:col-span-6 col-span-12 text-white">
    <h1 className='text-4xl font-bold'>let’s get the Ball Rolling</h1>

    <p className='text-lg mt-4'>Ask us anything; our customer carerepresentatives are the most welcoming.</p>

<div className="flex gap-3 flex-col">

<div className='flex gap-4 mt-6 text-2xl font-bold'><Image src={call} className='w-6 object-contain' /> +1 302-501-7152</div>
<div className='flex gap-4 text-2xl font-bold'><Image src={mail} className='w-6 object-contain'/>info@fameitech.com</div>
</div>


<div className="mt-8">
<button className="uppercase text-[#000000] bg-[#ffffff] px-8 py-2 rounded-full shadow-stone-400 font-bold text-sm">
                    Order now
                  </button>
</div>

</div>

    <div className="md:col-span-6 col-span-12">
        
        <form className='flex flex-col gap-6 text-gray-700'>

<input type="text" required placeholder='Enter Your Name' className='rounded-xl p-3 bg-[#FEF0DE]'/>

<input type="email" required placeholder='Email Address' className='rounded-xl p-3 bg-[#FEF0DE]'/>

<input type="number" required placeholder='Phone' className='rounded-xl p-3 bg-[#FEF0DE]'/>

<textarea name="" id="" cols="30" rows={8}  className='rounded-xl p-3 bg-[#FEF0DE]' placeholder="Message" ></textarea>

<div>
<button className="uppercase text-[#000000] bg-[#ffffff] px-8 py-2 rounded-full shadow-stone-400 font-bold text-sm">
                    Send now
                  </button>
</div>

        </form>

    </div>

    </div>

</div>


</div>

    </div>
  )
}

export default PricingForm
