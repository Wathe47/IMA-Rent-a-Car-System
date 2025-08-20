import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import imaLogo from "@/assets/ima-logo.png";
import { Link, useLocation } from "react-router-dom";

const HeaderWhiteBg = () => {
   const location = useLocation();
   const isAuthenticated = !!localStorage.getItem("token");
   return (
      <header className="absolute top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
         <nav className="bg-white">
            <div className="container mx-auto px-4 py-4">
               <div className="flex items-center justify-between">
                  {/* Logo */}
                  <Link to="/">
                     <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                           <img src={imaLogo} alt="Car Icon" className="w-12 h-12 text-accent-foreground" />
                        </div>
                        <div>
                        <h1 className="text-xl font-bold text-primary">IMA TRADERS</h1>
                        <p className="text-xs text-gray-500">Premium Rentals</p>
                     </div>
                     </div>
                  </Link>
                  {/* Desktop Navigation */}
                  <div className="hidden lg:flex items-center gap-8">
                     <nav className="flex items-center gap-6">
                        <Link to="/vehicles" className={`transition-colors ${location.pathname.startsWith('/vehicles') ? 'text-accent' : 'text-primary'} hover:text-accent`}>Fleet</Link>
                        <Link to="/suppliers" className={`transition-colors ${location.pathname.startsWith('/suppliers') ? 'text-accent' : 'text-primary'} hover:text-accent`}>Suppliers</Link>
                        <Link to="/customers" className={`transition-colors ${location.pathname.startsWith('/customers') ? 'text-accent' : 'text-primary'} hover:text-accent`}>Customers</Link>
                        <Link to="/bookings" className={`transition-colors ${location.pathname.startsWith('/bookings') ? 'text-accent' : 'text-primary'} hover:text-accent`}>Bookings</Link>
                        {isAuthenticated && (
                           <>
                              <Link to="/supplier-vehicles" className={`transition-colors ${location.pathname.startsWith('/supplier-vehicles') ? 'text-accent' : 'text-primary'} hover:text-accent`}>Supplier Vehicles</Link>
                           </>
                        )}
                     </nav>
                     <div className="flex items-center gap-3">
                        {isAuthenticated ? (
                           <Button variant="ghost" className="text-primary hover:bg-primary hover:text-white" onClick={() => { localStorage.removeItem("token"); window.location.href = "/login"; }}>
                              Logout
                           </Button>
                        ) : (
                           <Link to="/login">
                              <Button variant="ghost" className="text-primary border-primary hover:bg-primary hover:text-white">
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
                  <Button variant="ghost" size="icon" className="lg:hidden text-primary">
                     <Menu className="w-6 h-6" />
                  </Button>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default HeaderWhiteBg;
