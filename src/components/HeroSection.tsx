import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Award, Users, Clock, Play, Star, Zap, Shield, Truck } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background via-50% to-secondary/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 via-transparent to-primary/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-7 space-y-8">
              {/* Badge and Rating */}
              <div className="flex flex-wrap items-center gap-4">
                <Badge className="bg-success/10 text-success border-success/20 hover:bg-success/20 px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  TrustSEAL Verified
                </Badge>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">4.9/5 (200+ reviews)</span>
                </div>
              </div>

              {/* Hero Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight">
                  <span className="block text-foreground">Industrial</span>
                  <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    Temperature
                  </span>
                  <span className="block text-foreground">Excellence</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Advanced temperature control solutions engineered for India's manufacturing sector. 
                  <span className="text-primary font-semibold"> Trusted by 500+ companies</span> across diverse industries.
                </p>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group h-14 px-8">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Hero Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="El 21 Systems Industrial Temperature Control Solutions"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-secondary text-secondary-foreground">
                    <Zap className="h-4 w-4 mr-2" />
                    ISO 9001:2015 Certified
                  </Badge>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Premium Quality</h3>
                  <p className="text-sm text-muted-foreground">Industry-leading precision and reliability</p>
                </div>
                
                <div className="bg-card border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Truck className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">Pan-India express shipping available</p>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-primary-foreground">
                <h3 className="text-lg font-semibold mb-2">Need Custom Solutions?</h3>
                <p className="text-sm mb-4 text-primary-foreground/90">Get expert consultation for your specific requirements</p>
                <Button variant="secondary" size="sm" className="w-full">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;