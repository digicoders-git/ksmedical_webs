import React, { useEffect, useState } from 'react';
import { Search, Filter, ShoppingBag, Star, Heart, SlidersHorizontal, ChevronDown } from 'lucide-react';

const ShopAll = () => {
    const [activeCategory, setActiveCategory] = useState('All Products');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const products = [
        { id: 1, name: "Advanced Vitamin C", category: "Supplements", price: 29.99, rating: 4.8, image: "https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b714e37582621edf8dad76_granat-84wDj-C6nYI-unsplash%20(1)-p-500.jpg" },
        { id: 2, name: "Organic Lavender Oil", category: "Essential Oils", price: 18.50, rating: 4.9, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 3, name: "Vegan Protein Powder", category: "Powders", price: 45.00, rating: 4.7, image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 4, name: "Omega-3 Fish Oil", category: "Supplements", price: 34.00, rating: 4.6, image: "https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b7180b9271ac03ce247afc_natali-hordiiuk-EvV3AJcAxJ4-unsplash-p-500.jpg" },
        { id: 5, name: "Peppermint Pure Oil", category: "Essential Oils", price: 15.99, rating: 4.8, image: "https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b5e1c2db323120ab0cc8e7_pexels-doterra-international-llc-6056527-p-500.jpg" },
        { id: 6, name: "Green Tea Extract", category: "Supplements", price: 22.00, rating: 4.5, image: "https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b5cf092b18e63252517ece_pexels-correxiko-collagen-6475137-p-500.jpg" },
        { id: 7, name: "Collagen Peptide", category: "Powders", price: 39.99, rating: 4.9, image: "https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b5df9bc746d7de0665af94_pexels-correxiko-collagen-6475142-p-500.jpg" },
        { id: 8, name: "Eucalyptus Oil", category: "Essential Oils", price: 12.50, rating: 4.7, image: "https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b5e33b53ecb198208dcb55_pexels-jellybee-8940750-p-500.jpg" }
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All Products' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ['All Products', 'Supplements', 'Essential Oils', 'Powders', 'Medicines', 'Personal Care'];

    return (
        <div className="bg-[#fcfdfc] pt-[120px] lg:pt-[200px] pb-48 font-sans">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                {/* Hero section */}
                <div className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#06331A] mb-8 tracking-tight">
                        Our Entire <span className="text-secondary">Catalog</span>
                    </h1>
                    <p className="text-gray-400 text-xl font-light max-w-2xl leading-relaxed">
                        Explore our premium collection of medicines, supplements, and wellness products vetted by experts.
                    </p>
                </div>

                {/* Filtering Bar */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-20 bg-white p-8 rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100">
                    <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#06331A] text-white rounded-2xl font-bold text-sm">
                            <SlidersHorizontal className="w-4 h-4" /> Filters
                        </button>
                        <div className="relative group flex-grow lg:w-80">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-50 border-transparent border-2 py-3.5 pl-12 pr-4 rounded-2xl focus:bg-white focus:border-primary focus:outline-none transition-all text-sm"
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-10 w-full lg:w-auto justify-between lg:justify-end">
                        <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
                            Sort by: <span className="text-[#06331A] flex items-center gap-1 cursor-pointer">Popularity <ChevronDown className="w-4 h-4" /></span>
                        </div>
                        <div className="text-sm font-bold text-gray-400">
                            Showing <span className="text-[#06331A]">{filteredProducts.length}</span> results
                        </div>
                    </div>
                </div>

                {/* Categories Shortcut */}
                <div className="flex gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide">
                    {categories.map((category) => (
                        <button 
                            key={category} 
                            onClick={() => setActiveCategory(category)}
                            className={`whitespace-nowrap px-8 py-3 rounded-2xl font-bold text-sm transition-all ${activeCategory === category ? 'bg-secondary text-[#06331A]' : 'bg-white text-gray-400 border border-gray-100 hover:border-primary hover:text-primary'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative aspect-[4/5] bg-white rounded-[40px] overflow-hidden shadow-xl shadow-gray-100 border border-gray-50 mb-6">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                
                                {/* Overlay Actions */}
                                <div className="absolute top-6 right-6 space-y-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                    <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-400 hover:text-red-500 shadow-xl transition-colors">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-400 hover:text-primary shadow-xl transition-colors">
                                        <ShoppingBag className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="absolute bottom-6 left-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <button className="w-full bg-[#06331A] text-white py-4 rounded-2xl font-bold text-sm hover:bg-black transition-colors">
                                        Quick View
                                    </button>
                                </div>
                            </div>
                            
                            <div className="px-2">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-primary font-bold text-[10px] uppercase tracking-widest">{product.category}</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-secondary text-secondary" />
                                        <span className="text-[10px] font-bold text-gray-400">{product.rating}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-extrabold text-[#06331A] mb-3 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                                <p className="text-2xl font-black text-[#06331A]">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-[40px] shadow-sm border border-gray-100">
                        <ShoppingBag className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-[#06331A] mb-2">No products found</h3>
                        <p className="text-gray-400">Try adjusting your filters or search query.</p>
                    </div>
                )}

                {/* Pagination */}
                <div className="mt-24 flex justify-center gap-4">
                    <button className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center font-bold text-gray-400 hover:border-primary hover:text-primary transition-all">1</button>
                    <button className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold shadow-xl shadow-primary/20">2</button>
                    <button className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center font-bold text-gray-400 hover:border-primary hover:text-primary transition-all">3</button>
                    <button className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center font-bold text-gray-400 hover:border-primary hover:text-primary transition-all">...</button>
                    <button className="px-8 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center font-bold text-gray-400 hover:border-primary hover:text-primary transition-all">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ShopAll;
