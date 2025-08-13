import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, Headphones, MapPin, CreditCard } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "All our vehicles come with comprehensive insurance coverage for your peace of mind"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you whenever you need help"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Well-maintained, regularly serviced vehicles from top automotive brands"
    },
    {
      icon: Headphones,
      title: "Easy Booking",
      description: "Simple online booking process with instant confirmation and flexible options"
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      description: "Convenient pickup and drop-off locations across the city and airports"
    },
    {
      icon: CreditCard,
      title: "Best Prices",
      description: "Competitive rates with no hidden fees and transparent pricing policy"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Choose DriveAway?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our premium car rental service designed around your needs
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 border-0 bg-card-gradient animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-accent-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;