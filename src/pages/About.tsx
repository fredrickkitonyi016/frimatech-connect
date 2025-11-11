import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Innovation Excellence",
      description: "Staying ahead of technological trends to deliver cutting-edge solutions"
    },
    {
      icon: Users,
      title: "Customer Centricity",
      description: "Solutions tailored to meet your specific needs and challenges"
    },
    {
      icon: Target,
      title: "Integrity & Transparency",
      description: "Honest pricing, clear communication, and reliable service delivery"
    },
    {
      icon: Eye,
      title: "Technical Expertise",
      description: "Certified professionals with continuous training and development"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-tech-blue to-tech-cyan text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Frimat Technologies</h1>
            <p className="text-xl opacity-95">
              Empowering Kenya through innovative technology solutions and exceptional service
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by <span className="text-foreground font-semibold">Fredrick Kitonyi Kiio</span>, 
                  Frimat Technologies was born from a vision to democratize technology access and make 
                  powerful solutions accessible to every Kenyan home and business.
                </p>
                <p>
                  From our base in Pipeline, Nairobi, we have grown into a trusted name known for 
                  reliability, expertise, and comprehensive technology services. Our journey began 
                  with a simple belief: that quality technology solutions should be affordable, 
                  reliable, and delivered with exceptional customer service.
                </p>
                <p>
                  Today, we serve hundreds of satisfied customers across Nairobi and beyond, providing 
                  everything from cybersecurity and network installations to electronics repair and 
                  cryptocurrency services.
                </p>
              </div>
            </div>
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Meet Our CEO</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg text-foreground">Fredrick Kitonyi Kiio</p>
                    <p className="text-sm text-muted-foreground mb-2">Chief Executive Officer</p>
                  </div>
                  <p className="text-muted-foreground">
                    A visionary leader and technical strategist, Fredrick founded Frimat Technologies 
                    with the mission to transform how Kenyans access and utilize technology. His 
                    commitment to innovation and customer excellence drives our company's success.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      "Our goal is to make technology work for everyone—affordable, reliable, and 
                      delivered with a personal touch that larger companies can't match."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize technology access in Kenya by providing integrated, affordable, 
                  and reliable tech solutions that empower businesses and individuals to thrive 
                  in the digital economy.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-tech-cyan mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become East Africa's most trusted technology partner, renowned for innovation, 
                  customer excellence, and comprehensive digital transformation services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define who we are
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 bg-secondary rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Us</h2>
            <p className="text-muted-foreground mb-8">
              Located in Pipeline, Nairobi, we're easily accessible and ready to serve you
            </p>
            <div className="bg-secondary/50 rounded-lg p-8">
              <p className="text-lg font-semibold text-foreground mb-2">Frimat Technologies</p>
              <p className="text-muted-foreground mb-4">Pipeline, Nairobi, Kenya</p>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
