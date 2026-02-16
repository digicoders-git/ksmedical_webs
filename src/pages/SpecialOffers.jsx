import React, { useEffect, useState } from 'react';
import { Tag, Clock, ArrowRight, Percent, Zap, Gift, Copy, CheckCircle } from 'lucide-react';

const SpecialOffers = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const deals = [
        {
            title: "First Order Special",
            discount: "30% OFF",
            desc: "Get 30% off on your very first order at PharmaNet. No minimum purchase required.",
            code: "WELCOME30",
            bg: "bg-primary",
            icon: Gift
        },
        {
            title: "Winter Immunity Bundle",
            discount: "SAVE ₹500",
            desc: "Buy any 3 immunity boosters and get ₹500 flat discount on your total bill.",
            code: "HEALTH500",
            bg: "bg-[#06331A]",
            icon: Zap
        },
        {
            title: "Senior Citizen Discount",
            discount: "15% OFF",
            desc: "Extra 15% discount for our senior patients on all chronic medication orders.",
            code: "SENIOR15",
            bg: "bg-secondary",
            icon: Percent,
            darkText: true
        }
    ];

    return (
        <div className="bg-[#fcfdfc] pt-[120px] lg:pt-[200px] pb-48 font-sans overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                
                {/* Hero Section */}
                <div className="relative rounded-[60px] bg-primary p-12 lg:p-24 overflow-hidden mb-24 shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-8">
                                <Clock className="w-4 h-4" /> Limited Time Offers
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                                Big Savings on <br/> Your <span className="text-secondary">Health</span>
                            </h1>
                            <p className="text-white/80 text-xl font-light mb-12 max-w-lg leading-relaxed">
                                Don't miss out on our exclusive seasonal deals. Premium healthcare products at prices you'll love.
                            </p>
                            <button className="bg-white text-[#06331A] px-12 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl flex items-center gap-3 mx-auto lg:mx-0">
                                Explore Deals <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div className="hidden lg:block relative group">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-10 transform group-hover:rotate-2 transition-transform duration-500">
                                <h3 className="text-white text-2xl font-bold mb-6">Flash Sale ending in:</h3>
                                <div className="flex gap-4">
                                    {[
                                        { label: 'Days', val: '02' },
                                        { label: 'Hrs', val: '14' },
                                        { label: 'Mins', val: '45' },
                                        { label: 'Secs', val: '12' }
                                    ].map((t, i) => (
                                        <div key={i} className="flex-1 bg-white rounded-2xl p-4 text-center">
                                            <p className="text-[#06331A] text-3xl font-black">{t.val}</p>
                                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{t.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Coupons Grid */}
                <h2 className="text-4xl font-extrabold text-[#06331A] mb-16 text-center lg:text-left">Active Coupons</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
                    {deals.map((deal, idx) => (
                        <div key={idx} className={`${deal.bg} rounded-[40px] p-10 relative overflow-hidden group hover:scale-[1.05] transition-all duration-500 shadow-xl`}>
                            <div className="absolute top-[-5%] right-[-5%] w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                            
                            <deal.icon className={`w-12 h-12 ${deal.darkText ? 'text-[#06331A]' : 'text-white'} mb-8`} />
                            
                            <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${deal.darkText ? 'text-[#06331A]/60' : 'text-white/60'}`}>
                                {deal.title}
                            </p>
                            <h3 className={`text-4xl font-black mb-6 ${deal.darkText ? 'text-[#06331A]' : 'text-white'}`}>
                                {deal.discount}
                            </h3>
                            <p className={`text-sm font-light leading-relaxed mb-10 ${deal.darkText ? 'text-[#06331A]/80' : 'text-white/80'}`}>
                                {deal.desc}
                            </p>
                            
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between border border-white/20">
                                <span className={`font-black tracking-widest ${deal.darkText ? 'text-[#06331A]' : 'text-white'}`}>{deal.code}</span>
                                <button 
                                    onClick={() => copyToClipboard(deal.code)}
                                    className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                                >
                                    {copiedCode === deal.code ? <CheckCircle className="w-5 h-5 text-secondary" /> : <Copy className={`w-5 h-5 ${deal.darkText ? 'text-[#06331A]' : 'text-white'}`} />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Category-wise Sales Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="bg-white rounded-[50px] p-12 shadow-2xl shadow-gray-200/50 border border-gray-50 group cursor-pointer overflow-hidden relative">
                         <div className="relative z-10">
                            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Ayurveda Fest</h4>
                            <h3 className="text-4xl font-extrabold text-[#06331A] mb-8 leading-tight">Up to 40% OFF on <br/> Herbal Products</h3>
                            <button className="flex items-center gap-3 text-[#06331A] font-black group-hover:gap-5 transition-all">
                                Shop Now <ArrowRight className="w-5 h-5" />
                            </button>
                         </div>
                         <div className="absolute top-0 right-0 w-1/2 h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                alt="Ayurveda" 
                                className="w-full h-full object-cover grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                         </div>
                    </div>

                    <div className="bg-[#f2f6f3] rounded-[50px] p-12 border border-primary/10 group cursor-pointer overflow-hidden relative">
                         <div className="relative z-10">
                            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Winter Care</h4>
                            <h3 className="text-4xl font-extrabold text-[#06331A] mb-8 leading-tight">Buy 2 Get 1 FREE <br/> on Skin Protection</h3>
                            <button className="flex items-center gap-3 text-[#06331A] font-black group-hover:gap-5 transition-all">
                                Claim Offer <ArrowRight className="w-5 h-5" />
                            </button>
                         </div>
                         <div className="absolute top-0 right-0 w-1/2 h-full text-primary rotate-12 translate-x-12 translate-y-6 opacity-10 group-hover:opacity-100 transition-all duration-700">
                             <Tag className="w-full h-full" />
                         </div>
                    </div>
                </div>

                {/* Newsletter-ish Section */}
                <div className="mt-40 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-[#06331A] mb-6">Never miss a deal again!</h2>
                    <p className="text-gray-400 font-light mb-10">Join our newsletter to get direct alerts when we launch new seasonal sales and exclusive coupon codes.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="email" 
                            placeholder="your@email.com" 
                            className="bg-white border-2 border-gray-100 rounded-2xl px-8 py-5 flex-grow focus:border-primary outline-none transition-all shadow-xl shadow-gray-100"
                        />
                        <button className="bg-[#06331A] text-white px-10 py-5 rounded-2xl font-black hover:bg-black transition-all shadow-xl shadow-primary/10">
                            Join Alerts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;
