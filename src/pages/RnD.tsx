import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  // State for dialogs
  const [isResearchDialogOpen, setIsResearchDialogOpen] = useState(false);
  const [isCustomDevDialogOpen, setIsCustomDevDialogOpen] = useState(false);

  // State for research partnership form
  const [researchForm, setResearchForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    researchArea: '',
    projectBrief: '',
    duration: ''
  });

  // State for custom development form
  const [customDevForm, setCustomDevForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirements: '',
    specifications: '',
    timeline: ''
  });

  // Scroll to contact section function
  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  // Handle research partnership form submission
  const handleResearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mldplweg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...researchForm,
          formType: 'Research Partnership'
        }),
      });

      if (response.ok) {
        alert(`Thank you ${researchForm.name}! We've received your research partnership inquiry and our R&D team will contact you at ${researchForm.email} shortly.`);
        setIsResearchDialogOpen(false);
        // Reset form
        setResearchForm({
          name: '',
          organization: '',
          email: '',
          phone: '',
          researchArea: '',
          projectBrief: '',
          duration: ''
        });
      } else {
        alert('There was an error submitting your form. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    }
  };

  // Handle custom development form submission
  const handleCustomDevSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/myznpdye', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...customDevForm,
          formType: 'Custom Development Request'
        }),
      });

      if (response.ok) {
        alert(`Thank you ${customDevForm.name}! We've received your custom development request and will send you a detailed quote at ${customDevForm.email} shortly.`);
        setIsCustomDevDialogOpen(false);
        // Reset form
        setCustomDevForm({
          name: '',
          company: '',
          email: '',
          phone: '',
          requirements: '',
          specifications: '',
          timeline: ''
        });
      } else {
        alert('There was an error submitting your form. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    }
  };

  // Handle research partnership request (for other buttons)
  const handleResearchRequest = (type: string) => {
    alert(`Thank you for your interest in ${type}! Our R&D team will contact you shortly.`);
    scrollToContact();
  };

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
      <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#021526] via-[#041e3a] to-[#021526]">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-primary text-primary-foreground border-0 px-6 py-3 text-lg font-bold">
              Research & Development
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0077ff] via-[#ff385c] to-[#f7d000] bg-clip-text text-transparent">
              Innovating Tomorrow's Temperature Control
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-medium">
              Our dedicated R&D center drives innovation in industrial temperature control,
              developing cutting-edge technologies that shape the future of manufacturing automation.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gradient-to-b from-[#021526] to-[#041e3a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Current Research Focus</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              We're pushing the boundaries of temperature control technology across multiple 
              research streams to deliver next-generation solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="glass-card-2026 hover-3d border-white/10 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#0077ff]/20 p-3 rounded-lg border border-[#0077ff]/30">
                      <area.icon className="h-6 w-6 text-[#0077ff]" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white">{area.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-[#f7d000]/20 text-[#f7d000] border-[#f7d000]/30">
                        {area.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    {area.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-white/80">
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
      <section className="py-20 bg-gradient-to-b from-[#041e3a] to-[#021526]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Innovation Timeline</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
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
                  <Card className="flex-1 glass-card-2026 border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{innovation.title}</h3>
                      <p className="text-white/80 mb-4 leading-relaxed">{innovation.description}</p>
                      <div className="bg-[#00ff88]/20 text-[#00ff88] px-3 py-1 rounded-full text-sm font-medium inline-block border border-[#00ff88]/30">
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
      <section className="py-20 bg-gradient-to-b from-[#021526] to-[#041e3a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">R&D Capabilities</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              World-class research infrastructure and expertise driving innovation in temperature control technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="glass-card-2026 hover-3d border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#ff385c]/20 p-3 rounded-lg border border-[#ff385c]/30">
                      <capability.icon className="h-6 w-6 text-[#ff385c]" />
                    </div>
                    <CardTitle className="text-xl text-white">{capability.title}</CardTitle>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    {capability.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-[#00ff88] flex-shrink-0" />
                        <span className="text-sm text-white/80">{feature}</span>
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
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Research Partnerships</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Collaborating with leading institutions to accelerate innovation and knowledge transfer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="glass-card-2026 hover-3d border-white/10">
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
                      <p className="text-white/70 text-sm mb-2">{partnership.focus}</p>
                      <div className="text-xs text-white/70">
                        Duration: {partnership.duration}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

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
      <section className="py-20 bg-gradient-to-b from-[#041e3a] to-[#021526]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-16 w-16 mx-auto mb-6 text-[#0077ff]" />
            <h2 className="text-3xl font-bold mb-6 text-white">Partner with Our Innovation</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Interested in collaborating on research projects or need custom temperature control solutions?
              Our R&D team is ready to work with you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isResearchDialogOpen} onOpenChange={setIsResearchDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="btn-primary group"
                  >
                    Discuss Research Partnership
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Research Partnership Inquiry</DialogTitle>
                    <DialogDescription>
                      Share your research interests and our R&D team will connect with you to explore collaboration opportunities.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleResearchSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="research-name">Full Name *</Label>
                        <Input
                          id="research-name"
                          placeholder="Your name"
                          value={researchForm.name}
                          onChange={(e) => setResearchForm({...researchForm, name: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="research-organization">Organization *</Label>
                        <Input
                          id="research-organization"
                          placeholder="University/Institute/Company"
                          value={researchForm.organization}
                          onChange={(e) => setResearchForm({...researchForm, organization: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="research-email">Email Address *</Label>
                        <Input
                          id="research-email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={researchForm.email}
                          onChange={(e) => setResearchForm({...researchForm, email: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="research-phone">Phone Number *</Label>
                        <Input
                          id="research-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={researchForm.phone}
                          onChange={(e) => setResearchForm({...researchForm, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="research-area">Research Area *</Label>
                      <Input
                        id="research-area"
                        placeholder="e.g., IoT Integration, Control Algorithms, Energy Efficiency"
                        value={researchForm.researchArea}
                        onChange={(e) => setResearchForm({...researchForm, researchArea: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="research-brief">Project Brief *</Label>
                      <Textarea
                        id="research-brief"
                        placeholder="Describe your research project, objectives, and how you envision collaborating with El 21 Systems..."
                        rows={5}
                        value={researchForm.projectBrief}
                        onChange={(e) => setResearchForm({...researchForm, projectBrief: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="research-duration">Expected Duration</Label>
                      <Input
                        id="research-duration"
                        placeholder="e.g., 6 months, 1 year, 2-3 years"
                        value={researchForm.duration}
                        onChange={(e) => setResearchForm({...researchForm, duration: e.target.value})}
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button type="button" variant="outline" onClick={() => setIsResearchDialogOpen(false)} className="flex-1">
                        Cancel
                      </Button>
                      <Button type="submit" className="btn-primary flex-1">
                        Submit Research Inquiry
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog open={isCustomDevDialogOpen} onOpenChange={setIsCustomDevDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="btn-outline-primary"
                  >
                    Request Custom Development
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Custom Development Request</DialogTitle>
                    <DialogDescription>
                      Describe your custom temperature control requirements and our engineering team will provide you with a detailed quote.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleCustomDevSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="customdev-name">Full Name *</Label>
                        <Input
                          id="customdev-name"
                          placeholder="Your name"
                          value={customDevForm.name}
                          onChange={(e) => setCustomDevForm({...customDevForm, name: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="customdev-company">Company Name *</Label>
                        <Input
                          id="customdev-company"
                          placeholder="Your company"
                          value={customDevForm.company}
                          onChange={(e) => setCustomDevForm({...customDevForm, company: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="customdev-email">Email Address *</Label>
                        <Input
                          id="customdev-email"
                          type="email"
                          placeholder="your.email@company.com"
                          value={customDevForm.email}
                          onChange={(e) => setCustomDevForm({...customDevForm, email: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="customdev-phone">Phone Number *</Label>
                        <Input
                          id="customdev-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={customDevForm.phone}
                          onChange={(e) => setCustomDevForm({...customDevForm, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customdev-requirements">Development Requirements *</Label>
                      <Textarea
                        id="customdev-requirements"
                        placeholder="What custom temperature control solution do you need? Include application details, industry requirements, etc."
                        rows={5}
                        value={customDevForm.requirements}
                        onChange={(e) => setCustomDevForm({...customDevForm, requirements: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customdev-specs">Technical Specifications</Label>
                      <Textarea
                        id="customdev-specs"
                        placeholder="Temperature range, accuracy requirements, control features, communication protocols, etc."
                        rows={4}
                        value={customDevForm.specifications}
                        onChange={(e) => setCustomDevForm({...customDevForm, specifications: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customdev-timeline">Expected Timeline *</Label>
                      <Input
                        id="customdev-timeline"
                        placeholder="e.g., 3 months, 6 months, urgent"
                        value={customDevForm.timeline}
                        onChange={(e) => setCustomDevForm({...customDevForm, timeline: e.target.value})}
                        required
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button type="button" variant="outline" onClick={() => setIsCustomDevDialogOpen(false)} className="flex-1">
                        Cancel
                      </Button>
                      <Button type="submit" className="btn-primary flex-1">
                        Submit Development Request
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/90">
                📧 R&D Team: research@el21systems.com | 📞 +91 98765 43211
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Facility Gallery */}
      <section className="py-20 bg-gradient-to-br from-[#021526] via-[#041e3a] to-[#021526]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#0077ff] via-[#ff385c] to-[#f7d000] bg-clip-text text-transparent">
              R&D Facility & Innovation Lab
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art research and development facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/assets/image/rd-lab.jpg"
                alt="Advanced Research Laboratory" 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Advanced Research Laboratory</h3>
                  <p className="text-white/90">Cutting-edge equipment for temperature control research and development</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/assets/image/rd-lab2.jpg"
                alt="Innovation Development Center" 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Innovation Development Center</h3>
                  <p className="text-white/90">Where breakthrough technologies and next-generation solutions are born</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default RnD;