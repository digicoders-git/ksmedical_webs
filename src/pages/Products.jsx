import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShoppingCart, Pill, Search } from 'lucide-react';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get('search') || '';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = React.useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setShowDropdown(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const dropdownResults = searchTerm.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.genericName && p.genericName.toLowerCase().includes(searchTerm.toLowerCase()))
      ).slice(0, 8)
    : [];

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

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('search') || '';
    setSearchTerm(query);
  }, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Use a small delay for animation trigger to avoid cascading render lint warning
    const timer = setTimeout(() => setIsVisible(true), 10);
    fetchProducts();
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (product.genericName && product.genericName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
        className="relative pt-[120px] lg:pt-[140px] pb-20 overflow-visible"
        style={{
          backgroundImage: 'url("/istockphoto-1319031310-612x612.webp")',
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
              {/* Search Bar at top */}
              <div ref={searchRef} className="relative mb-6">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-11 pr-4 py-3 md:py-4 border-2 border-white/80 rounded-2xl bg-white/90 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 shadow-lg text-base md:text-lg"
                    placeholder="Search medicines & health products..."
                    value={searchTerm}
                    onFocus={() => searchTerm.trim() && setShowDropdown(true)}
                    onChange={(e) => { setSearchTerm(e.target.value); setShowDropdown(!!e.target.value.trim()); }}
                  />
                </div>
                {showDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 max-h-80 overflow-y-auto text-left">
                    {dropdownResults.length > 0 ? (
                      <>
                        {dropdownResults.map((product) => (
                          <div
                            key={product._id}
                            onClick={() => { setSearchTerm(product.name); setShowDropdown(false); }}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors border-b border-gray-50 last:border-0 cursor-pointer"
                          >
                            {product.image ? (
                              <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                            ) : (
                              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <Search className="w-4 h-4 text-gray-300" />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>
                              {product.genericName && (
                                <p className="text-xs text-gray-400 truncate">{product.genericName}</p>
                              )}
                            </div>
                            {product.discountPercent > 0 && (
                              <span className="text-xs bg-orange-100 text-orange-600 font-bold px-2 py-0.5 rounded-full flex-shrink-0">{product.discountPercent}% OFF</span>
                            )}
                          </div>
                        ))}
                        <div
                          onClick={() => setShowDropdown(false)}
                          className="block text-center py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer rounded-b-2xl"
                        >
                          See all results →
                        </div>
                      </>
                    ) : (
                      <div className="px-4 py-6 text-center text-sm text-gray-400">No products found</div>
                    )}
                  </div>
                )}
              </div>

              <h1 className={`text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}>
                Our Products
              </h1>
              <p className={`text-lg md:text-xl text-white/90 leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
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
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-4 md:px-20 gap-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 border-b-4 border-primary inline-block pb-2">
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
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
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
                    ))
                  ) : null}
                </div>

                {/* Results Count & Empty State */}
                <div className="text-center text-gray-600 font-medium py-12">
                  {filteredProducts.length > 0 ? (
                    `Showing ${filteredProducts.length} products`
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <div className="bg-gray-100 p-6 rounded-full">
                        <Search className="w-12 h-12 text-gray-400" />
                      </div>
                      <p className="text-xl font-bold text-gray-800">No products found</p>
                      <p className="text-gray-500">We couldn't find any products matching "{searchTerm}"</p>
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="text-orange-500 font-bold hover:underline"
                      >
                        Clear Search
                      </button>
                    </div>
                  )}
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
