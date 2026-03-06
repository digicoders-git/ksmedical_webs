import React, { useEffect } from 'react';
import { FileText, XCircle, RefreshCw, Shield } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const ReturnsExchanges = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white font-sans">
            <HeroSection
                title="Cancellation Policy"
                subtitle="Transparent. Fair. Customer-Centric. At KS4 PharmaNet, we believe in clear and customer-friendly cancellation terms. This policy ensures you have complete control over your orders with hassle-free refund processing."
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
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#06331A] mb-2">KS4 PharmaNet</h2>
                                    <p className="text-sm sm:text-base text-gray-600 font-medium">Company Name</p>
                                </div>
                                <div className="sm:text-right">
                                    <p className="text-xl sm:text-2xl font-bold text-primary mb-2">28-02-2026</p>
                                    <p className="text-sm sm:text-base text-gray-600 font-medium">Effective Date</p>
                                </div>
                            </div>
                        </div>

                        {/* Policy Sections Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                            {/* Section 1 */}
                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                        <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">1. Order Cancellation by Customer</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    To cancel an order, customers may use the cancellation option in the mobile application or contact customer support at <a href="tel:9005606607" className="font-semibold text-primary hover:underline">9005606607</a> or <a href="mailto:care@ks4.in" className="font-semibold text-primary hover:underline">care@ks4.in</a>.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">2. Cancellation of Prescription Medicines</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Prescription medicines can only be cancelled before dispatch. Once delivered, prescription medicines are non-returnable except in case of damage, wrong supply, or quality issues.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                        <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">3. Refund on Cancellation</h3>
                                </div>
                                <ul className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-2 sm:space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>If cancellation is approved before dispatch, the refund will be processed to the original payment method within 5–7 working days.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1 shrink-0">•</span>
                                        <span>If the payment was made using wallet balance, the refund shall be credited back to the wallet.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Section 5 */}
                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                        <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#06331A]">5. Referral Reward Adjustment</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    In case of cancellation, any referral rewards credited for that order will be reversed from the respective wallet accounts.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 - Full Width */}
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-primary/20 mb-8 sm:mb-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#06331A] mb-4 sm:mb-6">4. Company-Initiated Cancellation</h3>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                KS4 PharmaNet reserves the right to cancel orders under the following circumstances:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className="text-primary mt-1 shrink-0">•</span>
                                    <span className="text-sm sm:text-base text-gray-700">Invalid or unverifiable prescription.</span>
                                </div>
                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className="text-primary mt-1 shrink-0">•</span>
                                    <span className="text-sm sm:text-base text-gray-700">Product out of stock.</span>
                                </div>
                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className="text-primary mt-1 shrink-0">•</span>
                                    <span className="text-sm sm:text-base text-gray-700">Pricing error.</span>
                                </div>
                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className="text-primary mt-1 shrink-0">•</span>
                                    <span className="text-sm sm:text-base text-gray-700">Suspected fraudulent transaction.</span>
                                </div>
                                <div className="flex items-start gap-2 sm:gap-3 sm:col-span-2">
                                    <span className="text-primary mt-1 shrink-0">•</span>
                                    <span className="text-sm sm:text-base text-gray-700">Regulatory compliance restrictions.</span>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-semibold">
                                In such cases, the full amount will be refunded to the original payment method.
                            </p>
                        </div>

                        {/* Section 6 - Compliance */}
                        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#06331A] mb-4 sm:mb-6">6. Compliance</h3>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                This Cancellation Policy is framed in accordance with the <span className="font-bold text-primary">Consumer Protection Act, 2019</span> and <span className="font-bold text-primary">Consumer Protection (E-Commerce) Rules, 2020</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-[rgb(6,51,26)] py-12 sm:py-16 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                        <div className="text-center">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Need Help with Cancellation?</h3>
                            <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">Contact our support team for any queries regarding order cancellations and refunds.</p>
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

export default ReturnsExchanges;
