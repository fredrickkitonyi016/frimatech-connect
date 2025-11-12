import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceFlipCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  pricing: {
    from: string;
    popular?: string;
    note?: string;
  };
  color: string;
}

const ServiceFlipCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  pricing,
  color 
}: ServiceFlipCardProps) => {
  return (
    <div className="flip-card-container h-full perspective-1000">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
        {/* Front Face */}
        <div className="flip-card-face flip-card-front absolute inset-0 backface-hidden">
          <Card className="border-border h-full shadow-lg">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary rounded-lg">
                  {icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className={`h-5 w-5 ${color} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground italic">Hover to view pricing</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back Face */}
        <div className="flip-card-face flip-card-back absolute inset-0 backface-hidden rotate-y-180">
          <Card className="border-border h-full shadow-lg bg-gradient-to-br from-primary/5 to-tech-cyan/5">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4">
                {icon}
              </div>
              <CardTitle className="text-2xl mb-2">{title}</CardTitle>
              <p className="text-sm text-muted-foreground">Pricing Information</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                <p className="text-4xl font-bold text-primary">{pricing.from}</p>
                {pricing.popular && (
                  <p className="text-lg text-accent font-semibold mt-2">{pricing.popular}</p>
                )}
              </div>
              
              {pricing.note && (
                <p className="text-sm text-muted-foreground text-center max-w-xs">
                  {pricing.note}
                </p>
              )}

              <div className="flex flex-col gap-3 w-full max-w-xs">
                <Link to="/book-service" className="w-full">
                  <Button size="lg" className="w-full">
                    Get Quote
                  </Button>
                </Link>
                <Link to="/contact" className="w-full">
                  <Button size="lg" variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceFlipCard;
