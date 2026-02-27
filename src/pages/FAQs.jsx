import React, { useState, useEffect } from 'react';
import { Plus, Minus, Search, HelpCircle, MessageCircle } from 'lucide-react';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "How do I order prescription medicine?",
            answer: "Simply upload a photo of your valid prescription through our secure portal or app. Our licensed pharmacists will verify the details, and once approved, you can complete the purchase and choose your delivery time."
        },
        {
            question: "Is delivery available everywhere?",
            answer: "We currently offer same-day and next-day delivery in major metropolitan areas. For other locations, standard shipping typically takes 3-5 business days. You can check your postcode at checkout for specific availability."
        },
        {
            question: "Are your medicines authentic and safe?",
            answer: "Yes, 100%. We source all our medicines and health products directly from certified manufacturers and authorized distributors. Every product undergoes strict quality control checks before being dispatched."
        },
        {
            question: "Can I cancel my order or get a refund?",
            answer: "Orders can be cancelled before they are dispatched for a full refund. Due to health and safety regulations, we cannot accept returns for prescription medication once delivered, but we offer returns for supplements and non-medicinal products within 30 days."
        },
        {
            question: "Do you accept insurance plans?",
            answer: "We are currently integrating with major insurance providers. At this moment, you can pay upfront and download a tax-ready invoice from your account dashboard to claim reimbursement from your insurer."
        }
    ];

    return (
        <div className="bg-white font-sans">
            {/* Hero Section - Full Width Background */}
            <div className="bg-[rgb(6,51,26)] pt-[120px] lg:pt-[140px] pb-12 md:pb-16">
                <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl">
                    <div className="text-center relative">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute top-20 right-0 w-16 md:w-32 h-16 md:h-32 bg-white/10 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute top-40 left-0 w-12 md:w-24 h-12 md:h-24 bg-white/5 rounded-full blur-xl -z-10"></div>
                        
                        <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-lg animate-pulse">
                            <HelpCircle className="w-4 h-4 md:w-5 md:h-5" /> Help Center
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 md:mb-8 tracking-tight leading-tight px-4">
                            Frequently Asked <br/><span className="text-secondary">Questions</span>
                        </h1>
                        <p className="text-white/90 text-base md:text-xl font-semibold leading-relaxed max-w-2xl mx-auto px-4">
                            Need help? Find answers to the most common questions about our services, orders, and health policies.
                        </p>
                        
                        {/* Stats or icons */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-12">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                                <div className="text-xs md:text-sm text-white/70">Questions Answered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                                <div className="text-xs md:text-sm text-white/70">Support Available</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
                                <div className="text-xs md:text-sm text-white/70">Happy Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-7xl py-12 md:py-20 pb-48 md:pb-64">
                {/* Search in FAQ (Visual only) */}
                <div className="relative mb-12 md:mb-20 max-w-2xl mx-auto">
                    <Search className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                    <input 
                        type="text" 
                        placeholder="Type your question..." 
                        className="w-full bg-white border border-gray-100 py-4 md:py-6 pl-12 md:pl-16 pr-6 md:pr-8 rounded-2xl md:rounded-[30px] shadow-xl md:shadow-2xl shadow-gray-200/50 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-sm"
                    />
                </div>

                {/* FAQ List */}
                <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className={`group border-2 transition-all duration-300 rounded-2xl md:rounded-[35px] overflow-hidden ${openIndex === idx ? 'border-primary bg-white shadow-xl md:shadow-2xl shadow-primary/5' : 'border-gray-50 bg-white hover:border-gray-200'}`}
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full px-4 md:px-8 lg:px-12 py-5 md:py-8 flex items-center justify-between text-left gap-4"
                            >
                                <span className={`text-base md:text-xl lg:text-2xl font-bold transition-colors ${openIndex === idx ? 'text-primary' : 'text-[#06331A]'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${openIndex === idx ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                                    {openIndex === idx ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                                </div>
                            </button>
                            
                            <div className={`px-4 md:px-8 lg:px-12 transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[500px] pb-6 md:pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-light border-t border-gray-50 pt-5 md:pt-8">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions? */}
                <div className="mt-16 md:mt-32 bg-secondary/10 rounded-3xl md:rounded-[50px] p-6 md:p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
                    <div className="max-w-md text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#06331A] mb-3 md:mb-4">Still have questions?</h2>
                        <p className="text-gray-500 font-light text-sm md:text-base">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <button className="bg-[#06331A] text-white px-6 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl font-bold flex items-center gap-2 md:gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/20 text-sm md:text-base">
                        <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
