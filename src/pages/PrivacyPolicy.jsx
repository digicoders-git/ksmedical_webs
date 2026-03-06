import React, { useEffect } from 'react';
import { Shield, Lock, Database, UserCheck, Eye, Cookie } from 'lucide-react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white font-sans">
            {/* Hero Section - Full Width Background */}
            <div className="bg-[rgb(6,51,26)] pt-[120px] lg:pt-[140px] pb-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">PRIVACY POLICY</h1>
                        <p className="text-xl md:text-2xl text-white font-semibold mb-6">
                            Secure. Confidential. Compliant.
                        </p>
                        <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                            KS4 PharmaNet is committed to protecting the privacy and confidentiality of our users' personal information. This policy explains how we collect, use, store, and protect your data.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="pb-48">
                {/* Policy Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Info Card */}
                        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 border border-gray-100">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#06331A] mb-2">KS4 PharmaNet</h2>
                                    <p className="text-sm sm:text-base text-gray-600 font-medium">Company Name</p>
                                </div>
                                <div className="sm:text-right">
                                    <p className="text-xl sm:text-2xl font-bold text-primary mb-2">28-02-2026</p>
                                    <p className="text-sm sm:text-base text-gray-600 font-medium">Effective Date</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 1: Introduction */}
                        <div className="mb-8 sm:mb-12">
                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">1. Introduction</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    KS4 PharmaNet ("Company", "we", "our", or "us") is committed to protecting the privacy and confidentiality of our users' personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you access our website or mobile application.
                                </p>
                            </div>
                        </div>

                        {/* Section 2: Information We Collect */}
                        <div className="mb-8 sm:mb-12">
                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                        <Database className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">2. Information We Collect</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">We may collect the following types of information:</p>
                                <ul className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span><strong>Personal Information:</strong> Name, mobile number, email address, and contact details.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span><strong>KYC Information:</strong> Aadhaar number, PAN, and bank account details (for reward withdrawal).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span><strong>Transaction Information:</strong> Order details, payment records, wallet transactions.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span><strong>Prescription Information:</strong> Uploaded medical prescriptions where applicable.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span><strong>Technical Information:</strong> IP address, device type, browser type, and usage analytics.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 & 4: Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                            {/* Section 3 */}
                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">3. Purpose of Data Collection</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">Your information is collected for the following purposes:</p>
                                <ul className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Processing and fulfilling orders.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Verification of prescriptions and regulatory compliance.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Referral reward calculation and TDS deduction.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Fraud detection and prevention.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Improving platform functionality and customer experience.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Section 4 */}
                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                <h3 className="text-lg sm:text-xl font-bold text-[#06331A] mb-4">4. Data Sharing</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">We do not sell or rent your personal information. Information may be shared only with:</p>
                                <ul className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Authorized payment gateway providers for transaction processing.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Banking partners for settlement and payouts.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Government authorities where required by law.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Technology service providers under confidentiality agreements.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 5, 6, 7: Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Lock className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">5. Data Security</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    We implement appropriate technical and organizational security measures including encryption, restricted access controls, and secure servers to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                                </p>
                            </div>

                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Database className="w-5 h-5 text-secondary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">6. Data Retention</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Personal information is retained only for as long as necessary to fulfill business, legal, and regulatory obligations.
                                </p>
                            </div>

                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <UserCheck className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">7. User Rights</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">Users have the right to:</p>
                                <ul className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Access and update their personal information.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Request correction of inaccurate information.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>Request account deactivation subject to legal obligations.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 8 & 9: Full Width */}
                        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-primary/20">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">
                                        <Cookie className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">8. Cookies & Tracking</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    Our website may use cookies and analytics tools to enhance user experience and monitor platform performance.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-secondary/20">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">
                                        <Eye className="w-5 h-5 text-secondary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">9. Changes to Privacy Policy</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    KS4 PharmaNet reserves the right to modify this Privacy Policy at any time. Updates will be posted on the website with a revised effective date.
                                </p>
                            </div>
                        </div>

                        {/* Section 10: Contact Information */}
                        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#06331A] mb-6">10. Contact Information</h3>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                                For any privacy-related concerns, please contact:
                            </p>
                            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl">
                                <h4 className="text-lg font-bold text-[#06331A] mb-4">KS4 PharmaNet</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-primary">Mobile:</span>
                                        <a href="tel:9005606607" className="text-gray-700 hover:text-primary transition-colors">9005606607</a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-primary">Email:</span>
                                        <a href="mailto:care@ks4.in" className="text-gray-700 hover:text-primary transition-colors">care@ks4.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-[rgb(6,51,26)] py-12 sm:py-16 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                        <div className="text-center">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Questions About Privacy?</h3>
                            <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">Contact our support team for any privacy-related queries.</p>
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

export default PrivacyPolicy;
