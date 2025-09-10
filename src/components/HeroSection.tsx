import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Award, Users, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="El 21 Systems Industrial Temperature Control Solutions"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
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
              <div className="space-y-4">
                <h1 className="text-hero">
                  India's Trusted
                  <span className="block bg-gradient-to-r from-secondary to-secondary-hover bg-clip-text text-transparent">
                    Temperature Control
                  </span>
                  Solutions Provider
                </h1>
                
                <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                  Professional, reliable, and cost-effective industrial temperature controllers, 
                  process indicators, and programmers for manufacturing industries across India.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-secondary group">
                  View Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="btn-outline-primary">
                  Get Free Quote
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

            {/* Quick Stats Card */}
            <div className="lg:flex hidden justify-end">
              <div className="card-professional bg-background/95 backdrop-blur-sm text-foreground max-w-md">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-section-title text-primary mb-2">Why Choose El 21 Systems?</h3>
                    <p className="text-muted-foreground">Leading manufacturer in Surat, Gujarat</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>IS 9001:2015 Certified Manufacturing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Pan-India Delivery Network</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>24/7 Technical Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Custom Solutions Available</span>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-border">
                    <Button className="btn-primary w-full">
                      Contact Our Experts
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