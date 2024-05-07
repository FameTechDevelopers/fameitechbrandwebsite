import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Testimonials from "@/components/testimonials";
import Image from "next/image";
import MasterImage from "@/assets/master-img.webp";
import DigiMarket from "@/assets/digi-market.webp";
import studio from "@/assets/studio.webp";
import yearExo from "@/assets/years-exp.png";
import afford from "@/assets/afford.png";
import time from "@/assets/time.png";

const page = () => {
  return (
    <>
      <div className="md:h-[50vh] h-[30vh] p-2.5">
        <div className="hero flex h-full justify-center items-center">
          <div className="container z-30">
            <p className="text-white w-full font-semibold my-8 flex items-center text-sm">
              Home{" "}
              <span className="mx-2.5">
                <MdArrowForwardIos />
              </span>{" "}
              About Us{" "}
            </p>
            <div className="font-semibold text-white">
              <h1 className="xl:text-6xl lg:text-5xl text-4xl">
                We <span className="text-primary italic"> Design </span> For
                Your Success!
              </h1>
              <p className="lg:text-xl mt-4">
                Fameitech’s mission: ensuring client happiness and dominance in
                the market!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="masters mt-14 flex justify-center items-center py-6">
        <div className="container w-full flex justify-center items-center max-md:flex-col gap-14">
          <div className="md:w-1/2 w-full max-md:flex justify-center items-center flex-col max-md:text-center px-1">
            <h1 className="xl:text-5xl lg:text-4xl text-3xl font-semibold">
              {" "}
              <span className="text-primary italic"> Masters </span> Of Digital
              And Design
            </h1>
            <p className="text-2xl my-4 font-semibold">
              Infusing Creativity into Your Digital Presences.
            </p>
            <p className="w-[85%] font-medium">
              FAMEITECH works as your digital agent with a core ofvaluing client
              satisfaction. Our expertise lies in various market niches,
              involving digital marketing, content creation, logo design,
              branding, and web development.
            </p>
            <button className="btn mt-8">Conatct Us</button>
          </div>

          <div className="md:w-1/2 w-full flex justify-center items-center">
            <Image
              width={1000}
              height={1000}
              src={MasterImage}
              alt="masters-image"
              className="rounded shadow-2xl w-[75%] h-[100%]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-10 h-full">
        <h1 className="font-semibold lg:text-5xl md:text-4xl text-2xl text-center mt-10">
          Decades of Experience
        </h1>

        <h1 className="font-semibold lg:text-5xl md:text-4xl text-2xl text-center mt-5 mb-3">
          Meeting{" "}
          <span className="text-primary  italic">
            {" "}
            The Digital Requirements{" "}
          </span>{" "}
          of Our Clients!
        </h1>

        <p className="text-center ld:text-lg font-medium">
          We work to achieve design excellence for our clients so that they can
          shine brightly in the digital universe.
        </p>

        <div className="flex justify-center items-center mt-6 flex-col p-2.5">
          <div className="container">
            <div className="grid grid-cols-12 md:gap-6 gap-2">
              <div className="md:col-span-6 col-span-12 xl:pl-20 lg:pl-10 p-3 bg-gray-200">
                <h1 className="font-semibold xl:text-5xl lg:text-4xl text-3xl mt-5 mb-3 max-md:text-center">
                  Our <span className="text-primary  italic"> Mission </span> &{" "}
                  <span className="text-primary  italic"> Vision </span>
                </h1>

                <div className="lg:text-lg font-medium">
                  <p className="mt-2">
                    With a decade-long track record of delivering exceptional
                    designs, Fameitech is a leading digital branding agency. Our
                    digital services blend with affordability, unparalleled
                    creativity and uniqueness. Our significant work history of
                    digital branding and marketing solutions has boosted various
                    brands, providing steadfast support in inaugrating a strong
                    digital presence.
                  </p>

                  <p className="mt-2">
                    At FAMEITECH we stand for a promise to democratize the
                    digital revolution. Despite the size of a brand, we strive
                    to provide equal access and empower all digital entities to
                    thrive in the dynamic digital arena. We are enthusiastic
                    about offering important assistance to individuals who
                    possess the will and ability to excel in the constantly
                    expanding digital industry.
                  </p>
                </div>
              </div>

              <div className="md:col-span-6 col-span-12">
                <Image
                  src={DigiMarket}
                  alt="requirement-image"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          <div className="container mt-10">
            <h1 className="font-semibold xl:text-5xl lg:text-4xl text-3xl text-center mt-5 mb-3">
              Why <span className="text-primary italic"> Choose </span> Us?
            </h1>

            <p className="lg:text-lg text-center">
              With various market options, it is critical to find reliable
              digital agents. As a professional digital services provider,we
              augment your brand'spresence.
            </p>

            <div className="grid grid-cols-12 mt-6 max-lg:gap-2">
              <div className="lg:col-span-4 md:col-span-6 col-span-12 flex items-center flex-col h-full w-full bg-gray-200 py-6 px-10 gap-6">
                <Image
                  src={yearExo}
                  alt=""
                  className="w-1/3"
                  width={1000}
                  height={1000}
                />

                <h4 className="text-3xl font-semibold">Years Of Experience</h4>

                <p className="text-center">
                  Fameitech has solidified its position as a leading digital
                  branding agency with more than decades of years of its
                  dedicated experience. FameitechProfessionals'wealth of
                  knowledge, proficiency and expertise to the table,
                  unswervingly providing creative solutions and incomparable
                  designs to our clients.
                </p>
              </div>

              <div className="lg:col-span-4 md:col-span-6 col-span-12 flex  items-center flex-col h-full w-full bg-white py-6 px-10 gap-6">
                <Image
                  src={studio}
                  alt=""
                  className="w-1/3"
                  width={1000}
                  height={1000}
                />

                <h4 className="text-3xl font-semibold">Full-Service Studio</h4>

                <p className="text-center">
                  The digital world of Fameitech, where you can have the best of
                  all worlds by becoming our sole source and service provider
                  for all your digital needs. We are specialisedin logo and
                  branding design, and we create modern logos which appeal to
                  your business concept. The design of the website and its
                  development also fall within our area of expertise, which
                  includes the creation of e-commerce solutions and web app
                  development. In the realm of Mobile apps, we provide custom
                  solutionsand development services for iOS and Android
                  platforms. As well as that, we process digital branding and
                  SEO to make our clients move up the ladder of success.
                </p>
              </div>

              <div className="lg:col-span-4 md:col-span-6 col-span-12 flex items-center flex-col h-full w-full bg-gray-200 py-6 px-10 gap-6">
                <Image
                  src="https://cdn-ikpnlcj.nitrocdn.com/weiDAkCcNhepGRAFGfsIHxqnlniULSbJ/assets/images/optimized/rev-11a753c/fameitech.com/wp-content/uploads/2024/03/2-1.png"
                  alt=""
                  className="w-1/3"
                  width={1000}
                  height={1000}
                />

                <h4 className="text-3xl font-semibold">Quality Work</h4>

                <p className="text-center">
                  Quality work is our top priority at Fameitech. We focus on
                  exceeding our customer's expectations in every project we
                  undertake. A team of well-experienced professionals, highly
                  focus on quality and accuracy in every task. Each job is taken
                  with a serious eye to detail by our experts with great skills.
                  Our digital design services are comprised of logo design,
                  website development, mobile app design, and digital branding -
                  meet the world-class standards of quality that we believe our
                  clients deserve. We manufacture items that are inherently
                  developed rather than assembled, and all of them adhere to the
                  utmost level of quality and surpass the client's objectives.
                </p>
              </div>

              <div className="lg:col-span-4 md:col-span-6 col-span-12 flex items-center flex-col h-full w-full bg-white py-6 px-10 gap-6">
                <Image
                  src={afford}
                  alt=""
                  className="w-1/3"
                  width={1000}
                  height={1000}
                />

                <h4 className="text-3xl font-semibold">Affordability</h4>

                <p className="text-center">
                  The belief of quality digital solutions at Fameitech shouldn't
                  break the bank. That is why we are here to provide affordable
                  digital services without compromising on quality. Our price
                  transparency makes sure that all entities can access top-notch
                  logo design, website development, mobile app design, and
                  digital branding services. Fameitech understands the
                  cruciality of budget constraints and works closely at the best
                  possible pricing without sacrificing on over services.
                </p>
              </div>

              <div className="lg:col-span-4 md:col-span-6 col-span-12 flex items-center flex-col h-full w-full bg-gray-200 py-6 px-10 gap-6">
                <Image
                  src={time}
                  alt=""
                  className="w-1/3"
                  width={1000}
                  height={1000}
                />

                <h4 className="text-3xl font-semibold">
                  Quick Turnaround Time
                </h4>

                <p className="text-center">
                  Fameitech professionals and experienced experts provide speedy
                  solutions in the range of various services. Employing these
                  procedures that have been developed thoroughly ensures speedy
                  delivery regardless of the quality. With us, you gain a
                  hassle-free method and professional attention, and you get the
                  opportunity to work with people who will provide you with
                  quick results. Whether you are seeking logo design, a
                  responsive website, or a custom mobile app, engage with
                  Fameitech, a service provider of unparalleled speed and
                  dependability, for a catalyst to your business's growth.
                </p>
              </div>

              <div className="lg:col-span-4 md:col-span-6 col-span-12 flex items-center flex-col h-full w-full bg-white py-6 px-10 gap-6">
                <Image
                  src="https://cdn-ikpnlcj.nitrocdn.com/weiDAkCcNhepGRAFGfsIHxqnlniULSbJ/assets/images/optimized/rev-11a753c/fameitech.com/wp-content/uploads/2024/03/6-1.png"
                  alt=""
                  className="w-1/3"
                  width={1000}
                  height={1000}
                />

                <h4 className="text-3xl font-semibold">Latest Technology</h4>

                <p className="text-center">
                  With Fameitech professional services, explore the realm of the
                  latest technology. We are at the cutting edge of innovation,
                  constantly incorporating state-of-the-art technologies into
                  our service provision to ensure superior solutions on the
                  market. We provide tailored services from Blockchain
                  technology to Machine Learning and beyond, we harness the
                  power of the latest tech to empower businesses and drive
                  success. Stay ahead of the curve and grab the opportunity with
                  Fameitech talents to combine emerging technologies with your
                  digital performance to lead your business into the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
};

export default page;
