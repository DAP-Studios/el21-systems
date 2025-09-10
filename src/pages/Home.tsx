import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsSection />
    </Layout>
  );
};

export default Home;