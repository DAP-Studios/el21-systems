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
    <section id="products" className="py-24 bg-gradient-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge className="mb-6 px-6 py-3 text-lg font-bold bg-gradient-primary text-primary-foreground border-0">
            Premium Product Range
          </Badge>
          <h2 className="text-section-title mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Advanced Temperature Control Solutions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Engineered for precision, built for reliability. Discover our comprehensive range of 
            professional-grade instruments trusted by India's leading industries.
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {products.map((product) => (
            <Card key={product.id} className="card-professional group cursor-pointer overflow-hidden glow-primary hover:glow-secondary">
              <CardHeader className="pb-6">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-accent relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-gradient-secondary text-secondary-foreground border-0 px-4 py-2 font-bold">
                    {product.category}
                  </Badge>
                  <span className="text-3xl font-black text-success glow-secondary">{product.price}</span>
                </div>
                <CardTitle className="text-product-title text-2xl font-bold">{product.name}</CardTitle>
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

                {/* Enhanced Action Buttons */}
                <div className="flex flex-col gap-3 pt-6">
                  <Button className="btn-primary w-full group glow-primary">
                    <span className="relative z-10">Get Instant Quote</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-all duration-300" />
                  </Button>
                  <Button variant="outline" className="w-full btn-outline-primary">
                    <span className="relative z-10">View Technical Specs</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;