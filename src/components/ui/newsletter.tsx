import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { Card, CardContent } from "./card";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Amouree!",
        description: "Thank you for subscribing to our newsletter. You'll be the first to know about our latest collections.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-luxury-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-luxury bg-white/90 backdrop-blur-sm animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-luxury-gold" />
              </div>

              {/* Header */}
              <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
                Stay in the Loop
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Be the first to discover our latest fragrances, exclusive collections, and special offers. 
                Join the Amouree family and let elegance find its way to your inbox.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white border-luxury-gold/30 focus:border-luxury-gold text-foreground placeholder:text-muted-foreground h-12"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-semibold px-8 h-12 shadow-gold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-luxury-black/30 border-t-luxury-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-luxury-gold/20">
                <div className="text-center">
                  <div className="w-3 h-3 bg-luxury-gold rounded-full mx-auto mb-3"></div>
                  <p className="text-sm text-muted-foreground">Exclusive Previews</p>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-luxury-gold rounded-full mx-auto mb-3"></div>
                  <p className="text-sm text-muted-foreground">Special Offers</p>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-luxury-gold rounded-full mx-auto mb-3"></div>
                  <p className="text-sm text-muted-foreground">Fragrance Tips</p>
                </div>
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground mt-6">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;