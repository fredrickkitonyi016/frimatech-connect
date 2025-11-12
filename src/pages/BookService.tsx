import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Upload } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookService = () => {
  const [date, setDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "CCTV Installation",
    "WiFi Installation",
    "Network Setup",
    "Phone Repair",
    "Computer Repair",
    "Security Audit",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-tech-blue to-tech-cyan text-primary-foreground py-16 md:py-20 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-tech-cyan/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-tech-blue/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Service</h1>
            <p className="text-xl opacity-95">
              Schedule your free assessment and get expert technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Select Service Type
                    </Label>
                    <RadioGroup value={selectedService} onValueChange={setSelectedService}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <RadioGroupItem value={service} id={service} />
                            <Label htmlFor={service} className="cursor-pointer">
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <h3 className="text-lg font-semibold text-foreground">Your Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="07XXXXXXXX" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>

                    <div>
                      <Label htmlFor="address">Physical Address *</Label>
                      <Input id="address" placeholder="Area, Street, Building" required />
                    </div>
                  </div>

                  {/* Appointment Date */}
                  <div className="pt-4 border-t border-border">
                    <Label className="text-base font-semibold mb-3 block">
                      Preferred Appointment Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description">Description of Issue / Request *</Label>
                    <Textarea
                      id="description"
                      placeholder="Please describe your needs in detail..."
                      rows={5}
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <Label htmlFor="file" className="mb-2 block">
                      Upload Photo (Optional)
                    </Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Upload a picture of your device or installation area
                      </p>
                      <Input
                        id="file"
                        type="file"
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full">
                    Schedule My Free Assessment
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by Frimat Technologies 
                    regarding your service request. We typically respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card className="border-border bg-secondary/50">
                <CardContent className="p-4 text-center">
                  <p className="font-semibold text-foreground mb-1">Fast Response</p>
                  <p className="text-sm text-muted-foreground">24-hour callback guarantee</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-secondary/50">
                <CardContent className="p-4 text-center">
                  <p className="font-semibold text-foreground mb-1">Free Quote</p>
                  <p className="text-sm text-muted-foreground">No obligation assessment</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-secondary/50">
                <CardContent className="p-4 text-center">
                  <p className="font-semibold text-foreground mb-1">Expert Team</p>
                  <p className="text-sm text-muted-foreground">Certified technicians</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookService;
