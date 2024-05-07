import Wrapper from "../common/Wrapper";

function Form() {
  return (
    <section className='bgLogoForm bg-cover bg-center bg-no-repeat size-full flex justify-center items-center text-white py-20 '>
      <Wrapper className={"flex flex-col md:flex-row space-y-10  sm:px-10"}>
        <div className='w-[50%] flex flex-col space-y-3 '>
          <p className='font-bold text-xl md:text-3xl'>Let{`'`}s get the Ball Rolling</p>
          <p className='font-poppins md:text-xl md:max-w-[500px]'>
            Ask us anything; our customer care representatives are the most
            welcoming.
          </p>
          <div className='flex flex-col py-10'>
            <p className="font-bold font-poppins text-xl md:text-2xl">+1 302-501-7152</p>
            <p className="font-bold font-poppins text-xl md:text-2xl">info@fameitech.com</p>
          </div>
          <button className="bg-pri_orange w-fit text-black sm:text-xl px-2 py-2 sm:px-6 sm:py-4">Live Chat To Avail Offer!</button>
        </div>
        <div className='w-[50%] flex space-y-5 flex-col'>
            <p className="font-bold text-4xl md:text-6xl">
            Let{`'`}s Get Started!
            </p>
            <form action="
            " className="flex flex-col font-poppins space-y-2 *:p-3 *:rounded-sm ">
                <input type="text" placeholder="Enter Your Name" />
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Phone" />
                <textarea name="" id="" cols="30" rows="3" placeholder="Message"></textarea>
                <button className="text-xl py-2 bg-pri_blue px-0 md:!px-20  w-full md:w-fit font-oswald">Submit</button>
            </form>
        </div>
      </Wrapper>
    </section>
  );
}

export default Form;
