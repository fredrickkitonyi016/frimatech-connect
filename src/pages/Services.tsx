import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Wifi, Camera, Wrench, Bitcoin, ShoppingBag, Check, Printer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      color: "text-primary"
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
      color: "text-tech-cyan"
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
      color: "text-accent"
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
      color: "text-primary"
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
      color: "text-tech-cyan"
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
      color: "text-accent"
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
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-tech-blue to-tech-cyan text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
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
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-secondary rounded-lg">
                        <Icon className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
