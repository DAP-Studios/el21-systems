import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

interface LayoutProps {
  children: React.ReactNode;
  showContactSection?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showContactSection = true }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {children}
        {showContactSection && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;