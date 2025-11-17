import { 
  Wrench, 
  HardDrive, 
  Wifi, 
  Globe, 
  FileText, 
  Printer, 
  Coffee,
  Laptop,
  Monitor,
  Network,
  Shield,
  Server,
  Database,
  Cloud,
  Lock,
  ChevronRight
} from "lucide-react";

interface ServiceItem {
  title: string;
  icon: React.ElementType;
  description?: string;
  popular?: boolean;
  subItems?: { name: string; price?: string }[];
}

const ServicesMegaMenu = () => {
  const coreServices: ServiceItem[] = [
    {
      title: "IT Support",
      icon: Laptop,
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
      subItems: [
        { name: "Internet Access", price: "KSh 20/hr" },
        { name: "Computer Use", price: "KSh 50/hr" },
        { name: "Email Services" },
        { name: "Document Typing" },
      ],
    },
  ];

  return (
    <div className="absolute left-0 top-full w-full bg-background/95 backdrop-blur-lg border-t border-border shadow-strong animate-slide-down">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Core Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
              <Server className="h-4 w-4" />
              Core IT Services
            </h3>
            <div className="space-y-3">
              {coreServices.map((service, idx) => (
                <div 
                  key={idx} 
                  className="group relative p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-tech-cyan text-primary-foreground group-hover:scale-110 transition-transform">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h4>
                        {service.popular && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-accent/20 text-accent rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      {service.description && (
                        <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                      )}
                      {service.subItems && (
                        <ul className="space-y-1.5 mt-2">
                          {service.subItems.map((item, subIdx) => (
                            <li key={subIdx} className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors">
                              <span className="flex items-center gap-1">
                                <ChevronRight className="h-3 w-3 text-primary" />
                                {item.name}
                              </span>
                              {item.price && (
                                <span className="text-xs font-medium text-primary">{item.price}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cyber Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Cyber Café Services
            </h3>
            <div className="space-y-3">
              {cyberServices.map((service, idx) => (
                <div 
                  key={idx} 
                  className="group relative p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-accent to-tech-orange text-accent-foreground group-hover:scale-110 transition-transform">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {service.title}
                        </h4>
                        {service.popular && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      {service.subItems && (
                        <ul className="space-y-1.5 mt-2">
                          {service.subItems.map((item, subIdx) => (
                            <li key={subIdx} className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors">
                              <span className="flex items-center gap-1">
                                <ChevronRight className="h-3 w-3 text-accent" />
                                {item.name}
                              </span>
                              {item.price && (
                                <span className="text-xs font-medium text-accent">{item.price}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 pt-6 border-t border-border flex items-center justify-center gap-4">
          <a 
            href="/services" 
            className="px-6 py-2 bg-gradient-to-r from-primary to-tech-cyan text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            View All Services
          </a>
          <a 
            href="/book-service" 
            className="px-6 py-2 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
