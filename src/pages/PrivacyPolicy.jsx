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
        <div className="relative bg-[#fcfdfc] pt-[120px] lg:pt-[200px] pb-48 font-sans overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Hero Section - Extremely Modern */}
                    <div className="relative mb-20">
                        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 md:p-16 rounded-[40px] shadow-2xl shadow-primary/5 border border-gray-100 overflow-hidden">
                            <div className="flex-1 space-y-6 relative z-10">
                                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                                    <Shield className="w-3.5 h-3.5" />
                                    Security First
                                </div>
                                <h1 className="text-4xl md:text-6xl font-extrabold text-[#06331A] leading-[1.1]">
                                    Your Health, <br/>
                                    <span className="text-secondary">Your Privacy.</span>
                                </h1>
                                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                                    At PharmaNet, we protect your data as carefully as your health. Learn how we handle your digital footprint.
                                </p>
                                <div className="flex items-center gap-4 pt-4">
                                    <div className="flex -space-x-3">
                                        {[1,2,3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-400 font-medium">Trusted by 50k+ Patients</p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 relative">
                                <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/5 rounded-[60px] rotate-12 absolute -z-10 group-hover:rotate-6 transition-transform"></div>
                                <div className="bg-white p-8 rounded-[50px] shadow-xl border border-gray-100 relative z-20 overflow-hidden transform group-hover:-translate-y-2 transition-transform">
                                    <FileText className="w-32 h-32 md:w-48 md:h-48 text-primary/20" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <Lock className="w-16 h-16 text-primary animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features/Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
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
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
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
                                <p className="text-gray-500 leading-relaxed">
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
                                        <span className="text-sm text-gray-600 font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary/5 p-12 rounded-[50px] border border-primary/10 relative overflow-hidden">
                            <AlertCircle className="absolute -top-10 -right-10 w-48 h-48 text-primary/5" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Important Notice</h3>
                            <p className="text-gray-600 text-sm leading-loose mb-8 relative z-10">
                                This policy is subject to change as we integrate newer security technologies. We will notify all registered users via email 30 days before any major update.
                            </p>
                            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group relative z-10">
                                Learn about Cookie Policy <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Footer Contact - Simple & Clean */}
                    <div className="text-center bg-white border border-gray-100 p-12 rounded-[40px] shadow-sm">
                        <p className="text-gray-400 text-sm mb-4">Privacy questions? Reach out to our Data Officer</p>
                        <a href="mailto:privacy@pharmanet.com" className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors underline decoration-secondary decoration-4 underline-offset-8">
                            privacy@pharmanet.com
                        </a>
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
