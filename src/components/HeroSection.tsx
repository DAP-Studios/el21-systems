import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Award, Users, Clock, Play, Star, Zap, Shield, Truck } from 'lucide-react';
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
          {/* Feature Cards at Top */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-card/90 backdrop-blur-sm border border-white/20 rounded-xl p-6 space-y-3 hover:shadow-lg transition-all hover:bg-card/95">
              <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Industry-leading precision and reliability</p>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm border border-white/20 rounded-xl p-6 space-y-3 hover:shadow-lg transition-all hover:bg-card/95">
              <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Truck className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-card-foreground">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Pan-India express shipping available</p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm border border-white/20 rounded-xl p-6 space-y-3 hover:shadow-lg transition-all hover:bg-card/95 md:col-span-2 lg:col-span-1">
              <div className="h-12 w-12 bg-success/20 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-card-foreground">ISO Certified</h3>
              <p className="text-sm text-muted-foreground">ISO 9001:2015 Quality Standards</p>
            </div>
          </div>

          {/* Main Content - Centered */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge and Rating */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Badge className="bg-success/20 text-success border-success/30 hover:bg-success/30 px-4 py-2 backdrop-blur-sm">
                <Shield className="h-4 w-4 mr-2" />
                TrustSEAL Verified
              </Badge>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-white/90">4.9/5 (200+ reviews)</span>
              </div>
            </div>

            {/* Hero Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="block text-white">Industrial</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Temperature
                </span>
                <span className="block text-white">Excellence</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Advanced temperature control solutions engineered for India's manufacturing sector. 
                <span className="text-primary font-semibold"> Trusted by 500+ companies</span> across diverse industries.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group h-14 px-8">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 group bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Centered Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;