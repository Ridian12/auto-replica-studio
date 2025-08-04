import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesaj trimis!",
      description: "Vă vom contacta în cel mai scurt timp possible.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-automotive-dark mb-4">
              Contactează-ne
            </h2>
            <p className="text-muted-foreground">
              Ai întrebări despre produsele noastre? Suntem aici să te ajutăm!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informații de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Magazin fizic</h4>
                  <p className="text-sm text-muted-foreground">
                    Prelungirea Ghencea 52C<br />
                    Sector 6, București<br />
                    România
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Program de lucru</h4>
                  <p className="text-sm text-muted-foreground">
                    Luni - Vineri: 9:00 - 18:00<br />
                    Sâmbătă: 9:00 - 14:00<br />
                    Duminică: Închis
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Contact telefonic</h4>
                  <p className="text-sm text-muted-foreground">
                    Telefon: 0755 000 000<br />
                    Email: contact@automobilus.ro
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Suport tehnic</h4>
                  <p className="text-sm text-muted-foreground">
                    Pentru consultanță tehnică și recomandări de produse, 
                    echipa noastră de specialiști este disponibilă în timpul 
                    programului de lucru.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Trimite un mesaj</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nume complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subiect</Label>
                    <Select onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectează subiectul" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info">Informații produs</SelectItem>
                        <SelectItem value="support">Suport tehnic</SelectItem>
                        <SelectItem value="order">Comanda mea</SelectItem>
                        <SelectItem value="complaint">Reclamație</SelectItem>
                        <SelectItem value="other">Altele</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mesaj *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Descrie aici întrebarea sau problema ta..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Trimite mesajul
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;