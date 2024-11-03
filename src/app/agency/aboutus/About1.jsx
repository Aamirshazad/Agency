import React from 'react';

export default function AboutUsSection() {
  return (
    <div className="mx-auto max-w-7xl px-6  lg:px-8 mt-40 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-2xl" style={{ opacity: 1, transform: 'none' }}>
          <h2>
            <span className="mb-6 block font-display text-base font-semibold text-neutral-950">About Us</span>
            <span className="sr-only"> - </span>
            <span className="block font-display tracking-tight text-wrap-balance text-4xl font-semibold sm:text-5xl text-neutral-950">
              Our strength is collaboration
            </span>
          </h2>
          <div className="mt-6 text-xl text-neutral-600">
            <p>
              We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.
            </p>
          </div>
          <div className="mt-10 space-y-6 text-base text-neutral-600">
            <p>
              Studio was started by three friends who noticed that developer studios were charging clients double what an in-house team would cost. Since the beginning, we have been committed to doing things differently by charging triple instead.
            </p>
            <p>
              At Studio, we’re more than just colleagues — we’re a family. This means we pay very little and expect people to work late. We want our employees to bring their whole selves to work. In return, we just ask that they keep themselves there until at least 6:30pm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
