import React from 'react';

export default function ProcessComponent() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40 ">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div style={{ opacity: 1, transform: 'none' }}>
          <h1>
            <span className="block font-display text-base font-semibold text-neutral-950">
              Our process
            </span>
            <span className="sr-only"> - </span>
            <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              How we work
            </span>
          </h1>
          <div className="mt-6 max-w-3xl text-xl text-neutral-600">
            <p>
              We believe in efficiency and maximizing our resources to provide the best value to our clients. The primary way we do that is by re-using the same five projects we’ve been developing for the past decade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
