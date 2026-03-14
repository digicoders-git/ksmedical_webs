import React from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import CategoryShowcase from '../components/CategoryShowcase';
import LatestProducts from '../components/LatestProducts';
import ImageCarousel from '../components/ImageCarousel';
import Advantages from '../components/Advantages';
import { Search } from 'lucide-react';

const Home = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <main>
      <Hero />
      
      {/* Quick Search Section - Controls filtering below */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 border-b-4 border-primary inline-block pb-2">
                Quick Search
              </h2>
              <p className="text-gray-500 mt-2 text-sm md:text-base">Find medicines and health products instantly</p>
            </div>

            {/* Global Search Bar (Local Filtering) */}
            <div className="w-full md:w-[500px]">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-11 pr-4 py-4 border-2 border-gray-100 rounded-2xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all duration-300 shadow-sm text-lg"
                  placeholder="What are you looking for?"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    // Smooth scroll to results if not already in view when they start typing
                    if (e.target.value.length === 1) {
                      document.getElementById('latest-products-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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
