import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wifi, Camera, Wrench, Bitcoin, ShoppingBag, Printer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedPrinterIcon from "@/components/AnimatedPrinterIcon";
import ServiceFlipCard from "@/components/ServiceFlipCard";
import heroServices from "@/assets/hero-services.jpg";
import heroCybersecurity from "@/assets/hero-cybersecurity.jpg";
import heroNetwork from "@/assets/hero-network.jpg";
import heroSecurity from "@/assets/hero-security.jpg";
import heroRepair from "@/assets/hero-repair.jpg";
import heroCrypto from "@/assets/hero-crypto.jpg";
import heroShop from "@/assets/hero-shop.jpg";
import heroCustomer from "@/assets/hero-customer.jpg";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity & Digital Protection",
      description: "Comprehensive security solutions to protect your digital assets",
      features: [
        "Network Security Assessment & Vulnerability Scanning",
        "Firewall Configuration & Management",
        "Data Protection & Encryption Services",
        "24/7 Cyber Threat Monitoring",
        "Security Incident Response Team",
        "Compliance Reporting & Audits"
      ],
      pricing: {
        from: "KES 15,000",
        popular: "Security Audits from KES 25,000",
        note: "Custom enterprise packages available"
      },
      color: "text-primary",
      image: heroCybersecurity
    },
    {
      icon: Wifi,
      title: "Connectivity & Network Solutions",
      description: "Professional network infrastructure for homes and businesses",
      features: [
        "High-Speed WiFi Installation & Optimization",
        "Mesh Network Systems for Large Spaces",
        "Enterprise-Grade Network Infrastructure",
        "Structured Cabling (CAT6, CAT6A, Fiber)",
        "Wireless Site Surveys & Heat Mapping",
        "Internet Service Provider Consultation"
      ],
      pricing: {
        from: "KES 8,000",
        popular: "Home WiFi from KES 12,000",
        note: "Free site survey included with installation"
      },
      color: "text-tech-cyan",
      image: heroNetwork
    },
    {
      icon: Camera,
      title: "Security & Surveillance Systems",
      description: "Advanced CCTV and access control solutions",
      features: [
        "HD CCTV Camera Installation (2MP-8MP)",
        "Enterprise Surveillance Systems (16+ Cameras)",
        "Remote Monitoring Mobile App Setup",
        "Smart Doorbell Cameras",
        "Access Control Systems (Biometric, Card)",
        "Central Monitoring Station Setup"
      ],
      pricing: {
        from: "KES 18,000",
        popular: "4-Camera System from KES 35,000",
        note: "Installation & configuration included"
      },
      color: "text-accent",
      image: heroSecurity
    },
    {
      icon: Wrench,
      title: "Electronics Repair & Support",
      description: "Expert repair services for all your devices",
      features: [
        "Smartphone Screen & Battery Replacement",
        "Computer Hardware Upgrades (RAM, SSD)",
        "Virus & Malware Removal",
        "Data Recovery Services",
        "Motherboard-Level Repairs",
        "Operating System Installation"
      ],
      pricing: {
        from: "KES 1,500",
        popular: "Screen Repairs from KES 3,000",
        note: "90-day warranty on all repairs"
      },
      color: "text-primary",
      image: heroRepair
    },
    {
      icon: Bitcoin,
      title: "Cryptocurrency & Blockchain",
      description: "Secure crypto trading and blockchain consultation",
      features: [
        "Bitcoin (BTC) Buying & Selling",
        "Ethereum (ETH) Trading Services",
        "Stablecoin (USDT, USDC) Transactions",
        "Crypto Wallet Setup Assistance",
        "Blockchain Technology Consultation",
        "Smart Contract Development Advisory"
      ],
      pricing: {
        from: "2% Fee",
        popular: "No minimum transaction",
        note: "Competitive rates with instant settlement"
      },
      color: "text-tech-cyan",
      image: heroCrypto
    },
    {
      icon: ShoppingBag,
      title: "Retail & Mobile Solutions",
      description: "Quality tech products with flexible payment options",
      features: [
        "M-KOPA Phones with Payment Plans",
        "Watu Simu Affordable Devices",
        "Genuine Accessories & Chargers",
        "Prepaid Airtime & Data (All Networks)",
        "Brand New & Refurbished Phones",
        "Screen Protectors & Phone Cases"
      ],
      pricing: {
        from: "KES 5,000",
        popular: "Flexible payment plans available",
        note: "Visit our shop for current inventory"
      },
      color: "text-accent",
      image: heroShop
    },
    {
      icon: Printer,
      title: "Cyber Services - Printing & Scanning",
      description: "Professional printing and digitization services for all your document needs",
      features: [
        "High-Volume Printing (A4, A3, A0, A1)",
        "Color & Black/White Photo Quality Printing",
        "Business Cards, Flyers & Brochures",
        "Professional Lamination & UV Coating",
        "High-Speed Bulk Document Scanning",
        "OCR & Digital Conversion Services",
        "Document Archival & Cloud Integration",
        "Blueprint & Large Format Scanning"
      ],
      pricing: {
        from: "KES 5/page",
        popular: "Color printing from KES 20/page",
        note: "Bulk discounts available for large orders"
      },
      color: "text-primary",
      image: heroCustomer
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-tech-blue to-tech-cyan text-primary-foreground py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroServices}
            alt="Technology Services"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-tech-blue/60 to-tech-cyan/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-95">
              Comprehensive technology solutions tailored to meet all your digital needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isCyberService = service.title.includes("Cyber Services");
              const iconElement = isCyberService ? (
                <AnimatedPrinterIcon className={`h-8 w-8 ${service.color}`} />
              ) : (
                <Icon className={`h-8 w-8 ${service.color}`} />
              );

              return (
                <ServiceFlipCard
                  key={index}
                  icon={iconElement}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  pricing={service.pricing}
                  color={service.color}
                  image={service.image}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Service Guarantees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">90-Day Warranty</h3>
                  <p className="text-sm text-muted-foreground">All repair services backed by our comprehensive warranty</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">1-Year Installation Warranty</h3>
                  <p className="text-sm text-muted-foreground">Long-term protection on all installation work</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">24-Hour Response Time</h3>
                  <p className="text-sm text-muted-foreground">Quick response guarantee for all service requests</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Transparent Pricing</h3>
                  <p className="text-sm text-muted-foreground">Clear quotes with no hidden fees or surprises</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary to-tech-cyan text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
                Our team is ready to assess your needs and provide a tailored technology solution
              </p>
              <Link to="/book-service">
                <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Your Free Consultation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
