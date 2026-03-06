import React from 'react';
import { Leaf, Activity, Moon, Zap, Dumbbell, ShieldCheck } from 'lucide-react';

const advantages = [
  {
    icon: <Leaf className="w-8 h-8 text-primary stroke-[1.5]" />,
    title: "Healthy nails & hair",
    description: "We create balance daily in people's lives with our products"
  },
  {
    icon: <Activity className="w-8 h-8 text-primary stroke-[1.5]" />,
    title: "Pain relieve",
    description: "We create balance daily in people's lives with our products"
  },
  {
    icon: <Moon className="w-8 h-8 text-primary stroke-[1.5]" />,
    title: "Better sleep",
    description: "We create balance daily in people's lives with our products"
  },
  {
    icon: <Zap className="w-8 h-8 text-primary stroke-[1.5]" />,
    title: "Detox & Cleanse",
    description: "We create balance daily in people's lives with our products"
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-primary stroke-[1.5]" />,
    title: "Muscles support",
    description: "We create balance daily in people's lives with our products"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary stroke-[1.5]" />,
    title: "Immune support",
    description: "We create balance daily in people's lives with our products"
  }
];

const Advantages = () => {
  return (
    <section className="pt-20 pb-64 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Advantages</h2>
          <p className="text-gray-600 text-base md:text-lg font-normal max-w-3xl mx-auto leading-relaxed">
            We use our knowledge and expertise to help you live your best life. This means creating natural health & wellness products that help people make their life better
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left group hover:-translate-y-1"
            >
              <div className="mb-6 p-3 bg-primary/5 rounded-lg transform group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {React.cloneElement(item.icon, { className: "w-8 h-8 text-primary stroke-[1.5]" })}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
