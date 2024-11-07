import React from 'react';

export default function OpportunitiesSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-2xl" style={{ opacity: 1, transform: 'none' }}>
          <h2>
            <span className="mb-6 block font-sans text-3xl font-semibold text-purple-800">Services</span>
            <span className="sr-only"> - </span>
            <span className="block font-display tracking-tight text-wrap-balance text-3xl font-medium sm:text-5xl ">
              We help you identify, explore, and respond to new opportunities.
            </span>
          </h2>
          <div className="mt-6 text-xl text-neutral-300">
            <p>
              As long as those opportunities involve giving us money to re-purpose old projects. we can come up with an endless number of those.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
