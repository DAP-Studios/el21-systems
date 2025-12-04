import { motion } from 'framer-motion';
import {
  Brain,
  Gauge,
  Headphones,
  Zap,
  Workflow,
  Wrench
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Based Monitoring',
    description: 'Smart sensors with AI-powered predictive maintenance',
    color: '#0077ff',
    delay: 0.1
  },
  {
    icon: Gauge,
    title: 'High Accuracy',
    description: '99.9% precision in temperature and speed control',
    color: '#ff385c',
    delay: 0.2
  },
  {
    icon: Headphones,
    title: '24×7 Support',
    description: 'Round-the-clock technical assistance and guidance',
    color: '#f7d000',
    delay: 0.3
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Save up to 40% on power consumption',
    color: '#00ff88',
    delay: 0.4
  },
  {
    icon: Workflow,
    title: 'Industry 4.0 Compatible',
    description: 'IoT-ready with PLC integration and remote monitoring',
    color: '#ff00ff',
    delay: 0.5
  },
  {
    icon: Wrench,
    title: 'On-site Customisation',
    description: 'Tailored solutions for your specific requirements',
    color: '#00ffff',
    delay: 0.6
  }
];

const SmartFeaturesSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#021526] to-[#041e3a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0077ff_1px,transparent_1px),linear-gradient(to_bottom,#0077ff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
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
            <span className="px-6 py-2 bg-gradient-to-r from-[#0077ff]/20 to-[#ff385c]/20 rounded-full text-[#f7d000] font-bold text-sm border border-[#f7d000]/30">
              Why Choose EL21 Systems
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Smart <span className="holographic">Features</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Cutting-edge technology meets industrial excellence
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <div className="glass-card-2026 p-8 rounded-3xl h-full relative overflow-hidden hover-3d">
                {/* Animated Background Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                  style={{ background: `radial-gradient(circle at center, ${feature.color}, transparent)` }}
                ></div>

                {/* Icon Container */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center glass-dark"
                    style={{ boxShadow: `0 0 30px ${feature.color}40` }}
                  >
                    <feature.icon
                      className="w-10 h-10"
                      style={{ color: feature.color }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Corner Element */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-20"
                  style={{
                    background: `radial-gradient(circle at top right, ${feature.color}, transparent)`
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartFeaturesSection;
