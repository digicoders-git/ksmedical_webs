import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogs = [
        {
            title: "10 Natural Ways to Boost Your Immunity This Winter",
            category: "Health Tips",
            date: "Feb 15, 2026",
            author: "Dr. Sarah Mitchell",
            excerpt: "Learn how simple lifestyle changes and the right supplements can keep you healthy during the cold season.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Understanding Digital Prescriptions: A Complete Guide",
            category: "Technology",
            date: "Feb 10, 2026",
            author: "James Wilson",
            excerpt: "How PharmaNet is revolutionizing the way you manage and receive your medical prescriptions online.",
            image: "https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b71b0b5adbfc8231e4305f_pexels-doterra-international-llc-4092837-p-500.jpg"
        },
        {
            title: "The Importance of Regular Health Checkups",
            category: "Wellness",
            date: "Feb 05, 2026",
            author: "Dr. Robert Chen",
            excerpt: "Prevention is better than cure. Discover why consistent monitoring is key to a long and healthy life.",
            image: "https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b72f8134ded77be9216b0e_daily-nouri-D37STEwmyqY-unsplash-p-500.jpg"
        }
    ];

    return (
        <div className="bg-white font-sans">
            <HeroSection
                title="PharmaNet Journal"
                subtitle="Stay updated with the latest in healthcare, wellness tips, and medical innovations from our team of experts."
            />

            {/* Content Section */}
            <div className="py-16 lg:py-24 pb-32 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">

                    {/* Blog Grid */}
                    <div className="space-y-16 lg:space-y-20">
                        {blogs.map((blog, idx) => (
                            <article key={idx} className="group cursor-pointer">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                                    {/* Content */}
                                    <div className={`space-y-5 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                                        {/* Meta Info */}
                                        <div className="flex items-center gap-6 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                            <span className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" /> {blog.date}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <User className="w-4 h-4" /> {blog.author}
                                            </span>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="inline-block">
                                            <span className="bg-[#EA580C]/10 text-[#EA580C] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                                                {blog.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#06331A] leading-tight group-hover:text-[#EA580C] transition-colors duration-300">
                                            {blog.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                                            {blog.excerpt}
                                        </p>

                                        {/* Read More Button */}
                                        <button className="inline-flex items-center gap-3 text-[#EA580C] font-bold text-base hover:gap-5 transition-all group/btn">
                                            Read More
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>

                                    {/* Image */}
                                    <div className={`relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500 ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 lg:mt-28 bg-gradient-to-r from-[#EA580C]/10 to-[#EA580C]/5 rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-[#EA580C]/20">
                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#06331A] mb-4">Subscribe to Our Newsletter</h3>
                            <p className="text-base sm:text-lg text-gray-600 font-medium mb-8">Get weekly wellness tips and health insights delivered to your inbox.</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#EA580C] transition-colors text-base"
                                />
                                <button className="bg-[#EA580C] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#EA580C]/90 transition-all shadow-lg hover:shadow-xl whitespace-nowrap text-base">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;
