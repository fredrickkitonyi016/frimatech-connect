import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Tech Shop", path: "/shop" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-tech-cyan rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">FT</span>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold text-foreground">FRIMAT</span>
              <span className="text-sm block text-muted-foreground">Technologies</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book-service">
              <Button variant="default" className="ml-4 bg-accent hover:bg-accent/90">
                Book Service
              </Button>
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-4 text-sm">
            <a href="tel:0112277289" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span>0112277289</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/book-service" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full bg-accent hover:bg-accent/90">
                  Book Service
                </Button>
              </Link>
              <div className="pt-4 border-t border-border mt-4 space-y-2">
                <a href="tel:0112277289" className="flex items-center space-x-2 text-sm text-muted-foreground px-4">
                  <Phone className="h-4 w-4" />
                  <span>0112277289</span>
                </a>
                <a href="mailto:frimattechnologies016@gmail.com" className="flex items-center space-x-2 text-sm text-muted-foreground px-4">
                  <Mail className="h-4 w-4" />
                  <span>frimattechnologies016@gmail.com</span>
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
