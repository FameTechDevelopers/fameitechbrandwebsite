import React from "react";

const LogoPricingCard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-2.5">
      <div className="pricingCard col-span-12 sm:col-span-6 xl:col-span-3 pl-4 bg-white rounded-2xl border-[1px] border-gray-200 w-full pb-4 pt-12">
        <h4 className=" mb-8 text-2xl font-medium text-center">Basic</h4>

        <div className="flex justify-end w-full">
          <h1 className="priceTag flex justify-center items-start text-5xl text-white font-bold text-center w-full bg-pricing-gradient rounded-l-full p-2.5 py-5">
            <span className="text-xl mt-1.5">$ </span> 50
          </h1>
        </div>

        <ul className="flex flex-col mt-4 text-center gap-8  md:h-96 h-72 overflow-y-scroll scrollbar-hidden">
          <li>4 Original Logo Concepts</li>
          <li>2 Dedicated Logo Designers</li>
          <li>4 Revisions</li>
          <li>With Grey Scale Format</li>
          <li>Email Signature Design</li>
        </ul>

        <div className="flex justify-center items-center">
          <button className="rounded-full border-[1px] border-gray-300 py-2 px-6 font-semibold bg-white text-gray-950">
            Learn More
          </button>
        </div>
      </div>

      <div className="pricingCard col-span-12 sm:col-span-6 xl:col-span-3 pl-4 bg-white rounded-2xl border-[1px] border-gray-200 w-full pb-4 pt-12">
        <h4 className=" mb-8 text-2xl font-medium text-center">Standard</h4>

        <div className="flex justify-end w-full">
          <h1 className="priceTag flex justify-center items-start text-5xl text-white font-bold text-center w-full bg-pricing-gradient rounded-l-full p-2.5 py-5">
            <span className="text-xl mt-1.5">$ </span> 129
          </h1>
        </div>

        <ul className="flex flex-col mt-4 text-center gap-8  md:h-96 h-72 overflow-y-scroll scrollbar-hidden">
          <li>12 Original Logo Concepts</li>
          <li>4 Dedicated Logo Designers</li>
          <li>Unlimited Revisions</li>
          <li>Stationery Design (Business Card, Letterhead, Envelope)</li>
          <li>Email Signature Designs</li>
          <li>With Grey Scale Format</li>
        </ul>

        <div className="flex justify-center items-center">
          <button className="rounded-full border-[1px] border-gray-300 py-2 px-6 font-semibold bg-white text-gray-950">
            Learn More
          </button>
        </div>
      </div>

      <div className="pricingCard col-span-12 sm:col-span-6 xl:col-span-3 pl-4 bg-white rounded-2xl border-[1px] border-gray-200 w-full pb-4 pt-12">
        <h4 className=" mb-8 text-2xl font-medium text-center">Prime</h4>

        <div className="flex justify-end w-full">
          <h1 className="priceTag flex justify-center items-start text-5xl text-white font-bold text-center w-full bg-pricing-gradient rounded-l-full p-2.5 py-5">
            <span className="text-xl mt-1.5">$ </span> 229
          </h1>
        </div>

        <ul className="flex flex-col mt-4 text-center gap-8  md:h-96 h-72 overflow-y-scroll scrollbar-hidden">
          <li>Unlimited Original Logo Concepts 8 Dedicated Logo Designer</li>
          <li>Unlimited Revisions</li>
          <li>Stationery Design (Business Card, Letterhead, Envelope)</li>
          <li>500 Business Cards</li>
          <li>With Grey Scale</li>
        </ul>

        <div className="flex justify-center items-center">
          <button className="rounded-full border-[1px] border-gray-300 py-2 px-6 font-semibold bg-white text-gray-950">
            Learn More
          </button>
        </div>
      </div>

      <div className="pricingCard col-span-12 sm:col-span-6 xl:col-span-3 pl-4 bg-white rounded-2xl border-[1px] border-gray-200 w-full pb-4 pt-12">
        <h4 className=" mb-8 text-2xl font-medium text-center">Prime</h4>

        <div className="flex justify-end w-full">
          <h1 className="priceTag flex justify-center items-start text-5xl text-white font-bold text-center w-full bg-pricing-gradient rounded-l-full p-2.5 py-5">
            <span className="text-xl mt-1.5">$ </span> 599
          </h1>
        </div>

        <ul className="flex flex-col mt-4 text-center gap-8  md:h-96 h-72 overflow-y-scroll scrollbar-hidden">
          <li>Unlimited Original Logo Concepts 10 Dedicated Logo Designer</li>
          <li>Unlimited Revisions</li>
          <li>Stationery Design (Business Card, Letterhead, Envelope)</li>
          <li>500 Business Cards</li>
          <li>With Grey Scale</li>
        </ul>

        <div className="flex justify-center items-center">
          <button className="rounded-full border-[1px] border-gray-300 py-2 px-6 font-semibold bg-white text-gray-950">
            Learn More
          </button>
        </div>
      </div>

    </div>
  );
};

export default LogoPricingCard;
