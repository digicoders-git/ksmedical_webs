import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Sparkles, Milk, Droplet } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative"> {/* Removed margin to eliminate gap */}
      
      {/* Main Hero Section */}
      <section className="relative min-h-[700px] lg:min-h-[900px] w-full overflow-hidden"> 
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-[20s] hover:scale-100"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')",
          }}
        >
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
        </div>
  
        {/* Hero Content - Added PT to clear fixed header and increased height */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 min-h-[700px] lg:min-h-[900px] flex flex-col justify-center pt-[120px] lg:pt-[180px] pb-32"> 
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-gray-900">
              Health and wellness <br/>
              <span className="text-primary">accessible to all</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-10 font-light tracking-wide max-w-lg">
              Celebrate your health with our premium pharmaceutical products and dedicated care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/category/medicines" 
                className="px-8 py-4 bg-secondary text-white font-bold rounded shadow-[0_4px_14px_0_rgba(216,27,31,0.39)] hover:bg-secondary-dark hover:shadow-[0_6px_20px_rgba(216,27,31,0.23)] hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Explore Medicines
              </Link>
              <Link 
                to="/about-us" 
                className="px-8 py-4 bg-white text-primary font-bold rounded border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
  
        {/* Scroll Indicator (Hidden now to avoid clutter with the new bar) 
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
           <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll"></div>
           </div>
        </div>
        */}
      </section>

      {/* Overlapping Info Bar */}
      <div className="w-full absolute bottom-[-50px] left-0 z-30 px-6 hidden md:block">
         <div className="container mx-auto">
            <div className="bg-[#EA580C] text-white py-8 px-12 shadow-2xl flex justify-between items-center rounded-sm max-w-5xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
                {/* Item 1: Vitamins */}
                <div className="flex items-center gap-4 group cursor-pointer">
                    <FlaskConical className="w-10 h-10 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xl font-bold tracking-wide">Vitamins</span>
                </div>
                
                {/* Divider (Optional, using gaps instead) */}

                {/* Item 2: Collagen */}
                <div className="flex items-center gap-4 group cursor-pointer">
                    <Sparkles className="w-10 h-10 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xl font-bold tracking-wide">Collagen</span>
                </div>

                {/* Item 3: Protein */}
                <div className="flex items-center gap-4 group cursor-pointer">
                   {/* Milk icon isn't perfectly reliable in all lucide versions, using generic or specific fallback */}
                    <div className="relative w-10 h-10 border-2 border-white rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="font-bold text-xs">99%</span>
                    </div>
                    <span className="text-xl font-bold tracking-wide">Protein</span>
                </div>

                {/* Item 4: Essential Oils */}
                <div className="flex items-center gap-4 group cursor-pointer">
                    <Droplet className="w-10 h-10 stroke-[1.5] filled group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xl font-bold tracking-wide">Essential Oils</span>
                </div>
            </div>
         </div>
      </div>
      
      {/* Mobile Version of the bar (Stacked) */}
      <div className="w-full bg-[#EA580C] text-white py-8 px-6 md:hidden">
            <div className="grid grid-cols-2 gap-8 container mx-auto">
                <div className="flex flex-col items-center gap-2 text-center">
                    <FlaskConical className="w-8 h-8" />
                    <span className="text-lg font-bold">Vitamins</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <Sparkles className="w-8 h-8" />
                    <span className="text-lg font-bold">Collagen</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <div className="w-8 h-8 border-2 border-white rounded flex items-center justify-center">
                        <span className="text-[10px] font-bold">PRO</span>
                    </div>
                    <span className="text-lg font-bold">Protein</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <Droplet className="w-8 h-8" />
                    <span className="text-lg font-bold">Essential Oils</span>
                </div>
            </div>
      </div>

    </div>
  );
};

export default Hero;
