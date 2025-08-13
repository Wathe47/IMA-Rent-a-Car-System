import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow"></div>
            <span className="text-xl font-bold">IMA Traders</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#suppliers" className="text-sm font-medium hover:text-primary transition-colors">
            Suppliers
          </a>
          <a href="#cars" className="text-sm font-medium hover:text-primary transition-colors">
            Cars
          </a>
          <a href="#rentals" className="text-sm font-medium hover:text-primary transition-colors">
            Rentals
          </a>
        </nav>
        
        <Button className="hidden md:flex">
          Admin Panel
        </Button>
      </div>
    </header>
  );
};

export default Header;