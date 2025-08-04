import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandLogos from "@/components/BrandLogos";
import CategoryGrid from "@/components/CategoryGrid";
import NewsSection from "@/components/NewsSection";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Truck, Shield, Headphones, ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Castrol GTX 10W-40",
      category: "Uleiuri motor",
      price: "89.99",
      originalPrice: "99.99",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Meguiar's Gold Class Car Wash",
      category: "Produse îngrijire",
      price: "45.99",
      originalPrice: "55.99",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 89,
      badge: "Ofertă"
    },
    {
      id: 3,
      name: "SOFT99 Fusso Coat 12M",
      category: "Ceară auto",
      price: "159.99",
      originalPrice: null,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 67,
      badge: "Nou"
    },
    {
      id: 4,
      name: "Ravenol VMO 5W-30",
      category: "Uleiuri motor",
      price: "119.99",
      originalPrice: "139.99",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 156,
      badge: "Recomandat"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Livrare rapidă",
      description: "Livrare în 24-48h în toată țara"
    },
    {
      icon: Shield,
      title: "Garanție calitate",
      description: "Produse originale cu garanție"
    },
    {
      icon: Headphones,
      title: "Suport tehnic",
      description: "Consultanță specializată gratuită"
    },
    {
      icon: Star,
      title: "Peste 10.000 clienți",
      description: "Multumiți de serviciile noastre"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-automotive-dark via-automotive-red to-automotive-green text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Piese Auto & Accesorii de Calitate
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Descoperă gama noastră completă de piese auto, produse de îngrijire și accesorii pentru mașina ta
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Explorează produsele
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-automotive-dark">
                  Contactează-ne
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Logos */}
        <BrandLogos />

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-automotive-dark mb-4">
                Produse recomandate
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Selecția noastră de produse de înaltă calitate, recomandate de specialiști
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="relative">
                    <div className="aspect-square bg-gray-100 relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <Badge 
                          className="absolute top-2 left-2"
                          variant={product.badge === "Ofertă" ? "destructive" : "default"}
                        >
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary">
                        {product.price} RON
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice} RON
                        </span>
                      )}
                    </div>
                    
                    <Button size="sm" className="w-full mt-3">
                      Adaugă în coș
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Vezi toate produsele
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <CategoryGrid />

        {/* News */}
        <NewsSection />

        {/* Contact */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
