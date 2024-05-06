"use client";

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
      iconImg: ic1,
      number: "12",
      postfix: "+",
      title: "Years of Experience",
    },
    {
      iconImg: ic2,
      number: "100",
      postfix: "+",
      title: "Employees",
    },
    {
      iconImg: ic3,
      number: "5000",
      postfix: "+",
      title: "Logo Designed",
    },
    {
      iconImg: ic4,
      number: "95",
      postfix: "%",
      title: "Projects Delivered",
    },
    {
      iconImg: ic5,
      number: "10",
      postfix: "+",
      title: "Countries",
    },
    {
      iconImg: ic6,
      number: "75",
      postfix: "%",
      title: "Client Retention Rate",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
      {sectionData.map((item, i) => (
        <div
          key={item.title}
          className={`w-[300px] max-w-[400px] flex flex-col bg-pri_purple  text-center space-y-8 justify-center text-white items-center px-[4.5rem] py-8  from-[#00000A] to-[#0F07DA] ${
            i === 1 || i === 4 ? "bg-gradient-to-t" : "bg-gradient-to-r"
          }`}
        >
          <img src={item.iconImg} alt="icon" className="w-[4.5rem]" />

          <div className="flex flex-col space-y-2 w-full">
            <CountUp
              scrollSpyOnce={true}
              enableScrollSpy
              // redraw={false}
              start={0}
              end={item.number}
            >
              {({ countUpRef, start }) => (
                <div className="text-6xl tracking-wider font-bold">
                  <span ref={countUpRef} />
                  <span>{item.postfix}</span>
                </div>
              )}
            </CountUp>

            <p className="text-lg">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhyChooseUs;
