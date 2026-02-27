import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white font-sans">
      {/* Hero Section - Full Width Background */}
      <div className="bg-[rgb(6,51,26)] pt-[120px] lg:pt-[140px] pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Get in Touch</h1>
              <p className="text-lg text-white/90 leading-relaxed font-semibold">
                  Have questions about your prescription or need health advice? Our licensed pharmaceutical experts are here to help you 24/7.
              </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-20 pb-48">
        <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                    <Phone className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-sm text-gray-600">+91 98765 43210</p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">Mon-Sun, 24/7</p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="bg-secondary/10 p-4 rounded-2xl text-secondary">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
                    <p className="text-sm text-gray-600">care@pharmanet.com</p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">Reply within 2 hours</p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                    <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-sm text-gray-600">2118 Thornridge Cir. Syracuse, CT 35624</p>
                </div>
            </div>

            <div className="bg-[#06331A] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <Clock className="w-10 h-10 text-secondary mb-6" />
                    <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
                    <p className="text-white/70 text-sm font-light">Available 365 days a year for urgent medicine delivery and pharmacist consultation.</p>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-10">
                    <div className="bg-primary w-2 h-10 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                </div>

                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="care@example.com" 
                                className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                        <select className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                            <option>Medicine Inquiry</option>
                            <option>Order Support</option>
                            <option>Consultation Request</option>
                            <option>Feedback</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                        <textarea 
                            rows="5" 
                            placeholder="Tell us how we can help you..." 
                            className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                        ></textarea>
                    </div>

                    <button 
                        type="button" 
                        className="bg-primary text-white font-bold px-10 py-5 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:bg-primary-dark transition-all flex items-center gap-3"
                    >
                        <Send className="w-5 h-5" />
                        Send Message
                    </button>
                </form>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
