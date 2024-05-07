import React from "react";

const ContactForm = () => {
  return (
    <section class="main-contact w-full rounded-2xl border-[#073A9C] border-1 p-[32px]">
      <div class=" mx-auto">
        <h2 class="mb-4 text-4xl text-white tracking-tight font-extrabold text-center  ">
          CHAT WITH US
        </h2>
        <p className=" text-center text-white text-[1.4rem] font-medium">
          TO AVAIL{" "}
          <span className="text-[#FE7524] font-bold text-[1.8rem]">70%</span>{" "}
          DISCOUNT
        </p>
        <form action="#" className="space-y-8 px-4">
          <div>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-transparent border border-[#073A9C] bg-[#04112c] w-full text-sm rounded-lg p-4"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              className="shadow-sm bg-transparent border border-[#073A9C] bg-[#04112c] w-full text-sm rounded-lg p-4"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              className="shadow-sm bg-transparent border border-[#073A9C] bg-[#04112c] w-full text-sm rounded-lg p-4"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <textarea
              id="message"
              rows="6"
              class="shadow-sm bg-transparent border border-[#073A9C] bg-[#04112c] w-full text-sm rounded-lg p-4"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className=" flex justify-center items-center">
            <button
              type="submit"
              class="py-3 px-12 text-sm font-medium text-center text-white bg-[#073A9C] rounded-full"
            >
              RESERVE THE DISCOUNT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
