import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/share/1AjjsyKnwi/', label: 'Facebook', color: '#0041C2' },
  { icon: Instagram, href: 'https://www.instagram.com/el21_systems?igsh=NjhwNzEycnIyYjQx', label: 'Instagram', color: '#FF4500' },
  { icon: Youtube, href: 'https://www.youtube.com/@ShaileshRathod-c6c', label: 'YouTube', color: '#FF4500' },
];

/**
 * Header component displays the main navigation bar and logo for El 21 Systems.
 * Features: responsive design, mobile menu, contact info, scroll effects
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const firstMobileLinkRef = React.useRef<HTMLAnchorElement>(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const isActive = (path: string) => location.pathname === path;

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus management for accessibility
  useEffect(() => {
    if (isMenuOpen && firstMobileLinkRef.current) {
      firstMobileLinkRef.current.focus();
    }
  }, [isMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Header */}
      <header className={`bg-[#021526]/95 border-b border-white/10 sticky top-0 z-50 backdrop-blur-lg transition-all duration-300 flex items-center justify-center ${
        isScrolled ? 'shadow-xl h-14' : 'shadow-lg h-16'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
            >
              {/* Logo-only header: single logo with white background */}
              <div className="ml-3">
                <div className="bg-white rounded-md px-2 py-1 flex items-center justify-center">
                  <img
                    src="/assets/image/logo.png"
                    alt="El 21 Systems Logo"
                    className={`object-contain transition-all duration-300 ${
                      isScrolled ? 'h-10 w-24' : 'h-12 w-28'
                    }`}
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-[#FF4500]' : 'text-white/90 hover:text-[#FF4500]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`font-medium transition-colors ${
                  isActive('/shop') ? 'text-[#FF4500]' : 'text-white/90 hover:text-[#FF4500]'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-[#FF4500]' : 'text-white/90 hover:text-[#FF4500]'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors ${
                  isActive('/services') ? 'text-[#FF4500]' : 'text-white/90 hover:text-[#FF4500]'
                }`}
              >
                Services
              </Link>
              <Link
                to="/research"
                className={`font-medium transition-colors ${
                  isActive('/research') ? 'text-[#FF4500]' : 'text-white/90 hover:text-[#FF4500]'
                }`}
              >
                R&D
              </Link>
            </nav>

            {/* Social Links & CTA */}
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group border border-white/10"
                  aria-label={social.label}
                >
                  <social.icon
                    className="h-4 w-4 text-white group-hover:text-[#FF4500] transition-colors"
                  />
                </a>
              ))}
              <div className="w-px h-6 bg-white/20 mx-2"></div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#FF4500] to-[#0041C2] text-white border border-white/20 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#021526] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <h2 className="text-xl font-bold text-[#FF4500]">
              Menu
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <nav className="flex-1 flex flex-col p-6 space-y-2 overflow-y-auto">
            <Link
              to="/"
              className={`font-semibold text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                isActive('/')
                  ? 'bg-gradient-to-r from-[#FF4500] to-[#0041C2] text-white'
                  : 'text-white/90 hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
              ref={firstMobileLinkRef}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`font-semibold text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                isActive('/shop')
                  ? 'bg-gradient-to-r from-[#FF4500] to-[#0041C2] text-white'
                  : 'text-white/90 hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`font-semibold text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                isActive('/about')
                  ? 'bg-gradient-to-r from-[#FF4500] to-[#0041C2] text-white'
                  : 'text-white/90 hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`font-semibold text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                isActive('/services')
                  ? 'bg-gradient-to-r from-[#FF4500] to-[#0041C2] text-white'
                  : 'text-white/90 hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/research"
              className={`font-semibold text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                isActive('/research')
                  ? 'bg-gradient-to-r from-[#FF4500] to-[#0041C2] text-white'
                  : 'text-white/90 hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              R&D
            </Link>

            {/* Mobile Social Links */}
            <div className="pt-6 mt-auto space-y-4">
              <div className="flex justify-center gap-4 pb-4 border-b border-white/20">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card-2026 hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" style={{ color: social.color }} />
                  </a>
                ))}
              </div>
              <Button
                className="w-full bg-gradient-to-r from-[#FF4500] to-[#0041C2] text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg neon-glow-orange"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
              >
                Get Quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;