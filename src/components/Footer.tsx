import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-tech-cyan rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">FT</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">FRIMAT</h3>
                <p className="text-xs text-muted-foreground">Technologies</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Connecting Innovation. Delivering Solutions in Kenya.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">Tech Shop</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">WiFi Installation</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">CCTV Systems</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Electronics Repair</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Crypto Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Pipeline, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:0112277289" className="hover:text-primary transition-colors">0112277289</a>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:frimattechnologies016@gmail.com" className="hover:text-primary transition-colors break-all">
                  frimattechnologies016@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Operating Hours:</p>
              <p className="text-xs text-muted-foreground">Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-xs text-muted-foreground">Sat: 9:00 AM - 4:00 PM</p>
              <p className="text-xs text-muted-foreground">Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Payment & Security */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-xs text-muted-foreground">Payment Methods:</p>
              <div className="flex items-center space-x-3">
                <div className="bg-secondary px-3 py-1 rounded text-xs font-semibold">M-PESA</div>
                <div className="bg-secondary px-3 py-1 rounded text-xs font-semibold">Cash</div>
                <div className="bg-secondary px-3 py-1 rounded text-xs font-semibold">Bank</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>SSL Secured | Payment Protected</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Frimat Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
