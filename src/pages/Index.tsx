import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturedItems from "@/components/FeaturedItems";
import SpecialOccasions from "@/components/SpecialOccasions";
import HolidayOutfits from "@/components/HolidayOutfits";
import PricingSection from "@/components/PricingSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturedItems />
      <SpecialOccasions />
      <HolidayOutfits />
      <PricingSection />
      <SustainabilitySection />
      <Footer />
    </div>
  );
};

export default Index;
