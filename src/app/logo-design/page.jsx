// import "./App.css";
import ComboPackage from "../../components/more-components/combopackage/ComboPackage";
import Footer from "../../components/more-components/common/Footer";
import Navbar from "../../components/more-components/common/Navbar";
import CustomLogoBanner from "../../components/more-components/customlogobanner/CustomLogoBanner";
import DesignPortfolioSection from "../../components/more-components/designportfoliosection/DesignPortfolioSection";
import Form from "../../components/more-components/form/Form";
import HeroSection from "../../components/more-components/herosection";
import Pricing from "../../components/more-components/pricing/Pricing";
import Testimonials from "../../components/more-components/testimonials/Testimonials";

function LogoDesign() {
  return (
    <main className="size-full font-oswald !overflow-x-hidden">
      <div className='bg-[url("/images/heroBanner.webp")] bg-no-repeat bg-cover bg-center'>
        <Navbar />
        <HeroSection />
      </div>
      <div className='size-full bg-[url("/images/2ndbg.webp")] bg-no-repeat bg-cover bg-center'>
        <DesignPortfolioSection />
        <CustomLogoBanner />
      </div>

      <Testimonials />
      <Pricing />

      <ComboPackage />

      <Form />
      <Footer />
    </main>
  );
}

export default LogoDesign;
