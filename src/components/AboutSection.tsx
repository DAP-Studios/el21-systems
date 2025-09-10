import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Zap, CheckCircle, Globe, Clock, Shield } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      value: '15+',
      label: 'Years Excellence',
      description: 'Proven track record in industrial automation'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Satisfied Clients',
      description: 'Trusted by leading industries across India'
    },
    {
      icon: Globe,
      value: 'Pan-India',
      label: 'Delivery Network',
      description: 'Nationwide reach with local support'
    },
    {
      icon: Shield,
      value: 'ISO 9001',
      label: 'Certified Quality',
      description: 'International quality management standards'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision Excellence',
      description: 'We deliver temperature control solutions with industry-leading accuracy and reliability.'
    },
    {
      icon: Zap,
      title: 'Innovation Drive',
      description: 'Continuous R&D investment to bring cutting-edge technology to our customers.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Dedicated support team ensuring 94% response rate and complete satisfaction.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO certified manufacturing processes with rigorous quality control standards.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">About El 21 Systems</Badge>
          <h2 className="text-section-title mb-6">
            Leading Temperature Control Solutions Provider
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Based in Surat, Gujarat, El 21 Systems has been at the forefront of industrial 
            temperature control technology for over 15 years, serving industries across India 
            with precision, reliability, and innovation.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El 21 Systems was founded with a vision to provide reliable, cost-effective 
                temperature control solutions to India's growing industrial sector. Starting 
                from a small workshop in Surat, we have grown into a trusted name in industrial 
                automation across the country.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve over 500 satisfied customers across various industries, 
                from plastic manufacturing to pharmaceutical processing, maintaining our 
                commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Manufacturing Hub</h4>
                <p className="text-sm text-muted-foreground">
                  State-of-the-art facility in Surat's industrial corridor
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">R&D Center</h4>
                <p className="text-sm text-muted-foreground">
                  Dedicated team for product innovation and development
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <achievement.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="font-semibold mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <Card className="card-professional bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                To empower India's industrial growth by providing world-class temperature 
                control solutions that enhance productivity, ensure quality, and drive 
                operational excellence across all manufacturing sectors.
              </p>
            </CardContent>
          </Card>

          <Card className="card-professional bg-gradient-secondary text-secondary-foreground">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-secondary-foreground/90 leading-relaxed">
                To be India's most trusted partner for industrial automation solutions, 
                recognized for innovation, quality, and customer-centric approach in 
                the temperature control and process automation industry.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Why Choose El 21 Systems?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values drive everything we do, ensuring that every customer 
              receives the highest quality products and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-professional group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <value.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  <h4 className="font-bold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Certifications & Standards</h3>
            <p className="text-muted-foreground">
              We maintain the highest industry standards and certifications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'ISO 9001:2015',
                description: 'Quality Management System',
                icon: Award
              },
              {
                title: 'TrustSEAL Verified',
                description: 'IndiaMART Verified Supplier',
                icon: Shield
              },
              {
                title: 'CE Compliance',
                description: 'European Conformity Standards',
                icon: CheckCircle
              }
            ].map((cert, index) => (
              <div key={index} className="flex items-center gap-4 bg-background rounded-lg p-4">
                <div className="bg-success/10 p-2 rounded-lg">
                  <cert.icon className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;