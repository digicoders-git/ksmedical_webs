import React, { useEffect } from 'react';
import { Users, Target, ShieldCheck, HeartPulse, Phone, Mail, MapPin } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white font-sans">
      <HeroSection
        title="About KS4 PharmaNet"
        subtitle="Excellence in Healthcare. Integrity in Service. Innovation in Delivery. KS4 PharmaNet is a professionally managed pharmaceutical retail and digital healthcare platform dedicated to delivering authentic medicines with uncompromising quality, regulatory compliance, and technology-driven efficiency."
      />

      {/* Content Section */}
      <div className="pb-48">

        {/* Mission & Vision */}
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary text-white p-4 rounded-2xl">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                To provide quality medicines at genuine and affordable prices, ensuring healthcare accessibility even in rural and village areas. We envision connecting qualified doctors with every needy individual through digital platforms, and empowering medical stores by providing them with a unified online marketplace.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary text-white p-4 rounded-2xl">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700 text-base">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>To make essential medicines accessible to every household at transparent and fair pricing.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-base">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>To digitally connect patients, doctors, and pharmacies through a secure and compliant ecosystem.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-base">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>To support small and medium medical stores by providing them a reliable online sales platform.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-base">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>To maintain the highest standards of pharmaceutical compliance, safety, and ethical practices.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-base">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>To leverage technology for efficient delivery, secure payments, and structured customer rewards.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-gray-50 py-20 mb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              {/* Mr. Sanjay Kumar Singh */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/carousel/image.png"
                    alt="Mr. Sanjay Kumar Singh"
                    className="w-40 h-40 rounded-full object-cover object-top border-4 border-primary shadow-xl mb-6"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Sanjay Kumar Singh</h3>
                  <p className="text-base text-primary font-semibold mb-4">Founder & CEO</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    An Engineer with an MBA, Mr. Sanjay Kumar Singh leads the strategic and technological direction of KS4 PharmaNet. He has built the company as a scalable, compliant, and technology-driven healthcare enterprise.
                  </p>
                </div>
              </div>

              {/* Mrs. Sarita Singh */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/carousel/21.png"
                    alt="Mrs. Sarita Singh"
                    className="w-40 h-40 rounded-full object-cover object-top border-4 border-secondary shadow-xl mb-6"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mrs. Sarita Singh</h3>
                  <p className="text-base text-secondary font-semibold mb-4">Proprietor</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    A Post Graduate by qualification, Mrs. Sarita Singh ensures regulatory discipline, operational integrity, and customer trust remain central to the organization's foundation.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Management Team */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Core Management Team</h3>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Mr. Vineet Bajpai */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border-l-4 border-primary hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Vineet Bajpai</h3>
                <p className="text-primary font-semibold mb-4">General Manager (Operations)</p>
                <p className="text-gray-700 leading-relaxed">
                  Oversees operational excellence, supply chain management, and business process efficiency to ensure seamless service delivery.
                </p>
              </div>

              {/* Mr. Vishwajit */}
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl border-l-4 border-secondary hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Vishwajit</h3>
                <p className="text-secondary font-semibold mb-4">B.Pharm, Manager – Operations</p>
                <p className="text-gray-700 leading-relaxed">
                  A qualified B.Pharm professional, Mr. Vishwajit supervises pharmaceutical compliance, inventory governance, and operational standards in alignment with regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[rgb(6,51,26)] py-20 mb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <a href="tel:9005606607" className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-secondary p-4 rounded-full mb-4">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-base mb-3">Mobile</h4>
                  <p className="text-white/90 text-base hover:text-secondary transition-colors">9005606607</p>
                </div>
              </a>
              <a href="mailto:care@ks4.in" className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-secondary p-4 rounded-full mb-4">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-base mb-3">Email</h4>
                  <p className="text-white/90 text-base hover:text-secondary transition-colors">care@ks4.in</p>
                </div>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Shop+No.18+UGF+Paramount+Cross+Gate+Money+Mounta+Saraswati+Puram+Raebareli+Road+Lucknow+226014" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-secondary p-4 rounded-full mb-4">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-base mb-3">Address</h4>
                  <p className="text-white/90 text-sm leading-relaxed hover:text-secondary transition-colors">
                    Shop No.18 UGF, Paramount, Cross Gate, Money Mounta, Plat No. 9A&9B, Saraswati Puram, Raebareli Road, Lucknow- 226014
                  </p>
                </div>
              </a>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-3">KS4 PHARMANET</h3>
              <p className="text-lg text-white/90 font-semibold">Trusted Healthcare. Structured Growth. Responsible Innovation.</p>
            </div>
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
    </div>
  );
};

export default AboutUs;
