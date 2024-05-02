import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricingCard col-span-12 sm:col-span-6 xl:col-span-3 pl-4 bg-white rounded-2xl border-[1px] border-gray-200 w-full pb-4 pt-12">
        
        <h4 className=" mb-8 text-2xl font-medium text-center">Basic</h4>

<div className="flex justify-end w-full">

<h1 className="priceTag flex justify-center items-start text-6xl text-white font-bold text-center w-full bg-pricing-gradient rounded-l-full p-2.5"> <span className="text-xl mt-1.5">$</span> 50</h1>

</div>

    <ul className="flex flex-col mt-4 text-center gap-6  md:h-96 h-72 overflow-y-scroll scrollbar-hidden">
        <li>4 Original Logo Concepts</li>
        <li>2 Dedicated Logo Designers</li>
        <li>4 Revisions</li>
        <li>With Grey Scale Format</li>
        <li>Email Signature Design</li>
    </ul>

<div className="flex justify-center items-center">
    <button className="rounded-full border-[1px] border-gray-300 py-2 px-6 font-semibold bg-white text-gray-950">Learn More</button>
</div>

      </div>
  )
}

export default PricingCard
