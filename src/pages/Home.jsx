import React from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import CategoryShowcase from '../components/CategoryShowcase';
import LatestProducts from '../components/LatestProducts';
import ImageCarousel from '../components/ImageCarousel';
import Advantages from '../components/Advantages';

const Home = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <main>
      <Hero searchTerm={searchTerm} onSearch={setSearchTerm} />
      <FeaturedSection />
      <div id="latest-products-section">
        <LatestProducts searchTerm={searchTerm} />
      </div>
      <ImageCarousel />
      <CategoryShowcase />
      <Advantages />
    </main>
  );
};

export default Home;
