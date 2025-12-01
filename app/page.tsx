'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import Schedule from '@/components/Schedule';
import Registration from '@/components/Registration';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation
    const loadingTl = gsap.timeline();
    loadingTl
      .to('.loading-text', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
      .to('.loading-overlay', {
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
        onComplete: () => {
          setIsLoading(false);
        }
      }, '+=0.5');

    const ctx = gsap.context(() => {
      // Magnetic effect for buttons (without custom cursor)
      const magneticElements = document.querySelectorAll('.magnetic');
      magneticElements.forEach((element) => {
        element.addEventListener('mouseleave', () => {
          gsap.to(element, { x: 0, y: 0, duration: 0.3 });
        });
        element.addEventListener('mousemove', (e) => {
          const mouseEvent = e as MouseEvent;
          const rect = (element as HTMLElement).getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left - rect.width / 2;
          const y = mouseEvent.clientY - rect.top - rect.height / 2;
          gsap.to(element, { x: x * 0.1, y: y * 0.1, duration: 0.3 });
        });
      });

      // Scroll-triggered reveal animations
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((element) => {
        gsap.fromTo(element,
          {
            opacity: 0,
            y: 100,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Parallax effects
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        gsap.to(element, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-text opacity-0 translate-y-4">
            <span className="text-[#EB0028]">TEDx</span> SRMIST NCR
          </div>
        </div>
      )}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Registration />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}