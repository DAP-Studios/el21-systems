import React from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ImageScroller from '@/components/ImageScroller';
import { 
  Lightbulb, 
  Microscope, 
  Cpu, 
  Zap, 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight,
  Beaker,
  Settings,
  Shield,
  Gauge
} from 'lucide-react';

// Import images
import aiController from '@/assets/ai-7981-controller.jpg';
import blProgrammer from '@/assets/bl-886-programmer.jpg';
import piIndicator from '@/assets/pi-772-indicator.jpg';
import heroIndustrial from '@/assets/hero-industrial.jpg';

const RnD = () => {
  const researchAreas = [
    {
      icon: Cpu,
      title: 'Advanced Control Algorithms',
      description: 'Developing next-generation PID controllers with machine learning capabilities for superior temperature regulation.',
      progress: 85,
      status: 'In Development'
    },
    {
      icon: Zap,
      title: 'IoT Integration',
      description: 'Smart temperature controllers with wireless connectivity, remote monitoring, and predictive maintenance.',
      progress: 70,
      status: 'Beta Testing'
    },
    {
      icon: Shield,
      title: 'Energy Efficiency',
      description: 'Power-optimized controllers reducing energy consumption by up to 30% while maintaining precision.',
      progress: 95,
      status: 'Near Release'
    },
    {
      icon: Gauge,
      title: 'High-Temperature Applications',
      description: 'Specialized controllers for extreme temperature environments up to 2000°C for metallurgy industries.',
      progress: 60,
      status: 'Research Phase'
    }
  ];

  const innovations = [
    {
      year: '2024',
      title: 'AI-Powered Temperature Prediction',
      description: 'Machine learning algorithms that predict temperature fluctuations before they occur.',
      impact: 'Reduced process variations by 40%'
    },
    {
      year: '2023',
      title: 'Wireless Mesh Network Controllers',
      description: 'Multi-point temperature control system with self-healing network capabilities.',
      impact: 'Deployed in 50+ industrial facilities'
    },
    {
      year: '2022',
      title: 'Eco-Friendly Materials',
      description: 'Developed controllers using recycled materials without compromising performance.',
      impact: '25% reduction in carbon footprint'
    },
    {
      year: '2021',
      title: 'Ultra-Fast Response Controllers',
      description: 'Temperature controllers with response time under 100ms for critical applications.',
      impact: 'Adopted by pharmaceutical industry'
    }
  ];

  const capabilities = [
    {
      icon: Microscope,
      title: 'Testing Laboratory',
      description: 'State-of-the-art testing facility with environmental chambers and precision measurement equipment.',
      features: [
        'Temperature range: -40°C to +2000°C',
        'Humidity testing chambers',
        'Vibration and shock testing',
        'EMC/EMI compliance testing'
      ]
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated R&D team of engineers and scientists with expertise in control systems and industrial automation.',
      features: [
        '15+ experienced engineers',
        'PhD holders in control systems',
        'Industry collaboration programs',
        'Continuous learning initiatives'
      ]
    },
    {
      icon: Beaker,
      title: 'Prototyping Facility',
      description: 'Advanced prototyping lab for rapid development and testing of new product concepts.',
      features: [
        '3D printing capabilities',
        'PCB design and fabrication',
        'Component-level testing',
        'Accelerated aging tests'
      ]
    },
    {
      icon: Settings,
      title: 'Simulation Tools',
      description: 'Advanced simulation software for modeling thermal behaviors and controller performance.',
      features: [
        'MATLAB/Simulink modeling',
        'Thermal simulation software',
        'Control loop analysis',
        'Performance optimization'
      ]
    }
  ];

  const partnerships = [
    {
      name: 'Indian Institute of Technology (IIT)',
      type: 'Academic Partnership',
      focus: 'Advanced control algorithms research',
      duration: '2022-2025'
    },
    {
      name: 'National Institute of Technology (NIT)',
      type: 'Research Collaboration',
      focus: 'IoT and Industry 4.0 integration',
      duration: '2023-2026'
    },
    {
      name: 'Gujarat Technological University',
      type: 'Student Exchange Program',
      focus: 'Internships and final year projects',
      duration: 'Ongoing'
    },
    {
      name: 'ISRO - Indian Space Research Organisation',
      type: 'Technology Development',
      focus: 'Space-grade temperature controllers',
      duration: '2024-2027'
    }
  ];

  return (
    <Layout showContactSection={false}>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-accent-purple/20 via-primary/10 to-accent-cyan/20">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-primary text-primary-foreground border-0 px-6 py-3 text-lg font-bold">
              Research & Development
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              Innovating Tomorrow's Temperature Control
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              Our dedicated R&D center drives innovation in industrial temperature control, 
              developing cutting-edge technologies that shape the future of manufacturing automation.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Current Research Focus</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're pushing the boundaries of temperature control technology across multiple 
              research streams to deliver next-generation solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="card-professional group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <area.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {area.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{area.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${area.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Innovation Timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our recent breakthrough innovations that are transforming industrial temperature control.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {innovations.map((innovation, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-secondary transition-colors">
                      {innovation.year}
                    </div>
                    {index < innovations.length - 1 && (
                      <div className="w-1 h-16 bg-border mt-4"></div>
                    )}
                  </div>
                  <Card className="flex-1 card-professional">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{innovation.description}</p>
                      <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium inline-block">
                        Impact: {innovation.impact}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">R&D Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              World-class research infrastructure and expertise driving innovation in temperature control technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <capability.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Research Partnerships</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading institutions to accelerate innovation and knowledge transfer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="card-professional">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{partnership.name}</h3>
                      <Badge variant="outline" className="mb-3">
                        {partnership.type}
                      </Badge>
                      <p className="text-muted-foreground text-sm mb-2">{partnership.focus}</p>
                      <div className="text-xs text-muted-foreground">
                        Duration: {partnership.duration}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Innovation by Numbers</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Our commitment to research and development drives measurable innovation impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '25+', label: 'Patents Filed', icon: Lightbulb },
              { value: '15+', label: 'Research Projects', icon: Microscope },
              { value: '₹2Cr+', label: 'R&D Investment', icon: TrendingUp },
              { value: '8+', label: 'Industry Awards', icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <stat.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-6">Partner with Our Innovation</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Interested in collaborating on research projects or need custom temperature control solutions? 
              Our R&D team is ready to work with you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary group">
                Discuss Research Partnership
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-primary">
                Request Custom Development
              </Button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                📧 R&D Team: research@el21systems.com | 📞 +91 98765 43211
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Facility Gallery */}
      <section className="py-20 bg-gradient-to-br from-background via-accent-purple/5 to-accent-cyan/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-6 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              R&D Facility & Innovation Lab
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art research and development facilities
            </p>
          </div>

          <ImageScroller 
            images={[
              {
                src: heroIndustrial,
                alt: "Research Lab",
                title: "Advanced Research Laboratory",
                description: "Cutting-edge equipment for temperature control research"
              },
              {
                src: aiController,
                alt: "Testing Facility",
                title: "Environmental Testing Chambers",
                description: "Testing temperature controllers under extreme conditions"
              },
              {
                src: blProgrammer,
                alt: "Prototyping Lab",
                title: "Rapid Prototyping Center",
                description: "3D printing and rapid development capabilities"
              },
              {
                src: piIndicator,
                alt: "Innovation Center",
                title: "Innovation Development Center",
                description: "Where breakthrough technologies are born"
              },
              {
                src: heroIndustrial,
                alt: "Quality Lab",
                title: "Quality Assurance Lab",
                description: "Rigorous testing and validation processes"
              },
              {
                src: aiController,
                alt: "Clean Room",
                title: "Clean Room Manufacturing",
                description: "Precision manufacturing in controlled environment"
              }
            ]}
            height="h-72"
          />
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default RnD;