import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProductsSection from '@/components/ProductsSection';
import IndustryApplicationsSection from '@/components/IndustryApplicationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <IndustryApplicationsSection />
      <TestimonialsSection />
      <AboutSection />
    </Layout>
  );
};

export default Index;
