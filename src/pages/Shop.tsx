import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, ArrowRight } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel';

// ✅ Updated image imports after renaming
import tempControllerImg from '@/assets/products/temperature-controller.jpg';
import counterImg1 from '@/assets/products/length-counter.jpg';
import counterImg2 from '@/assets/products/length-counter-2.jpg';
import smpsImg from '@/assets/products/smps.jpg';
import speedIndicatorImg from '@/assets/products/speed-indicator.jpg';
import proximitySensorImg1 from '@/assets/products/proximity-sensor.jpg';
import proximitySensorImg2 from '@/assets/products/proximity-sensor-2.jpg';
import relayCardImg1 from '@/assets/products/sync-card.jpg';
import relayCardImg2 from '@/assets/products/sync-card-1.jpg';
import relayCardImg3 from '@/assets/products/sync-card-2.jpg';
import processIndicatorImg from '@/assets/products/pi4911aw-process-indicator.jpg';
import staticRemoverImg from '@/assets/products/static-charge-removal.jpg';
import vfdImg1 from '@/assets/products/variable-freq-driver.jpg';
import vfdImg2 from '@/assets/products/variable-freq-driver-2.jpg';
import pillowBlockBearingImg from '@/assets/products/pillow-block-bearing.jpg';
import sequentialMeterImg1 from '@/assets/products/sequential-meter.jpg';
import sequentialMeterImg2 from '@/assets/products/sequential-meter-2.jpg';
import sequentialMeterImg3 from '@/assets/products/sequential-meter-3.jpg';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name-asc');

  // --- Product Data ---
 const products = [
  {
    id: "el21-tc96188",
    name: "EL21 Systems TC-96-188 Temperature Controller",
    image: [tempControllerImg],
    category: "Temperature Controllers",
    description: "A straightforward temperature controller for basic heating and cooling applications.",
    features: ["Analog Setpoint Dial", "Digital Temperature Display", "Relay Output Indicator"],
  },
  {
    id: "el21-mfc9611",
    name: "EL21 MFC 9611 Multifunction Counter",
    image: [counterImg1, counterImg2],
    category: "Counters & Timers",
    description: "A versatile and programmable dual-display counter for industrial automation tasks.",
    features: ["Dual Display", "Programmable Modes", "Dual Relay Outputs", "High-Speed Counting"],
  },
  {
    id: "nhp-smps-24v10a",
    name: "NHP 24V 10A Switched-Mode Power Supply",
    image: [smpsImg],
    category: "Power Supplies",
    description: "A robust industrial-grade SMPS for powering automation components.",
    features: ["High Efficiency", "Overload & Short Circuit Protection", "DIN Rail Mountable"],
  },
  {
    id: "el21-eljd2",
    name: "EL21 Systems EL-JD2 Speed Indicator",
    image: [speedIndicatorImg],
    category: "Indicators & Meters",
    description: "A large-display digital speed indicator for monitoring rotating machinery.",
    features: ["Large LED Display", "Measures in Meters/Min", "Accepts Proximity Sensor Input"],
  },
  {
    id: "prox-m18-pnp",
    name: "M18 Inductive Proximity Sensor",
    image: [proximitySensorImg1, proximitySensorImg2],
    category: "Sensors",
    description: "A non-contact sensor used in automation to detect the presence of metallic objects.",
    features: ["Non-Contact Detection", "LED Status Indicator", "IP67 Protection", "Threaded Metal Body"],
  },
  {
    id: "el21-relaycard-01",
    name: "EL21 Systems Relay Control Card",
    image: [relayCardImg1, relayCardImg2, relayCardImg3],
    category: "Control Boards & Modules",
    description: "A custom PCB with multiple relays for interfacing low-voltage control signals.",
    features: ["Onboard Power Supply", "Multiple Relay Outputs", "Screw Terminal Blocks"],
  },
  {
    id: "el21-pi4911aw",
    name: "EL21 PI-4911A-W Process Indicator",
    image: [processIndicatorImg],
    category: "Indicators & Meters",
    description: "A compact digital process indicator to display values from various sensors and transmitters.",
    features: ["4-Digit LED Display", "Universal Input", "Compact 48x96mm Size"],
  },
  {
    id: "el21-static-remover",
    name: "EL21 Systems Static Charge Removal Unit",
    image: [staticRemoverImg],
    category: "Static Control Equipment",
    description: "A high-voltage power supply for static eliminator bars to neutralize static electricity.",
    features: ["High Voltage Output", "Powers Static Eliminator Bars", "Durable Metal Enclosure"],
  },
  {
    id: "veichi-ac-drive",
    name: "VEICHI AC Motor Drive (VFD)",
    image: [vfdImg1, vfdImg2],
    category: "Drives & Motors",
    description: "A Variable Frequency Drive (VFD) used for controlling the speed and torque of a motor.",
    features: ["Digital Operator Panel", "Precise Speed Control", "Motor Protection Features"],
  },
  {
    id: "el21-pbb-01",
    name: "Pillow Block Bearing",
    image: [pillowBlockBearingImg],
    category: "Bearings",
    description: "Durable pillow block bearing for smooth and reliable shaft support.",
    features: ["High Strength", "Easy Installation", "Long Service Life"],
  },
  {
    id: "el21-sm-01",
    name: "Sequential Meter",
    image: [sequentialMeterImg1, sequentialMeterImg2, sequentialMeterImg3],
    category: "Meters",
    description: "A digital sequential meter for monitoring and controlling industrial processes.",
    features: ["Bright LED Display", "Multiple Inputs", "Compact Design"],
  },
];

  // Unique categories
  const categories = ['all', ...new Set(products.map(p => p.category))];

  // --- Filtering ---
  const filteredProducts = products
    .filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });

  const handleGetQuote = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/20">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-primary text-primary-foreground border-0 px-6 py-3 text-lg font-bold">
              Professional Shop
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              Industrial Equipment Store
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              Browse our comprehensive catalog of precision instruments, controllers, and measurement devices.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gradient-accent border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              {/* Category Filter */}
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

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="card-professional group cursor-pointer overflow-hidden glow-primary hover:glow-secondary"
              >
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <ProductCarousel images={product.image} productName={product.name} />
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-gradient-primary text-primary-foreground border-0 font-bold">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <CardTitle className="mb-4 text-xl leading-tight group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {product.name}
                  </CardTitle>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs font-medium">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full btn-primary group glow-primary mt-6"
                    onClick={handleGetQuote}
                  >
                    <span className="relative z-10">Get Quote</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-all duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or filters
              </p>
              <Button onClick={() => { setSearchTerm(''); setCategoryFilter('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default Shop;