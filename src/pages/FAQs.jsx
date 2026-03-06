import React, { useState, useEffect } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
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
            <style>{`
                @keyframes slideDown { from { opacity: 0; max-height: 0; } to { opacity: 1; max-height: 500px; } }
                @keyframes slideUp { from { opacity: 1; max-height: 500px; } to { opacity: 0; max-height: 0; } }
                .animate-slide-down { animation: slideDown 0.4s ease-out forwards; }
                .animate-slide-up { animation: slideUp 0.4s ease-out forwards; }
            `}</style>

            <HeroSection
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our services, orders, and health policies."
            />

            {/* Content Section */}
            <div className="py-16 lg:py-24 pb-32 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`group border-2 transition-all duration-300 rounded-2xl overflow-hidden ${openIndex === idx
                                    ? 'border-[#EA580C] bg-white shadow-lg'
                                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left gap-4 hover:bg-gray-50/50 transition-colors"
                                >
                                    <span className={`text-base sm:text-lg font-bold transition-colors ${openIndex === idx ? 'text-[#EA580C]' : 'text-[#06331A]'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${openIndex === idx
                                        ? 'bg-[#EA580C] text-white'
                                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                        }`}>
                                        {openIndex === idx ? (
                                            <Minus className="w-5 h-5" />
                                        ) : (
                                            <Plus className="w-5 h-5" />
                                        )}
                                    </div>
                                </button>

                                {openIndex === idx && (
                                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t-2 border-gray-100 animate-slide-down">
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium pt-4">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 mb-20 sm:mt-20 bg-gradient-to-r from-[#EA580C]/10 to-[#EA580C]/5 rounded-3xl p-8 sm:p-12 border-2 border-[#EA580C]/20">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-[#06331A] mb-2">Still have questions?</h3>
                                <p className="text-gray-600 font-medium">Our support team is here to help you 24/7</p>
                            </div>
                            <a href="mailto:care@ks4.in" className="bg-[#EA580C] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#EA580C]/90 transition-all shadow-lg hover:shadow-xl whitespace-nowrap">
                                <MessageCircle className="w-5 h-5" />
                                Contact Us
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQs;
