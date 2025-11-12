import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroTechShop from "@/assets/hero-techshop.jpg";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "security", name: "Security & CCTV" },
    { id: "networking", name: "Networking" },
    { id: "phones", name: "Phones & Devices" },
    { id: "accessories", name: "Accessories" },
    { id: "services", name: "Service Vouchers" }
  ];

  const products = [
    {
      id: 1,
      name: "HD CCTV Camera (2MP)",
      category: "security",
      price: "KES 3,500",
      image: "/placeholder.svg",
      badge: "Popular",
      description: "High-definition surveillance camera with night vision"
    },
    {
      id: 2,
      name: "4-Channel DVR System",
      category: "security",
      price: "KES 12,000",
      image: "/placeholder.svg",
      description: "Complete recording system for up to 4 cameras"
    },
    {
      id: 3,
      name: "Dual-Band WiFi Router",
      category: "networking",
      price: "KES 4,500",
      image: "/placeholder.svg",
      badge: "Best Seller",
      description: "High-speed router with 2.4GHz and 5GHz bands"
    },
    {
      id: 4,
      name: "Mesh WiFi System (3-Pack)",
      category: "networking",
      price: "KES 18,000",
      image: "/placeholder.svg",
      description: "Whole-home coverage with seamless roaming"
    },
    {
      id: 5,
      name: "M-KOPA Smartphone",
      category: "phones",
      price: "From KES 500/week",
      image: "/placeholder.svg",
      badge: "Flexible Payment",
      description: "Quality smartphones with affordable payment plans"
    },
    {
      id: 6,
      name: "Watu Simu Device",
      category: "phones",
      price: "KES 6,500",
      image: "/placeholder.svg",
      description: "Affordable quality smartphone"
    },
    {
      id: 7,
      name: "Phone Case & Screen Guard",
      category: "accessories",
      price: "KES 500",
      image: "/placeholder.svg",
      description: "Premium protection for your device"
    },
    {
      id: 8,
      name: "Fast Charging Cable",
      category: "accessories",
      price: "KES 300",
      image: "/placeholder.svg",
      description: "Durable USB-C charging cable"
    },
    {
      id: 9,
      name: "WiFi Installation Service",
      category: "services",
      price: "KES 2,500",
      image: "/placeholder.svg",
      badge: "Service",
      description: "Professional WiFi setup and optimization"
    },
    {
      id: 10,
      name: "Phone Screen Replacement",
      category: "services",
      price: "From KES 1,500",
      image: "/placeholder.svg",
      badge: "Service",
      description: "Expert screen replacement with warranty"
    }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-tech-blue to-tech-cyan text-primary-foreground py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroTechShop}
            alt="Tech Shop"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-tech-blue/80 to-tech-cyan/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Shop</h1>
            <p className="text-xl opacity-95 mb-6">
              Quality products with secure M-Pesa payment and fast delivery
            </p>
            <div className="relative max-w-md">
              <Input 
                placeholder="Search products..." 
                className="pl-10 bg-primary-foreground text-foreground"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative aspect-square bg-secondary rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    {product.badge && (
                      <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <p className="text-xl font-bold text-primary">{product.price}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 space-x-2">
                  <Button className="flex-1" variant="default">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Secure & Convenient Payment</h2>
            <p className="text-muted-foreground mb-6">
              Pay safely with M-Pesa, Cash on Delivery, or Bank Transfer
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-base">
                M-PESA Payment
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base">
                Cash on Delivery
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base">
                Bank Transfer
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Free delivery within Nairobi for orders over KES 5,000
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
