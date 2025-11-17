import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, User, ShoppingCart, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartDrawer } from "./CartDrawer";
import ServicesMegaMenu from "./ServicesMegaMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasMegaMenu: true },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-lg sticky top-0 z-50 border-b border-border shadow-medium font-['Inter',sans-serif]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Animation */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary via-tech-cyan to-primary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-xl animate-pulse">FT</span>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tech-cyan/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold text-foreground uppercase tracking-wide group-hover:text-primary transition-colors">
                FRIMAT
              </span>
              <span className="text-sm block text-muted-foreground font-medium">Technologies</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.path} 
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setShowServicesMenu(true)}
                onMouseLeave={() => link.hasMegaMenu && setShowServicesMenu(false)}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-all duration-300 flex items-center gap-1 relative group",
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                  {link.hasMegaMenu && (
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      showServicesMenu && "rotate-180"
                    )} />
                  )}
                  {/* Animated Underline */}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-tech-cyan transform origin-left transition-transform duration-300",
                    isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}></span>
                  {/* Active Dot */}
                  {isActive(link.path) && (
                    <span className="absolute -top-1 right-2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                  )}
                </Link>
                {/* Mega Menu */}
                {link.hasMegaMenu && showServicesMenu && <ServicesMegaMenu />}
              </div>
            ))}
            <Link to="/book-service">
              <Button 
                variant="default" 
                className="ml-4 bg-gradient-to-r from-accent to-tech-orange hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold uppercase tracking-wide"
              >
                Book Service
              </Button>
            </Link>
          </div>

          {/* Right Section - Account & Cart */}
          <div className="hidden xl:flex items-center space-x-4">
            <CartDrawer />
            
            {/* Account Icon */}
            <button className="p-2 rounded-full hover:bg-secondary transition-all duration-300 group relative">
              <User className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>

            {/* Contact Info */}
            <a 
              href="tel:0112277289" 
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone className="h-4 w-4 group-hover:animate-bounce" />
              <span className="font-medium">0112277289</span>
            </a>
          </div>

          {/* Mobile Menu Button + Icons */}
          <div className="lg:hidden flex items-center gap-2">
            <CartDrawer />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-secondary transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-down">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-semibold uppercase tracking-wide transition-all duration-300",
                    isActive(link.path)
                      ? "bg-primary/10 text-primary border-l-4 border-primary"
                      : "text-foreground hover:bg-secondary hover:border-l-4 hover:border-primary/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/book-service" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-to-r from-accent to-tech-orange font-semibold uppercase tracking-wide"
                >
                  Book Service
                </Button>
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-border mt-4 space-y-3">
                <a 
                  href="tel:0112277289" 
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary px-4 py-2 hover:bg-secondary rounded-md transition-all"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">0112277289</span>
                </a>
                <a 
                  href="mailto:frimattechnologies016@gmail.com" 
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary px-4 py-2 hover:bg-secondary rounded-md transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-medium">frimattechnologies016@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
