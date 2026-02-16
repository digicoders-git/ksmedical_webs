import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-50 pt-[120px] lg:pt-[200px] pb-48 min-h-screen">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-[1000px] mx-auto bg-white rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col lg:flex-row overflow-hidden">
                    
                    {/* Left Side: Visual/Branding Section */}
                    <div className="hidden lg:flex lg:w-1/2 bg-[#06331A] relative overflow-hidden items-center justify-center p-12">
                        {/* Decorative Elements */}
                        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-[-5%] left-[-5%] w-64 h-64 bg-secondary opacity-20 rounded-full blur-2xl"></div>
                        
                        <div className="relative z-10 text-center">
                            <div className="mb-12 inline-block bg-white/10 p-6 rounded-[30px] backdrop-blur-md border border-white/10 shadow-2xl">
                                <img src="/KS2-Logo.png" alt="Logo" className="h-12 w-auto brightness-2 invert" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-white mb-6 leading-tight">
                                Welcome Back <br/> to <span className="text-secondary">PharmaNet</span>
                            </h2>
                            <p className="text-white/60 text-sm font-light mb-10 leading-relaxed max-w-[280px] mx-auto">
                                Secure access to your medical records and digital prescriptions.
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
                        <div className="mb-10 text-center lg:text-left">
                            <h2 className="text-3xl font-extrabold text-[#06331A] mb-2">Sign In</h2>
                            <p className="text-gray-400 text-sm font-medium">Manage your health profile seamlessly</p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input 
                                        type="email" 
                                        placeholder="name@company.com" 
                                        className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl py-4 pl-14 pr-4 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none text-sm font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Password</label>
                                    <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="••••••••" 
                                        className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl py-4 pl-14 pr-14 transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none text-sm font-medium"
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <button className="w-full bg-[#06331A] text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transform transition-all active:scale-95 flex items-center justify-center gap-3">
                                Sign In
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>

                        <div className="mt-10 text-center">
                            <p className="text-sm text-gray-500 font-medium">
                                New to PharmaNet?  
                                <Link to="/register" className="text-primary font-bold hover:underline ml-2">Create an account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
