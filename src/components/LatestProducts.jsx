import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Collagen Peptides",
   
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80",
    badge: null
  },
  {
    id: 2,
    name: "Peppermint Softgels",
   
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80",
    badge: "On Sale"
  },
  {
    id: 3,
    name: "Spearmint Oil",
    
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=600&q=80",
    badge: null
  },
  {
    id: 4,
    name: "Rice Protein",
   
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80",
    badge: null
  }
];

const LatestProducts = () => {
  return (
    <section className="py-20 bg-[#06331A]"> {/* Dark green background */}
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Latest Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              
              {/* Product Image */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Sale Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-white text-gray-900 text-[10px] font-bold px-3 py-1 rounded shadow-sm opacity-90">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
