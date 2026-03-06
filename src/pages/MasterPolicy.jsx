import React, { useEffect } from 'react';
import { FileText, Shield, Lock, RefreshCw, Gift, AlertCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const MasterPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white font-sans">
            <HeroSection
                title="Master Policy Document"
                subtitle="Comprehensive. Compliant. Transparent. KS4 PharmaNet operates with full legal compliance and transparency. This master document outlines all our policies, terms, and commitments to our customers."
            />

            {/* Content Section */}
            <div className="pb-48">

                {/* Policy Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Info Card */}
                        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 border border-gray-100">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#06331A] mb-2">KS4 PHARMANET</h2>
                                    <p className="text-sm sm:text-base text-gray-600 font-medium">Company Name</p>
                                </div>
                                <div className="sm:text-right">
                                    <p className="text-xl sm:text-2xl font-bold text-primary mb-2">28-02-2026</p>
                                    <p className="text-sm sm:text-base text-gray-600 font-medium">Effective Date</p>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 1: Terms & Conditions */}
                        <div className="mb-12 sm:mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#06331A]">SECTION 1: TERMS & CONDITIONS</h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">1. Legal Status</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        KS4 PharmaNet operates as a licensed pharmaceutical retailer and digital commerce platform in accordance with the Drugs & Cosmetics Act, 1940, Information Technology Act, 2000, Consumer Protection Act, 2019, GST laws, and applicable Indian regulations.
                                    </p>
                                </div>

                                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">2. Electronic Records & IT Act Compliance</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        All electronic records, communications, and transactions conducted through this platform shall be governed by the Information Technology Act, 2000. Users consent to receive communications in electronic form.
                                    </p>
                                </div>

                                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">3. Consumer Protection Compliance</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        The platform complies with Consumer Protection (E-Commerce) Rules, 2020. Accurate product descriptions, pricing transparency, grievance redressal mechanisms, and refund policies are maintained.
                                    </p>
                                </div>

                                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">4. Jurisdiction</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        All disputes shall be subject to the jurisdiction of courts located in Lucknow, Uttar Pradesh.
                                    </p>
                                </div>

                                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 lg:col-span-2">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">5. Limitation of Liability</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        The Company shall not be liable for indirect or consequential damages. Customers must consult qualified medical practitioners before consuming medicines.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 2: Privacy Policy */}
                        <div className="mb-12 sm:mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                                    <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#06331A]">SECTION 2: PRIVACY POLICY</h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">1. Data Collection</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        We collect personal information including name, mobile number, email, Aadhaar, PAN, bank details, transaction records, and prescription data where applicable.
                                    </p>
                                </div>

                                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">2. Lawful Basis of Processing</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        Data is processed for contractual obligations, legal compliance, fraud prevention, and legitimate business interests.
                                    </p>
                                </div>

                                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">3. Data Protection & IT Security</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        Reasonable security practices under the IT Act, 2000 and applicable rules are implemented, including encryption and restricted access controls.
                                    </p>
                                </div>

                                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">4. Data Sharing</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        Data may be shared with payment gateways, banks, government authorities, and technology partners under confidentiality obligations.
                                    </p>
                                </div>

                                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 lg:col-span-2">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">5. User Rights</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        Users may request access, correction, or deletion of personal data subject to legal retention requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 3: Refund & Cancellation */}
                        <div className="mb-12 sm:mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#06331A]">SECTION 3: REFUND & CANCELLATION POLICY</h2>
                            </div>

                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-primary/20">
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    Orders may be cancelled prior to dispatch. Refunds are processed to the original payment method. Prescription medicines once delivered are non-returnable except in cases of damage or incorrect supply. Refund timelines comply with Consumer Protection Rules.
                                </p>
                            </div>
                        </div>

                        {/* SECTION 4: Referral Reward Policy */}
                        <div className="mb-12 sm:mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                                    <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#06331A]">SECTION 4: REFERRAL REWARD POLICY</h2>
                            </div>

                            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-secondary/20">
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                                    Referral rewards are strictly sales-linked and limited to two levels (F1 & F2).
                                </p>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                                    TDS shall be deducted under Section 194H of the Income Tax Act where applicable. PAN is mandatory for withdrawal of referral rewards.
                                </p>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-semibold">
                                    The system is not a multi-level marketing scheme. No income is generated through recruitment.
                                </p>
                            </div>
                        </div>

                        {/* SECTION 5: Grievance Redressal */}
                        <div className="mb-12 sm:mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#06331A]">SECTION 5: GRIEVANCE REDRESSAL MECHANISM</h2>
                            </div>

                            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                                    In compliance with Consumer Protection (E-Commerce) Rules, 2020, customers may contact:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-primary">Mobile:</span>
                                        <a href="tel:9005606607" className="text-gray-700 hover:text-primary transition-colors">9005606607</a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-primary">Email:</span>
                                        <a href="mailto:care@ks4.in" className="text-gray-700 hover:text-primary transition-colors">care@ks4.in</a>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-semibold">
                                    Response Time: Within 48 working hours.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-[rgb(6,51,26)] py-12 sm:py-16 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                        <div className="text-center">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Questions About Our Policies?</h3>
                            <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">Contact our support team for clarification on any policy matters.</p>
                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
                                <a href="tel:9005606607" className="bg-secondary text-[#06331A] px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-sm sm:text-base">
                                    Call: 9005606607
                                </a>
                                <a href="mailto:care@ks4.in" className="bg-white/10 backdrop-blur-sm text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20 text-sm sm:text-base">
                                    Email: care@ks4.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterPolicy;
