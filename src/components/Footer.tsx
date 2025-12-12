import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/share/1AjjsyKnwi/', label: 'Facebook', color: '#0041C2' },
  { icon: Instagram, href: 'https://www.instagram.com/el21_systems?igsh=NjhwNzEycnIyYjQx', label: 'Instagram', color: '#FF4500' },
  { icon: Youtube, href: 'https://www.youtube.com/@ShaileshRathod-c6c', label: 'YouTube', color: '#FF4500' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#021526] to-[#041e3a] text-white relative overflow-hidden">
      {/* Circuit Background */}
      <div className="circuit-overlay absolute inset-0 opacity-20"></div>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="glass-card-2026 p-2 rounded-xl">
                <img src="/assets/image/logo.png" alt="El 21 Systems" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold holographic">El 21 Systems</h3>
                <p className="text-sm text-white/70">Temperature Control Solutions</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Leading manufacturer of temperature controllers, process indicators,
              and programmers for industrial applications across India.
            </p>

            {/* Social Media Icons */}
            <div className="pt-4">
              <h4 className="text-sm font-bold mb-3 text-[#FF4500]">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card-2026 p-2 rounded-xl hover:scale-110 transition-all duration-300 hover-3d"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" style={{ color: social.color }} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 text-sm text-white/60">
              <p>© 2025 EL21 Systems.</p>
              <p>All rights reserved.</p>
              <p className="mt-2 font-semibold text-[#FF4500]">ISO 9001:2015 Certified</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#0041C2]">Quick Links</h4>
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
                  className="block text-white/70 hover:text-[#FF4500] transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#FF4500]">Our Products</h4>
            <div className="space-y-2">
              {[
                'Temperature Controllers',
                'Process Indicators',
                'Digital Programmers',
                'BSP Connectors',
                'Custom Solutions',
                'Spare Parts'
              ].map((product) => (
                <div key={product} className="text-white/70 text-sm">
                  ✓ {product}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#0041C2]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="glass-card-2026 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-[#0041C2]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Phone Numbers</p>
                  <p className="text-white/70 text-sm">+91 78599 14979</p>
                  <p className="text-white/70 text-sm">+91 97253 62234</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="glass-card-2026 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-[#FF4500]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-white/70 text-sm">info@el21systems.com</p>
                  <p className="text-white/70 text-sm">sales@el21systems.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="glass-card-2026 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-[#FF4500]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="text-white/70 text-sm">
                    Industrial Area<br />
                    Surat, Gujarat 395006<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="glass-card-2026 p-2 rounded-lg">
                  <Clock className="h-4 w-4 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Business Hours</p>
                  <p className="text-white/70 text-sm">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-white/70 text-sm">Sun: Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* DAP Tech Solutions credit block */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                color: "white",
              }}
            >
              <div style={{ marginRight: "8px" }}>
                <img src="/assets/image/dap.png" alt="Logo" height={15} width={30} />
              </div>
              <div>
                <p style={{ margin: 0 }}>
                  Website by{" "}
                  <span style={{ color: "#471202ff", fontWeight: "bold" }}>
                    DAP Tech Solutions
                  </span>
                </p>
                <p style={{ margin: 0 }}>
                  Created by Deep Parmar{" "}
                  <a
                    href="tel:+919725362234"
                    style={{
                      color: "#020748ff",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    +91 9725362234
                  </a>
                </p>
              </div>
            </div>

            {/* Extra info + back to top */}
            <div className="flex items-center gap-4">
              <div className="text-sm text-white/70">
                Response Rate: <span className="text-[#25D366] font-bold">94%</span> | <span className="text-[#FF4500] font-bold">500+</span> Happy Customers
              </div>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="rounded-full p-2 bg-gradient-to-r from-[#FF4500] to-[#0041C2] hover:scale-110 transition-all duration-300 neon-glow-orange"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4 text-white" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
