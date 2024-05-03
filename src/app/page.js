import MainSection from "@/components/MainSection";
import OurServices from "@/components/OurServices";
import ContentTabs from "@/components/ContentTabs";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Pricings from "@/components/Pricings";

export default function Home() {
  return (
    <>
      <MainSection />
      <OurServices />
      <ContentTabs />
      <Portfolio />
      <Pricings/>
      <Footer />
    </>
  );
}
