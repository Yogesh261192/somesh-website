'use client';

import Script from 'next/script';

export default function GoogleReviews() {
  return (
    <section className="w-full py-12 px-4 flex flex-col items-center justify-center">
      {/* Elfsight script Next.js ke Script tag ke sath */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="lazyOnload" 
      />

      {/* Aapka specific Elfsight review widget */}
      <div 
        className="elfsight-app-2b5664ef-2ed4-4ab1-9a0f-9b3edcdc7b1c w-full max-w-6xl" 
        data-elfsight-app-lazy
      ></div>
    </section>
  );
}