import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sophie Laurent",
      location: "Paris, France",
      rating: 5,
      text: "Amouree's Essence Éternelle is absolutely divine. The fragrance is sophisticated yet approachable, and it lasts beautifully throughout the day. I've received countless compliments!",
      image: "SL"
    },
    {
      id: 2,
      name: "Isabella Rodriguez",
      location: "Madrid, Spain",
      text: "I've been searching for the perfect signature scent for years, and Lumière Dorée is it. The quality is exceptional, and the packaging is elegant. Worth every penny.",
      rating: 5,
      image: "IR"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "London, UK",
      text: "Nuit Mystique is mysterious and alluring without being overwhelming. It's become my go-to fragrance for special occasions. The longevity is incredible.",
      rating: 5,
      image: "ET"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-luxury-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover what makes Amouree special through the words of our valued customers
          </p>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mt-8"></div>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <Card className="border-0 shadow-luxury bg-white/80 backdrop-blur-sm animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-foreground mb-8 font-medium leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Avatar and Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <span className="text-luxury-black font-bold text-lg">
                      {testimonials[currentIndex].image}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-luxury text-lg font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white shadow-card hover:shadow-luxury transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white shadow-card hover:shadow-luxury transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-luxury-gold scale-110' 
                  : 'bg-luxury-gold/30 hover:bg-luxury-gold/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;