import React, { useEffect } from 'react';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

const OurTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const team = [
        {
            name: "Dr. Sarah Mitchell",
            role: "Chief Pharmacist",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bio: "With over 15 years of experience in clinical pharmacy, Dr. Mitchell leads our medical excellence team."
        },
        {
            name: "James Wilson",
            role: "Head of Operations",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bio: "James ensures that our supply chain and delivery systems run smoothly to serve patients nationwide."
        },
        {
            name: "Elena Rodriguez",
            role: "Patient Care Director",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bio: "Elena specializes in building support systems that prioritize patient well-being and clear communication."
        },
        {
            name: "Dr. Robert Chen",
            role: "Research Specialist",
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bio: "Dr. Chen oversees our quality control and product vetting processes for all supplements and medicines."
        }
    ];

    return (
        <div className="bg-[#fcfdfc] pt-[120px] lg:pt-[200px] pb-48 font-sans overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/3"></div>
            
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                {/* Hero section */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        The Faces of PharmaNet
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#06331A] mb-8 tracking-tight leading-tight">
                        Meet the experts <br/> behind your <span className="text-secondary">Health</span>
                    </h1>
                    <p className="text-gray-500 text-lg font-light leading-relaxed">
                        We are a group of dedicated healthcare professionals, innovators, and problem-solvers working together to make quality medicine accessible.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative">
                            <div className="relative overflow-hidden rounded-[40px] aspect-[4/5] mb-6 shadow-2xl shadow-primary/10">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#06331A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-secondary transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-secondary transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-[#06331A] mb-1">{member.name}</h3>
                            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                            <p className="text-gray-400 text-sm font-light leading-relaxed group-hover:text-gray-600 transition-colors">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Join Us Section */}
                <div className="mt-40 bg-[#06331A] rounded-[50px] p-12 md:p-24 relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-full h-full border-[20px] border-white/5 rounded-[50px] pointer-events-none"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Want to join <br/> our mission?</h2>
                        <p className="text-white/60 text-lg mb-10 font-light">
                            We're always looking for brilliant minds to join our quest for a healthier world. Check our current openings.
                        </p>
                        <button className="bg-secondary text-[#06331A] px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-secondary/20 flex items-center gap-3 mx-auto">
                            View Careers <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
