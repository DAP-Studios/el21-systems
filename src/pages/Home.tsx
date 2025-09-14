import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductsSection from '@/components/ProductsSection';
import IndustryApplicationsSection from '@/components/IndustryApplicationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';

const Home = () => {
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

export default Home;