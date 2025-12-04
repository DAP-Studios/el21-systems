import { motion } from 'framer-motion';
import {
  Gauge,
  Thermometer,
  Zap,
  Activity,
  Radar,
  Droplet,
  Battery,
  Settings,
  Cpu,
  Wind,
  Power,
  Target
} from 'lucide-react';

const productCategories = [
  {
    icon: Gauge,
    name: 'RPM Controller',
    description: 'Precise speed control',
    color: '#0077ff'
  },
  {
    icon: Thermometer,
    name: 'Temperature Programmer',
    description: 'Advanced thermal control',
    color: '#ff385c'
  },
  {
    icon: Zap,
    name: 'Static Charge Removal',
    description: 'Anti-static solutions',
    color: '#f7d000'
  },
  {
    icon: Activity,
    name: 'Pressure Transmitter',
    description: 'Real-time monitoring',
    color: '#00ff88'
  },
  {
    icon: Radar,
    name: 'Metal Detector',
    description: 'Industrial safety',
    color: '#ff00ff'
  },
  {
    icon: Droplet,
    name: 'Liquid Level Controller',
    description: 'Fluid management',
    color: '#00ffff'
  },
  {
    icon: Battery,
    name: 'Power Supply (SMPS)',
    description: 'Stable power delivery',
    color: '#ff8800'
  },
  {
    icon: Settings,
    name: 'Stenter Controller',
    description: 'Textile processing',
    color: '#8800ff'
  },
  {
    icon: Cpu,
    name: 'PMDC Motor',
    description: 'Precision drive control',
    color: '#00ff00'
  },
  {
    icon: Wind,
    name: 'Variable Frequency Drive',
    description: 'Energy-efficient control',
    color: '#ff0088'
  },
  {
    icon: Power,
    name: 'Process Indicator',
    description: 'Real-time data display',
    color: '#0088ff'
  },
  {
    icon: Target,
    name: 'Proximity Sensor',
    description: 'Non-contact detection',
    color: '#ffaa00'
  }
];

const ProductCategorySlider = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#041e3a] to-[#021526]">
      {/* Animated Background */}
      <div className="absolute inset-0 particle-background"></div>
      <div className="circuit-overlay absolute inset-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="px-6 py-2 glass-card-2026 rounded-full text-white font-bold text-sm">
              Complete Product Range
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Product <span className="holographic">Categories</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive industrial automation solutions for every need
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {productCategories.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                rotateX: 10,
                z: 50
              }}
              className="group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div className="glass-card-2026 p-6 rounded-2xl h-full relative overflow-hidden hover-3d">
                {/* Glow Effect on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"
                  style={{ background: `radial-gradient(circle at center, ${product.color}, transparent)` }}
                ></div>

                {/* Icon */}
                <motion.div
                  className="relative mb-4 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center glass-dark"
                    style={{ boxShadow: `0 0 20px ${product.color}40` }}
                  >
                    <product.icon
                      className="w-8 h-8"
                      style={{ color: product.color }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-sm font-bold text-white mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-white/60">
                    {product.description}
                  </p>
                </div>

                {/* Shimmer Effect */}
                <div className="shimmer"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => {
              const shopSection = document.getElementById('shop');
              if (shopSection) {
                shopSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/shop';
              }
            }}
            className="px-10 py-4 bg-gradient-to-r from-[#0077ff] to-[#ff385c] text-white font-bold rounded-2xl neon-glow-blue hover:scale-105 transition-all duration-300 text-lg"
          >
            View All Products →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategorySlider;
