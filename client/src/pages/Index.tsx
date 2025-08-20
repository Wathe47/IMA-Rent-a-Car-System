import Header from "@/components/Header";
import CarRentalHero from "@/components/CarRentalHero";
import FeaturedCars from "@/components/FeaturedCars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CarRentalHero />
      <FeaturedCars />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
