import { Sparkles, Heart, Award } from "lucide-react";
import { Card, CardContent } from "./card";

const AboutSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-luxury-gold" />,
      title: "Artisanal Craftsmanship",
      description: "Each fragrance is meticulously crafted by master perfumers using the finest ingredients from around the world."
    },
    {
      icon: <Heart className="w-8 h-8 text-luxury-gold" />,
      title: "Passionate Excellence",
      description: "Our dedication to perfection drives us to create scents that evoke emotion and create lasting memories."
    },
    {
      icon: <Award className="w-8 h-8 text-luxury-gold" />,
      title: "Timeless Quality",
      description: "We believe in creating fragrances that stand the test of time, becoming treasured companions for life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Amouree
            </h2>
            <p className="text-luxury-gold font-luxury text-xl italic mb-6">
              Where Elegance Meets Eternity
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in the heart of Paris, Amouree represents the pinnacle of luxury fragrance artistry. 
              Our journey began with a simple yet profound belief: that a fragrance should be more than 
              just a scent—it should be an expression of one's soul, a signature that lingers long after 
              you've left the room.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Each bottle of Amouree contains not just carefully selected essences, but years of passion, 
              expertise, and an unwavering commitment to excellence. We source our ingredients from the 
              most prestigious regions—Bulgarian roses, Italian bergamot, Indian sandalwood—to create 
              compositions that are both sophisticated and timeless.
            </p>
            <div className="w-24 h-1 bg-luxury-gold mb-8"></div>
            <p className="font-luxury text-lg text-foreground italic">
              "Perfume is the art that makes memory speak."
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-6 animate-scale-in">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-card hover:shadow-luxury transition-all duration-300 bg-gradient-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-luxury text-xl font-semibold text-foreground mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;