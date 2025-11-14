import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wifi, Camera, Wrench, Bitcoin, ShoppingBag, CheckCircle, Phone, ChevronLeft, ChevronRight, Users, Award, Clock, TrendingUp, ArrowRight, Package, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoTestimonials from "@/components/VideoTestimonials";
import heroSecurity from "@/assets/hero-security.jpg";
import heroRepair from "@/assets/hero-repair.jpg";
import heroShop from "@/assets/hero-shop.jpg";
import heroNetwork from "@/assets/hero-network.jpg";
import heroCrypto from "@/assets/hero-crypto.jpg";
import heroCustomer from "@/assets/hero-customer.jpg";
import heroCybersecurity from "@/assets/hero-cybersecurity.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: heroSecurity,
      title: "Expert Security Solutions",
      subtitle: "Protect What Matters.",
      description: "Professional CCTV installation and monitoring systems for complete peace of mind"
    },
    {
      image: heroNetwork,
      title: "Seamless Network Solutions",
      subtitle: "Stay Connected.",
      description: "Enterprise-grade WiFi installation and structured cabling for homes and offices"
    },
    {
      image: heroRepair,
      title: "Precision Repairs",
      subtitle: "Fast & Reliable.",
      description: "Expert repairs for all your devices with warranty-backed service"
    },
    {
      image: heroCybersecurity,
      title: "Advanced Cybersecurity",
      subtitle: "Digital Protection 24/7.",
      description: "Comprehensive security monitoring and threat detection for your business"
    },
    {
      image: heroCrypto,
      title: "Cryptocurrency Services",
      subtitle: "Your Gateway to Digital Assets.",
      description: "Secure crypto trading and blockchain technology consultation"
    },
    {
      image: heroShop,
      title: "Shop Tech & Services Online",
      subtitle: "Delivered to You.",
      description: "Browse our complete range of products and services from the comfort of your home"
    },
    {
      image: heroCustomer,
      title: "Customer Satisfaction Guaranteed",
      subtitle: "Your Trust, Our Priority.",
      description: "Exceptional service with 90-day warranty and 24-hour response guarantee"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

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

  const stats = [
    { icon: Users, value: "2,500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: CheckCircle, value: "10,000+", label: "Projects Completed" },
    { icon: Clock, value: "24/7", label: "Support Available" }
  ];

  const partners = [
    "Safaricom", "Airtel", "Microsoft", "Cisco", "HP", "Dell", "Samsung", "Apple"
  ];

  const process = [
    {
      step: "1",
      title: "Contact Us",
      description: "Reach out via phone, email, or our website to discuss your needs"
    },
    {
      step: "2",
      title: "Free Consultation",
      description: "We assess your requirements and provide expert recommendations"
    },
    {
      step: "3",
      title: "Get Quote",
      description: "Receive a detailed, transparent quote with no hidden fees"
    },
    {
      step: "4",
      title: "Service Delivery",
      description: "Our certified technicians deliver quality service on time"
    }
  ];

  const featuredProducts = [
    {
      name: "4K CCTV Camera System",
      price: "KSh 45,000",
      description: "Complete 4-camera setup with night vision and remote viewing"
    },
    {
      name: "Enterprise WiFi Router",
      price: "KSh 12,500",
      description: "High-speed dual-band router for offices up to 5,000 sq ft"
    },
    {
      name: "Laptop Repair Service",
      price: "From KSh 2,000",
      description: "Expert diagnosis and repair with 90-day warranty"
    },
    {
      name: "Network Cabling Package",
      price: "KSh 350/point",
      description: "Professional CAT6 cabling installation for offices"
    }
  ];

  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We primarily serve Nairobi and surrounding areas, including Kiambu, Machakos, and Kajiado. For projects outside these areas, please contact us for availability."
    },
    {
      question: "Do you offer warranties on repairs?",
      answer: "Yes, all our repair services come with a 90-day warranty covering both parts and labor. This ensures your peace of mind and our commitment to quality."
    },
    {
      question: "How quickly can you respond to service requests?",
      answer: "For emergency services, we offer same-day response within Nairobi. Standard service requests are typically scheduled within 24-48 hours."
    },
    {
      question: "Do you provide maintenance contracts?",
      answer: "Yes, we offer flexible maintenance contracts for businesses, including monthly and annual plans covering network infrastructure, CCTV systems, and IT equipment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, bank transfers, cash, and card payments. For larger projects, we offer flexible payment terms."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden bg-foreground">
        {/* Animated background pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-tech-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        <div className="relative h-[600px] md:h-[700px] z-10">
          {/* Carousel Slides */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40"></div>
              </div>

              {/* Content */}
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-background animate-fade-in">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl font-semibold mb-6 text-accent">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg md:text-xl mb-8 opacity-90">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-service">
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Get Free Quote
                      </Button>
                    </Link>
                    <Link to="/shop">
                      <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                        Browse Shop
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-background" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-background" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-accent w-8"
                    : "bg-background/50 hover:bg-background/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              <span className="font-semibold text-primary">Frimat Technologies</span>, based in Nairobi, 
              is your premier partner for integrated technology solutions. From cyber services and WiFi 
              installation to device repair and retail, we connect you to the future.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-tech-cyan">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center text-primary-foreground">
                  <div className="inline-flex p-4 bg-white/10 rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Service Icons */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click to explore our comprehensive technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to="/services"
                  className="group"
                >
                  <Card className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex p-4 bg-secondary rounded-full mb-4 group-hover:bg-primary transition-colors">
                        <Icon className={`h-8 w-8 ${service.color} group-hover:text-primary-foreground transition-colors`} />
                      </div>
                      <h3 className="font-semibold text-sm mb-1 text-foreground">{service.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
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

      {/* Detailed Services Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
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

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple 4-step process ensures you get the best service experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products & Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Popular solutions trusted by our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{product.price}</p>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <Link to="/shop">
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/shop">
              <Button size="lg">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              We work with industry-leading brands to deliver quality solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="text-muted-foreground hover:text-foreground transition-colors">
                <div className="text-xl md:text-2xl font-semibold opacity-60 hover:opacity-100">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We have answers
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-foreground">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Have More Questions? Contact Us
              </Button>
            </Link>
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
