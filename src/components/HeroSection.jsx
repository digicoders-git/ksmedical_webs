import React, { useEffect, useState } from 'react';

const HeroSection = ({ title, subtitle, backgroundImage = "/istockphoto-1319031310-612x612.webp" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative pt-[120px] lg:pt-[140px] pb-24 overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-down { animation: fadeInDown 0.9s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.9s ease-out forwards; }
      `}</style>

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
              className={`text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight ${
                isVisible ? "animate-fade-in-down" : "opacity-0"
              }`}
            >
              {title}
            </h1>

            <p
              className={`text-lg md:text-xl text-white/90 leading-relaxed ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
