// Update this page (the content is just a fallback if you fail to update the page)

import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import FeaturedCollections from "@/components/ui/featured-collections";
import Testimonials from "@/components/ui/testimonials";
import AboutSection from "@/components/ui/about-section";
import Newsletter from "@/components/ui/newsletter";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedCollections />
      <AboutSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
