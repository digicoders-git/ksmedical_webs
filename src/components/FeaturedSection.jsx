import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedSection = () => {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-7xl">
                
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Discover Our Products
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        We put intention into every product we make <br className="hidden md:block"/>
                        with the balance of science and nature.
                    </p>
                </div>

                {/* Specific Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    
                    {/* Left Column: Image 1 - Vertically Higher */}
                    <div className="relative group md:mt-0 flex flex-col h-full justify-start">
                         <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                             <img 
                                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80" 
                                alt="Medicine Bottles" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                             />
                         </div>
                    </div>

                    {/* Center Column: Button + Image 2 (Dropped Lower) */}
                    <div className="flex flex-col items-center relative">
                         {/* Button floats above the image */}
                         <Link to="/contact-us" className="mb-12 px-10 py-4 bg-white border-2 border-secondary text-secondary font-bold text-lg rounded-[20px] hover:bg-secondary hover:text-white transition-all duration-300 uppercase tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_30px_rgba(216,27,31,0.2)] transform hover:-translate-y-1">
                            Discover More
                        </Link>

                         {/* Center Image - Pushed down and different shape */}
                         <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group relative">
                            <img 
                                src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80" 
                                alt="Pharmacy Medicine" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         </div>
                    </div>

                    {/* Right Column: Image 3 - Vertically Higher (Aligned with Left) */}
                    <div className="relative group md:mt-0 flex flex-col h-full justify-start">
                         <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                             <img 
                                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80" 
                                alt="Medical Pills" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                             />
                         </div>
                    </div>

                </div>
            </div>
            
            {/* Background Decorations */}
             <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
             <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        </section>
    );
};

export default FeaturedSection;
