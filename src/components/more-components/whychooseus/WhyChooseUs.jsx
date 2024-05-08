"use client"
import ic1 from "../../assets/whychooseusicons/1.webp";
import ic2 from "../../assets/whychooseusicons/2.webp";
import ic3 from "../../assets/whychooseusicons/3.webp";
import ic4 from "../../assets/whychooseusicons/4.webp";
import ic5 from "../../assets/whychooseusicons/5.webp";
import ic6 from "../../assets/whychooseusicons/6.webp";
import CountUp from "react-countup";

function WhyChooseUs() {
  const sectionData = [
    {
      iconImg: ic1.src,
      number: "12",
      postfix: "+",
      title: "Years of Experience",
    },
    {
      iconImg: ic2.src,
      number: "100",
      postfix: "+",
      title: "Employees",
    },
    {
      iconImg: ic3.src,
      number: "5000",
      postfix: "+",
      title: "Logo Designed",
    },
    {
      iconImg: ic4.src,
      number: "95",
      postfix: "%",
      title: "Projects Delivered",
    },
    {
      iconImg: ic5.src,
      number: "10",
      postfix: "+",
      title: "Countries",
    },
    {
      iconImg: ic6.src,
      number: "75",
      postfix: "%",
      title: "Client Retention Rate",
    },
  ];

  return (
    <div className='size-full grid grid-cols-2    xl:grid-cols-3 gap-2  place-items-center'>
      {sectionData.map((item, i) => (
        <div
          key={item.title}
          className={`w-[130px]  h-[130px] max-w-[300px] md:h-[300px] md:w-[300px] md:max-w-[full] flex flex-col bg-pri_purple  text-center space-y-4 md:space-y-8 justify-center text-white items-center md:px-[4.5rem]  md:py-8  from-[#00000A] to-[#0F07DA] ${
            i === 1 || i === 4 ? "bg-gradient-to-t" : "bg-gradient-to-r"
          }`}
        >
          <img src={item.iconImg} alt='icon' className='w-[40px] md:w-[4.5rem]' />

          <div className='flex flex-col space-y-2 w-full'>
            <CountUp
              scrollSpyOnce={true}
              enableScrollSpy
              // redraw={false}
              start={0}
              end={item.number}
            >
              {({ countUpRef, start }) => (
                <div className='text-2xl md:text-3xl 2xl:text-6xl tracking-wider font-bold'>
                  <span ref={countUpRef} />
                  <span>{item.postfix}</span>
                </div>
              )}
            </CountUp>

            <p className='text-xs text-center md:text-lg'>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhyChooseUs;
