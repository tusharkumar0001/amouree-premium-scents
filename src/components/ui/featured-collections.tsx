import { Button } from "./button";
import { Card, CardContent } from "./card";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";
import perfume5 from "@/assets/perfume-5.jpg";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      name: "Essence Éternelle",
      description: "A timeless fragrance that captures the essence of eternal beauty",
      price: "$158",
      image: perfume1,
      category: "Floral",
      featured: false
    },
    {
      id: 2,
      name: "Lumière Dorée",
      description: "Golden light in a bottle, radiating warmth and sophistication",
      price: "$168",
      image: perfume2,
      category: "Oriental",
      featured: false
    },
    {
      id: 3,
      name: "Nuit Mystique",
      description: "An enigmatic scent for those who embrace the mystery of night",
      price: "$178",
      image: perfume3,
      category: "Woody",
      featured: false
    },
    {
      id: 4,
      name: "Diamant Éclat",
      description: "Pure luxury crystallized in an extraordinary platinum edition",
      price: "$298",
      image: perfume4,
      category: "Exclusive",
      featured: true
    },
    {
      id: 5,
      name: "Royale Émeraude",
      description: "A majestic blend worthy of royalty, crafted with rare emerald essences",
      price: "$388",
      image: perfume5,
      category: "Royal",
      featured: true
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {collections.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group overflow-hidden border-0 transition-all duration-700 animate-scale-in relative ${
                product.featured 
                  ? 'shadow-premium hover:shadow-glow bg-gradient-premium xl:col-span-1' 
                  : 'shadow-card hover:shadow-luxury bg-gradient-card'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
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
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                    product.featured 
                      ? 'bg-gradient-luxury text-luxury-black shadow-gold animate-luxury-pulse' 
                      : 'bg-luxury-gold/90 text-luxury-black'
                  }`}>
                    {product.category}
                  </div>

                  {/* Premium Badge for Featured Items */}
                  {product.featured && (
                    <div className="absolute top-4 right-4 bg-luxury-black/80 text-luxury-gold px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                      PREMIUM
                    </div>
                  )}

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
                  <h3 className={`font-luxury text-xl font-semibold mb-2 transition-colors duration-300 ${
                    product.featured 
                      ? 'text-foreground group-hover:text-luxury-gold bg-gradient-shimmer bg-clip-text' 
                      : 'text-foreground group-hover:text-luxury-gold'
                  }`}>
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`font-luxury text-2xl font-bold ${
                      product.featured 
                        ? 'text-luxury-gold animate-luxury-pulse' 
                        : 'text-luxury-gold'
                    }`}>
                      {product.price}
                    </span>
                    <Button 
                      size="sm"
                      className={`font-medium px-6 transition-all duration-300 ${
                        product.featured 
                          ? 'bg-gradient-luxury hover:shadow-glow text-luxury-black shadow-gold hover:scale-105' 
                          : 'bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black shadow-gold hover:shadow-lg'
                      }`}
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