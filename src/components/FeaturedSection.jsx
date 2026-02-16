import React from 'react';

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
                                src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Supplements" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                             />
                         </div>
                    </div>

                    {/* Center Column: Button + Image 2 (Dropped Lower) */}
                    <div className="flex flex-col items-center relative">
                         {/* Button floats above the image */}
                         <button className="mb-12 px-10 py-4 bg-white border-2 border-secondary text-secondary font-bold text-lg rounded-[20px] hover:bg-secondary hover:text-white transition-all duration-300 uppercase tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_30px_rgba(216,27,31,0.2)] transform hover:-translate-y-1">
                            Discover More
                        </button>

                         {/* Center Image - Pushed down and different shape */}
                         <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group relative">
                            <img 
                                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Lifestyle" 
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
                                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Essential Oils" 
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
