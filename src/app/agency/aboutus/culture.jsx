import React from 'react';

export default function CultureSection() {
  return (
    <div className="mt-24  bg-neutral-950 rounded-3xl py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl" style={{ opacity: 1, transform: 'none' }}>
            <h2>
              <span className="mb-6 block font-display text-base font-semibold text-white">Our culture</span>
              <span className="sr-only"> - </span>
              <span className="block font-display tracking-tight text-wrap-balance text-4xl font-medium sm:text-5xl text-white">
                Balance your passion with your passion for life.
              </span>
            </h2>
            <div className="mt-6 text-xl text-neutral-300">
              <p>We are a group of like-minded people who share the same core values.</p>
            </div>
          </div>
        </div>

        {/* Culture Points */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <ul role="list" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Loyalty */}
              <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                <div style={{ opacity: 1, transform: 'none' }}>
                  <div className="pl-8 relative before:absolute after:absolute  before:bg-red-400 after:bg-green-500 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-white">Loyalty.</strong> Our team has been with us since the beginning because none of them are allowed to have LinkedIn profiles.
                  </div>
                </div>
              </li>

              {/* Trust */}
              <li className="text-base text-neutral-300 ">
                <div style={{ opacity: 1, transform: 'none' }}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-red-400 after:bg-green-500 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-white">Trust.</strong> We don’t care when our team works just as long as they are working every waking second.
                  </div>
                </div>
              </li>

              {/* Compassion */}
              <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                <div style={{ opacity: 1, transform: 'none' }}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-red-400 after:bg-green-500 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-white">Compassion.</strong> You never know what someone is going through at home and we make sure to never find out.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
