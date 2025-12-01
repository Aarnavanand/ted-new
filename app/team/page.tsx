'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const teamSections = [
    {
        title: 'Core Organizing Team',
        members: [
            { name: 'Alex Johnson', role: 'Lead Organizer', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop' },
            { name: 'Sarah Chen', role: 'Co-Organizer', image: 'https://images.unsplash.com/photo-1573496359-136d47552640?w=400&h=400&fit=crop' },
            { name: 'Michael Smith', role: 'Curator', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
        ]
    },
    {
        title: 'Curation & Content',
        members: [
            { name: 'Emily Davis', role: 'Content Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
            { name: 'David Wilson', role: 'Speaker Manager', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop' },
            { name: 'Jessica Brown', role: 'Editorial Lead', image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?w=400&h=400&fit=crop' },
        ]
    },
    {
        title: 'Design & Marketing',
        members: [
            { name: 'Chris Lee', role: 'Design Head', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
            { name: 'Amanda White', role: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&h=400&fit=crop' },
            { name: 'Ryan Taylor', role: 'Social Media', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
        ]
    },
    {
        title: 'Production & Logistics',
        members: [
            { name: 'Daniel Martin', role: 'Production Head', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop' },
            { name: 'Olivia Thompson', role: 'Logistics Lead', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
        ]
    },
    {
        title: 'Partnerships',
        members: [
            { name: 'James Anderson', role: 'Sponsorship Lead', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop' },
            { name: 'Sophia Martinez', role: 'Partner Relations', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop' },
        ]
    },
    {
        title: 'Volunteers',
        members: [
            { name: 'Kevin Robinson', role: 'Volunteer Lead', image: 'https://images.unsplash.com/photo-1522075469751-3a3694c60e9e?w=400&h=400&fit=crop' },
            { name: 'Laura Clark', role: 'Coordinator', image: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?w=400&h=400&fit=crop' },
        ]
    }
];

export default function TeamPage() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo('.team-hero-title',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );

            // Section Animations
            const sections = document.querySelectorAll('.team-section');
            sections.forEach((section) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            // Card Hover Effects (already handled by CSS, but we can add GSAP for smoothness if needed)
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Navbar />
            <main className="bg-[#0B1120] min-h-screen pt-24 pb-20">
                {/* Hero Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-24 text-center">
                    <h1 className="team-hero-title heading-xl">
                        Our <span className="text-[#EB0028] border-b-4 border-[#FFD700]">Team</span>
                    </h1>
                    <p className="body-text text-lg sm:text-xl max-w-2xl mx-auto">
                        The passionate minds behind TEDxSRMIST NCR. Dedicated to bringing ideas worth spreading to our community.
                    </p>
                </section>

                {/* Team Sections */}
                <div className="space-y-16 sm:space-y-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {teamSections.map((section, index) => (
                        <section key={index} className="team-section">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#EB0028] mb-8 sm:mb-12 border-l-4 border-[#FFD700] pl-4">
                                {section.title}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.members.map((member, mIndex) => (
                                    <div
                                        key={mIndex}
                                        className="group bg-[#111827] p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(94,234,212,0.4)] border border-transparent hover:border-[#5EEAD4] relative overflow-hidden"
                                    >
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                            <p className="text-[#FFD700] font-medium text-sm uppercase tracking-wider">{member.role}</p>
                                        </div>
                                        {/* Hover Overlay Line */}
                                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#EB0028] transition-all duration-300 group-hover:w-full"></div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
