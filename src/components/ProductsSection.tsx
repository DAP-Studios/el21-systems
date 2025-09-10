import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Award, Phone } from 'lucide-react';
import ai7981Image from '@/assets/ai-7981-controller.jpg';
import pi772Image from '@/assets/pi-772-indicator.jpg';
import bl886Image from '@/assets/bl-886-programmer.jpg';

const ProductsSection = () => {
  const products = [
    {
      id: 'ai-7981',
      name: 'AI-7981 Temperature Controller',
      price: '₹2,050',
      image: ai7981Image,
      category: 'Temperature Controllers',
      description: 'Entry-level digital temperature controller with precise control for plastic and rubber industries.',
      features: ['Digital Display', 'Plastic Industry Grade', 'Easy Installation', 'Cost Effective'],
      applications: ['Plastic Manufacturing', 'Rubber Processing', 'Small Scale Industries'],
      specifications: {
        'Input Type': 'Thermocouple/RTD',
        'Display': '4-Digit LED',
        'Accuracy': '±0.5°C',
        'Power Supply': '230V AC'
      }
    },
    {
      id: 'pi-772',
      name: 'PI-772 Process Indicator',
      price: '₹1,850',
      image: pi772Image,
      category: 'Process Indicators',
      description: 'Compact digital process indicator with 24VDC operation for versatile industrial applications.',
      features: ['Compact Design', '24VDC Operation', 'High Accuracy', 'Robust Construction'],
      applications: ['Process Monitoring', 'Industrial Automation', 'Quality Control'],
      specifications: {
        'Input': 'Universal Input',
        'Display': '3.5 Digit LED',
        'Power': '24VDC',
        'Accuracy': '±0.1% FS'
      }
    },
    {
      id: 'bl-886',
      name: 'BL-886 Multi-Function Programmer',
      price: '₹2,600',
      image: bl886Image,
      category: 'Advanced Programmers',
      description: 'Multi-function batch programmer with advanced control capabilities for complex industrial processes.',
      features: ['Multi-Function', 'Batch Processing', 'Advanced Control', 'User-Friendly Interface'],
      applications: ['Batch Processing', 'Heat Treatment', 'Chemical Processing'],
      specifications: {
        'Channels': '4 Input/4 Output',
        'Programs': '99 Programs',
        'Memory': 'Non-Volatile',
        'Communication': 'RS485'
      }
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Our Products</Badge>
          <h2 className="text-section-title mb-6">
            Professional Temperature Control Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our comprehensive range of precision instruments designed for 
            industrial temperature control, process monitoring, and automation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="card-professional group cursor-pointer">
              <CardHeader className="pb-4">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <span className="text-2xl font-bold text-success">{product.price}</span>
                </div>
                <CardTitle className="text-product-title">{product.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Quick Specs */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Specifications
                  </h4>
                  <div className="space-y-1">
                    {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 pt-4">
                  <Button className="btn-primary w-full group">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Applications */}
        <div className="bg-background rounded-2xl p-8 border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-section-title">Industries We Serve</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Our temperature control solutions are trusted by leading industries 
                across India for their reliability and precision.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Plastic Manufacturing',
                  'Chemical Processing',
                  'Food & Beverage',
                  'Pharmaceutical',
                  'Rubber Industries',
                  'Textile Manufacturing',
                  'Laboratory Equipment',
                  'Process Automation'
                ].map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
              <h4 className="text-xl font-bold mb-4">Need Custom Solutions?</h4>
              <p className="mb-6 text-primary-foreground/90">
                We design and manufacture custom temperature control solutions 
                tailored to your specific industrial requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="secondary" className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Expert
                </Button>
                <Button variant="outline" className="flex-1 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Send Requirements
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;