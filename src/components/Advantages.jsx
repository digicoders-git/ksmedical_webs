import React from 'react';
import { Leaf, Activity, Moon, Zap, Dumbbell, ShieldCheck } from 'lucide-react';

const advantages = [
  {
    icon: <Leaf className="w-12 h-12 text-gray-800 stroke-[1]" />,
    title: "Healthy nails & hair",
    description: "We create balance daily in people's lives with our products"
  },
  {
    icon: <Activity className="w-12 h-12 text-gray-800 stroke-[1]" />,
    title: "Pain relieve",
    description: "We create balance daily in people's lives with our products"
  },
  {
    icon: <Moon className="w-12 h-12 text-gray-800 stroke-[1]" />,
    title: "Better sleep",
    description: "We create balance daily in people's lives with our products"
  },
  {
    icon: <Zap className="w-12 h-12 text-gray-800 stroke-[1]" />,
    title: "Detox & Cleanse",
    description: "We create balance daily in people's lives with our products"
  },
  {
    icon: <Dumbbell className="w-12 h-12 text-gray-800 stroke-[1]" />,
    title: "Muscles support",
    description: "We create balance daily in people's lives with our products"
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-gray-800 stroke-[1]" />,
    title: "Immune support",
    description: "We create balance daily in people's lives with our products"
  }
];

const Advantages = () => {
  return (
    <section className="pt-24 pb-64 bg-[#F5F5F3]">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Advantages</h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            We use our knowledge and expertise to help you live your best life. This means creating natural health & wellness products that help people make their life better
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start text-left group"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#EA580C] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Advantages;
