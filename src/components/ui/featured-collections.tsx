import { Button } from "./button";
import { Card, CardContent } from "./card";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      name: "Essence Éternelle",
      description: "A timeless fragrance that captures the essence of eternal beauty",
      price: "$158",
      image: perfume1,
      category: "Floral"
    },
    {
      id: 2,
      name: "Lumière Dorée",
      description: "Golden light in a bottle, radiating warmth and sophistication",
      price: "$168",
      image: perfume2,
      category: "Oriental"
    },
    {
      id: 3,
      name: "Nuit Mystique",
      description: "An enigmatic scent for those who embrace the mystery of night",
      price: "$178",
      image: perfume3,
      category: "Woody"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our signature fragrances, each carefully crafted to embody sophistication and elegance
          </p>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mt-8"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-luxury transition-all duration-500 bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-luxury-gold/90 text-luxury-black px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-luxury-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="secondary"
                      className="bg-white/90 text-luxury-black hover:bg-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-luxury text-xl font-semibold text-foreground mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-luxury text-2xl font-bold text-luxury-gold">
                      {product.price}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-medium px-6 shadow-gold hover:shadow-lg transition-all duration-300"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8 py-3 transition-all duration-300"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;