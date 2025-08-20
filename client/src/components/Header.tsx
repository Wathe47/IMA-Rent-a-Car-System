import { Button } from "@/components/ui/button";
import { Car, Menu, Phone, MapPin } from "lucide-react";
import imaLogo from "@/assets/ima-logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
   const location = useLocation();
   const isAuthenticated = !!localStorage.getItem("token");
   return (
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">

         {/* Main Navigation */}
         <nav className="bg-transparent">
            <div className="container mx-auto px-4 py-4">
               <div className="flex items-center justify-between">
                  {/* Logo */}
                  <Link to="/">
                     <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                           <img src={imaLogo} alt="Car Icon" className="w-12 h-12 text-accent-foreground" />
                        </div>
                        <div>
                           <h1 className="text-xl font-bold text-white">IMA TRADERS</h1>
                           <p className="text-xs text-white/70">Premium Rentals</p>
                        </div>
                     </div>
                  </Link>
                  {/* Desktop Navigation */}
                  <div className="hidden lg:flex items-center gap-8">
                     <nav className="flex items-center gap-6 text-white">
                        <Link to="/vehicles" className={location.pathname.startsWith("/vehicles") ? "text-accent" : "hover:text-accent transition-colors"}>Fleet</Link>
                        <Link to="/suppliers" className={location.pathname.startsWith("/suppliers") ? "text-accent" : "hover:text-accent transition-colors"}>Suppliers</Link>
                        <Link to="/customers" className={location.pathname.startsWith("/customers") ? "text-accent" : "hover:text-accent transition-colors"}>Customers</Link>
                        <Link to="/bookings" className={location.pathname.startsWith("/bookings") ? "text-accent" : "hover:text-accent transition-colors"}>Bookings</Link>
                        {isAuthenticated && (
                           <>
                              <Link to="/supplier-vehicles" className={location.pathname.startsWith("/supplier-vehicles") ? "text-accent" : "hover:text-accent transition-colors"}>Supplier Vehicles</Link>
                           </>
                        )}
                     </nav>
                     <div className="flex items-center gap-3">
                        {isAuthenticated ? (
                           <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-primary" onClick={() => { localStorage.removeItem("token"); window.location.href = "/login"; }}>
                              Logout
                           </Button>
                        ) : (
                           <Link to="/login">
                              <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-primary">
                                 Sign In
                              </Button>
                           </Link>
                        )}
                        <Link to="/bookings">
                           <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                              Book Now
                           </Button>
                        </Link>
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