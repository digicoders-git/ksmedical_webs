import React, { useEffect, useState } from 'react';
import { ShoppingCart, Pill } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://ksmedial-enventory-backend.onrender.com/api/admin/products?scope=inventory');
      const data = await response.json();
      setProducts(data.products || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white font-sans">
      <style>{`
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-30px); } }
        @keyframes float-delayed { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-25px); } }
        @keyframes bubble-drift-1 { 0% { transform: translateY(-20px) translateX(0); } 50% { transform: translateY(-60px) translateX(30px); } 100% { transform: translateY(-20px) translateX(0); } }
        @keyframes bubble-drift-2 { 0% { transform: translateY(-20px) translateX(0); } 50% { transform: translateY(-60px) translateX(-40px); } 100% { transform: translateY(-20px) translateX(0); } }
        @keyframes bubble-drift-3 { 0% { transform: translateY(-20px) translateX(0); } 50% { transform: translateY(-60px) translateX(50px); } 100% { transform: translateY(-20px) translateX(0); } }
        @keyframes bubble-drift-4 { 0% { transform: translateY(-20px) translateX(0); } 50% { transform: translateY(-60px) translateX(-50px); } 100% { transform: translateY(-20px) translateX(0); } }
        .animate-fade-in-down { animation: fadeInDown 0.9s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.9s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.7s ease-out forwards; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; animation-delay: 0.5s; }
        .bubble { position: absolute; border-radius: 50%; background: rgba(234, 88, 12, 0.15); border: 1px solid rgba(234, 88, 12, 0.3); box-shadow: 0 0 10px rgba(234, 88, 12, 0.1); }
        .bubble-1 { width: 20px; height: 20px; top: 20%; left: 15%; animation: bubble-drift-1 6s ease-in-out infinite; }
        .bubble-2 { width: 28px; height: 28px; top: 40%; right: 10%; animation: bubble-drift-2 7s ease-in-out infinite; animation-delay: 1s; }
        .bubble-3 { width: 18px; height: 18px; top: 60%; left: 25%; animation: bubble-drift-3 8s ease-in-out infinite; animation-delay: 2s; }
        .bubble-4 { width: 25px; height: 25px; top: 30%; left: 50%; animation: bubble-drift-4 6.5s ease-in-out infinite; animation-delay: 0.5s; }
        .bubble-5 { width: 22px; height: 22px; top: 50%; right: 20%; animation: bubble-drift-1 7.5s ease-in-out infinite; animation-delay: 1.5s; }
        .bubble-6 { width: 26px; height: 26px; top: 15%; right: 30%; animation: bubble-drift-2 8.5s ease-in-out infinite; animation-delay: 2.5s; }
        .bubble-7 { width: 19px; height: 19px; top: 70%; left: 60%; animation: bubble-drift-3 7s ease-in-out infinite; animation-delay: 0.8s; }
        .bubble-8 { width: 24px; height: 24px; top: 35%; left: 70%; animation: bubble-drift-4 9s ease-in-out infinite; animation-delay: 1.2s; }
        .card-stagger { animation-delay: 0.1s; }
        .product-card { transition: all 0.3s ease; }
        .product-card:hover { transform: translateY(-8px); }
      `}</style>

      {/* Hero Section */}
      <div
        className="relative pt-[120px] lg:pt-[140px] pb-24 overflow-hidden"
        style={{
          backgroundImage:
            'url("/istockphoto-1319031310-612x612.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06331A]/85 via-[#06331A]/70 to-[#06331A]/85"></div>

        {/* Soft Glow */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          <div className="max-w-3xl mx-auto text-center">

            {/* Glass Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 shadow-xl">

              <h1
                className={`text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight ${isVisible ? "animate-fade-in-down" : "opacity-0"
                  }`}
              >
                Our Products
              </h1>

              <p
                className={`text-lg md:text-xl text-white/90 leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                style={{ animationDelay: "0.2s" }}
              >
                Discover high-quality medicines and trusted healthcare products
                designed to support your health and wellness every day.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Content Section */}
      <div className="py-16 pb-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="w-full">
          
          {/* Our Products Header */}
          <div className="text-left mb-12 pl-4 md:pl-20">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 border-b-4 border-primary inline-block pb-2">
              Our Products
            </h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-12">

            {/* Loading State */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EA580C]"></div>
              </div>
            ) : (
              <>
                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">

                  {products.map((product, index) => (

                    <div
                      key={product._id}
                      className={`group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >

                      {/* Image */}
                      <div className="relative h-36 bg-gray-50 flex items-center justify-center overflow-hidden">

                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                        ) : (
                          <Pill className="w-14 h-14 text-gray-300" />
                        )}

                        {/* Discount */}
                        {product.discountPercent > 0 && (
                          <div className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                            {product.discountPercent}% OFF
                          </div>
                        )}

                        {/* Prescription */}
                        {product.isPrescriptionRequired && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                            Rx
                          </div>
                        )}

                      </div>

                      {/* Content */}
                      <div className="p-3 flex flex-col flex-grow">

                        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                          {product.name}
                        </h3>

                        {product.genericName && (
                          <p className="text-xs text-gray-500 mt-1">
                            {product.genericName}
                          </p>
                        )}

                        {/* Price */}
                        <div className="mt-2 flex items-center gap-2">

                          <span className="text-lg font-bold text-orange-600">
                            ₹{product.sellingPrice}
                          </span>

                          {product.mrp && (
                            <span className="text-xs text-gray-400 line-through">
                              ₹{product.mrp}
                            </span>
                          )}

                        </div>

                        {/* Stock */}
                        <div className="mt-2">

                          <span className={`text-[10px] font-medium px-2 py-1 rounded-full
${product.stock > 0
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"}`}>

                            {product.stock > 0
                              ? `${product.stock} in stock`
                              : "Out of stock"}

                          </span>

                        </div>

                        {/* Button */}
                        <button className="mt-3 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-lg transition-all duration-200">

                          <ShoppingCart className="w-4 h-4" />
                          Buy Now

                        </button>

                      </div>

                    </div>

                  ))}

                </div>

                {/* Results Count */}
                <div className="text-center text-gray-600 font-medium py-8">
                  Showing {products.length} products
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
