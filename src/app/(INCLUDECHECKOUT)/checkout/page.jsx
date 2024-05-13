import React from 'react'
import safeCheckout from "@/assets/safe-checkout.jpg"
import stripe from "@/assets/powered-stripe.png"
import Image from 'next/image'

const Checkout = () => {
  return (
    <div className='flex justify-center items-center my-6'>
      

      <div className="container">

<div className="grid grid-cols-12 sm:gap-4 p-2">


<div className="lg:col-span-8 col-span-12 bg-white p-3 rounded-lg">

<div className="flex p-1.5 w-full bg-primary rounded-lg text-xl font-bold gap-3 items-center">
    <p className='bg-white text-primary px-3 py-1 rounded'>1</p>
    <p className='text-white'>Billing Information</p>
</div>

<form className='mt-4 grid grid-cols-12 sm:gap-3 gap-2'>

<input type="text" placeholder='First Name' className='border-[1px] border-gray-300 p-2.5 rounded-lg col-span-6' />
<input type="text" placeholder='Last Name' className='border-[1px] border-gray-300 p-2.5 rounded-lg col-span-6' />
<input type="email" placeholder='Email Address' className='border-[1px] border-gray-300 p-2.5 rounded-lg col-span-6' />
<input type="number" placeholder='Phone' className='border-[1px] border-gray-300 p-2.5 rounded-lg col-span-6' />
<input type="text" placeholder='Address' className='border-[1px] border-gray-300 p-2.5 rounded-lg col-span-12' />
<input type="text" placeholder='Company Name' className='border-[1px] border-gray-300 p-2.5 rounded-lg col-span-6' />
<select className='border-[1px] border-gray-300 p-2.5 rounded-lg col-span-6'>
<option value="" selected disabled>Select Country</option>
<option value="United States">United States</option>
</select>

<input type="text" placeholder='State' className='border-[1px] border-gray-300 p-2.5 rounded-lg col-span-4' />
<input type="text" placeholder='City' className='border-[1px] border-gray-300 p-2.5 rounded-lg col-span-4' />
<input type="text" placeholder='Zip Code' className='border-[1px] border-gray-300 p-2.5 rounded-lg col-span-4' />

<div className="flex p-1.5 w-full bg-primary rounded-lg text-xl font-bold gap-3 mt-4 items-center col-span-12">
    <p className='bg-white text-primary px-3 py-1 rounded'>2</p>
    <p className='text-white'>Payment Information</p>
</div>



<div className="border-[1px] border-gray-300 p-2.5 rounded-lg col-span-12 mt-4 grid grid-cols-12 gap-2">

<input type="text" placeholder='Card Number' className='border-[0px] col-span-10 outline-none' />
<input type="text" placeholder='MM / YY' className='border-[0px] col-span-1 outline-none' />
<input type="number" placeholder='CVC' className='border-[0px] col-span-1 outline-none' />

</div>


<button className="rounded-lg col-span-12 bg-primary py-1.5 text-xl text-white font-medium">Pay Now</button>


</form>


</div>

<div className="lg:col-span-4 col-span-12 bg-white p-3 rounded-lg">

<div className="flex p-1.5 w-full bg-primary rounded-lg text-xl font-bold gap-3 items-center">
    <p className='bg-white text-primary px-3 py-1 rounded'>3</p>
    <p className='text-white'>Billing Invoice</p>
</div>

<div className='border-[1px] border-gray-300  rounded-lg mt-4 flex flex-col justify-center items-center w-full'>

<h1 className='border-b-[1px] border-b-gray-300 p-2.5 w-full font-semibold text-xl'>Prime Logo</h1>
<div className='border-b-[1px] border-b-gray-300 p-2.5 w-full flex justify-between gap-2'><h1 className='font-medium'>Item Price</h1> <p>USD 199</p></div>
<div className='p-2.5 w-full flex justify-between gap-2'><h1 className='font-medium'>Total (USD)</h1> <p>USD 209</p></div>

</div>


<div className='border-[1px] border-gray-300  rounded-lg mt-4 w-full grid grid-cols-12'>

<input type="text" className='border-0 outline-none col-span-9 p-1.5'/>

<button className='bg-gray-500 col-span-3 p-1.5 text-center rounded-r-lg text-sm text-white'>Redeem</button>

</div>


<div className="col-span-12 border-dashed mt-4 border-[1px] border-gray-300">
</div>

<div className="col-span-12 flex gap-2 mt-4">

<Image src={safeCheckout} width={1000} height={1000} className='object-contain w-1/2' />
<Image src={stripe} width={1000} height={1000} className='object-contain w-1/2' />


</div>

</div>

</div>

      </div>

      
    </div>
  )
}

export default Checkout
