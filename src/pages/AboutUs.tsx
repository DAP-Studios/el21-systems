import React from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Zap, CheckCircle, Globe, Clock, Shield, Factory, TrendingUp, Mail, Phone, Linkedin } from 'lucide-react';

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
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/20">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-primary text-primary-foreground border-0 px-6 py-3 text-lg font-bold">
              About El 21 Systems
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              Building India's Industrial Future
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
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
            <h2 className="text-section-title mb-6 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">Meet Our Founder</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visionary leader driving innovation and excellence in industrial temperature control
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="card-professional bg-gradient-to-br from-card to-accent-purple/5 border border-accent-purple/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Photo Section */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-primary to-accent-purple p-8 flex items-center justify-center">
                    <div className="text-center">
                      {/* Placeholder for photo - replace with actual image */}
                      <div className="w-62 h-62 mx-auto bg-white/10 rounded-full flex items-center justify-center text-6xl font-bold text-white mb-6 border-4 border-white/20">
                        <img
                          src="/assets/image/sailesh.jpg"
                          alt="Sailesh Rathod"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="flex justify-center mb-4">
                        <div className="bg-white/20 p-3 rounded-lg">
                          <Globe className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">Sailesh Rathod</h3>
                      <Badge className="bg-white/20 text-white border-0 mb-4">
                        Founder & CEO
                      </Badge>
                      
                      {/* Contact Info */}
                      <div className="space-y-3 mt-6">
                        <div className="flex items-center justify-center gap-2 text-white/90">
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">sailesh@el21systems.com</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-white/90">
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">+91 98765 43210</span>
                        </div>
                        {/* <div className="flex items-center justify-center gap-2 text-white/90">
                          <Linkedin className="h-4 w-4" />
                          <span className="text-sm">linkedin.com/in/saileshrathod</span>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <h4 className="text-2xl font-bold mb-6 text-primary">About Me</h4>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                      <p>
                        With over 20 years of experience in industrial automation and temperature control systems, 
                        I founded El 21 Systems in 2009 with a vision to provide world-class automation solutions 
                        to Indian industries at affordable prices.
                      </p>
                      <p>
                        My journey began as an electrical engineer working with multinational corporations, where 
                        I witnessed the gap between international technology standards and what was available to 
                        Indian manufacturers. This inspired me to start El 21 Systems, bridging that gap by offering 
                        precision instruments and reliable automation equipment.
                      </p>
                      <p>
                        Today, I'm proud to lead a team that serves over 500 satisfied customers across India, 
                        maintaining our commitment to quality, innovation, and customer satisfaction. Our focus 
                        remains on understanding each client's unique needs and delivering tailored solutions that 
                        enhance their productivity and competitiveness.
                      </p>
                      <p>
                        I believe in continuous learning and staying ahead of technological advancements. My goal 
                        is to make El 21 Systems synonymous with reliability and excellence in the industrial 
                        automation sector.
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="font-semibold text-primary mb-1">Experience</div>
                        <div className="text-muted-foreground text-sm">20+ Years in Automation</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="font-semibold text-primary mb-1">Education</div>
                        <div className="text-muted-foreground text-sm">B.E. Electrical Engineering</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="font-semibold text-primary mb-1">Specialization</div>
                        <div className="text-muted-foreground text-sm">Temperature Control Systems</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="font-semibold text-primary mb-1">Company Founded</div>
                        <div className="text-muted-foreground text-sm">2009 - Surat, Gujarat</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote Section */}
            <div className="text-center mt-12">
              <Card className="card-professional bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 border border-accent-pink/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-accent-pink to-accent-purple bg-clip-text text-transparent">
                    "Our mission is to empower Indian manufacturing with precision temperature control solutions that drive productivity, quality, and innovation in every industry we serve."
                  </h3>
                  <p className="text-muted-foreground">- Sailesh Rathod, Founder & CEO</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default AboutUs;