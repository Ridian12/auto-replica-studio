import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CategoryGrid = () => {
  const categories = [
    {
      title: "Piese Auto",
      subtitle: "Motoare, frâne, suspensii",
      color: "bg-automotive-green",
      textColor: "text-white"
    },
    {
      title: "Vopsele & Spray-uri", 
      subtitle: "Culori premium pentru mașina ta",
      color: "bg-amber-500",
      textColor: "text-white"
    },
    {
      title: "Produse Îngrijire",
      subtitle: "Șampoane, ceară, polish",
      color: "bg-automotive-red",
      textColor: "text-white"
    },
    {
      title: "Accesorii",
      subtitle: "Covoare, huse, organizatoare",
      color: "bg-automotive-yellow",
      textColor: "text-automotive-dark"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-automotive-dark">
          Alegeți din categorii
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <CardContent className={`p-8 h-48 flex flex-col justify-between ${category.color}`}>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${category.textColor}`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm opacity-90 ${category.textColor}`}>
                    {category.subtitle}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className={`self-start ${category.textColor === 'text-white' ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'}`}
                >
                  Explorează
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;