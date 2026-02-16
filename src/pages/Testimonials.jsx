import React, { useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const reviews = [
        {
            name: "Alexandra Wright",
            role: "Monthly Subscriber",
            text: "PharmaNet has completely changed how I manage my chronic medication. The automatic refills mean I never have to worry about running out. The service is fast, professional and extremely reliable.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 5
        },
        {
            name: "Michael Henderson",
            role: "Patient",
            text: "The consultations are thorough and the pharmacists are incredibly knowledgeable. I felt heard and cared for. Highly recommended for anyone looking for personalized healthcare service.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 5
        },
        {
            name: "David Smith",
            role: "Family Caregiver",
            text: "Managing prescriptions for my elderly parents was a nightmare before PharmaNet. Now everything is organized, clear, and delivered right to their doorstep. Truly a life-saver for our family.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 5
        },
        {
            name: "Sophia Martinez",
            role: "Fitness Enthusiast",
            text: "I love their range of premium supplements. The quality is top-notch and the detailed information about each product helps me make informed decisions for my wellness journey.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 5
        }
    ];

    return (
        <div className="bg-[#fcfdfc] pt-[120px] lg:pt-[200px] pb-48 font-sans overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                {/* Header section */}
                <div className="text-center mb-32 relative">
                    <div className="flex justify-center mb-10">
                         <div className="flex bg-secondary/10 px-6 py-3 rounded-full gap-2">
                            {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-secondary text-secondary" />)}
                         </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#06331A] mb-8 tracking-tight">
                        Trusted by <span className="text-secondary">Thousands</span>
                    </h1>
                    <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Don't just take our word for it. Explore the stories of real patients who have transformed their health with PharmaNet.
                    </p>
                    
                    {/* Decorative Background Icon */}
                    <Quote className="absolute -top-10 -left-10 w-48 h-48 text-[#06331A]/5 -rotate-12 -z-10" />
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-12 rounded-[50px] shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center relative group hover:scale-[1.02] transition-all duration-500">
                             <div className="absolute top-12 right-12">
                                <Quote className="w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                             </div>
                             
                             <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-primary/10 ring-8 ring-primary/5">
                                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                             </div>
                             
                             <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#EA580C] text-[#EA580C]" />
                                ))}
                             </div>
                             
                             <p className="text-gray-500 text-lg leading-relaxed font-light mb-10 italic">
                                "{review.text}"
                             </p>
                             
                             <div>
                                <h4 className="text-xl font-extrabold text-[#06331A] mb-1">{review.name}</h4>
                                <p className="text-primary font-bold text-xs uppercase tracking-widest">{review.role}</p>
                             </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-20 border-y border-gray-100">
                    {[
                        { label: "Active Patients", value: "50,000+" },
                        { label: "Orders Delivered", value: "1M+" },
                        { label: "Customer Rating", value: "4.9/5" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <h2 className="text-5xl font-extrabold text-[#06331A] mb-3">{stat.value}</h2>
                            <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-40 bg-[#06331A] rounded-[60px] p-20 text-center relative overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-10" />
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to experience <br/> the difference?</h2>
                        <button className="bg-secondary text-[#06331A] px-12 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-secondary/20">
                            Create Your Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
