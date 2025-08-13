import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">DriveAway</h3>
                <p className="text-sm text-primary-foreground/70">Premium Rentals</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for premium car rentals. We provide exceptional service and quality vehicles for all your transportation needs.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Fleet</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Locations</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Special Offers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Corporate</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Short Term Rental</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Long Term Rental</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Airport Transfer</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Chauffeur Service</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Wedding Cars</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Business Travel</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@driveaway.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">123 Auto Street, Car City, CC 12345</span>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex md:items-center justify-between flex-col md:flex-row gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 DriveAway. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;