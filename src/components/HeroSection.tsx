import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import ParticlesBackground from './ParticlesBackground';
import { motion } from 'framer-motion';

const HeroSection2026 = () => {
  const handleWhatsAppClick = () => {
    // EL21 Systems WhatsApp
    window.open('https://wa.me/917859914979?text=Hi, I need a quote for your industrial automation products', '_blank');
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
        className="relative min-h-screen overflow-hidden"
    >
      {/* Particle Animation Background */}
      <ParticlesBackground />

  {/* Circuit Overlay */}
  <div className="circuit-overlay absolute inset-0 z-0"></div>

  {/* Video Background */}
  {/* YouTube iframe Background (autoplay, muted, loop, no controls) */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Use the nocookie domain and params to reduce branding; iv_load_policy disables annotations. 
        The iframe is sized to cover the hero area (inset-0 + w-full h-full) so it scales across viewports. */}
    <iframe
      className="absolute inset-0 w-full h-full object-cover"
      src="https://www.youtube-nocookie.com/embed/HMYjw1YeoLk?autoplay=1&mute=1&controls=0&loop=1&playlist=HMYjw1YeoLk&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1"
      title="EL21 Systems Background Video"
      frameBorder="0"
      allow="autoplay; encrypted-media; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
    {/* No gradient overlay here per request. If you still need contrast, add a subtle overlay like: 
        <div className="absolute inset-0 bg-black/20 pointer-events-none" /> */}
  </div>

  {/* Animated Glow Orbs (kept only blue for subtle depth) */}
  <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0041C2]/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

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
              {/* Company Name - Prominent */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FF4500]">
                  EL21SYSTEMS
                </h2>
              </motion.div>

              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="inline-flex"
              >
                <div className="glass-card-2026 px-6 py-3 rounded-full inline-flex items-center gap-2">
                  <Zap className="h-3 w-3 text-[#FF4500]" />
                  <span className="text-[#FF4500] font-bold text-sm">Industry 4.0 Ready</span>
                </div>
              </motion.div>

              {/* Main Heading - 2026 Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                  <span className="block text-white mb-2">
                    Next-Gen
                  </span>
                  <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2 text-[#FF4500]">
                    Industrial
                  </span>
                  <span className="block text-[#FF4500]">
                    Automation
                  </span>
                  <span className="block text-white mt-2 text-3xl sm:text-4xl lg:text-5xl">
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
                <span className="text-[#FF4500] font-bold">High-precision Control Systems</span>
                <span className="text-white font-bold"> {' '}|{' '} Smart Automation</span>
                <span className="text-white font-bold"> {' '}|{' '} Industry 4.0 Ready Products</span>
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
                  className="group h-14 px-8 text-lg bg-gradient-to-r from-[#FF4500] to-[#CC3700] hover:from-[#CC3700] hover:to-[#FF4500] text-white border-0 rounded-2xl neon-glow-orange font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={scrollToProducts}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  className="group h-14 px-8 text-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white border-0 rounded-2xl neon-glow-whatsapp font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={handleWhatsAppClick}
                >
                  <SiWhatsapp className="mr-2 h-5 w-5" />
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
                  <p className="text-[#FF4500] font-bold text-2xl">500+</p>
                  <p className="text-white/70 text-xs">Clients Worldwide</p>
                </div>
                <div className="glass-dark px-4 py-2 rounded-xl">
                  <p className="text-[#0041C2] font-bold text-2xl">15+</p>
                  <p className="text-white/70 text-xs">Years Experience</p>
                </div>
                <div className="glass-dark px-4 py-2 rounded-xl">
                  <p className="text-[#25D366] font-bold text-2xl">24/7</p>
                  <p className="text-white/70 text-xs">Support</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Video background provides visual scene */}

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
