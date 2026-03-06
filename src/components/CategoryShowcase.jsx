import { Link } from 'react-router-dom';

const CategoryShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Main Grid Container */}
        <div className="flex flex-col gap-6">
          
          {/* Top Large Card: Supplements */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row min-h-[400px] border border-gray-100">
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">Supplements</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mb-6">
                We use our knowledge and expertise to help you live your best life. This means creating natural health & wellness products that help people make their life better
              </p>
              <Link 
                to="/products" 
                className="inline-block px-6 py-3 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-dark shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Supplements
              </Link>
            </div>
            <div className="flex-1 relative min-h-[250px] md:min-h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80" 
                alt="Medical Supplements" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Bottom Grid: Essential Oils & Powders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Essential Oils Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-auto md:h-[280px] border border-gray-100 group">
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center items-start">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans mb-4">Essential<br/>Oils</h3>
                <Link 
                  to="/products" 
                  className="text-sm text-secondary font-semibold hover:underline flex items-center gap-1"
                >
                  View Products →
                </Link>
              </div>
              <div className="w-full md:w-1/2 relative min-h-[200px] md:h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80" 
                  alt="Medical Oils" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Powders Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-auto md:h-[280px] border border-gray-100 group">
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center items-start">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans mb-4">Powders</h3>
                <Link 
                  to="/products" 
                  className="text-sm text-secondary font-semibold hover:underline flex items-center gap-1"
                >
                  View Products →
                </Link>
              </div>
              <div className="w-full md:w-1/2 relative min-h-[200px] md:h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Powder supplements" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
