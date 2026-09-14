'use client';

import { useEffect, useState } from 'react';

export default function GoogleReviews() {
  const [loadWidget, setLoadWidget] = useState(false);

  useEffect(() => {
    const handleTrigger = () => {
      setLoadWidget(true);
      window.removeEventListener('scroll', handleTrigger);
      window.removeEventListener('touchstart', handleTrigger);
    };

    window.addEventListener('scroll', handleTrigger, { passive: true });
    window.addEventListener('touchstart', handleTrigger, { passive: true });

    const timer = setTimeout(() => setLoadWidget(true), 3500);

    return () => {
      window.removeEventListener('scroll', handleTrigger);
      window.removeEventListener('touchstart', handleTrigger);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="w-full py-10 px-4 flex flex-col items-center justify-center">
      {loadWidget ? (
        <>
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div 
            className="elfsight-app-2b5664ef-2ed4-4ab1-9a0f-9b3edcdc7b1c w-full max-w-6xl" 
            data-elfsight-app-lazy
          ></div>
        </>
      ) : (
        <div className="h-48 w-full flex items-center justify-center text-slate-400 text-sm">
          Loading patient reviews...
        </div>
      )}
    </section>
  );
}