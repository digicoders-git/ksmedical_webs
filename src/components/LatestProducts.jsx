import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pill } from 'lucide-react';

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://ksmedial-enventory-backend.onrender.com/api/admin/products?scope=inventory');
      const data = await response.json();
      setProducts(data.products?.slice(0, 20) || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#06331A] to-[#0a4525] relative overflow-hidden">
      <div className="w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-left mb-12 pl-4 md:pl-20">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 border-b-4 border-secondary inline-block pb-2">
            Latest Products
          </h2>
          <p className="text-white/70 text-sm md:text-base font-normal max-w-2xl leading-relaxed mt-4">
            Discover our newest healthcare solutions
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        ) : (
          /* Horizontal Scrollable Products */
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-4 pl-4 md:pl-20">
              <div className="flex gap-4 min-w-max px-2">
                {products.map((product) => (
                  <div 
                    key={product._id} 
                    className="w-44 flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="relative h-44 overflow-hidden bg-white">
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <Pill className="w-12 h-12 text-gray-300" />
                        </div>
                      )}
                      
                      {/* Discount Badge */}
                      {product.discountPercent > 0 && (
                        <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                          {product.discountPercent}% OFF
                        </div>
                      )}
                      
                      {/* Prescription Badge */}
                      {product.isPrescriptionRequired && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Rx
                        </div>
                      )}
                    </div>
                    
                    <div className="p-3">
                      <h3 className="text-sm font-bold text-white mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <Link 
                        to="/products" 
                        className="text-xs text-secondary font-semibold hover:underline"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

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

export default LatestProducts;
