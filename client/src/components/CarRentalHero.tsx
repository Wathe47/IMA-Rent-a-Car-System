import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const CarRentalHero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCar} 
          alt="Luxury car" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Text */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Drive Away
              <span className="block text-accent">Your Dreams</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-lg">
              Premium car rentals at unbeatable prices. Book now and hit the road with confidence.
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                Explore Fleet
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-card-gradient shadow-elegant backdrop-blur-sm border-0">
              <h3 className="text-2xl font-bold text-primary mb-6">Book Your Ride</h3>
              
              <div className="space-y-4">
                {/* Pick-up Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Pick-up Location
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airport">Airport Terminal</SelectItem>
                      <SelectItem value="downtown">Downtown</SelectItem>
                      <SelectItem value="mall">Shopping Mall</SelectItem>
                      <SelectItem value="station">Train Station</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Pick-up Date
                    </label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Time
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="15:00">03:00 PM</SelectItem>
                        <SelectItem value="18:00">06:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Return Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Return Date</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Return Time</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="15:00">03:00 PM</SelectItem>
                        <SelectItem value="18:00">06:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 mt-6">
                  Search Available Cars
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalHero;