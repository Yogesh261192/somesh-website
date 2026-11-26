'use client';

import { useEffect, useState } from 'react';

export default function GoogleReviews() {
  const [loadWidget, setLoadWidget] = useState(false);

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
    if (!loadWidget) return;

    if (!document.querySelector('script[src="https://business.repu.ai/widget/reviews.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://business.repu.ai/widget/reviews.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // RepU ke repeated business header aur "Powered by RepU" ko hide karne ke liye
    const interval = setInterval(() => {
      const widget = document.querySelector('[data-repu-inline="fe8bf1b1f623e4d2"]');
      if (!widget) return;

      // Shadow DOM ya normal DOM dono handle karega
      const root = widget.shadowRoot || widget;
      const allElements = root.querySelectorAll('div, a, span, p');

      allElements.forEach((el) => {
        const text = el.textContent?.trim() || '';
        if (
          text.startsWith('Delhi Physio At Home - Expert Physiotherapy') ||
          text.includes('Powered by')
        ) {
          // Sirf direct wrapper hide karo, poora card nahi
          if (el.children.length <= 2) {
            (el as HTMLElement).style.display = 'none';
          }
        }
      });
    }, 500);

    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [loadWidget]);

  return (
    <section className="w-full py-12 px-4 flex flex-col items-center justify-center bg-slate-50/50">
      {/* Custom Clean Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          What Our Patients Say
        </h2>
        <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-700">
          <span className="text-amber-500 text-base">★★★★★</span>
          <span>Rated 4.9★ on Google</span>
        </div>
      </div>

      {/* Reviews Container */}
      <div className="w-full max-w-6xl min-h-[260px] flex items-center justify-center">
        {loadWidget ? (
          <div className="w-full" data-repu-inline="fe8bf1b1f623e4d2"></div>
        ) : (
          <div className="h-48 w-full flex items-center justify-center text-slate-400 text-sm">
            Loading patient reviews...
          </div>
        )}
      </div>
    </section>
  );
}