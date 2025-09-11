import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Award, Users, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero text-primary-foreground overflow-hidden floating-elements">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="El 21 Systems Industrial Temperature Control Solutions"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="flex items-center gap-4">
                <Badge className="trust-badge">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  TrustSEAL Verified
                </Badge>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-primary-foreground/80">5.0 Rating</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-hero animate-fade-in">
                  <span className="block text-primary-foreground font-black">India's Most</span>
                  <span className="block bg-gradient-to-r from-secondary via-secondary to-secondary-hover bg-clip-text text-transparent glow-secondary">
                    Trusted Industrial
                  </span>
                  <span className="block text-primary-foreground font-black">Temperature Solutions</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/95 leading-relaxed max-w-3xl font-medium">
                  Premium temperature controllers, process indicators, and programmers 
                  engineered for India's manufacturing excellence. 
                  <span className="text-secondary font-bold">15+ years of innovation.</span>
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="btn-secondary group glow-secondary">
                  <span className="relative z-10">Explore Premium Products</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-all duration-300" />
                </Button>
                <Button size="lg" className="btn-outline-primary group">
                  <span className="relative z-10">Get Expert Consultation</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-primary-foreground/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-primary-foreground/80">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-sm text-primary-foreground/80">Response Rate</div>
                </div>
              </div>
            </div>

            {/* Enhanced Premium Stats Card */}
            <div className="lg:flex hidden justify-end">
              <div className="glass-card text-foreground max-w-lg glow-primary">
                <div className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-3">Why Industry Leaders Choose Us</h3>
                    <p className="text-muted-foreground font-medium">Gujarat's Premier Manufacturing Hub</p>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-success/10 border border-success/20">
                      <CheckCircle className="h-6 w-6 text-success" />
                      <span className="font-semibold">ISO 9001:2015 Certified Excellence</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <span className="font-semibold">Pan-India Express Delivery</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                      <CheckCircle className="h-6 w-6 text-secondary" />
                      <span className="font-semibold">24/7 Expert Technical Support</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-success/10 border border-success/20">
                      <CheckCircle className="h-6 w-6 text-success" />
                      <span className="font-semibold">Bespoke Engineering Solutions</span>
                    </div>
                  </div>

                  <div className="text-center pt-6 border-t border-border">
                    <Button className="btn-primary w-full glow-primary">
                      <span className="relative z-10">Connect with Experts</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;