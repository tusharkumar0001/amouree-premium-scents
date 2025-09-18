import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./button";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Collections", href: "#collections" },
    { name: "Shop", href: "#shop" },
    { name: "Contact", href: "#contact" },
  ];

  const customerService = [
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  return (
    <footer className="bg-luxury-black text-luxury-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="font-luxury text-3xl font-bold mb-4 text-luxury-gold">
                Amouree
              </h3>
              <p className="text-luxury-beige/80 mb-6 max-w-md leading-relaxed">
                Where Elegance Meets Eternity. Experience the art of luxury fragrance, 
                crafted for those who appreciate the finest things in life.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                  <span className="text-sm text-luxury-beige/80">
                    123 Champs-Élysées, Paris, France
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                  <span className="text-sm text-luxury-beige/80">
                    +33 1 42 96 12 34
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                  <span className="text-sm text-luxury-beige/80">
                    hello@amouree.com
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-300"
                  >
                    <a href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-luxury text-lg font-semibold mb-6 text-luxury-gold">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-luxury-beige/80 hover:text-luxury-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-luxury text-lg font-semibold mb-6 text-luxury-gold">
                Customer Service
              </h4>
              <ul className="space-y-3">
                {customerService.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-luxury-beige/80 hover:text-luxury-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-luxury-beige/60">
              © 2024 Amouree. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-luxury-beige/60">
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;