import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
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
      {/* Hero Section */}
      <div className="bg-[rgb(6,51,26)] pt-[120px] lg:pt-[140px] pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Get in Touch</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Have questions? Our team is here to help you 24/7 with expert pharmaceutical guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 pb-48">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Contact Info Cards - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
              
              {/* Phone Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-2">Call Us</h3>
                    <a href="tel:9005606607" className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors font-semibold">
                      9005606607
                    </a>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2">Mon-Sun, 24/7</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-2">Email</h3>
                    <a href="mailto:care@ks4.in" className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors font-semibold">
                      care@ks4.in
                    </a>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2">Reply within 2 hours</p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-2">Location</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Shop No.18 UGF, Paramount, Cross Gate, Lucknow- 226014
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Form Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
              <div className="mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#06331A] mb-2">Send us a Message</h2>
                <p className="text-sm sm:text-base text-gray-600">We'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-gray-700 mb-2 block">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-gray-700 mb-2 block">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com" 
                      className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-gray-700 mb-2 block">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX" 
                      className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-gray-700 mb-2 block">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
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
                  <label className="text-xs sm:text-sm font-bold text-gray-700 mb-2 block">Message</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..." 
                    className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-primary/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/10">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#06331A] mb-2">Response Time</h4>
                    <p className="text-sm text-gray-600">We typically respond within 2 hours during business hours and 24 hours on weekends.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-secondary/10">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#06331A] mb-2">Confidentiality</h4>
                    <p className="text-sm text-gray-600">Your information is secure and will never be shared with third parties.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
