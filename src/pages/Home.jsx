import React from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import CategoryShowcase from '../components/CategoryShowcase';
import LatestProducts from '../components/LatestProducts';
import ImageCarousel from '../components/ImageCarousel';
import Advantages from '../components/Advantages';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedSection />
      <CategoryShowcase />
      <LatestProducts />
      <ImageCarousel />
      <Advantages />
    </main>
  );
};

export default Home;
