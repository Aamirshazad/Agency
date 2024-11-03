import React from 'react';

export default function Testimonial() {
  return (
    <div className="mx-auto max-w-7xl px-4  m-36 bg-black lg:px-8 rounded-3xl ">
      <div className="mx-auto max-w-2xl lg:max-w-none place-content-center pt-10">
        <div style={{ opacity: 1, transform: 'none' }}>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full text-white">
                The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s
                microphone without triggering one of those annoying permission dialogs.
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt="Phobia"
                loading="lazy"
                width="184"
                height="36"
                decoding="async"
                style={{ color: 'transparent' }}
                src="/_next/static/media/logo-dark.353d4760.svg"
              />
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
