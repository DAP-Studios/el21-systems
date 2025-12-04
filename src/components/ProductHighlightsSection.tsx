import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const highlights = [
  {
    product: 'RPM Controller',
    feature: 'Variable Speed Control',
    application: 'Textile & Packaging',
    compatibility: 'PLC Compatible',
    color: '#0077ff'
  },
  {
    product: 'Temperature Programmer',
    feature: 'Multi-stage Programming',
    application: 'Chemical & Pharma',
    compatibility: 'SCADA Integration',
    color: '#ff385c'
  },
  {
    product: 'Pressure Transmitter',
    feature: '4-20mA Output',
    application: 'Process Industries',
    compatibility: 'Universal Mounting',
    color: '#f7d000'
  }
];

const ProductHighlightsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#041e3a]">
      {/* Circuit Overlay */}
      <div className="circuit-overlay absolute inset-0 opacity-30"></div>

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
              Product Highlights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Interactive <span className="holographic">Specifications</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Detailed features and compatibility information
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card-2026 p-8 rounded-3xl hover-3d"
            >
              {/* Product Name */}
              <div className="mb-6">
                <div
                  className="inline-block px-4 py-2 rounded-full font-bold text-sm"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)`,
                    color: item.color,
                    border: `1px solid ${item.color}60`
                  }}
                >
                  <Zap className="w-4 h-4 inline mr-2" />
                  {item.product}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#0077ff]/20 to-[#0077ff]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#0077ff]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Feature</p>
                    <p className="text-white font-bold">{item.feature}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#ff385c]/20 to-[#ff385c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#ff385c]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Application</p>
                    <p className="text-white font-bold">{item.application}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#f7d000]/20 to-[#f7d000]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#f7d000]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Compatibility</p>
                    <p className="text-white font-bold">{item.compatibility}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white font-bold rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                onClick={() => window.location.href = '/shop'}
              >
                View Details →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlightsSection;
