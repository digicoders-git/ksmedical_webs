import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  User,
  ChevronDown,
  ChevronRight,
  Phone,
  Heart
} from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <React.Fragment> 
        <header className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
            {/* Top Bar - Slim & Premium */}
            {/* <div className={`bg-primary text-white text-[11px] hidden md:block tracking-wide transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 py-0' : 'max-h-12 py-1.5'}`}>
                <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center gap-1 opacity-90 hover:opacity-100 cursor-pointer">
                            <Phone className="w-3 h-3" /> 
                            +91 98765 43210
                        </span>
                        <span className="opacity-40">|</span>
                        <span className="opacity-90">Free shipping on orders over ₹999</span>
                    </div>
                    <div className="flex space-x-4 opacity-90">
                        <a href="#" className="hover:text-white hover:underline transition-all">Store Locator</a>
                        <span className="opacity-40">|</span>
                        <a href="#" className="hover:text-white hover:underline transition-all">Track Order</a>
                    </div>
                </div>
            </div> */}

            {/* Main Header Content */}
            <div className="container mx-auto px-4 lg:px-8 flex items-center h-20 transition-all duration-300">
                
                {/* Logo Section - Left aligned */}
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img 
                            src="/KS2-Logo.png" 
                            alt="KS4 PharmaNet" 
                            className="h-12 md:h-14 w-auto object-contain" 
                        />
                    </Link>
                </div>

                {/* Navigation Bar - Desktop Only */}
                <nav className="hidden lg:flex flex-1 justify-center items-center gap-12">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'Blog', path: '/blog' },
                        { name: 'About Us', path: '/about-us' },
                        { name: 'FAQs', path: '/faqs' },
                        { name: 'Privacy Policy', path: '/privacy-policy' },
                    ].map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link 
                                key={item.name} 
                                to={item.path} 
                                className={`text-base font-semibold transition-all relative group py-2 ${
                                    isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                                }`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                }}`}></span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Contact Us Button - Right Side */}
                <div className="hidden lg:flex items-center ml-auto">
                    <Link 
                        to="/contact-us"
                        className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2.5 rounded-lg transition-all hover:scale-105 shadow-md"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center lg:hidden ml-auto">
                    <button 
                        className="text-gray-700 hover:text-primary transition-colors p-1"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div> 
            </div>

            {/* Mobile Menu Drawer (Left Slide) */}
            <div 
                className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${isMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
            >
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
                    onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Drawer Content */}
                <div 
                    className={`absolute left-0 top-0 h-full w-[85%] max-w-[300px] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    {/* Header */}
                    <div className="bg-white p-5 flex justify-between items-center border-b border-gray-200">
                        <img src="/KS2-Logo.png" alt="KS4 PharmaNet" className="h-10 w-auto object-contain" />
                        <button onClick={() => setIsMenuOpen(false)}>
                            <X className="w-6 h-6 text-gray-700 hover:text-primary" />
                        </button>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto py-2">
                        <div className="px-4 py-2">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Navigation</p>
                             {[
                                { name: 'Home', path: '/' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'About Us', path: '/about-us' },
                                { name: 'FAQs', path: '/faqs' },
                                { name: 'Privacy Policy', path: '/privacy-policy' },
                                { name: 'Contact Us', path: '/contact-us' },
                             ].map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link 
                                        key={item.name} 
                                        to={item.path} 
                                        className={`block py-3 text-sm font-medium transition-colors ${
                                            isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                             })}
                        </div>
                    </div>

                    {/* Footer CTA - Removed */}
                </div>
            </div>
        </header>
        </React.Fragment>
    );
};

export default Header;
