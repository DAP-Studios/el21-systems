import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import SmartFeaturesSection from '@/components/SmartFeaturesSection';
import ProductCategorySlider from '@/components/ProductCategorySlider';
import VideoShowcaseSection from '@/components/VideoShowcaseSection';
import IndustriesScrollSection from '@/components/IndustriesScrollSection';
import ProductHighlightsSection from '@/components/ProductHighlightsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Home = () => {
  return (
    <Layout>
      {/* 2026 Future-Ready Design */}
      <HeroSection />
      <SmartFeaturesSection />
      <ProductCategorySlider />
      <VideoShowcaseSection />
      <IndustriesScrollSection />
      <ProductHighlightsSection />
      <TestimonialsSection />
      {/* ContactSection is automatically added by Layout component */}

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </Layout>
  );
};

export default Home;
