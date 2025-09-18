import { Button } from "./button";
import heroImage from "@/assets/hero-perfume.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-luxury text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Amouree
            </h1>
            <p className="text-xl md:text-2xl text-luxury-gold font-medium mb-8 font-luxury italic">
              Where Elegance Meets Eternity
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Discover our exquisite collection of luxury fragrances, crafted for those who appreciate 
              the finest things in life. Each scent tells a story of sophistication and timeless beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-semibold px-8 py-3 shadow-gold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8 py-3 transition-all duration-300"
              >
                Explore Collections
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src={heroImage} 
                alt="Amouree luxury perfume bottle" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-luxury-gold/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-luxury-gold/10 rounded-full blur-2xl animate-luxury-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-luxury-gold/15 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-luxury-gold rounded-full opacity-60"></div>
      <div className="absolute top-40 right-40 w-1 h-1 bg-luxury-gold rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-luxury-gold rounded-full opacity-30"></div>
    </section>
  );
};

export default HeroSection;