import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "România trece la cota de TVA de 21% pentru produsele auto",
      excerpt: "Informație importantă despre TVA: ce se schimbă din 1 august 2025. Începând cu 1 august 2025, se modifică valoarea TVA-ului în România...",
      date: "1 August 2025",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Program special 1-2 mai 2025",
      excerpt: "Ne luăm și noi o pauză! 😎 Pe 1 și 2 mai magazinul nostru e în vacanță — grătare, soare și relaxare! Ne întoarcem pe 5 mai...",
      date: "28 Aprilie 2025",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Program Paște 2025",
      excerpt: "În perioada 18.04.2025 - 21.04.2025, magazinul nostru va fi închis, iar suportul telefonic indisponibil...",
      date: "15 Aprilie 2025",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "FOLIATEC – Tehnologie Germană pentru Tuning Inteligent și Durabil",
      excerpt: "Cu peste 40 de ani de experiență în dezvoltarea de produse inovatoare pentru tuning auto, FOLIATEC oferă soluții de înaltă calitate...",
      date: "10 Aprilie 2025",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-automotive-dark">Știri</h2>
          <Button variant="outline" className="flex items-center space-x-2">
            <span>Mai multe știri</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((article) => (
            <Card 
              key={article.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  {article.date}
                </div>
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-3 mb-3">
                  {article.excerpt}
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                  Arată mai mult
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;