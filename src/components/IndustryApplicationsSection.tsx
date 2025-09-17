import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Factory,
  Pill,
  Utensils,
  Shirt,
  Car,
  Zap,
  ArrowRight,
  CheckCircle,
  Thermometer
} from 'lucide-react';

const IndustryApplicationsSection = () => {
  const industries = [
    {
      icon: Factory,
      name: 'Plastic & Polymer',
      description: 'Injection molding, extrusion, and blow molding temperature control',
      applications: ['Injection Molding', 'Extrusion Lines', 'Blow Molding', 'Thermoforming'],
      color: 'bg-blue-500',
      products: 'AI-7981, PI-772, BL-886'
    },
    {
      icon: Pill,
      name: 'Pharmaceutical',
      description: 'GMP compliant temperature control for drug manufacturing',
      applications: ['Tablet Coating', 'Granulation', 'Drying Ovens', 'Clean Rooms'],
      color: 'bg-green-500',
      products: 'AI-7981, Custom Solutions'
    },
    {
      icon: Utensils,
      name: 'Food & Beverage',
      description: 'HACCP certified controllers for food processing safety',
      applications: ['Cooking Systems', 'Pasteurization', 'Packaging', 'Cold Storage'],
      color: 'bg-orange-500',
      products: 'Food-grade Controllers'
    },
    {
      icon: Shirt,
      name: 'Textile',
      description: 'Precise temperature control for dyeing and finishing processes',
      applications: ['Dyeing Machines', 'Heat Setting', 'Calendering', 'Stenters'],
      color: 'bg-purple-500',
      products: 'BL-886, Custom Programs'
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'Temperature control for manufacturing and testing processes',
      applications: ['Paint Booths', 'Component Testing', 'Assembly Lines', 'Quality Control'],
      color: 'bg-red-500',
      products: 'Industrial Grade Series'
    },
    {
      icon: Zap,
      name: 'Electronics',
      description: 'Precision thermal management for electronic manufacturing',
      applications: ['PCB Manufacturing', 'Soldering', 'Component Testing', 'Clean Rooms'],
      color: 'bg-cyan-500',
      products: 'High-precision Controllers'
    }
  ];

  const benefits = [
    'Improved product quality and consistency',
    'Reduced energy consumption and costs',
    'Enhanced process reliability and uptime',
    'Compliance with industry standards',
    'Real-time monitoring and control',
    'Predictive maintenance capabilities'
  ];

  return (
    <section className="py-24 bg-gradient-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge className="mb-6 px-6 py-3 text-lg font-bold bg-gradient-purple text-accent-purple-foreground border-0">
            Industry Applications
          </Badge>
          <h2 className="text-section-title mb-8 bg-gradient-to-r from-accent-purple via-primary to-accent-cyan bg-clip-text text-transparent">
            Serving Diverse Industries Across India
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Our temperature control solutions are trusted by leading companies across multiple 
            industries, from small-scale operations to large manufacturing plants.
          </p>
        </div>

        {/* Enhanced Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {industries.map((industry, index) => (
            <Card key={index} className="card-professional group cursor-pointer overflow-hidden glow-primary hover:glow-secondary">
              <CardContent className="p-6">
                 {/* Industry Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-all duration-300 glow-primary">
                    <industry.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-4 bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">Key Applications:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-muted-foreground font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Products */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold">Recommended Products:</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{industry.products}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Benefits Section */}
        <div className="bg-gradient-surface rounded-3xl p-12 glow-primary">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">
                Why Industries Choose Our Solutions
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button className="btn-primary group glow-primary">
                  Explore Industry Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-all duration-300" />
                </Button>
              </div>
            </div>

            <div className="bg-gradient-rainbow rounded-2xl p-10 text-white glow-secondary">
              <h4 className="text-2xl font-bold mb-6">Custom Solutions Available</h4>
              <p className="mb-8 text-white/90 text-lg leading-relaxed">
                Every industry has unique requirements. Our engineering team works closely 
                with you to develop custom temperature control solutions that meet your 
                specific needs and compliance requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Free technical consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Custom programming and configuration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">On-site installation and training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Comprehensive warranty and support</span>
                </div>
              </div>

              <Button className="w-full mt-8 btn-secondary glow-secondary">
                Request Custom Solution
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplicationsSection;