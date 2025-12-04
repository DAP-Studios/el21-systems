import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, MessageCircle } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import { motion } from 'framer-motion';
import temperatureController from '@/assets/products/temperature-controller.jpg';
import proximityImage from '@/assets/products/proximity-sensor.jpg';
import speedIndicator from '@/assets/products/speed-indicator.jpg';

const HeroSection2026 = () => {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    window.open('https://wa.me/919876543210?text=Hi, I need a quote for your industrial automation products', '_blank');
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden gradient-animated"
    >
      {/* Particle Animation Background */}
      <ParticlesBackground />

      {/* Circuit Overlay */}
      <div className="circuit-overlay absolute inset-0 z-0"></div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#021526]/95 via-[#0077ff]/20 to-[#021526]/95 z-[1]"></div>

      {/* Animated Glow Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff385c]/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0077ff]/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex"
              >
                <div className="glass-card-2026 px-6 py-3 rounded-full inline-flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#f7d000] animate-pulse" />
                  <span className="text-[#f7d000] font-bold text-sm">Industry 4.0 Ready</span>
                </div>
              </motion.div>

              {/* Main Heading - 2026 Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="block text-white mb-2">
                    Next-Gen
                  </span>
                  <span className="holographic block text-6xl sm:text-7xl lg:text-8xl mb-2">
                    Industrial
                  </span>
                  <span className="block bg-gradient-to-r from-[#0077ff] via-[#f7d000] to-[#ff385c] bg-clip-text text-transparent">
                    Automation
                  </span>
                  <span className="block text-white mt-2 text-4xl sm:text-5xl lg:text-6xl">
                    Solutions
                  </span>
                </h1>
              </motion.div>

              {/* Sub-heading */}
              <motion.p
                className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-[#0077ff] font-bold">High-precision Control Systems</span> |
                <span className="text-[#ff385c] font-bold"> Smart Automation</span> |
                <span className="text-[#f7d000] font-bold"> Industry 4.0 Ready Products</span>
              </motion.p>

              {/* CTA Buttons - 2026 Style */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="group h-16 px-8 text-lg bg-gradient-to-r from-[#0077ff] to-[#0055cc] hover:from-[#0055cc] hover:to-[#0077ff] text-white border-0 rounded-2xl neon-glow-blue font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={scrollToProducts}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  className="group h-16 px-8 text-lg bg-gradient-to-r from-[#ff385c] to-[#cc1a3d] hover:from-[#cc1a3d] hover:to-[#ff385c] text-white border-0 rounded-2xl neon-glow-red font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Instant WhatsApp Quote
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="glass-dark px-4 py-2 rounded-xl">
                  <p className="text-[#f7d000] font-bold text-2xl">500+</p>
                  <p className="text-white/70 text-xs">Clients Worldwide</p>
                </div>
                <div className="glass-dark px-4 py-2 rounded-xl">
                  <p className="text-[#0077ff] font-bold text-2xl">15+</p>
                  <p className="text-white/70 text-xs">Years Experience</p>
                </div>
                <div className="glass-dark px-4 py-2 rounded-xl">
                  <p className="text-[#ff385c] font-bold text-2xl">24/7</p>
                  <p className="text-white/70 text-xs">Support</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - 3D Floating Products */}
            <motion.div
              className="hidden lg:flex relative h-[600px] items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Product - Center */}
              <motion.div
                className="absolute z-30"
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="glass-card-2026 p-4 rounded-3xl neon-glow-blue hover-3d">
                  <img
                    src={temperatureController}
                    alt="Temperature Controller"
                    className="w-72 h-72 object-cover rounded-2xl"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-white font-bold text-xl">Temperature Controller</h3>
                    <p className="text-[#0077ff] text-sm">Industry 4.0 Compatible</p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Product - Top Right */}
              <motion.div
                className="absolute top-0 right-0 z-20"
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, -10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="glass-card-2026 p-3 rounded-2xl neon-glow-red hover-3d">
                  <img
                    src={proximityImage}
                    alt="Proximity Sensor"
                    className="w-48 h-48 object-cover rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Tertiary Product - Bottom Left */}
              <motion.div
                className="absolute bottom-0 left-0 z-10"
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 15, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="glass-card-2026 p-3 rounded-2xl neon-glow-yellow hover-3d">
                  <img
                    src={speedIndicator}
                    alt="Speed Indicator"
                    className="w-48 h-48 object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default HeroSection2026;
