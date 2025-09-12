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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4">Industry Applications</Badge>
          <h2 className="text-section-title mb-6">
            Serving Diverse Industries Across India
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our temperature control solutions are trusted by leading companies across multiple 
            industries, from small-scale operations to large manufacturing plants.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="card-professional group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                {/* Industry Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${industry.color} text-white group-hover:scale-110 transition-transform`}>
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-3 text-primary">Key Applications:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-success" />
                        <span className="text-xs text-muted-foreground">{app}</span>
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

        {/* Benefits Section */}
        <div className="bg-background rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
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
              
              <div className="mt-8">
                <Button className="btn-primary group">
                  Explore Industry Solutions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground">
              <h4 className="text-xl font-bold mb-4">Custom Solutions Available</h4>
              <p className="mb-6 text-primary-foreground/90">
                Every industry has unique requirements. Our engineering team works closely 
                with you to develop custom temperature control solutions that meet your 
                specific needs and compliance requirements.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Free technical consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Custom programming and configuration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">On-site installation and training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Comprehensive warranty and support</span>
                </div>
              </div>

              <Button variant="secondary" className="w-full mt-6">
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