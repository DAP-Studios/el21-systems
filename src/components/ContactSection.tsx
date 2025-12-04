import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  Quote
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xvgwqbpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your inquiry! We will contact you shortly.');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          product: '',
          quantity: '',
          message: ''
        });
      } else {
        alert('There was an error submitting your form. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 98765 43210', '+91 87654 32109'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@el21systems.com', 'sales@el21systems.com'],
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Industrial Area, Surat', 'Gujarat 395006, India'],
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Sat: 9:00 AM - 6:00 PM', 'Sun: Emergency Support'],
      action: 'Check Availability'
    }
  ];


  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#021526] to-[#041e3a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#0077ff] to-[#ff385c] text-white border-0">Contact Us</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Get Your Free <span className="holographic">Quote</span> Today
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Ready to upgrade your temperature control systems? Our experts are here to help
            you find the perfect solution for your industrial needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="glass-card-2026 hover-3d border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <MessageSquare className="h-5 w-5 text-[#0077ff]" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="glass-dark p-2 rounded-lg border border-white/10">
                        <info.icon className="h-4 w-4 text-[#0077ff]" />
                      </div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                    </div>
                    <div className="ml-11 space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-white/70">{detail}</p>
                      ))}
                      <Button variant="link" size="sm" className="p-0 h-auto text-[#0077ff] hover:text-[#ff385c]">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-professional bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Why Choose Us?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">94% Response Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Same Day Quotes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Pan-India Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Technical Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Request Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card-2026 hover-3d border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Quote className="h-5 w-5 text-[#f7d000]" />
                  Request Free Quote
                </CardTitle>
                <p className="text-white/70">
                  Fill out the form below and our experts will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Product Interest
                      </label>
                      <Input
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        placeholder="e.g., Temperature Controller"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Quantity Required
                      </label>
                      <Input
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g., 10 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message / Requirements
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your specific requirements, application, or any questions you have..."
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="btn-primary flex-1">
                      <Send className="mr-2 h-4 w-4" />
                      Send Quote Request
                    </Button>
                    <Button type="button" className="btn-secondary flex-1">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Instead
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;