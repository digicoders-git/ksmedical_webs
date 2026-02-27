import React, { useEffect } from 'react';
import { 
    Shield, 
    Lock, 
    Eye, 
    FileText, 
    ChevronRight, 
    Database, 
    Server, 
    UserCheck,
    AlertCircle,
    ArrowRight
} from 'lucide-react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            icon: <Database className="w-6 h-6" />,
            title: "Data We Collect",
            subtitle: "Personal & Clinical Data",
            content: "We collect information you provide directly to us, such as when you create an account, place an order, or subscribe to our newsletter. This includes your name, shipping address, and vital medical prescriptions required for pharmaceutical verification.",
            color: "bg-blue-50 text-blue-600"
        },
        {
            icon: <Server className="w-6 h-6" />,
            title: "How We Store It",
            subtitle: "Military-Grade Encryption",
            content: "Your sensitive files and health records are stored on hyper-secure, encrypted servers. We use 256-bit SSL encryption to ensure that even during transit, your data remains invisible to unauthorized parties.",
            color: "bg-green-50 text-green-600"
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: "Who Can See It",
            subtitle: "Authorized Personnel Only",
            content: "Access to your medical records is strictly limited to our licensed pharmacists and verified medical staff. We never sell your personal data to third-party marketing agencies—your privacy is not a commodity.",
            color: "bg-purple-50 text-purple-600"
        }
    ];

    return (
        <div className="relative bg-white font-sans overflow-hidden">
            {/* Hero Section - Full Width Background */}
            <div className="bg-[rgb(6,51,26)] pt-[120px] lg:pt-[140px] pb-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            <Shield className="w-3.5 h-3.5" />
                            Security First
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                            Your Health, <br/>
                            <span className="text-secondary">Your Privacy.</span>
                        </h1>
                        <p className="text-white/90 text-lg font-semibold leading-relaxed max-w-2xl mx-auto">
                            At PharmaNet, we protect your data as carefully as your health. Learn how we handle your digital footprint.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="pb-48">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto">
                        
                        {/* Features/Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 mt-20">
                        {[
                            { label: 'GDPR Compliant', icon: <CheckCircle className="w-4 h-4" /> },
                            { label: 'SSL Secured', icon: <Lock className="w-4 h-4" /> },
                            { label: '24/7 Monitoring', icon: <Eye className="w-4 h-4" /> },
                            { label: 'No Data Sale', icon: <Shield className="w-4 h-4" /> }
                        ].map(item => (
                            <div key={item.label} className="flex items-center justify-center gap-3 bg-white py-4 px-6 rounded-2xl border border-gray-100 shadow-sm">
                                <span className="text-primary">{item.icon}</span>
                                <span className="text-sm font-bold text-gray-700">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Policy Sections Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {sections.map((section, idx) => (
                            <div key={idx} className="group bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center">
                                <div className={`${section.color} p-6 rounded-[30px] mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    {section.icon}
                                </div>
                                <h4 className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-2">{section.subtitle}</h4>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed font-semibold">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Deep Info Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">How your data flows</h2>
                                <p className="text-gray-600 leading-relaxed font-semibold">
                                    Transparency is at the heart of our operations. We want you to know exactly how your information is used to improve your healthcare experience.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    'Encrypted collection of prescriptions',
                                    'Verification by a licensed clinical pharamcist',
                                    'Secure dispatch handling for home delivery',
                                    'Automated deletion of expired health records'
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 group cursor-default">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">0{i+1}</div>
                                        <span className="text-sm text-gray-700 font-bold">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary/5 p-12 rounded-[50px] border border-primary/10 relative overflow-hidden">
                            <AlertCircle className="absolute -top-10 -right-10 w-48 h-48 text-primary/5" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Important Notice</h3>
                            <p className="text-gray-700 text-sm leading-loose mb-8 relative z-10 font-semibold">
                                This policy is subject to change as we integrate newer security technologies. We will notify all registered users via email 30 days before any major update.
                            </p>
                            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group relative z-10">
                                Learn about Cookie Policy <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                        {/* Footer Contact - Modern & Bold */}
                        <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 p-6 md:p-12 rounded-3xl md:rounded-[40px] shadow-xl">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 md:px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                                <Shield className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                Need Help?
                            </div>
                            <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6 font-bold px-4">Privacy questions? Reach out to our Data Officer</p>
                            <a href="mailto:privacy@pharmanet.com" className="text-xl md:text-3xl font-extrabold text-primary hover:text-secondary transition-colors underline decoration-secondary decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8 break-all">
                                privacy@pharmanet.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Small utility for the inner stat bar
const CheckCircle = ({className}) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

export default PrivacyPolicy;
