import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Wrench, 
  Headphones, 
  Truck, 
  Shield, 
  Settings, 
  Clock, 
  Users, 
  CheckCircle,
  Phone,
  ArrowRight,
  Factory,
  Zap,
  Award,
  X
} from 'lucide-react';

import ImageScroller from '@/components/ImageScroller';

// Import images
import aiController from '@/assets/ai-7981-controller.jpg';
import blProgrammer from '@/assets/bl-886-programmer.jpg';
import piIndicator from '@/assets/pi-772-indicator.jpg';
import heroIndustrial from '@/assets/hero-industrial.jpg';

const Services = () => {
  // State for dialogs
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);

  // State for project form
  const [projectForm, setProjectForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectBrief: '',
    budget: '',
    timeline: ''
  });

  // State for quote form
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    requirements: '',
    preferredDate: ''
  });

  // Scroll to contact section function
  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  // Handle service request
  const handleServiceRequest = (serviceType: string) => {
    alert(`Thank you for your interest in ${serviceType}! Our team will contact you shortly.`);
    scrollToContact();
  };

  // Handle project form submission
  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mdkwddrk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...projectForm,
          formType: 'Project Discussion'
        }),
      });

      if (response.ok) {
        alert(`Thank you ${projectForm.name}! We've received your project details and will contact you at ${projectForm.email} shortly.`);
        setIsProjectDialogOpen(false);
        // Reset form
        setProjectForm({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectBrief: '',
          budget: '',
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

  // Handle quote form submission
  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xdkwdlon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...quoteForm,
          formType: 'Service Quote Request'
        }),
      });

      if (response.ok) {
        alert(`Thank you ${quoteForm.name}! We've received your service request and will send you a quote at ${quoteForm.email} shortly.`);
        setIsQuoteDialogOpen(false);
        // Reset form
        setQuoteForm({
          name: '',
          company: '',
          email: '',
          phone: '',
          serviceType: '',
          requirements: '',
          preferredDate: ''
        });
      } else {
        alert('There was an error submitting your form. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    }
  };

  const mainServices = [
    {
      icon: Factory,
      title: 'Custom Manufacturing',
      description: 'Tailored temperature control solutions designed and manufactured to meet your specific industrial requirements.',
      features: [
        'Custom specifications and configurations',
        'Industry-specific adaptations',
        'Prototype development and testing',
        'Small to large batch production'
      ],
      ctaText: 'Get Custom Quote'
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: '24/7 technical assistance with installation, configuration, troubleshooting, and maintenance guidance.',
      features: [
        '24/7 helpline support',
        'Remote diagnostics assistance',
        'Installation and setup guidance',
        'Preventive maintenance programs'
      ],
      ctaText: 'Contact Support'
    },
    {
      icon: Settings,
      title: 'Installation & Commissioning',
      description: 'Professional on-site installation and commissioning services by our certified technical experts.',
      features: [
        'On-site installation services',
        'System commissioning and testing',
        'Operator training and documentation',
        'Performance validation reports'
      ],
      ctaText: 'Schedule Service'
    },
    {
      icon: Shield,
      title: 'Warranty & Maintenance',
      description: 'Comprehensive warranty coverage and preventive maintenance programs to ensure optimal performance.',
      features: [
        '2-year comprehensive warranty',
        'Annual maintenance contracts (AMC)',
        'Spare parts availability guarantee',
        'Performance monitoring services'
      ],
      ctaText: 'Learn More'
    }
  ];

  const supportServices = [
    {
      icon: Truck,
      title: 'Pan-India Delivery',
      description: 'Fast and reliable delivery network covering all major cities and industrial hubs across India.',
      highlight: 'Same-day dispatch for stock items'
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'Dedicated customer support team with 94% response rate and multilingual assistance.',
      highlight: 'Average response time: 2 hours'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast delivery and installation schedules to minimize your production downtime.',
      highlight: 'Emergency support available 24/7'
    },
    {
      icon: Users,
      title: 'Training Programs',
      description: 'Comprehensive operator training and technical workshops for your team.',
      highlight: 'Certified training certificates provided'
    }
  ];

  const servicePackages = [
    {
      name: 'Basic Support',
      price: 'Free with purchase',
      features: [
        'Phone and email support',
        'Installation guidance',
        'Basic troubleshooting',
        '1-year warranty coverage',
        'User manual and documentation'
      ],
      popular: false
    },
    {
      name: 'Professional Care',
      price: '₹5,000/year',
      features: [
        'Priority technical support',
        'Annual maintenance visit',
        'Preventive maintenance checks',
        'Performance optimization',
        'Spare parts discount (10%)',
        'Extended warranty coverage'
      ],
      popular: true
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom pricing',
      features: [
        'Dedicated account manager',
        'On-site technical support',
        'Quarterly maintenance visits',
        'Performance monitoring',
        'Priority spare parts supply',
        'Custom training programs',
        'System upgrade planning'
      ],
      popular: false
    }
  ];

  return (
    <Layout showContactSection={false}>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/20 via-accent-cyan/10 to-secondary/20">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-primary text-primary-foreground border-0 px-6 py-3 text-lg font-bold">
              Professional Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              Comprehensive Industrial Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              From custom manufacturing to 24/7 technical support, we provide end-to-end 
              services to ensure your temperature control systems perform at their best.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Professional Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive service portfolio ensures you get maximum value from your 
              temperature control investment throughout its entire lifecycle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="card-professional group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* <Button 
                    className="btn-primary w-full group"
                    onClick={() => handleServiceRequest(service.title)}
                  >
                    {service.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Support Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional support services that make El 21 Systems your trusted long-term partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                    {service.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Service Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the service level that best fits your operational needs and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`card-professional relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-4">{pkg.price}</div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={pkg.popular ? "btn-primary w-full" : "btn-outline-primary w-full"}
                    onClick={() => handleServiceRequest(pkg.name)}
                  >
                    {pkg.name === 'Enterprise Solution' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Our service experts are ready to discuss your specific requirements and 
              recommend the best service package for your industrial operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="group"
                onClick={() => window.location.href = 'tel:+919876543210'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Service Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Dialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Request Service Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Request Service Quote</DialogTitle>
                    <DialogDescription>
                      Fill in the details below and our team will provide you with a customized service quote within 24 hours.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleQuoteSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quote-name">Full Name *</Label>
                        <Input
                          id="quote-name"
                          placeholder="John Doe"
                          value={quoteForm.name}
                          onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="quote-company">Company Name *</Label>
                        <Input
                          id="quote-company"
                          placeholder="ABC Industries"
                          value={quoteForm.company}
                          onChange={(e) => setQuoteForm({...quoteForm, company: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quote-email">Email Address *</Label>
                        <Input
                          id="quote-email"
                          type="email"
                          placeholder="john@company.com"
                          value={quoteForm.email}
                          onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="quote-phone">Phone Number *</Label>
                        <Input
                          id="quote-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={quoteForm.phone}
                          onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quote-service">Service Type *</Label>
                      <Input
                        id="quote-service"
                        placeholder="e.g., Installation, Maintenance, Custom Manufacturing"
                        value={quoteForm.serviceType}
                        onChange={(e) => setQuoteForm({...quoteForm, serviceType: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quote-requirements">Service Requirements *</Label>
                      <Textarea
                        id="quote-requirements"
                        placeholder="Please describe your service requirements, quantity, specifications, etc."
                        rows={4}
                        value={quoteForm.requirements}
                        onChange={(e) => setQuoteForm({...quoteForm, requirements: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quote-date">Preferred Service Date</Label>
                      <Input
                        id="quote-date"
                        type="date"
                        value={quoteForm.preferredDate}
                        onChange={(e) => setQuoteForm({...quoteForm, preferredDate: e.target.value})}
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button type="submit" className="flex-1 btn-primary">
                        Submit Request
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setIsQuoteDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-primary-foreground/80">
                📞 Service Hotline: +91 98765 43210 | 📧 service@el21systems.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-6 px-6 py-3 text-lg font-bold bg-gradient-primary text-primary-foreground border-0">
              Industries We Serve
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powering India's Leading Industries
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our cutting-edge temperature control solutions drive success across diverse industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'Plastic Manufacturing', icon: '🏭', desc: 'Precision molding control' },
              { name: 'Chemical Processing', icon: '🧪', desc: 'Safe reaction monitoring' },
              { name: 'Food & Beverage', icon: '🍽️', desc: 'Quality preservation' },
              { name: 'Pharmaceutical', icon: '💊', desc: 'Compliance & purity' },
              { name: 'Rubber Industries', icon: '⚡', desc: 'Vulcanization control' },
              { name: 'Textile Manufacturing', icon: '🧵', desc: 'Dyeing & finishing' },
              { name: 'Laboratory Equipment', icon: '🔬', desc: 'Research accuracy' },
              { name: 'Process Automation', icon: '🤖', desc: 'Smart manufacturing' }
            ].map((industry, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                <h3 className="font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our engineering team specializes in creating tailored temperature control solutions for unique industrial requirements.
            </p>
            
            <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
              <DialogTrigger asChild>
                <Button className="btn-primary">
                  Discuss Your Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Discuss Your Project</DialogTitle>
                  <DialogDescription>
                    Share your project details with us and our engineering team will get back to you with tailored solutions.
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleProjectSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-name">Full Name *</Label>
                      <Input
                        id="project-name"
                        placeholder="John Doe"
                        value={projectForm.name}
                        onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-company">Company Name *</Label>
                      <Input
                        id="project-company"
                        placeholder="ABC Industries"
                        value={projectForm.company}
                        onChange={(e) => setProjectForm({...projectForm, company: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-email">Email Address *</Label>
                      <Input
                        id="project-email"
                        type="email"
                        placeholder="john@company.com"
                        value={projectForm.email}
                        onChange={(e) => setProjectForm({...projectForm, email: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-phone">Phone Number *</Label>
                      <Input
                        id="project-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={projectForm.phone}
                        onChange={(e) => setProjectForm({...projectForm, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-brief">Project Brief *</Label>
                    <Textarea
                      id="project-brief"
                      placeholder="Describe your project: What temperature control solution do you need? What are your specific requirements? What industry/application is this for?"
                      rows={5}
                      value={projectForm.projectBrief}
                      onChange={(e) => setProjectForm({...projectForm, projectBrief: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-budget">Estimated Budget (Optional)</Label>
                      <Input
                        id="project-budget"
                        placeholder="e.g., ₹50,000 - ₹1,00,000"
                        value={projectForm.budget}
                        onChange={(e) => setProjectForm({...projectForm, budget: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-timeline">Project Timeline (Optional)</Label>
                      <Input
                        id="project-timeline"
                        placeholder="e.g., 2-3 months"
                        value={projectForm.timeline}
                        onChange={(e) => setProjectForm({...projectForm, timeline: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="flex-1 btn-primary">
                      Submit Project Details
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsProjectDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Service Gallery */}
      <section className="py-20 bg-gradient-to-br from-background via-accent-purple/5 to-accent-cyan/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-6 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              Our Service Excellence Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See our expert technicians in action, delivering professional installation and maintenance services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/assets/image/service.jpg"
                alt="Professional Service" 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Professional Service</h3>
                  <p className="text-white/90">Expert on-site Service by certified technicians</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/assets/image/service2.jpg" 
                alt="Technical Support and Maintenance" 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">24/7 Technical Support</h3>
                  <p className="text-white/90">Round-the-clock assistance and preventive maintenance</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/assets/image/service3.jpg" 
                alt="Technical Support and Maintenance" 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">24/7 Technical Support</h3>
                  <p className="text-white/90">Round-the-clock assistance and preventive maintenance</p>
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

export default Services;