import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Search, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      id: 1,
      title: "România trece la cota de TVA de 21% pentru produsele auto",
      excerpt: "Informație importantă despre TVA: ce se schimbă din 1 august 2025. Începând cu 1 august 2025, se modifică valoarea TVA-ului în România. Pentru tine, acest lucru nu schimbă prețul final al comenzilor deja plasate...",
      author: "Echipa Automobilus",
      date: "1 August 2025",
      category: "Legislație",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Cum să îți îngrijești mașina primăvara: Ghid complet",
      excerpt: "Primăvara este momentul perfect pentru o revizie completă a mașinii tale. Descoperă pașii esențiali pentru a-ți pregăti vehiculul pentru sezonul cald...",
      author: "Alex Popescu",
      date: "25 Martie 2025",
      category: "Întreținere",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "Top 10 produse de îngrijire auto pentru 2025",
      excerpt: "Analiza celor mai bune produse de îngrijire auto din acest an. De la șampoane premium la ceară de înaltă calitate...",
      author: "Maria Ionescu",
      date: "20 Martie 2025",
      category: "Produse",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 4,
      title: "FOLIATEC – Tehnologie Germană pentru Tuning Inteligent",
      excerpt: "Cu peste 40 de ani de experiență în dezvoltarea de produse inovatoare pentru tuning auto, FOLIATEC oferă soluții de înaltă calitate, ușor de utilizat...",
      author: "Radu Munteanu",
      date: "15 Martie 2025",
      category: "Tuning",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 5,
      title: "Cum să alegi uleiul motor potrivit pentru mașina ta",
      excerpt: "Ghidul complet pentru alegerea uleiului motor. Tipuri de ulei, vâscozitate, specificații și recomandări pentru diferite modele de mașini...",
      author: "Dan Popescu",
      date: "10 Martie 2025",
      category: "Piese Auto",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 6,
      title: "Tendințe în tuningu auto pentru 2025",
      excerpt: "Descoperă cele mai noi tendințe în tuning auto: de la sistemele de evacuare sport la kit-urile aerodinamice...",
      author: "Cristina Vasilescu",
      date: "5 Martie 2025",
      category: "Tuning",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const categories = ["Toate", "Legislație", "Întreținere", "Produse", "Tuning", "Piese Auto"];
  const [selectedCategory, setSelectedCategory] = useState("Toate");

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Toate" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-automotive-dark to-automotive-red text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Blog Automobilus
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Află ultimele noutăți din industria auto, ghiduri de întreținere și recomandări de produse
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Caută articole..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-6 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="min-w-fit"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === "Toate" && !searchTerm && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-automotive-dark">Articol recomandat</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge variant="secondary" className="mb-4">
                      {featuredArticle.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4 text-automotive-dark">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-4">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{featuredArticle.date}</span>
                        </div>
                      </div>
                      <Button className="flex items-center space-x-2">
                        <span>Citește mai mult</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-automotive-dark">
              {searchTerm ? `Rezultate pentru "${searchTerm}"` : "Toate articolele"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Nu au fost găsite articole care să corespundă criteriilor de căutare.</p>
              </div>
            )}

            {/* Load More Button */}
            {regularArticles.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Încarcă mai multe articole
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;