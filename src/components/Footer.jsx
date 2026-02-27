import React from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#06331A] text-white pt-64 pb-12">
      {/* Overlapping CTA Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-6 z-10">
        <div className="bg-white rounded-none overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-64">
          {/* Left: Orange CTA */}
          <div className="bg-[#EA580C] p-8 md:p-10 flex-1 flex flex-col justify-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Join Our Family!
            </h2>
            <p className="text-white/90 text-sm mb-6 leading-relaxed font-light max-w-md">
              Be the first to know about our latest products and offers! As a
              welcome gift, we’ll give you a 30% off coupon.
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
          <div className="hidden md:block w-1/3 lg:w-[35%] overflow-hidden bg-[#ff6b35] flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full p-8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke="white" strokeWidth="2">
                {/* Medical Cross */}
                <rect
                  x="180"
                  y="120"
                  width="40"
                  height="160"
                  fill="white"
                  opacity="0.9"
                />
                <rect
                  x="120"
                  y="180"
                  width="160"
                  height="40"
                  fill="white"
                  opacity="0.9"
                />
                {/* Heart */}
                <path
                  d="M200 280 C150 240, 100 260, 100 210 C100 180, 120 160, 150 160 C170 160, 190 170, 200 190 C210 170, 230 160, 250 160 C280 160, 300 180, 300 210 C300 260, 250 240, 200 280 Z"
                  fill="white"
                  opacity="0.8"
                />
                {/* Pills */}
                <ellipse
                  cx="280"
                  cy="140"
                  rx="15"
                  ry="25"
                  fill="white"
                  opacity="0.7"
                  transform="rotate(45 280 140)"
                />
                <ellipse
                  cx="120"
                  cy="140"
                  rx="15"
                  ry="25"
                  fill="white"
                  opacity="0.7"
                  transform="rotate(-45 120 140)"
                />
                {/* Circles decoration */}
                <circle cx="320" cy="200" r="8" fill="white" opacity="0.6" />
                <circle cx="80" cy="200" r="8" fill="white" opacity="0.6" />
                <circle cx="200" cy="80" r="10" fill="white" opacity="0.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 border-b border-white/10 pb-16">
          {/* Branding & Mission */}
          <div className="lg:col-span-2">
            <div className="mb-8 rounded-lg w-[150px] bg-transparent">
              <Link to="/">
                <img
                  src="/KS2-Logo.png"
                  alt="KS4 PharmaNet"
                  className="h-20 w-auto p-1 object-contain"
                />
              </Link>
            </div>
            <p className="text-white/80 text-base mb-8 font-light leading-relaxed">
              Everything you need for better health. At PharmaNet, we are
              committed to providing premium quality healthcare products.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 text-white/70 group">
                <MapPin className="w-5 h-5 text-[#EA580C] shrink-0" />
                <span className="font-light text-sm">
                  2118 Thornridge Cir. Syracuse, CT 35624
                </span>
              </div>
              <div className="flex items-center gap-4 text-white/70 group">
                <Phone className="w-5 h-5 text-[#EA580C] shrink-0" />
                <span className="font-light text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 group">
                <Mail className="w-5 h-5 text-[#EA580C] shrink-0" />
                <span className="font-light text-sm">care@pharmanet.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/70 font-light">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8">Contact Info</h4>
            <ul className="space-y-4 text-white/70 font-light mb-8">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+919876543210" 
                className="bg-white/10 hover:bg-[#EA580C] text-white p-3 rounded-lg transition-all hover:scale-110"
                title="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-[#25D366] text-white p-3 rounded-lg transition-all hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="mailto:care@pharmanet.com" 
                className="bg-white/10 hover:bg-[#EA580C] text-white p-3 rounded-lg transition-all hover:scale-110"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://maps.google.com/?q=2118+Thornridge+Cir+Syracuse+CT+35624" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-[#EA580C] text-white p-3 rounded-lg transition-all hover:scale-110"
                title="Location"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-white/60 text-sm font-light">
            © {new Date().getFullYear()} KS4 All Rights Reserved.{" "}
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>

          {/* Template Info */}
          <div className="text-white/60 text-sm font-light">
            Designed & Developed by{" "}
            <span className="text-[#EA580C] font-semibold hover:text-white transition-colors">
              <a href="https://digicoders.in/" target="_blank" rel="noopener noreferrer">Team Digicoders</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
