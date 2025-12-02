'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Enhanced Loading animation with multiple effects
    const loadingTl = gsap.timeline();

    // Animate the loading overlay background
    loadingTl
      .to('.loading-overlay', {
        opacity: 1,
        duration: 0.1
      })
      // Animate the text container
      .to('.loading-text', {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power3.out'
      })
      // Hold for a moment
      .to({}, { duration: 0.3 })
      // Fade out everything
      .to('.loading-text', {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: 'power3.in'
      })
      .to('.loading-overlay', {
        opacity: 0,
        duration: 0.3,
        ease: 'power3.inOut',
        onComplete: () => {
          setIsLoading(false);
        }
      }, '-=0.2');

    return () => {
      loadingTl.kill();
    };
  }, []);

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
