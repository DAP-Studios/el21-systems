import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-secondary h-10 w-10 rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">21</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">El 21 Systems</h3>
                <p className="text-sm text-primary-foreground/80">Temperature Control Solutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Leading manufacturer of temperature controllers, process indicators, 
              and programmers for industrial applications across India.
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-success px-2 py-1 rounded text-xs font-medium">
                TrustSEAL Verified
              </div>
              <div className="flex text-yellow-400 text-xs">
                ★★★★★ <span className="ml-1 text-primary-foreground/80">5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Home & Shop', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'R&D', href: '/research' }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Products</h4>
            <div className="space-y-2">
              {[
                'Temperature Controllers',
                'Process Indicators',
                'Digital Programmers',
                'BSP Connectors',
                'Custom Solutions',
                'Spare Parts'
              ].map((product) => (
                <div key={product} className="text-primary-foreground/80 text-sm">
                  {product}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Phone Numbers</p>
                  <p className="text-primary-foreground/80 text-sm">+91 98765 43210</p>
                  <p className="text-primary-foreground/80 text-sm">+91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-primary-foreground/80 text-sm">info@el21systems.com</p>
                  <p className="text-primary-foreground/80 text-sm">sales@el21systems.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Industrial Area<br />
                    Surat, Gujarat 395006<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Business Hours</p>
                  <p className="text-primary-foreground/80 text-sm">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-primary-foreground/80 text-sm">Sun: Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2024 El 21 Systems. All rights reserved. | ISO 9001:2015 Certified
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-primary-foreground/80">
                Response Rate: 94% | 500+ Happy Customers
              </div>
              <Button
                onClick={scrollToTop}
                size="sm"
                variant="secondary"
                className="rounded-full p-2"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;