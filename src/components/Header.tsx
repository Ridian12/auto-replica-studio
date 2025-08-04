import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const categories = [
    "Piese Auto",
    "Vopsele & Spray-uri",
    "Produse Îngrijire",
    "Accesorii Auto",
    "Scule & Echipamente",
    "Tuning"
  ];

  return (
    <header className="w-full">
      {/* Top info bar */}
      <div className="bg-automotive-dark text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Prelungirea Ghencea 52C, Bucuresti</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>0755 000 000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@automobilus.ro</span>
            </div>
          </div>
          <div className="text-sm">
            Program: L-V 9:00-18:00, S 9:00-14:00
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-automotive-red hover:text-automotive-red/80 transition-colors">
                AUTOMOBILUS
              </Link>
            </div>

            {/* Search bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Caută piese auto, accesorii..."
                  className="pl-10 pr-4 w-full h-12 border-2 border-gray-200 focus:border-primary"
                />
                <Button 
                  variant="default" 
                  className="absolute right-1 top-1 bottom-1 px-6 bg-primary hover:bg-primary/90"
                >
                  Caută
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-4 w-4 mr-2" />
                Caută
              </Button>
              
              <Button variant="ghost" size="sm" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Contul meu</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="flex items-center relative">
                <ShoppingCart className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Coș</span>
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Caută produse..."
                        className="pl-10"
                      />
                    </div>
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant="ghost"
                        className="justify-start"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-b hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="text-sm hover:text-primary hover:bg-primary/10"
              >
                {category}
              </Button>
            ))}
            <Link to="/blog">
              <Button
                variant="ghost"
                className={`text-sm hover:text-primary hover:bg-primary/10 ${location.pathname === '/blog' ? 'text-primary bg-primary/10' : ''}`}
              >
                Blog
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="ghost"
                className={`text-sm hover:text-primary hover:bg-primary/10 ${location.pathname === '/contact' ? 'text-primary bg-primary/10' : ''}`}
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile search */}
      {isSearchOpen && (
        <div className="md:hidden bg-white border-b p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Caută piese auto, accesorii..."
              className="pl-10 pr-10"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;