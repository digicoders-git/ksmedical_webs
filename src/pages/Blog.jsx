import React, { useEffect } from 'react';
import { Search, Calendar, User, ArrowRight, ChevronRight } from 'lucide-react';

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
            {/* Hero Section - Full Width Background */}
            <div className="bg-[rgb(6,51,26)] pt-[120px] lg:pt-[140px] pb-16">
                <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                                PharmaNet <span className="text-secondary">Journal</span>
                            </h1>
                            <p className="text-white/90 text-lg font-semibold leading-relaxed">
                                Stay updated with the latest in healthcare, wellness tips, and medical innovations from our team of experts.
                            </p>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input 
                                type="text" 
                                placeholder="Search articles..." 
                                className="w-full bg-white border-2 border-white/20 text-gray-900 placeholder:text-gray-500 py-5 pl-16 pr-8 rounded-2xl focus:outline-none focus:border-white transition-all text-sm shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl py-20 pb-48">

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Feed */}
                    <div className="lg:col-span-8 space-y-16">
                        {blogs.map((blog, idx) => (
                            <article key={idx} className="group cursor-pointer">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                    <div className="relative overflow-hidden rounded-[40px] aspect-[4/3] shadow-2xl shadow-primary/10">
                                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute top-6 left-6 bg-secondary text-[#06331A] px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                                            {blog.category}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {blog.date}</span>
                                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {blog.author}</span>
                                        </div>
                                        <h2 className="text-3xl font-extrabold text-[#06331A] leading-tight group-hover:text-primary transition-colors">
                                            {blog.title}
                                        </h2>
                                        <p className="text-gray-400 font-light leading-relaxed">
                                            {blog.excerpt}
                                        </p>
                                        <button className="flex items-center gap-3 text-primary font-extrabold text-sm group-hover:gap-5 transition-all">
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-12">
                        {/* Newsletter card */}
                        <div className="bg-[#06331A] rounded-[40px] p-10 text-white relative overflow-hidden">
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl font-bold mb-4">Stay Healthy</h3>
                                <p className="text-white/60 text-sm font-light mb-8">Get weekly wellness tips delivered straight to your inbox.</p>
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-6 mb-4 outline-none focus:bg-white/20 transition-all text-sm"
                                />
                                <button className="w-full bg-secondary text-[#06331A] font-bold py-4 rounded-xl hover:scale-105 transition-all">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>

                        {/* Recent Topics */}
                        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-100 border border-gray-100">
                            <h3 className="text-xl font-bold text-[#06331A] mb-8">Popular Topics</h3>
                            <div className="space-y-6">
                                {[
                                    { title: "Managing Blood Pressure", views: "1.2k" },
                                    { title: "Vitamin D Deficiency", views: "940" },
                                    { title: "Best Yoga Poses", views: "820" },
                                    { title: "PharmaNet App Updates", views: "750" }
                                ].map((topic, i) => (
                                    <div key={i} className="flex justify-between items-center group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                                        <span className="font-bold text-gray-600 group-hover:text-primary transition-colors text-sm">{topic.title}</span>
                                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-all" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
