import React from 'react'

const PricingCard = ({pricing}) => {

  return (
    <div className='grid grid-cols-12 gap-4 z-50'>
  {pricing?.map((price,index)=>(
    <div className="pricingCard col-span-12 sm:col-span-6 xl:col-span-3 pl-4 bg-white rounded-2xl border-[1px] border-gray-200 w-full pb-4 pt-12" key={index}>
        
        <h4 className=" mb-8 text-2xl font-medium text-center">{price?.title}</h4>

<div className="flex justify-end w-full">

<h1 className="priceTag flex justify-center items-start text-6xl text-white font-bold text-center w-full bg-pricing-gradient rounded-l-full p-2.5"> <span className="text-xl mt-1.5">$</span> {price.price}</h1>

</div>

    <ul className="flex flex-col mt-4 text-center gap-6  md:h-96 h-72 overflow-y-scroll scrollbar-hidden">
       {price.list.map((p)=>(
         <li key={p}>{p}</li>
        )) 
      }
        
    </ul>

<div className="flex justify-center items-center">
    <button className="rounded-full border-[1px] border-gray-300 py-2 px-6 font-semibold bg-white text-gray-950">Learn More</button>
</div>

      </div>
  ))  
  }
  </div>
  )
}

export default PricingCard
