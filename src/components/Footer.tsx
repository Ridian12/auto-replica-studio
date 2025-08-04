import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-automotive-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">AUTOMOBILUS</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Magazinul tău de încredere pentru piese auto, accesorii și produse de îngrijire auto de calitate superioară.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Prelungirea Ghencea 52C, Bucuresti</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>0755 000 000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@automobilus.ro</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categorii</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Piese Auto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Vopsele & Spray-uri</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Produse Îngrijire</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accesorii Auto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Scule & Echipamente</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tuning</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Servicii pentru clienți</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Livrare și returnare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Termeni și condiții</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Politica de confidențialitate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">GDPR</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Reclamații</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Abonează-te pentru oferte speciale și noutăți auto.
            </p>
            <div className="flex space-x-2 mb-4">
              <Input 
                type="email" 
                placeholder="Email"
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Abonează-te
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-700">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-700">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-700">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            © 2025 Automobilus. Toate drepturile rezervate.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Program: L-V 9:00-18:00, S 9:00-14:00</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;