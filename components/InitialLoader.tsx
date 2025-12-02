'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if loading has already been shown in this session
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('tedx-loading-shown');
    }
    return true;
  });

  useEffect(() => {
    // Skip loading if already shown in this session
    if (!isLoading) {
      return;
    }

    // Mark loading as shown for this session
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('tedx-loading-shown', 'true');
    }

    // Enhanced Loading animation with multiple effects
    const loadingTl = gsap.timeline();

    // Animate the loading overlay background
    loadingTl
      .to('.loading-overlay', {
        opacity: 1,
        duration: 0.3
      })
      // Animate the text container
      .to('.loading-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
      // Animate individual letters with stagger
      .to('.loading-letter', {
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: {
          each: 0.05,
          from: 'start'
        },
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.5')
      // Pulse effect on the "x"
      .to('.loading-x', {
        scale: 1.2,
        duration: 0.3,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
      }, '-=0.2')
      // Fade in the subtitle
      .to('.loading-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.4')
      // Add a shimmer effect
      .to('.loading-shimmer', {
        x: '200%',
        duration: 1.5,
        ease: 'power2.inOut'
      }, '-=0.5')
      // Hold for a moment
      .to({}, { duration: 0.5 })
      // Fade out everything
      .to('.loading-text, .loading-subtitle', {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: 'power3.in'
      })
      .to('.loading-overlay', {
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete: () => {
          setIsLoading(false);
        }
      }, '-=0.3');

    return () => {
      loadingTl.kill();
    };
  }, [isLoading]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-overlay">
      <div className="loading-text opacity-0 translate-y-4">
        <div className="text-[#EB0028]">
          TED<sup className="text-[#EB0028]">x</sup>{' '}
          <span className="text-white">SRMIST Delhi NCR</span>
        </div>
        <p className="text-white text-4xl">
          X = Independently Organized TED Event
        </p>
      </div>
    </div>
  );
}
