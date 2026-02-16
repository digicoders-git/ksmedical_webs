import React from 'react';
import { Twitter, Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#06331A] text-white pt-64 pb-12">
      
      {/* Overlapping CTA Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-6 z-10">
        <div className="bg-white rounded-none overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-64">
          {/* Left: Orange CTA */}
          <div className="bg-[#EA580C] p-8 md:p-10 flex-1 flex flex-col justify-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Join Our Family!</h2>
            <p className="text-white/90 text-sm mb-6 leading-relaxed font-light max-w-md">
              Be the first to know about our latest products and offers! As a welcome gift, we’ll give you a 30% off coupon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your e-mail" 
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-2 text-sm outline-none focus:bg-white/20 transition-all flex-grow"
              />
              <button className="bg-white text-[#EA580C] font-bold px-8 py-2 text-sm hover:bg-gray-100 transition-colors uppercase tracking-wider">
                Subscribe
              </button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="hidden md:block w-1/3 lg:w-[35%] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Join our community" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 border-b border-white/10 pb-16">
          
          {/* Branding & Mission */}
          <div className="lg:col-span-2">
            <div className="mb-8 bg-white rounded-lg w-[150px] bg-transparent">
              <Link to="/">
                <img 
                    src="/KS2-Logo.png" 
                    alt="KS4 PharmaNet" 
                    className="h-12 w-auto p-1 object-contain  invert" 
                />
              </Link>
            </div>
            <p className="text-white/80 text-base mb-8 font-light leading-relaxed">
              Everything you need for better health. At PharmaNet, we are committed to providing premium quality healthcare products.
            </p>
            
            <div className="space-y-5">
               <div className="flex items-start gap-4 text-white/70 group">
                  <MapPin className="w-5 h-5 text-[#EA580C] shrink-0" />
                  <span className="font-light text-sm">2118 Thornridge Cir. Syracuse,<br/>Connecticut 35624</span>
               </div>
               <div className="flex items-center gap-4 text-white/70 group">
                  <Phone className="w-5 h-5 text-[#EA580C] shrink-0" />
                  <span className="font-light text-sm">(225) 555-0118</span>
               </div>
            </div>
          </div>

          {/* Catalogue Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Catalogue</h4>
            <ul className="space-y-4 text-white/70 font-light">
               <li><Link to="/category/medicines" className="hover:text-white transition-colors">Medicines</Link></li>
               <li><Link to="/category/supplements" className="hover:text-white transition-colors">Supplements</Link></li>
               <li><Link to="/category/essential-oils" className="hover:text-white transition-colors">Essential Oils</Link></li>
               <li><Link to="/category/powders" className="hover:text-white transition-colors">Powders</Link></li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">About</h4>
            <ul className="space-y-4 text-white/70 font-light">
               <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
               <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
               <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
               <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xl font-bold mb-8">Customer Care</h4>
            <ul className="space-y-4 text-white/70 font-light">
               <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact us</Link></li>
               <li><Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
               <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-[#EA580C] transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-white hover:text-[#EA580C] transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-white hover:text-[#EA580C] transition-colors"><Facebook className="w-6 h-6" /></a>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm font-light">
            © {new Date().getFullYear()} PharmaNet 128. All Rights Reserved. <Link to="/privacy-policy" className="underline">Privacy Policy</Link>
          </p>

          {/* Template Info */}
          <div className="text-white/60 text-sm font-light hidden lg:block">
            Designed & Develop by  <span className="text-orange-700 font-semibold underline"><a href="https://digicoders.in/"> Team Digicoders</a></span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
