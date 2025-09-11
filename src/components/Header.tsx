import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>info@el21systems.com</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>Surat, Gujarat, India</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-primary h-10 w-10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">21</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">El 21 Systems</h1>
                <p className="text-xs text-muted-foreground">Temperature Control Solutions</p>
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
              <Button className="btn-secondary">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
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
                <Button className="btn-secondary mt-4">
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