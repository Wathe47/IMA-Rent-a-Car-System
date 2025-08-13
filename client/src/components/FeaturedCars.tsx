import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Fuel, Cog, Star } from "lucide-react";
import suvCar from "@/assets/suv-car.jpg";
import sedanCar from "@/assets/sedan-car.jpg";
import compactCar from "@/assets/compact-car.jpg";

const FeaturedCars = () => {
  const featuredCars = [
    {
      id: 1,
      name: "Premium SUV",
      category: "SUV",
      image: suvCar,
      price: "$89",
      rating: 4.8,
      specs: {
        passengers: 7,
        fuel: "Hybrid",
        transmission: "Auto"
      },
      features: ["GPS Navigation", "Leather Seats", "Premium Audio"]
    },
    {
      id: 2,
      name: "Luxury Sedan",
      category: "Sedan",
      image: sedanCar,
      price: "$69",
      rating: 4.9,
      specs: {
        passengers: 5,
        fuel: "Petrol",
        transmission: "Auto"
      },
      features: ["Climate Control", "Bluetooth", "Safety Plus"]
    },
    {
      id: 3,
      name: "City Compact",
      category: "Compact",
      image: compactCar,
      price: "$39",
      rating: 4.7,
      specs: {
        passengers: 4,
        fuel: "Electric",
        transmission: "Auto"
      },
      features: ["Eco-Friendly", "City Perfect", "Easy Parking"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our premium collection of well-maintained vehicles, perfect for any journey
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <Card key={car.id} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card-gradient overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {car.category}
                </Badge>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{car.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary mb-2">{car.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{car.price}</span>
                    <span className="text-muted-foreground">per day</span>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y">
                  <div className="text-center">
                    <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                    <span className="text-sm text-muted-foreground">{car.specs.passengers} seats</span>
                  </div>
                  <div className="text-center">
                    <Fuel className="w-5 h-5 text-primary mx-auto mb-1" />
                    <span className="text-sm text-muted-foreground">{car.specs.fuel}</span>
                  </div>
                  <div className="text-center">
                    <Cog className="w-5 h-5 text-primary mx-auto mb-1" />
                    <span className="text-sm text-muted-foreground">{car.specs.transmission}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;