import { Link } from 'react-router-dom';

const CategoryShowcase = () => {
  return (
    <section className="py-16 bg-[#F3F4F6]">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        
        {/* Main Grid Container */}
        <div className="flex flex-col gap-6">
          
          {/* Top Large Card: Supplements */}
          <div className="bg-white rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[450px]">
            <div className="flex-1 p-6 md:p-10 lg:p-16 flex flex-col justify-center items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-8 font-sans tracking-tight">Supplements</h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md font-light">
                We use our knowledge and expertise to help you live your best life. This means creating natural health & wellness products that help people make their life better
              </p>
            </div>
            <div className="flex-1 relative min-h-[250px] md:min-h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80" 
                alt="Medical Supplements" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>

          {/* Bottom Grid: Essential Oils & Powders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Essential Oils Card */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row h-auto md:h-[320px]">
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center items-start">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-sans tracking-tight">Essential<br/>Oils</h3>
              </div>
              <div className="w-full md:w-1/2 relative min-h-[200px] md:h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80" 
                  alt="Medical Oils" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Powders Card */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row h-auto md:h-[320px]">
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center items-start">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-sans tracking-tight">Powders</h3>
              </div>
              <div className="w-full md:w-1/2 relative min-h-[200px] md:h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Powder supplements" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
