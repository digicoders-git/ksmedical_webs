import React, { useEffect } from 'react';
import { RefreshCcw, ShieldCheck, Clock, Truck, ArrowRight, CornerUpLeft } from 'lucide-react';

const ReturnsExchanges = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        {
            title: "Initiate Return",
            desc: "Go to your 'Order History' and select 'Return Request' for the items you wish to send back.",
            icon: CornerUpLeft
        },
        {
            title: "Pack the items",
            desc: "Place the products in their original packaging with all labels and seals intact.",
            icon: RefreshCcw
        },
        {
            title: "Hand over",
            desc: "Our delivery partner will collect the package from your doorstep at a scheduled time.",
            icon: Truck
        },
        {
            title: "Refund Processed",
            desc: "Once specialized verification is complete, your refund will be credited back in 3-5 days.",
            icon: ShieldCheck
        }
    ];

    return (
        <div className="bg-[#fcfdfc] pt-[120px] lg:pt-[200px] pb-48 font-sans">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                {/* Hero section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                            Trust & Flexibility
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-[#06331A] mb-8 tracking-tight leading-tight">
                            Returns <span className="text-secondary">&</span> <br/> Exchanges
                        </h1>
                        <p className="text-gray-400 text-xl font-light mb-12 leading-relaxed">
                            We want you to be completely satisfied with your purchase. Our transparent return policy ensures a worry-free shopping experience for all health products.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-[#06331A] text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/10">
                                My Order History
                            </button>
                            <button className="border-2 border-gray-100 text-[#06331A] px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                                Track Order
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-primary rounded-[60px] p-12 lg:p-20 text-white relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                             <Clock className="w-16 h-16 text-secondary mb-8" />
                             <h3 className="text-3xl font-bold mb-4">30-Day Window</h3>
                             <p className="text-white/70 text-lg leading-relaxed font-light mb-10">
                                Most of our wellness products, supplements and devices can be returned within 30 days of delivery.
                             </p>
                             <div className="bg-white/10 p-6 rounded-3xl border border-white/20">
                                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-secondary">Exceptions</p>
                                <p className="text-sm font-light text-white/80">Prescription medications cannot be returned once delivered for health and safety reasons.</p>
                             </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-full -z-10 animate-pulse"></div>
                    </div>
                </div>

                {/* Process Steps */}
                <div className="mb-40">
                    <h2 className="text-4xl font-extrabold text-[#06331A] mb-20 text-center">How it works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative">
                                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-50 flex items-center justify-center mb-8">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="text-xl font-bold text-[#06331A] mb-4">0{idx+1}. {step.title}</h4>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">{step.desc}</p>
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 -right-6 w-12 h-[2px] bg-gray-100"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Link Section */}
                <div className="bg-gray-50 rounded-[50px] p-12 md:p-20 text-center border border-gray-100">
                    <h2 className="text-3xl font-extrabold text-[#06331A] mb-6">Have more questions?</h2>
                    <p className="text-gray-500 mb-10 max-w-xl mx-auto">Visit our Help Center for detailed information about specific product categories and regional policies.</p>
                    <button className="flex items-center gap-3 text-primary font-bold text-lg mx-auto hover:gap-5 transition-all">
                        Go to FAQ Center <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReturnsExchanges;
