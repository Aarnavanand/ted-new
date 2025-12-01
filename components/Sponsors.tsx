'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

import { Card, CardContent } from '@/components/ui/card';

const Sponsors = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Sponsor carousel animation
      const carousel = carouselRef.current;
      if (carousel) {
        const logos = carousel.children;

        // Initial setup for logos
        gsap.set(logos, { scale: 0.9, opacity: 0.7 });

        // Infinite horizontal scroll
        gsap.to(carousel, {
          x: -carousel.scrollWidth / 2,
          duration: 40,
          repeat: -1,
          ease: 'none',
        });

        // Enhanced hover effects
        Array.from(logos).forEach((logo) => {
          const element = logo as HTMLElement;
          element.addEventListener('mouseenter', () => {
            gsap.to(element, {
              scale: 1.1,
              opacity: 1,
              rotationY: 5,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
          element.addEventListener('mouseleave', () => {
            gsap.to(element, {
              scale: 0.9,
              opacity: 0.7,
              rotationY: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        });
      }

      // CTA section animation
      gsap.fromTo(ctaRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sponsors = [
    {
      name: 'TechCorp',
      logo: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'title',
    },
    {
      name: 'InnovateHub',
      logo: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'presenting',
    },
    {
      name: 'FutureTech',
      logo: 'https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'gold',
    },
    {
      name: 'CloudSystems',
      logo: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'silver',
    },
    {
      name: 'DataMind',
      logo: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'bronze',
    },
    {
      name: 'AI Solutions',
      logo: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'partner',
    },
    {
      name: 'Green Energy Co',
      logo: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'partner',
    },
    {
      name: 'EduTech Plus',
      logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=200',
      tier: 'partner',
    },
  ];

  // Duplicate sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  const getTierSize = (tier: string) => {
    switch (tier) {
      case 'title': return 'w-48 h-24';
      case 'presenting': return 'w-40 h-20';
      case 'gold': return 'w-32 h-16';
      case 'silver': return 'w-28 h-14';
      case 'bronze': return 'w-24 h-12';
      default: return 'w-20 h-10';
    }
  };

  return (
    <section id="sponsors" ref={sectionRef} className="section-padding bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 ref={titleRef} className="heading-lg">
            Our <span className="text-[#EB0028]">Sponsors</span>
          </h2>
          <p className="body-text max-w-3xl mx-auto px-2">
            We&apos;re grateful to our amazing sponsors and partners who make this event possible
            and share our vision of spreading ideas worth sharing.
          </p>
        </div>

        {/* Sponsor Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 hover:pause"
            style={{ width: 'calc(200% + 2rem)' }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className={`flex-shrink-0 ${getTierSize(sponsor.tier)} bg-[#111827] border border-transparent hover:border-[#5EEAD4] transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center p-2 sm:p-3 transform-gpu hover:shadow-[0_0_20px_rgba(94,234,212,0.4)]`}
              >
                <span className="text-[#E2E8F0] font-semibold text-xs sm:text-sm text-center">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center">
          <Card ref={ctaRef} className="bg-[#111827] border border-[#EB0028] text-white p-6 sm:p-8 md:p-12 hover:scale-105 transition-all duration-300 transform-gpu rounded-none hover:shadow-[0_0_30px_rgba(235,0,40,0.2)]">
            <CardContent className="p-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Become a Sponsor</h3>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 text-[#E2E8F0]">
                Join us in spreading ideas worth sharing and connect with innovators,
                entrepreneurs, and thought leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:sponsors@tedxsrmist.edu.in"
                  className="bg-[#EB0028] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-none font-semibold hover:bg-[#c41e0f] transition-all duration-300 hover:shadow-[0_0_20px_rgba(235,0,40,0.4)]"
                >
                  Partner with Us
                </a>
                <a
                  href="/sponsorship-deck.pdf"
                  className="border-2 border-[#E2E8F0] text-[#E2E8F0] px-6 sm:px-8 py-3 sm:py-4 rounded-none font-semibold hover:bg-[#E2E8F0] hover:text-[#0B1120] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Deck
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;