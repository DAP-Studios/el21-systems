import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Award, Users, Clock, Play, Star, Zap, Shield, Truck, MapPin, Phone, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex flex-col justify-center py-20">
          {/* Main Content - Centered */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Rating */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">4.9/5 (200+ reviews)</span>
            </div>

            {/* Hero Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="block text-white">Industrial</span>
                <span className="block bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink bg-clip-text text-transparent">
                  Temperature
                </span>
                <span className="block text-white">Excellence</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Advanced temperature control solutions engineered for India's manufacturing sector. 
                <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent font-bold"> Trusted by 500+ companies</span> across diverse industries.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group h-14 px-8"
                onClick={() => {
                  const productsSection = document.getElementById('products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 group bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Quote
              </Button>
            </div>

            {/* Location & Contact Info */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-accent-cyan" />
                  <span className="font-medium">Surat, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Phone className="h-4 w-4 text-accent-purple" />
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Mail className="h-4 w-4 text-accent-pink" />
                  <span className="font-medium">info@el21systems.com</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;