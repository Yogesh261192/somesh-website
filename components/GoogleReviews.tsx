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

  return (
    <section className="w-full py-10 px-4 flex flex-col items-center justify-center min-h-[350px]">
      {loadWidget ? (
        <>
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div 
            className="elfsight-app-2b5664ef-2ed4-4ab1-9a0f-9b3edcdc7b1c w-full max-w-6xl" 
            data-elfsight-app-lazy
          ></div>
        </>
      ) : (
        <div className="h-64 w-full flex items-center justify-center text-slate-400 text-sm">
          Loading patient reviews...
        </div>
      )}
    </section>
  );
}