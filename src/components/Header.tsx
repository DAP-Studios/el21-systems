import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoBImg from '/assets/image/logob.png';
import logoOImg from '/assets/image/logoo.png';

/**
 * Header component displays the main navigation bar and logo for El 21 Systems.
 * Features: responsive design, mobile menu, contact info, scroll effects
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
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
      {/* Main Header */}
      <header className={`bg-white/95 border-b border-border/50 sticky top-0 z-50 backdrop-blur-lg transition-all duration-300 flex items-center justify-center ${
        isScrolled ? 'shadow-xl h-14' : 'shadow-lg h-16'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`bg-gradient-to-br from-dark-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'h-10 w-10' : 'h-12 w-12'
                }`}
              >
                <img
                  src={isHovered ? logoOImg : logoBImg}
                  alt="El 21 Systems Logo"
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? 'h-10 w-10' : 'h-12 w-12'
                  }`}
                />
              </div>
              <div
                className={`transition-all duration-300 ${
                  isScrolled ? 'scale-90' : 'scale-100'
                }`}
              >
                <h1
                  className={`font-black bg-gradient-to-r from-secondary via-accent-purple to-accent-cyan bg-clip-text text-transparent transition-all duration-300 ${
                    isScrolled ? 'text-xl' : 'text-2xl'
                  }`}
                >
                  El 21 Systems
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  Temperature Control Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className={`font-medium transition-colors ${
                  isActive('/shop') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`font-medium transition-colors ${
                  isActive('/services') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/research" 
                className={`font-medium transition-colors ${
                  isActive('/research') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                R&D
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                className="bg-gradient-to-r from-accent-purple to-accent-pink text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
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
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className={`font-medium transition-colors py-2 ${
                    isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  ref={firstMobileLinkRef}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className={`font-medium transition-colors py-2 ${
                    isActive('/shop') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  to="/about"
                  className={`font-medium transition-colors py-2 ${
                    isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className={`font-medium transition-colors py-2 ${
                    isActive('/services') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/research"
                  className={`font-medium transition-colors py-2 ${
                    isActive('/research') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  R&D
                </Link>
                <Button 
                  className="bg-gradient-to-r from-accent-purple to-accent-pink text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 mt-4"
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
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;