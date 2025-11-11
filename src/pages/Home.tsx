import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wifi, Camera, Wrench, Bitcoin, ShoppingBag, CheckCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive digital protection, network security, and threat monitoring.",
      color: "text-primary"
    },
    {
      icon: Wifi,
      title: "Network Solutions",
      description: "Professional WiFi installation, structured cabling, and internet setup.",
      color: "text-tech-cyan"
    },
    {
      icon: Camera,
      title: "CCTV Systems",
      description: "Advanced surveillance systems with remote monitoring capabilities.",
      color: "text-accent"
    },
    {
      icon: Wrench,
      title: "Electronics Repair",
      description: "Expert repair services for phones, computers, and all electronic devices.",
      color: "text-primary"
    },
    {
      icon: Bitcoin,
      title: "Crypto Services",
      description: "Secure cryptocurrency trading and blockchain technology consultation.",
      color: "text-tech-cyan"
    },
    {
      icon: ShoppingBag,
      title: "Tech Retail",
      description: "M-KOPA phones, Watu Simu, accessories, and technology products.",
      color: "text-accent"
    }
  ];

  const features = [
    "90-day warranty on all repairs",
    "24/7 emergency support available",
    "Certified & experienced technicians",
    "Transparent pricing, no hidden fees"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-tech-blue to-tech-cyan text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connecting Innovation.<br />
              Delivering Solutions.
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Your One-Stop Tech Partner in Kenya
            </p>
            <p className="text-lg mb-8 opacity-90 max-w-2xl">
              From cybersecurity and network installation to device repair and tech retail, 
              Frimat Technologies brings professional technology solutions to homes and businesses across Nairobi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-service">
                <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Browse Tech Shop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional services tailored to meet all your technology needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-secondary rounded-lg">
                        <Icon className={`h-6 w-6 ${service.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-foreground">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Frimat Technologies?
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by businesses and homes across Nairobi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary to-tech-cyan text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Tech Experience?
              </h2>
              <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
                Contact us today for a free consultation or visit our tech shop to explore our products and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/book-service">
                  <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Book Your Service Now
                  </Button>
                </Link>
                <a href="tel:0112277289">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 0112277289
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
