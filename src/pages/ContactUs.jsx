import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.subject && formData.message) {
      window.Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for contacting us. We will get back to you soon.',
        confirmButtonColor: '#EA580C',
        confirmButtonText: 'OK'
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      window.Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Please fill all fields.',
        confirmButtonColor: '#EA580C',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="bg-white font-sans">
      <HeroSection
        title="Get in Touch"
        subtitle="We're here to help. Reach out to our expert team anytime."
      />

      {/* Content Section */}
      <div className="py-24 pb-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

              {/* Phone Card */}
              <div className={`group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:border-[#EA580C]/30 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EA580C]/20 to-[#EA580C]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:from-[#EA580C]/30 group-hover:to-[#EA580C]/20 transition-all">
                    <Phone className="w-8 h-8 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#06331A] mb-3">Call Us</h3>
                    <a href="tel:9005606607" className="text-lg text-[#EA580C] hover:text-[#EA580C]/80 transition-colors font-semibold">
                      9005606607
                    </a>
                    <p className="text-sm text-gray-500 mt-2 font-medium">Mon-Sun, 24/7</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className={`group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:border-[#EA580C]/30 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EA580C]/20 to-[#EA580C]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:from-[#EA580C]/30 group-hover:to-[#EA580C]/20 transition-all">
                    <Mail className="w-8 h-8 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#06331A] mb-3">Email</h3>
                    <a href="mailto:care@ks4.in" className="text-lg text-[#EA580C] hover:text-[#EA580C]/80 transition-colors font-semibold">
                      care@ks4.in
                    </a>
                    <p className="text-sm text-gray-500 mt-2 font-medium">Reply within 2 hours</p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className={`group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:border-[#EA580C]/30 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EA580C]/20 to-[#EA580C]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:from-[#EA580C]/30 group-hover:to-[#EA580C]/20 transition-all">
                    <MapPin className="w-8 h-8 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#06331A] mb-3">Location</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      Shop No.18 UGF, Paramount, Cross Gate, Lucknow- 226014
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Form Section */}
            <div className={`bg-gradient-to-br from-white to-gray-50 p-10 lg:p-16 rounded-3xl shadow-2xl border border-gray-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-[#06331A] mb-3">Send us a Message</h2>
                <p className="text-lg text-gray-600 font-medium">We'll respond promptly to your inquiry</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold text-[#06331A] mb-3 block uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 text-base font-medium focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-[#06331A] mb-3 block uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 text-base font-medium focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold text-[#06331A] mb-3 block uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 text-base font-medium focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-[#06331A] mb-3 block uppercase tracking-wide">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 text-base font-medium focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Subject</option>
                      <option value="Medicine Inquiry">Medicine Inquiry</option>
                      <option value="Order Support">Order Support</option>
                      <option value="Consultation Request">Consultation Request</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-bold text-[#06331A] mb-3 block uppercase tracking-wide">Message</label>
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 text-base font-medium focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 transition-all resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#EA580C] to-[#ff7a2f] text-white font-bold px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-lg uppercase tracking-wide group"
                >
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="mt-24 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className={`bg-gradient-to-br from-[#EA580C]/10 to-[#EA580C]/5 p-8 rounded-3xl border-2 border-[#EA580C]/20 hover:border-[#EA580C]/50 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-[#EA580C] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-[#06331A] mb-2">Response Time</h4>
                    <p className="text-base text-gray-700 font-medium">We typically respond within 2 hours during business hours and 24 hours on weekends.</p>
                  </div>
                </div>
              </div>

              <div className={`bg-gradient-to-br from-[#EA580C]/10 to-[#EA580C]/5 p-8 rounded-3xl border-2 border-[#EA580C]/20 hover:border-[#EA580C]/50 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#EA580C] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-[#06331A] mb-2">Confidentiality</h4>
                    <p className="text-base text-gray-700 font-medium">Your information is secure and will never be shared with third parties.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in-up { animation: fadeInUp 0.9s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.9s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.9s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.7s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ContactUs;
