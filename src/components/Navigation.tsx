import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-border/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-background rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-foreground">Setrex.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="flex items-center gap-1 text-foreground hover:text-neon transition-colors">
              Home <ChevronDown className="w-4 h-4" />
            </Link>
            <Link to="/about" className="text-foreground hover:text-neon transition-colors">
              About Us
            </Link>
            <button className="text-foreground hover:text-neon transition-colors">
              Features
            </button>
            <button className="text-foreground hover:text-neon transition-colors">
              Pricing
            </button>
            <button className="flex items-center gap-1 text-foreground hover:text-neon transition-colors">
              Pages <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            variant="outline" 
            className="hidden md:inline-flex border-foreground/20 hover:border-neon hover:text-neon transition-all"
          >
            Get in Touch
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
