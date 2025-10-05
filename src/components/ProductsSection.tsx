import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Shield } from 'lucide-react';
import tempControllerImg from '../assets/products/temperature-controller.jpg';
import processIndicatorImg from '../assets/products/pi4911aw-process-indicator.jpg';
import vfdImg1 from '../assets/products/variable-freq-driver-2.jpg';

const ProductsSection = () => {
  const products = [
    {
      id: 'el21-tc96188',
      name: 'EL21 Systems TC-96-188 Temperature Controller',
      image: tempControllerImg,
      category: 'Temperature Controllers',
      description: 'A straightforward temperature controller for basic heating and cooling applications.',
      features: ['Analog Setpoint Dial', 'Digital Temperature Display', 'Relay Output Indicator', 'Cost Effective'],
      applications: ['Heating Applications', 'Cooling Control', 'Industrial Automation'],
      specifications: {
        'Input Type': 'Thermocouple/RTD',
        'Display': 'Digital LED',
        'Control Type': 'ON/OFF or PID',
        'Power Supply': '230V AC'
      }
    },
    {
      id: 'el21-pi4911aw',
      name: 'EL21 PI-4911A-W Process Indicator',
      image: processIndicatorImg,
      category: 'Indicators & Meters',
      description: 'A compact digital process indicator to display values from various sensors and transmitters.',
      features: ['4-Digit LED Display', 'Universal Input', 'Compact 48x96mm Size', 'High Accuracy'],
      applications: ['Process Monitoring', 'Industrial Automation', 'Quality Control'],
      specifications: {
        'Input': 'Universal Input',
        'Display': '4-Digit LED',
        'Size': '48x96mm',
        'Accuracy': '±0.1% FS'
      }
    },
    {
      id: 'veichi-ac-drive',
      name: 'VEICHI AC Motor Drive (VFD)',
      image: vfdImg1,
      category: 'Drives & Motors',
      description: 'A Variable Frequency Drive (VFD) used for controlling the speed and torque of a motor.',
      features: ['Digital Operator Panel', 'Precise Speed Control', 'Motor Protection Features', 'User-Friendly Interface'],
      applications: ['Motor Speed Control', 'Energy Saving', 'Industrial Automation'],
      specifications: {
        'Control Type': 'Vector Control',
        'Display': 'Digital Panel',
        'Protection': 'Overload/Short Circuit',
        'Communication': 'RS485'
      }
    }
  ];

  return (
    <section id="products" className="py-12 md:py-24 bg-gradient-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-20">
          <Badge className="mb-4 md:mb-6 px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-bold bg-gradient-primary text-primary-foreground border-0">
            Premium Product Range
          </Badge>
          <h2 className="text-3xl md:text-section-title mb-4 md:mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            Advanced Temperature Control Solutions
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground leading-relaxed font-medium px-4 md:px-0">
            Engineered for precision, built for reliability. Discover our comprehensive range of 
            professional-grade instruments trusted by India's leading industries.
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-20">
          {products.map((product) => (
            <Card key={product.id} className="card-professional group cursor-pointer overflow-hidden glow-primary hover:glow-secondary">
              <CardHeader className="pb-4 md:pb-6">
                <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 bg-gradient-accent relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                <div className="mb-3 md:mb-4">
                  <Badge className="bg-gradient-secondary text-secondary-foreground border-0 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-bold">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-product-title text-lg md:text-2xl font-bold leading-tight">{product.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3 md:space-y-4">
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-xs md:text-sm mb-2 flex items-center gap-2">
                    <Zap className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-[10px] md:text-xs py-0.5 px-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Quick Specs */}
                <div>
                  <h4 className="font-semibold text-xs md:text-sm mb-2 flex items-center gap-2">
                    <Shield className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                    Specifications
                  </h4>
                  <div className="space-y-1">
                    {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-[10px] md:text-xs">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="pt-4 md:pt-6">
                  <Button 
                    className="btn-primary w-full group glow-primary text-sm md:text-base py-2 md:py-3"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="relative z-10">Contact Us</span>
                    <ArrowRight className="ml-2 md:ml-3 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-2 transition-all duration-300" />
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