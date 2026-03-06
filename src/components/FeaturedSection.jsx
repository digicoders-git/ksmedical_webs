import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Vitamin D3 Capsules',
    category: 'Vitamins',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Omega-3 Fish Oil',
    category: 'Supplements',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Multivitamin Tablets',
    category: 'Vitamins',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Calcium + Magnesium',
    category: 'Minerals',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    name: 'Probiotic Complex',
    category: 'Digestive Health',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    name: 'Collagen Peptides',
    category: 'Beauty & Skin',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 7,
    name: 'Zinc Immunity Boost',
    category: 'Immunity',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 8,
    name: 'Iron Supplement',
    category: 'Minerals',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 9,
    name: 'B-Complex Vitamins',
    category: 'Vitamins',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 10,
    name: 'Turmeric Curcumin',
    category: 'Herbal',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80'
  }
];

const FeaturedSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="discover-products">
            <div className="w-full relative z-10">
                
                {/* Header Section */}
                <div className="text-left mb-12 pl-4 md:pl-20">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 border-b-4 border-primary inline-block pb-2">
                        Discover Our Products
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base font-normal max-w-2xl leading-relaxed mt-4">
                        Premium quality healthcare products with the balance of science and nature
                    </p>
                </div>

                {/* Horizontal Scrollable Products */}
                <div className="relative">
                    <div className="overflow-x-auto scrollbar-hide pb-4 pl-4 md:pl-20">
                        <div className="flex gap-4 min-w-max px-2">
                            {products.map((product) => (
                                <div 
                                    key={product.id} 
                                    className="w-44 flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                                >
                                    <div className="relative h-44 overflow-hidden">
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {product.category}
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                            {product.name}
                                        </h3>
                                        <Link 
                                            to="/products" 
                                            className="text-sm text-secondary font-semibold hover:underline"
                                        >
                                            View Details →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default FeaturedSection;
