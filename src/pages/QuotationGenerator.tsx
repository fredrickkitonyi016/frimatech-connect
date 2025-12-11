import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { FileDown, Plus, Minus, Trash2, Calculator, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import jsPDF from "jspdf";

interface ServiceItem {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
  unit: string;
}

interface CustomerInfo {
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

const availableServices = [
  { id: "laptop-repair", name: "Laptop Repair", unitPrice: 2000, unit: "device" },
  { id: "desktop-repair", name: "Desktop Repair", unitPrice: 1500, unit: "device" },
  { id: "phone-repair", name: "Phone Repair", unitPrice: 800, unit: "device" },
  { id: "printer-repair", name: "Printer Repair", unitPrice: 1200, unit: "device" },
  { id: "wifi-installation", name: "WiFi Installation", unitPrice: 5000, unit: "setup" },
  { id: "network-cabling", name: "Network Cabling (CAT6)", unitPrice: 350, unit: "point" },
  { id: "cctv-camera", name: "CCTV Camera Installation", unitPrice: 8000, unit: "camera" },
  { id: "cctv-dvr", name: "CCTV DVR Setup", unitPrice: 15000, unit: "unit" },
  { id: "remote-support", name: "Remote IT Support", unitPrice: 1000, unit: "hour" },
  { id: "onsite-support", name: "On-Site IT Support", unitPrice: 2500, unit: "visit" },
  { id: "website-dev", name: "Website Development", unitPrice: 25000, unit: "project" },
  { id: "seo-service", name: "SEO Services", unitPrice: 10000, unit: "month" },
  { id: "kra-pin", name: "KRA PIN Registration", unitPrice: 500, unit: "registration" },
  { id: "ntsa-services", name: "NTSA Services", unitPrice: 800, unit: "service" },
  { id: "printing", name: "Document Printing", unitPrice: 5, unit: "page" },
  { id: "scanning", name: "Scanning Services", unitPrice: 10, unit: "page" },
  { id: "cv-writing", name: "CV Writing", unitPrice: 1500, unit: "document" },
  { id: "computer-rental", name: "Computer Rental", unitPrice: 50, unit: "hour" },
];

const QuotationGenerator = () => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
  });
  
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);
  const [validityDays, setValidityDays] = useState(30);
  const [notes, setNotes] = useState("");
  const [discount, setDiscount] = useState(0);

  const addService = (service: typeof availableServices[0]) => {
    const exists = selectedServices.find(s => s.id === service.id);
    if (exists) {
      toast.error("Service already added");
      return;
    }
    setSelectedServices([...selectedServices, { ...service, quantity: 1 }]);
  };

  const updateQuantity = (id: string, delta: number) => {
    setSelectedServices(services =>
      services.map(s =>
        s.id === id ? { ...s, quantity: Math.max(1, s.quantity + delta) } : s
      )
    );
  };

  const removeService = (id: string) => {
    setSelectedServices(services => services.filter(s => s.id !== id));
  };

  const subtotal = selectedServices.reduce((sum, s) => sum + s.unitPrice * s.quantity, 0);
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  const generatePDF = () => {
    if (!customerInfo.name.trim()) {
      toast.error("Please enter customer name");
      return;
    }
    if (selectedServices.length === 0) {
      toast.error("Please add at least one service");
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let y = 20;

    // Header
    doc.setFillColor(10, 100, 180);
    doc.rect(0, 0, pageWidth, 40, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("FRIMAT TECHNOLOGIES", margin, 25);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Pipeline, Nairobi, Kenya | Tel: 0112277289", margin, 35);

    y = 55;

    // Quotation Title
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("QUOTATION", pageWidth - margin, y, { align: "right" });

    // Quotation Details
    y += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const quoteNumber = `QT-${Date.now().toString().slice(-8)}`;
    const date = new Date().toLocaleDateString("en-GB");
    const validUntil = new Date(Date.now() + validityDays * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB");
    
    doc.text(`Quote #: ${quoteNumber}`, pageWidth - margin, y, { align: "right" });
    y += 6;
    doc.text(`Date: ${date}`, pageWidth - margin, y, { align: "right" });
    y += 6;
    doc.text(`Valid Until: ${validUntil}`, pageWidth - margin, y, { align: "right" });

    // Customer Info
    y = 55;
    doc.setFont("helvetica", "bold");
    doc.text("BILL TO:", margin, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.text(customerInfo.name, margin, y);
    if (customerInfo.company) {
      y += 5;
      doc.text(customerInfo.company, margin, y);
    }
    if (customerInfo.address) {
      y += 5;
      doc.text(customerInfo.address, margin, y);
    }
    if (customerInfo.phone) {
      y += 5;
      doc.text(`Tel: ${customerInfo.phone}`, margin, y);
    }
    if (customerInfo.email) {
      y += 5;
      doc.text(`Email: ${customerInfo.email}`, margin, y);
    }

    // Services Table
    y = 110;
    
    // Table Header
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, y, pageWidth - 2 * margin, 10, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("SERVICE", margin + 3, y + 7);
    doc.text("QTY", 110, y + 7);
    doc.text("UNIT", 125, y + 7);
    doc.text("PRICE (KSh)", 145, y + 7);
    doc.text("TOTAL (KSh)", pageWidth - margin - 3, y + 7, { align: "right" });

    y += 12;
    doc.setFont("helvetica", "normal");

    // Table Rows
    selectedServices.forEach((service) => {
      if (y > 250) {
        doc.addPage();
        y = 20;
      }
      
      const lineTotal = service.unitPrice * service.quantity;
      doc.text(service.name, margin + 3, y + 5);
      doc.text(service.quantity.toString(), 110, y + 5);
      doc.text(service.unit, 125, y + 5);
      doc.text(service.unitPrice.toLocaleString(), 145, y + 5);
      doc.text(lineTotal.toLocaleString(), pageWidth - margin - 3, y + 5, { align: "right" });
      
      // Row separator
      doc.setDrawColor(230, 230, 230);
      doc.line(margin, y + 8, pageWidth - margin, y + 8);
      y += 10;
    });

    // Totals
    y += 5;
    const totalsX = 130;
    
    doc.setFont("helvetica", "normal");
    doc.text("Subtotal:", totalsX, y);
    doc.text(`KSh ${subtotal.toLocaleString()}`, pageWidth - margin - 3, y, { align: "right" });
    
    if (discount > 0) {
      y += 8;
      doc.text(`Discount (${discount}%):`, totalsX, y);
      doc.text(`-KSh ${discountAmount.toLocaleString()}`, pageWidth - margin - 3, y, { align: "right" });
    }

    y += 10;
    doc.setFillColor(10, 100, 180);
    doc.rect(totalsX - 5, y - 5, pageWidth - margin - totalsX + 5, 12, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("TOTAL:", totalsX, y + 3);
    doc.text(`KSh ${total.toLocaleString()}`, pageWidth - margin - 3, y + 3, { align: "right" });

    // Notes
    if (notes) {
      y += 25;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("Notes:", margin, y);
      y += 6;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      const splitNotes = doc.splitTextToSize(notes, pageWidth - 2 * margin);
      doc.text(splitNotes, margin, y);
    }

    // Footer
    const footerY = doc.internal.pageSize.getHeight() - 25;
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text("Thank you for choosing Frimat Technologies!", pageWidth / 2, footerY, { align: "center" });
    doc.text("www.frimattechnologies.co.ke | frimattechnologies016@gmail.com", pageWidth / 2, footerY + 5, { align: "center" });

    // Save PDF
    doc.save(`Quotation_${customerInfo.name.replace(/\s+/g, "_")}_${quoteNumber}.pdf`);
    toast.success("Quotation PDF downloaded successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-tech-blue to-tech-cyan text-primary-foreground py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="h-10 w-10" />
              <h1 className="text-3xl md:text-4xl font-bold">Quotation Generator</h1>
            </div>
            <p className="text-lg opacity-95">
              Create professional quotations for our services and download them as PDF
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Customer Info & Services */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Building className="h-5 w-5 text-primary" />
                    Customer Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-foreground">Full Name *</Label>
                    <Input
                      placeholder="John Doe"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Company</Label>
                    <Input
                      placeholder="Company Name"
                      value={customerInfo.company}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Email</Label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="text-foreground">Phone</Label>
                    <Input
                      placeholder="07XXXXXXXX"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label className="text-foreground">Address</Label>
                    <Input
                      placeholder="Physical Address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Available Services */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Select Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {availableServices.map((service) => {
                      const isSelected = selectedServices.some(s => s.id === service.id);
                      return (
                        <div
                          key={service.id}
                          className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer transition-all ${
                            isSelected
                              ? "bg-primary/10 border-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => !isSelected && addService(service)}
                        >
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={(checked) => {
                              if (checked) addService(service);
                              else removeService(service.id);
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{service.name}</p>
                            <p className="text-xs text-muted-foreground">
                              KSh {service.unitPrice.toLocaleString()}/{service.unit}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Notes */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Additional Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    rows={3}
                    placeholder="Add any special terms, conditions, or notes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Quote Summary */}
            <div className="space-y-6">
              <Card className="border-border sticky top-24">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="text-lg">Quote Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {selectedServices.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                      Select services to build your quotation
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {selectedServices.map((service) => (
                        <div key={service.id} className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{service.name}</p>
                            <p className="text-xs text-muted-foreground">
                              KSh {service.unitPrice.toLocaleString()} × {service.quantity} {service.unit}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(service.id, -1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium text-foreground">
                              {service.quantity}
                            </span>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(service.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7 text-destructive hover:text-destructive"
                              onClick={() => removeService(service.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                          <p className="text-sm font-semibold text-foreground w-20 text-right">
                            KSh {(service.unitPrice * service.quantity).toLocaleString()}
                          </p>
                        </div>
                      ))}

                      <Separator className="my-4" />

                      {/* Discount */}
                      <div className="flex items-center justify-between">
                        <Label className="text-foreground">Discount (%)</Label>
                        <Input
                          type="number"
                          min={0}
                          max={100}
                          className="w-20 text-right"
                          value={discount}
                          onChange={(e) => setDiscount(Math.min(100, Math.max(0, Number(e.target.value))))}
                        />
                      </div>

                      {/* Validity */}
                      <div className="flex items-center justify-between">
                        <Label className="text-foreground">Valid for (days)</Label>
                        <Input
                          type="number"
                          min={1}
                          className="w-20 text-right"
                          value={validityDays}
                          onChange={(e) => setValidityDays(Math.max(1, Number(e.target.value)))}
                        />
                      </div>

                      <Separator className="my-4" />

                      {/* Totals */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="text-foreground">KSh {subtotal.toLocaleString()}</span>
                        </div>
                        {discount > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Discount ({discount}%)</span>
                            <span className="text-destructive">-KSh {discountAmount.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                          <span className="text-foreground">Total</span>
                          <span className="text-primary">KSh {total.toLocaleString()}</span>
                        </div>
                      </div>

                      <Button
                        className="w-full mt-4"
                        size="lg"
                        onClick={generatePDF}
                      >
                        <FileDown className="mr-2 h-5 w-5" />
                        Download PDF
                      </Button>
                    </div>
                  )}
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

export default QuotationGenerator;
