import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Shield, 
  Settings, 
  HeadphonesIcon, 
  Truck, 
  Award,
  Clock,
  Gauge,
  Thermometer,
  Cpu,
  Wifi,
  ArrowRight
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Thermometer,
      title: 'Precision Temperature Control',
      description: 'Advanced PID algorithms ensure ±0.1°C accuracy for critical processes.',
      color: 'text-red-500'
    },
    {
      icon: Cpu,
      title: 'Smart Digital Processing',
      description: 'Microprocessor-based control with auto-tuning capabilities.',
      color: 'text-blue-500'
    },
    {
      icon: Wifi,
      title: 'IoT Connectivity',
      description: 'Remote monitoring and control through industrial communication protocols.',
      color: 'text-green-500'
    },
    {
      icon: Gauge,
      title: 'Multi-Input Compatibility',
      description: 'Supports RTD, Thermocouple, and analog input signals.',
      color: 'text-purple-500'
    },
    {
      icon: Settings,
      title: 'User-Friendly Interface',
      description: 'Intuitive LED displays with simple parameter configuration.',
      color: 'text-orange-500'
    },
    {
      icon: Shield,
      title: 'Industrial Grade Reliability',
      description: 'IP65 rated enclosures built for harsh industrial environments.',
      color: 'text-cyan-500'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Energy Efficiency',
      stat: '30%',
      description: 'Reduction in energy consumption with smart control algorithms'
    },
    {
      icon: Clock,
      title: 'Fast Response',
      stat: '<2s',
      description: 'Lightning-fast response time for critical temperature changes'
    },
    {
      icon: Award,
      title: 'Reliability',
      stat: '99.9%',
      description: 'Uptime guarantee with robust industrial-grade components'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support',
      stat: '24/7',
      description: 'Round-the-clock technical support and maintenance services'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4">Advanced Features</Badge>
          <h2 className="text-section-title mb-6">
            Cutting-Edge Technology for Industrial Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our temperature control solutions combine advanced technology with proven reliability 
            to deliver exceptional performance in demanding industrial environments.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-professional text-center group">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {benefit.stat}
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-professional group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors`}>
                    <feature.icon className={`h-6 w-6 ${feature.color} group-hover:text-primary`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Upgrade Your Temperature Control Systems?
            </h3>
            <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
              Get expert consultation and custom solutions tailored to your specific industrial requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary">
                Request Technical Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Download Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;