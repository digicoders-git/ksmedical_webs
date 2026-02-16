import React, { useEffect } from 'react';
import { Users, Target, ShieldCheck, HeartPulse } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-[120px] lg:pt-[200px] pb-48">
      {/* Hero Section */}
      <div className="container mx-auto px-6 lg:px-12 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#06331A] mb-6">About <span className="text-[#EA580C]">PharmaNet</span></h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We are committed to providing you with the best pharmaceutical care and wellness products, ensuring your health is always our top priority.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-20 mb-24">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://cdn.prod.website-files.com/63b5c3b9285b4aeaa1232dd7/63b5d3ebb6ba834931f15abf_pexels-doterra-international-llc-4092837.webp" 
              alt="Healthcare" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-primary/10 p-4 rounded-xl text-primary flex-shrink-0">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">To make high-quality healthcare accessible and affordable for everyone through innovative digital solutions and dedicated pharmacist care.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-secondary/10 p-4 rounded-xl text-secondary flex-shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">To become the world's most trusted digital pharmacy, known for our integrity, speed, and uncompromising commitment to patient health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 lg:px-12 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Happy Customers', value: '50K+' },
            { label: 'Medicines Available', value: '15K+' },
            { label: 'Expert Pharmacists', value: '100+' },
            { label: 'Service Coverage', value: '200+ Cities' }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-3xl font-extrabold text-primary mb-2">{stat.value}</h4>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Trust PharmaNet?</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              icon: <ShieldCheck className="w-8 h-8" />, 
              title: '100% Genuine', 
              desc: 'Every product in our store is sourced directly from certified manufacturers and wholesalers.' 
            },
            { 
              icon: <HeartPulse className="w-8 h-8" />, 
              title: 'Quality Tested', 
              desc: 'Our pharmaceutical team rigorously checks all inventory for storage quality and expiry.' 
            },
            { 
              icon: <Users className="w-8 h-8" />, 
              title: 'Expert Support', 
              desc: 'Speak with our licensed pharmacists any time for consultation on your prescriptions.' 
            }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:-translate-y-2 transition-all duration-300">
              <div className="text-primary mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
