import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, ArrowRight } from 'lucide-react';

// Import product images
import aiController from '@/assets/ai-7981-controller.jpg';
import blProgrammer from '@/assets/bl-886-programmer.jpg';
import piIndicator from '@/assets/pi-772-indicator.jpg';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    {
      id: 1,
      name: "AI-7981 Advanced Temperature Controller",
      price: "₹45,999",
      originalPrice: "₹52,000",
      image: aiController,
      category: "Controllers",
      rating: 4.8,
      reviews: 245,
      inStock: true,
      features: ["PID Control", "Data Logging", "RS485 Communication", "Web Interface"],
      description: "Professional-grade temperature controller with AI-enhanced algorithms for precision control in industrial applications.",
      specifications: {
        "Temperature Range": "-200°C to 1800°C",
        "Accuracy": "±0.1°C",
        "Display": "5.7 inch Color TFT",
        "Communication": "RS485, Ethernet, USB"
      }
    },
    {
      id: 2,
      name: "BL-886 Universal Programmer",
      price: "₹38,499",
      originalPrice: "₹42,000",
      image: blProgrammer,
      category: "Programmers",
      rating: 4.7,
      reviews: 189,
      inStock: true,
      features: ["Multi-Protocol Support", "Auto Detection", "PC Software", "Safety Protocols"],
      description: "Versatile programming solution for microcontrollers, EEPROMs, and flash memory devices.",
      specifications: {
        "Supported Devices": "8000+ models",
        "Interface": "USB 3.0",
        "Voltage Range": "1.8V to 5V",
        "Programming Speed": "Up to 15MB/min"
      }
    },
    {
      id: 3,
      name: "PI-772 Digital Process Indicator",
      price: "₹28,999",
      originalPrice: "₹32,500",
      image: piIndicator,
      category: "Indicators",
      rating: 4.6,
      reviews: 156,
      inStock: true,
      features: ["Multi-Input", "Alarm Functions", "Data Recording", "Remote Monitoring"],
      description: "High-precision digital indicator for monitoring and displaying process variables in real-time.",
      specifications: {
        "Input Types": "Thermocouple, RTD, Voltage, Current",
        "Display": "4.3 inch LED",
        "Accuracy": "±0.05% FS",
        "Memory": "10,000 data points"
      }
    },
    {
      id: 4,
      name: "TC-955 Thermocouple Calibrator",
      price: "₹65,999",
      originalPrice: "₹72,000",
      image: aiController,
      category: "Calibrators",
      rating: 4.9,
      reviews: 98,
      inStock: true,
      features: ["High Accuracy", "Multiple TC Types", "Data Logging", "Certificate Generation"],
      description: "Professional thermocouple calibrator for precision temperature measurement validation.",
      specifications: {
        "TC Types": "J, K, T, E, R, S, B, N",
        "Accuracy": "±0.025% of reading",
        "Temperature Range": "-200°C to 1820°C",
        "Certification": "NIST Traceable"
      }
    },
    {
      id: 5,
      name: "RT-845 RTD Transmitter",
      price: "₹32,499",
      originalPrice: "₹36,000",
      image: blProgrammer,
      category: "Transmitters",
      rating: 4.5,
      reviews: 203,
      inStock: false,
      features: ["2-Wire Configuration", "HART Protocol", "Self-Diagnostics", "Explosion Proof"],
      description: "Industrial RTD transmitter with advanced diagnostics and communication capabilities.",
      specifications: {
        "RTD Types": "Pt100, Pt1000, Ni100",
        "Output": "4-20mA with HART",
        "Operating Temp": "-40°C to 85°C",
        "Protection": "IP67"
      }
    },
    {
      id: 6,
      name: "PH-632 pH Controller",
      price: "₹41,999",
      originalPrice: "₹46,500",
      image: piIndicator,
      category: "Controllers",
      rating: 4.7,
      reviews: 134,
      inStock: true,
      features: ["Auto Calibration", "Temperature Compensation", "Relay Outputs", "Data Logging"],
      description: "Advanced pH controller with automatic calibration and temperature compensation.",
      specifications: {
        "pH Range": "0-14 pH",
        "Accuracy": "±0.01 pH",
        "Temperature Range": "0-100°C",
        "Outputs": "4 Relay, 2 Analog"
      }
    }
  ];

  const categories = ['all', 'Controllers', 'Programmers', 'Indicators', 'Calibrators', 'Transmitters'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm font-medium">
              Professional Shop
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Industrial Equipment Store
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Browse our comprehensive catalog of precision instruments, controllers, and measurement devices. 
              All products backed by our quality guarantee and expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-card/50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <Badge variant="destructive" className="px-4 py-2">Out of Stock</Badge>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground">{product.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 rounded-full px-2 py-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg leading-tight hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {product.reviews} reviews
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button 
                      className="w-full" 
                      disabled={!product.inStock}
                      variant={product.inStock ? "default" : "secondary"}
                    >
                      {product.inStock ? "Add to Cart" : "Notify When Available"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No products found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search criteria or filters</p>
              <Button onClick={() => {setSearchTerm(''); setCategoryFilter('all');}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;