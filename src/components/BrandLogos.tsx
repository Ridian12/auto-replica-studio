import { Card } from "@/components/ui/card";

const BrandLogos = () => {
  const brands = [
    { name: "Castrol", logo: "castrol" },
    { name: "Ravenol", logo: "ravenol" },
    { name: "Soft99", logo: "soft99" },
    { name: "Meguiar's", logo: "meguiars" },
    { name: "Motul", logo: "motul" },
    { name: "Maxshine", logo: "maxshine" },
    { name: "Protection Time", logo: "protection-time" },
    { name: "Foliatec", logo: "foliatec" },
    { name: "Zvizzer", logo: "zvizzer" }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-automotive-dark">
          Branduri de încredere
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {brands.map((brand) => (
            <Card 
              key={brand.name}
              className="p-4 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="aspect-square bg-white rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600 text-center px-2">
                    {brand.name}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;