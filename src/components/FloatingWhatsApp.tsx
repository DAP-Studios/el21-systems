import { motion } from 'framer-motion';
import { SiWhatsapp } from 'react-icons/si';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    // EL21 Systems WhatsApp
    window.open('https://wa.me/917859914979?text=Hi, I want to know more about your products', '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          '0 0 12px rgba(37, 211, 102, 0.35)',
          '0 0 18px rgba(37, 211, 102, 0.55)',
          '0 0 12px rgba(37, 211, 102, 0.35)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      aria-label="Chat on WhatsApp"
    >
  <SiWhatsapp className="w-5 h-5 text-white" />
    </motion.button>
  );
};

export default FloatingWhatsApp;
