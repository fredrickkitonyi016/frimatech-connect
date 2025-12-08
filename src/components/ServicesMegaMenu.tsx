import { Link } from "react-router-dom";
import { 
  Wrench, 
  Wifi, 
  Globe, 
  FileText, 
  Printer, 
  Coffee,
  Laptop,
  Network,
  Shield,
  Server,
  ChevronRight,
  Zap,
  Camera,
  FileCheck
} from "lucide-react";

interface ServiceItem {
  title: string;
  icon: React.ElementType;
  slug: string;
  description?: string;
  popular?: boolean;
  subItems?: { name: string; price?: string }[];
}

interface QuickLink {
  title: string;
  icon: React.ElementType;
  service: string;
  color: "primary" | "accent";
}

const ServicesMegaMenu = () => {
  const coreServices: ServiceItem[] = [
    {
      title: "IT Support",
      icon: Laptop,
      slug: "it-support",
      description: "24/7 Technical Support",
      popular: true,
      subItems: [
        { name: "Remote Support", price: "From KSh 1,000" },
        { name: "On-Site Support", price: "From KSh 2,500" },
        { name: "Business IT Management" },
      ],
    },
    {
      title: "Hardware Repair",
      icon: Wrench,
      slug: "hardware-repair",
      description: "Expert Repairs",
      subItems: [
        { name: "Laptop Repair", price: "From KSh 1,500" },
        { name: "Desktop Repair", price: "From KSh 1,000" },
        { name: "Phone Repair", price: "From KSh 500" },
        { name: "Printer Repair", price: "From KSh 800" },
      ],
    },
    {
      title: "Networking",
      icon: Network,
      slug: "networking",
      description: "Professional Setup",
      popular: true,
      subItems: [
        { name: "WiFi Installation", price: "From KSh 5,000" },
        { name: "Network Setup", price: "From KSh 8,000" },
        { name: "CCTV Installation", price: "From KSh 15,000" },
      ],
    },
    {
      title: "Web & Digital",
      icon: Globe,
      slug: "web-digital",
      description: "Online Solutions",
      subItems: [
        { name: "Website Development" },
        { name: "Digital Marketing" },
        { name: "SEO Services" },
      ],
    },
  ];

  const cyberServices: ServiceItem[] = [
    {
      title: "Government e-Services",
      icon: Shield,
      slug: "government-services",
      subItems: [
        { name: "KRA PIN Registration" },
        { name: "NTSA Services" },
        { name: "HELB Applications" },
        { name: "Passport Applications" },
      ],
    },
    {
      title: "Online Applications",
      icon: FileText,
      slug: "online-applications",
      subItems: [
        { name: "Job Applications" },
        { name: "University Applications" },
        { name: "Visa Applications" },
        { name: "Business Registration" },
      ],
    },
    {
      title: "Printing & Documentation",
      icon: Printer,
      slug: "printing-documentation",
      popular: true,
      subItems: [
        { name: "Document Printing", price: "KSh 5/page" },
        { name: "Scanning Services", price: "KSh 10/page" },
        { name: "Binding & Lamination" },
        { name: "CV Writing Services" },
      ],
    },
    {
      title: "General Cyber Café",
      icon: Coffee,
      slug: "cyber-cafe",
      subItems: [
        { name: "Internet Access", price: "KSh 20/hr" },
        { name: "Computer Use", price: "KSh 50/hr" },
        { name: "Email Services" },
        { name: "Document Typing" },
      ],
    },
  ];

  const featuredLinks: QuickLink[] = [
    { title: "Laptop Repair", icon: Laptop, service: "Laptop Repair", color: "primary" },
    { title: "WiFi Setup", icon: Wifi, service: "WiFi Installation", color: "primary" },
    { title: "CCTV Install", icon: Camera, service: "CCTV Installation", color: "primary" },
    { title: "KRA PIN", icon: FileCheck, service: "KRA PIN Registration", color: "accent" },
    { title: "Printing", icon: Printer, service: "Document Printing", color: "accent" },
  ];

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full w-[800px] max-w-[95vw] bg-card border border-border rounded-xl shadow-strong animate-fade-in z-50">
      <div className="p-5">
        {/* Featured Quick Links */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
          <Zap className="h-4 w-4 text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2">Quick Access:</span>
          <div className="flex flex-wrap gap-2">
            {featuredLinks.map((link, idx) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={idx}
                  to={`/book-service?service=${encodeURIComponent(link.service)}`}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    link.color === "primary"
                      ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                      : "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <IconComponent className="h-3 w-3" />
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Core Services Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2 pb-2 border-b border-border">
              <Server className="h-3.5 w-3.5" />
              Core IT Services
            </h3>
            <div className="space-y-1">
              {coreServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <Link 
                    key={idx}
                    to={`/book-service?service=${encodeURIComponent(service.title)}`}
                    className="group block p-2.5 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          {service.popular && (
                            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-accent text-accent-foreground rounded">
                              HOT
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                          {service.subItems?.slice(0, 3).map((item, subIdx) => (
                            <span key={subIdx} className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors">
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Cyber Services Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2 pb-2 border-b border-border">
              <Globe className="h-3.5 w-3.5" />
              Cyber Café Services
            </h3>
            <div className="space-y-1">
              {cyberServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <Link 
                    key={idx}
                    to={`/book-service?service=${encodeURIComponent(service.title)}`}
                    className="group block p-2.5 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                            {service.title}
                          </h4>
                          {service.popular && (
                            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded">
                              HOT
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                          {service.subItems?.slice(0, 3).map((item, subIdx) => (
                            <span key={subIdx} className="text-xs text-muted-foreground group-hover:text-accent/70 transition-colors">
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Professional IT & Cyber services in Nairobi
          </p>
          <div className="flex gap-2">
            <Link 
              to="/services" 
              className="px-4 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              All Services
            </Link>
            <Link 
              to="/book-service" 
              className="px-4 py-1.5 text-xs font-semibold border border-accent text-accent rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
