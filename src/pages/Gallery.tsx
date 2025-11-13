import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroGallery from "@/assets/hero-gallery.jpg";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Corporate Office Network Setup",
      category: "Networking",
      image: "/placeholder.svg",
      description: "Complete WiFi infrastructure for 50+ employees"
    },
    {
      id: 2,
      title: "Residential CCTV Installation",
      category: "Security",
      image: "/placeholder.svg",
      description: "8-camera HD surveillance system with night vision"
    },
    {
      id: 3,
      title: "Retail Store Security System",
      category: "Security",
      image: "/placeholder.svg",
      description: "16-camera setup with POS integration"
    },
    {
      id: 4,
      title: "Home WiFi Mesh Network",
      category: "Networking",
      image: "/placeholder.svg",
      description: "Whole-home coverage for 4-bedroom house"
    },
    {
      id: 5,
      title: "Phone Repair Workshop",
      category: "Repair",
      image: "/placeholder.svg",
      description: "Professional-grade repair station"
    },
    {
      id: 6,
      title: "Enterprise Cybersecurity Audit",
      category: "Cybersecurity",
      image: "/placeholder.svg",
      description: "Comprehensive security assessment"
    }
  ];

  const testimonials = [
    {
      name: "Jane Muthoni",
      role: "Small Business Owner",
      text: "The Frimat team installed my office WiFi and it's been flawless! Highly professional service.",
      rating: 5
    },
    {
      name: "David Kamau",
      role: "Homeowner",
      text: "Excellent CCTV installation. The remote monitoring app works perfectly. Great value for money.",
      rating: 5
    },
    {
      name: "Sarah Wanjiru",
      role: "Restaurant Manager",
      text: "Fixed my POS system quickly and efficiently. Very knowledgeable team!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-tech-blue to-tech-cyan text-primary-foreground py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroGallery}
            alt="Our Work Gallery"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-tech-blue/60 to-tech-cyan/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <p className="text-xl opacity-95">
              Explore our completed projects and hear from satisfied customers
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Professional installations and repairs across Nairobi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-secondary relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Repair Showcase</h2>
            <p className="text-muted-foreground">
              Expert repairs that restore your devices to perfect condition
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Badge className="mb-3 bg-destructive text-destructive-foreground">Before</Badge>
                    <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Cracked Screen</p>
                    </div>
                  </div>
                  <div>
                    <Badge className="mb-3 bg-primary text-primary-foreground">After</Badge>
                    <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Perfect Condition</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-foreground font-semibold mb-2">iPhone 12 Screen Replacement</p>
                  <p className="text-sm text-muted-foreground">
                    Professional repair with 90-day warranty • Completed in 1 hour
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
