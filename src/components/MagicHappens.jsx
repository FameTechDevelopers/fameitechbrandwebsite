import Image from 'next/image'
import React from 'react'
import magic1 from "../assets/magic-1.png"
import magic2 from "../assets/magic-2.png"
import magic3 from "../assets/magic-3.png"


const MagicHappens = () => {
  return (
    <div className='bg-gray-100 flex justify-center py-9'>

        <div className="container">
<div className='text-center'>
        <h1 className="lg:text-5xl text-4xl lh font-semibold text-gray-900 ">At <span className="text-primary italic"> Fameitech </span>We Make Magic Happen!</h1>
<p className='mt-2'>We guarantee that you will receive design and development services that focus on generating a high return on investment with our smart web design services. Our web design pricing and combo packages are affordable and customized to match your business goals with a unique approach that maximizes your brand’s revenue.</p>
</div>

<div className="grid grid-cols-12 gap-8 mt-10 justify-items-center">

<div className="md:col-span-4 col-span-11 flex md:mb-7 flex-col justify-center items-center gap-4 text-center p-2">

<Image src={magic1} width={1000} height={1000} className='w-36 object-contain h-full hover:scale-105 transition-all ease-in-out' />

<h4 className='text-2xl font-semibold'>Initial Phase</h4>

<p className='text-lg'>We actively engage with our clients to get the original concept of the project. Next, our creative teams collaborate and refine it into a brilliant masterpiece.</p>

</div>

<div className="md:col-span-4 col-span-11 flex flex-col justify-center items-center gap-4 text-center p-2">

<Image src={magic2} width={1000} height={1000} className='w-36 object-contain h-full hover:scale-105 transition-all ease-in-out' />

<h4 className='text-2xl font-semibold'>Execution</h4>

<p className='text-lg'>We possess a highly skilled workforce and cutting-edge rendering machines. Innovation is ingrained in our nature, leading us to consistently develop exceptional products.</p>

</div>

<div className="md:col-span-4 col-span-11 md:mb-3 flex flex-col justify-center items-center gap-4 text-center p-2">

<Image src={magic3} width={1000} height={1000} className='w-36 object-contain h-full hover:scale-105 transition-all ease-in-out' />

<h4 className='text-2xl font-semibold'>Delivery</h4>

<p className='text-lg mb-4'>Punctual delivery is our most exceptional service. Our conducive work environment guarantees prompt delivery of your assignment.</p>

</div>

</div>





        </div>


      
    </div>
  )
}

export default MagicHappens
