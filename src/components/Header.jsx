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

                {/* Navigation Bar - Centered */}
                <nav className="hidden lg:flex flex-1 justify-center items-center gap-12">
                    {[
                        { name: 'Blog', path: '/blog' },
                        { name: 'About Us', path: '/about-us' },
                        { name: 'Privacy Policy', path: '/privacy-policy' },
                        { name: 'Contact Us', path: '/contact-us' },
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

                {/* Mobile Menu Toggle / Spacer for desktop to keep center true */}
                <div className="flex items-center lg:hidden">
                    <button 
                        className="text-gray-700 hover:text-primary transition-colors p-1"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                {/* Desktop Spacer to maintain perfect center of nav */}
                <div className="hidden lg:block w-[180px]"></div> 
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
                    <Link 
                        to="/login" 
                        className="bg-primary p-5 flex justify-between items-center text-white"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="flex items-center gap-3">
                             <div className="p-2 bg-white/20 rounded-full">
                                <User className="w-5 h-5 text-white" />
                             </div>
                             <div>
                                <p className="text-xs opacity-80">Welcome Guest</p>
                                <p className="font-bold text-sm">Login / Register</p>
                             </div>
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsMenuOpen(false);
                        }}>
                            <X className="w-6 h-6 opacity-80 hover:opacity-100" />
                        </button>
                    </Link>
                    
                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto py-2">
                        <div className="px-4 py-2">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Shop By Category</p>
                            {[
                                { name: 'Medicines', id: 'medicines' },
                                { name: 'Medical Equipment', id: 'medical-equipment' },
                                { name: 'Supplements', id: 'supplements' },
                                { name: 'Personal Care', id: 'personal-care' },
                                { name: 'Ayurveda', id: 'ayurveda' },
                                { name: 'Baby Care', id: 'baby-care' }
                            ].map((item) => (
                                <Link 
                                    key={item.id} 
                                    to={`/category/${item.id}`} 
                                    className="flex items-center justify-between py-3 text-gray-700 border-b border-gray-50 last:border-0 hover:text-primary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="font-medium text-sm">{item.name}</span>
                                    <ChevronRight className="w-4 h-4 text-gray-300" />
                                </Link>
                            ))}
                        </div>

                        <div className="h-2 bg-gray-50"></div>

                        <div className="px-4 py-2">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Company info</p>
                             {[
                                { name: 'Privacy Policy', path: '/privacy-policy' },
                                { name: 'About Us', path: '/about-us' },
                                { name: 'Our Team', path: '/team' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Contact Us', path: '/contact-us' },
                                { name: 'FAQs', path: '/faqs' },
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

                    {/* Footer CTA */}
                    <div className="p-4 border-t border-gray-100">
                        <button className="w-full bg-secondary text-white font-bold py-3 rounded-lg shadow-lg hover:bg-secondary-dark transition-all">
                            Need Help? Call Us
                        </button>
                    </div>
                </div>
            </div>
        </header>
        </React.Fragment>
    );
};

export default Header;
