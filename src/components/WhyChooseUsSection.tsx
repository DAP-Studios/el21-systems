import React from 'react';
import { Award, Truck, Shield, Users, Clock, Star } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Industry-leading precision and reliability with rigorous quality control standards.",
      color: "primary"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Pan-India express shipping available with real-time tracking for all orders.",
      color: "secondary"
    },
    {
      icon: Shield,
      title: "ISO Certified",
      description: "ISO 9001:2015 Quality Standards ensuring consistent excellence in all products.",
      color: "success"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated technical support team with extensive industry experience.",
      color: "primary"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock customer service and emergency technical assistance.",
      color: "secondary"
    },
    {
      icon: Star,
      title: "Trusted Brand",
      description: "Preferred choice of 500+ companies across diverse manufacturing sectors.",
      color: "success"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", description: "Serving industrial sector" },
    { number: "500+", label: "Happy Clients", description: "Across India" },
    { number: "24/7", label: "Support", description: "Technical assistance" },
    { number: "99.9%", label: "Uptime", description: "System reliability" }
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Why Choose <span className="text-primary">El 21 Systems</span>?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground px-4">
            Experience the difference with our commitment to quality, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
          {stats.map((stat, index) => {
            const gradients = [
              'from-primary to-accent-purple',
              'from-accent-cyan to-secondary', 
              'from-accent-pink to-primary',
              'from-secondary to-success'
            ];
            return (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-br ${gradients[index]}/10 rounded-xl md:rounded-2xl p-4 md:p-8 mb-2 md:mb-4 group-hover:${gradients[index]}/20 transition-all duration-300 hover:scale-105`}>
                  <div className={`text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent mb-1 md:mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm lg:text-base font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[10px] md:text-xs lg:text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = [
              { bg: 'from-primary to-accent-purple', icon: 'text-primary' },
              { bg: 'from-accent-cyan to-secondary', icon: 'text-accent-cyan' },
              { bg: 'from-success to-accent-cyan', icon: 'text-success' },
              { bg: 'from-accent-purple to-accent-pink', icon: 'text-accent-purple' },
              { bg: 'from-secondary to-accent-pink', icon: 'text-secondary' },
              { bg: 'from-accent-pink to-primary', icon: 'text-accent-pink' }
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <div 
                key={index} 
                className="group bg-card border rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-12 w-12 md:h-16 md:w-16 bg-gradient-to-br ${colorScheme.bg}/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:${colorScheme.bg}/20`}>
                  <Icon className={`h-6 w-6 md:h-8 md:w-8 ${colorScheme.icon}`} />
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-10 md:mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-8">
            <div className="flex items-center gap-2 md:gap-3 bg-success/10 border border-success/20 rounded-full px-4 md:px-6 py-2 md:py-3">
              <Shield className="h-4 md:h-5 w-4 md:w-5 text-success" />
              <span className="text-xs md:text-sm font-semibold text-success">TrustSEAL Verified</span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3 bg-primary/10 border border-primary/20 rounded-full px-4 md:px-6 py-2 md:py-3">
              <Award className="h-4 md:h-5 w-4 md:w-5 text-primary" />
              <span className="text-xs md:text-sm font-semibold text-primary">ISO 9001:2015</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 md:h-5 w-4 md:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground ml-2">4.9/5 (200+)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;