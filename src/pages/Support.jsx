import React, { useEffect } from 'react';
import { Headphones, Mail, MessageSquare, Phone, Clock, ArrowRight, Zap } from 'lucide-react';

const Support = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const channels = [
        {
            title: "Live Chat",
            desc: "Average response time: 2 mins",
            icon: MessageSquare,
            btn: "Start Chat",
            theme: "bg-primary"
        },
        {
            title: "Email Support",
            desc: "Average response time: 2 hours",
            icon: Mail,
            btn: "Send Email",
            theme: "bg-[#06331A]"
        },
        {
            title: "Call Center",
            desc: "Available Mon-Sat, 9am-6pm",
            icon: Phone,
            btn: "Call Now",
            theme: "bg-secondary text-[#06331A]"
        }
    ];

    return (
        <div className="bg-[#fcfdfc] pt-[120px] lg:pt-[200px] pb-48 font-sans">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                {/* Hero section */}
                <div className="text-center mb-24">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10">
                        <Headphones className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#06331A] mb-8 tracking-tight">
                        Here to <span className="text-secondary">Support</span> You
                    </h1>
                    <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Our dedicated team of health experts and support specialists are always ready to assist you with any inquiries or issues.
                    </p>
                </div>

                {/* Support Channels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
                    {channels.map((channel, idx) => (
                        <div key={idx} className="bg-white p-12 rounded-[50px] shadow-2xl shadow-gray-200/50 border border-gray-50 flex flex-col items-center text-center hover:scale-[1.05] transition-all duration-500">
                             <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl ${channel.title === 'Call Center' ? 'bg-secondary' : 'bg-[#06331A]'}`}>
                                <channel.icon className={`w-8 h-8 ${channel.title === 'Call Center' ? 'text-[#06331A]' : 'text-white'}`} />
                             </div>
                             <h3 className="text-2xl font-bold text-[#06331A] mb-3">{channel.title}</h3>
                             <p className="text-gray-400 font-light text-sm mb-10 leading-relaxed">{channel.desc}</p>
                             <button className={`w-full py-4 rounded-2xl font-bold transition-all ${channel.title === 'Call Center' ? 'bg-[#06331A] text-white hover:bg-black' : 'bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/20'}`}>
                                {channel.btn}
                             </button>
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="flex gap-8 group">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center shrink-0 border border-gray-50 group-hover:bg-primary transition-colors">
                                <Clock className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#06331A] mb-3">24/7 Availability</h4>
                                <p className="text-gray-400 font-light leading-relaxed">Our digital support system and automated assistants are available around the clock to help you manage your profile.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 group">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center shrink-0 border border-gray-50 group-hover:bg-primary transition-colors">
                                <Zap className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#06331A] mb-3">Instant Resolutions</h4>
                                <p className="text-gray-400 font-light leading-relaxed">We prioritize efficiency. Over 80% of our support tickets are resolved within the first hour of submission.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-[60px] overflow-hidden group">
                        <img 
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Support representative" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-[#06331A]/40 group-hover:bg-transparent transition-all duration-700"></div>
                        <div className="absolute top-12 left-12 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                             <h4 className="text-white text-3xl font-extrabold mb-2">100+</h4>
                             <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Experts Online</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Link Section */}
                <div className="mt-40 text-center">
                    <h3 className="text-2xl font-bold text-[#06331A] mb-8">Looking for immediate answers?</h3>
                    <button className="flex items-center gap-3 text-primary font-extrabold text-xl mx-auto hover:gap-6 transition-all group">
                        Browse Help Center <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Support;
