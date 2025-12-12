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
          {/* Video Container - two videos side-by-side on md+ */}
          <div className="glass-card-2026 p-4 md:p-8 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0077ff]/20 to-[#ff385c]/20 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-r from-[#0077ff] to-[#ff385c] rounded-full flex items-center justify-center cursor-pointer neon-glow-blue"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
                  </motion.div>
                </div>
              ))}
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#0077ff]/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#ff385c]/20 rounded-full blur-3xl pointer-events-none"></div>
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
