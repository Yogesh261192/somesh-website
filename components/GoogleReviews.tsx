'use client';

import { useEffect, useRef, useState } from 'react';

export default function GoogleReviews() {
  const [loadWidget, setLoadWidget] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleInteraction = () => {
      setLoadWidget(true);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { passive: true, once: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true, once: true });
    window.addEventListener('mousemove', handleInteraction, { passive: true, once: true });

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (!loadWidget || !containerRef.current) return;

    // Prevent duplicate script injection in React Strict Mode
    if (containerRef.current.querySelector('script[data-repu]')) return;

    const script = document.createElement('script');
    script.src = 'https://business.repu.ai/widget/reviews.js';
    script.setAttribute('data-repu', 'fe8bf1b1f623e4d2');
    script.async = true;

    containerRef.current.appendChild(script);
  }, [loadWidget]);

  return (
    <section className="w-full py-10 px-4 flex flex-col items-center justify-center min-h-[350px]">
      {loadWidget ? (
        <div ref={containerRef} className="w-full max-w-6xl" />
      ) : (
        <div className="h-64 w-full flex items-center justify-center text-slate-400 text-sm">
          Loading patient reviews...
        </div>
      )}
    </section>
  );
}