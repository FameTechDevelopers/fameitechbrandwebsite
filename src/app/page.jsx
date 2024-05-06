import MainSection from "@/components/MainSection";
import OurServices from "@/components/OurServices";
import ContentTabs from "@/components/ContentTabs";
import Portfolio from "@/components/Portfolio";
import MagicHappens from "@/components/MagicHappens";
import Testimonials from "@/components/testimonials";
import Pricings from "@/components/Pricings";
import increase from "@/assets/increase.png";
import complete from "@/assets/complete.png";
import clients from "@/assets/clients.png";
import cloud from "@/assets/cloud.png";
import Image from "next/image";
import DigitalMedia from "@/components/DigitalMedia";
import Link from "next/link";
import TechSlider from "@/components/TechSlider";

export default function Home() {
  return (
    <>
      <MainSection />

<TechSlider/>

      <OurServices />
      <ContentTabs />
      <Portfolio />
      <Pricings />
      <MagicHappens />
      <div className="bg-plans grid grid-cols-12 px-2 py-4 w-full justify-items-center gap-3">
        <h1 className="sm:col-span-8 col-span-12 text-center md:text-4xl text-xl text-white flex items-center w-full justify-center font-semibold">
          Pocket-friendly Design. Just a Click Away!
        </h1>

        <Link href={"/our-packages"} className="btn-plans uppercase sm:col-span-4 col-span-12 w-fit rounded">
          pocket Plans
        </Link>
      </div>

      <Testimonials />

      <DigitalMedia />
    </>
  );
}
