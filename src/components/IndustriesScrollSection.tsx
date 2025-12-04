import { motion } from 'framer-motion';
import {
  Shirt,
  Package,
  Pill,
  FlaskConical,
  UtensilsCrossed,
  Cog
} from 'lucide-react';

const industries = [
  {
    icon: Shirt,
    name: 'Textile',
    color: '#0077ff'
  },
  {
    icon: Package,
    name: 'Packaging',
    color: '#ff385c'
  },
  {
    icon: Pill,
    name: 'Pharma',
    color: '#f7d000'
  },
  {
    icon: FlaskConical,
    name: 'Chemical',
    color: '#00ff88'
  },
  {
    icon: UtensilsCrossed,
    name: 'Food Processing',
    color: '#ff00ff'
  },
  {
    icon: Cog,
    name: 'Engineering',
    color: '#00ffff'
  }
];

const IndustriesScrollSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#021526] to-[#041e3a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#0077ff_1px,transparent_1px),linear-gradient(-45deg,#ff385c_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      </div>

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
              Trusted Across Industries
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Industries We <span className="holographic">Serve</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Powering automation across diverse industrial sectors
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays for Scroll Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#041e3a] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#041e3a] to-transparent z-10"></div>

          {/* Scrolling Content */}
          <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-4">
            <div className="flex gap-6 animate-slide-left">
              {/* Duplicate industries for infinite scroll effect */}
              {[...industries, ...industries, ...industries].map((industry, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64"
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="glass-card-2026 p-8 rounded-3xl h-full hover-3d">
                    <motion.div
                      className="mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto glass-dark"
                        style={{ boxShadow: `0 0 30px ${industry.color}40` }}
                      >
                        <industry.icon
                          className="w-10 h-10"
                          style={{ color: industry.color }}
                        />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white text-center">
                      {industry.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default IndustriesScrollSection;
