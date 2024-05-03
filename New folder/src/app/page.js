import MainSection from "@/components/MainSection";
import OurServices from "@/components/OurServices";
import ContentTabs from "@/components/ContentTabs";
import Portfolio from "@/components/Portfolio";
import MainSlider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <MainSection />
      <OurServices />
      <ContentTabs />
      <Portfolio />
      <MainSlider />
    </>
  );
}
