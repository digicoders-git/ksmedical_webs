import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-50 pt-[120px] lg:pt-[200px] pb-48 min-h-screen">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-[1100px] mx-auto bg-white rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col lg:flex-row overflow-hidden">
                    
                    {/* Left Side: Visual/Branding Section */}
                    <div className="hidden lg:flex lg:w-1/2 bg-[#06331A] relative overflow-hidden items-center justify-center p-12">
                        {/* Decorative Elements */}
                        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-[-5%] left-[-5%] w-64 h-64 bg-secondary opacity-20 rounded-full blur-2xl"></div>
                        
                        <div className="relative z-10 text-center">
                            <div className="mb-12 inline-block bg-white/10 p-6 rounded-[30px] backdrop-blur-md border border-white/10 shadow-2xl">
                                <img src="/KS2-Logo.png" alt="Logo" className="h-12 w-auto  invert" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-white mb-6 leading-tight">
                                Join the <br/> <span className="text-secondary">Health Revolution</span>
                            </h2>
                            <p className="text-white/60 text-sm font-light mb-10 leading-relaxed max-w-[280px] mx-auto">
                                Experience the future of digital pharmacy with secure access to your health profile.
                            </p>
                            
                            {/* Feature Highlights */}
                            <div className="grid grid-cols-2 gap-4 text-left">
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <ShieldCheck className="text-secondary mb-2 w-5 h-5" />
                                    <p className="text-white font-bold text-[10px] uppercase tracking-wider">Secure Data</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <ArrowRight className="text-secondary mb-2 w-5 h-5" />
                                    <p className="text-white font-bold text-[10px] uppercase tracking-wider">Fast Access</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form Section */}
                    <div className="flex-1 p-8 md:p-16">
                        <div className="mb-8 text-center lg:text-left">
                            <h2 className="text-3xl font-extrabold text-[#06331A] mb-2">Create Account</h2>
                            <p className="text-gray-400 text-sm font-medium">Start your journey to better health</p>
                        </div>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <User className="w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                        </div>
                                        <input 
                                            type="text" 
                                            placeholder="John Doe" 
                                            className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl py-3.5 pl-12 pr-4 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none text-sm font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <Phone className="w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                        </div>
                                        <input 
                                            type="tel" 
                                            placeholder="+91 98765 43210" 
                                            className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl py-3.5 pl-12 pr-4 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none text-sm font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Mail className="w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input 
                                        type="email" 
                                        placeholder="john@example.com" 
                                        className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl py-3.5 pl-12 pr-4 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none text-sm font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em] ml-1">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Lock className="w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input 
                                        type="password" 
                                        placeholder="Minimum 8 characters" 
                                        className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl py-3.5 pl-12 pr-4 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none text-sm font-medium"
                                    />
                                </div>
                            </div>

                            <div className="py-2">
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <input type="checkbox" className="w-5 h-5 rounded border-2 border-gray-200 text-primary focus:ring-primary cursor-pointer mt-0.5" />
                                    <span className="text-xs text-gray-500 leading-relaxed font-medium">
                                        I agree to the <Link to="/privacy-policy" className="text-primary font-bold">Privacy Policy</Link>.
                                    </span>
                                </label>
                            </div>

                            <button className="w-full bg-[#06331A] text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transform transition-all active:scale-95 flex items-center justify-center gap-3">
                                Create Account
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-500 font-medium font-sans">
                                Already have an account?  
                                <Link to="/login" className="text-primary font-bold hover:underline ml-2">Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
