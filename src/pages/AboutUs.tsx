import React from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Zap, CheckCircle, Globe, Clock, Shield, Factory, TrendingUp } from 'lucide-react';

const AboutUs = () => {
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

  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started as a small workshop in Surat, Gujarat with a vision to serve Indian industries.'
    },
    {
      year: '2012',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2008 certification for quality management systems.'
    },
    {
      year: '2015',
      title: 'Pan-India Expansion',
      description: 'Expanded delivery network to serve customers across all major Indian cities.'
    },
    {
      year: '2018',
      title: 'R&D Center',
      description: 'Established dedicated research and development facility for product innovation.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online platform and digital customer support systems.'
    },
    {
      year: '2024',
      title: '500+ Customers',
      description: 'Reached milestone of serving over 500 satisfied customers across India.'
    }
  ];

  return (
    <Layout showContactSection={false}>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary text-secondary-foreground">About El 21 Systems</Badge>
            <h1 className="text-hero mb-6">
              Building India's Industrial Future
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              For over 15 years, El 21 Systems has been at the forefront of industrial temperature 
              control technology, serving industries across India with precision, reliability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div>
                <h2 className="text-section-title mb-6 text-primary">Our Journey</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El 21 Systems was founded with a vision to provide reliable, cost-effective 
                  temperature control solutions to India's growing industrial sector. Starting 
                  from a small workshop in Surat, we have grown into a trusted name in industrial 
                  automation across the country.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Today, we serve over 500 satisfied customers across various industries, 
                  from plastic manufacturing to pharmaceutical processing, maintaining our 
                  commitment to quality, innovation, and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <Factory className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-semibold text-primary mb-2">Manufacturing Hub</h4>
                  <p className="text-sm text-muted-foreground">
                    State-of-the-art facility in Surat's industrial corridor
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <TrendingUp className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-semibold text-primary mb-2">Growth Track</h4>
                  <p className="text-sm text-muted-foreground">
                    Consistent 25% year-over-year growth since 2015
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
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Our Growth Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped El 21 Systems into the trusted industrial partner we are today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-secondary transition-colors">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-1 h-16 bg-border mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Why Choose El 21 Systems?</h2>
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
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-section-title mb-4">Certifications & Standards</h2>
            <p className="text-muted-foreground">
              We maintain the highest industry standards and certifications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
              <Card key={index} className="card-professional">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-success/10 p-3 rounded-lg">
                      <cert.icon className="h-8 w-8 text-success" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Owner/Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-accent-purple/5 via-accent-cyan/5 to-accent-pink/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">Meet Our Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders driving innovation and excellence in industrial temperature control
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="card-professional bg-gradient-to-br from-card to-accent-purple/5 border border-accent-purple/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center text-4xl font-bold text-white">
                    RJ
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Rajesh Joshi</h3>
                    <Badge className="mb-4 bg-gradient-to-r from-primary to-accent-purple text-white border-0">
                      Founder & CEO
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      With over 20 years of experience in industrial automation, Rajesh founded El 21 Systems 
                      with a vision to provide world-class temperature control solutions to Indian industries. 
                      He holds an M.Tech in Control Systems from IIT Bombay.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-primary">Experience</div>
                        <div className="text-muted-foreground">20+ Years</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Education</div>
                        <div className="text-muted-foreground">M.Tech IIT Bombay</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional bg-gradient-to-br from-card to-accent-cyan/5 border border-accent-cyan/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent-cyan to-secondary rounded-full flex items-center justify-center text-4xl font-bold text-white">
                    SP
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Suresh Patel</h3>
                    <Badge className="mb-4 bg-gradient-to-r from-accent-cyan to-secondary text-white border-0">
                      CTO & Co-Founder
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Suresh leads our technical innovation and R&D initiatives. A PhD in Electrical Engineering 
                      from NIT Surat, he has 18+ years of experience in industrial control systems and holds 
                      15+ patents in temperature control technology.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-accent-cyan">Patents</div>
                        <div className="text-muted-foreground">15+ Filed</div>
                      </div>
                      <div>
                        <div className="font-semibold text-accent-cyan">Education</div>
                        <div className="text-muted-foreground">PhD NIT Surat</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="card-professional bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 border border-accent-pink/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-accent-pink to-accent-purple bg-clip-text text-transparent">
                  "Our mission is to empower Indian manufacturing with precision temperature control solutions that drive productivity and innovation."
                </h3>
                <p className="text-muted-foreground">- Rajesh Joshi & Suresh Patel, Founders</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default AboutUs;