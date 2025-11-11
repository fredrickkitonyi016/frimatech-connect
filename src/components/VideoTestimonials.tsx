import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  service: string;
  rating: number;
  videoUrl: string;
  thumbnail: string;
  quote: string;
  date: string;
}

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jane Muthoni",
      role: "Small Business Owner",
      service: "WiFi Installation",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg",
      quote: "The Frimat team installed my office WiFi and it's been flawless! Highly professional service.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "David Kamau",
      role: "Homeowner",
      service: "CCTV Installation",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg",
      quote: "Excellent CCTV installation. The remote monitoring app works perfectly. Great value for money.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Sarah Wanjiru",
      role: "Restaurant Manager",
      service: "Phone Repair",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg",
      quote: "Fixed my phone screen quickly and efficiently. Very knowledgeable team!",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "John Ochieng",
      role: "Corporate IT Manager",
      service: "Network Setup",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg",
      quote: "Professional network installation for our 50+ employee office. Zero downtime since installation.",
      date: "2 months ago"
    },
    {
      id: 5,
      name: "Mary Akinyi",
      role: "Retail Shop Owner",
      service: "Security System",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg",
      quote: "The security system has given me peace of mind. I can monitor my shop from anywhere!",
      date: "1 month ago"
    },
    {
      id: 6,
      name: "Peter Njoroge",
      role: "Tech Enthusiast",
      service: "Crypto Consultation",
      rating: 5,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg",
      quote: "Great crypto consultation service. They helped me set up my wallet securely and guided me through trading.",
      date: "3 weeks ago"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">Customer Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hear From Our Satisfied Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real customers across Nairobi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-border hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative aspect-video bg-secondary group cursor-pointer">
                {activeVideo === testimonial.id ? (
                  <iframe
                    src={testimonial.videoUrl}
                    title={`${testimonial.name} testimonial`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors flex items-center justify-center">
                      <Button
                        size="lg"
                        onClick={() => setActiveVideo(testimonial.id)}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-16 h-16 p-0"
                      >
                        <Play className="h-8 w-8 ml-1" fill="currentColor" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{testimonial.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Share Your Experience CTA */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-tech-cyan/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Had a Great Experience?
              </h3>
              <p className="text-muted-foreground mb-6">
                We'd love to hear about it! Share your story and help others discover quality tech services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Record Your Testimonial
                </Button>
                <Button size="lg" variant="outline">
                  Write a Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">2000+</p>
            <p className="text-sm text-muted-foreground">Devices Repaired</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</p>
            <p className="text-sm text-muted-foreground">Business Partners</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</p>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
