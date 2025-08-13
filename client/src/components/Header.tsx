import { Button } from "@/components/ui/button";
import { Car, Menu, Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      {/* Top Bar */}
      <div className="border-b border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-white/80">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Available 24/7</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Free cancellation up to 24 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">DriveAway</h1>
                <p className="text-xs text-white/70">Premium Rentals</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-6 text-white">
                <a href="#" className="hover:text-accent transition-colors">Home</a>
                <a href="#" className="hover:text-accent transition-colors">Fleet</a>
                <a href="#" className="hover:text-accent transition-colors">Services</a>
                <a href="#" className="hover:text-accent transition-colors">Locations</a>
                <a href="#" className="hover:text-accent transition-colors">Contact</a>
              </nav>
              <div className="flex items-center gap-3">
                <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-primary">
                  Sign In
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;