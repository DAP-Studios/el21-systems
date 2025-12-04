import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    window.open('https://wa.me/919876543210?text=Hi, I want to know more about your products', '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-24 right-6 z-50 w-80"
        >
          <div className="glass-card-2026 p-6 rounded-3xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">EL21 Systems</h4>
                  <p className="text-xs text-white/60">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message */}
            <div className="bg-white/10 p-4 rounded-2xl mb-4">
              <p className="text-white/90 text-sm">
                Hi there! 👋<br/>
                How can we help you today?
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
            >
              Start Conversation
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(37, 211, 102, 0.5)',
            '0 0 40px rgba(37, 211, 102, 0.8)',
            '0 0 20px rgba(37, 211, 102, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-[#ff385c] rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>
        )}
      </motion.button>
    </>
  );
};

export default FloatingWhatsApp;
