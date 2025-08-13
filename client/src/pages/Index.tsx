import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import FeaturedCars from "@/components/FeaturedCars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Dashboard />
      <FeaturedCars />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
