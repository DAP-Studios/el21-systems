import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoShowcaseSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#021526]">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Video Container */}
          <div className="glass-card-2026 p-4 md:p-8 rounded-3xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0077ff]/20 to-[#ff385c]/20">
              {/* Placeholder for video - Replace with actual video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <motion.div
                    className="w-24 h-24 mx-auto bg-gradient-to-r from-[#0077ff] to-[#ff385c] rounded-full flex items-center justify-center cursor-pointer neon-glow-blue"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-12 h-12 text-white fill-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                      Designed for Accuracy
                    </h3>
                    <p className="text-xl text-white/70">
                      Engineered for Performance
                    </p>
                    <p className="text-sm text-white/50 mt-4">
                      Click to watch our products in action
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-[#0077ff]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#ff385c]/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Description */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white/70 text-lg">
              Experience the precision and reliability of EL21 Systems' automation solutions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
