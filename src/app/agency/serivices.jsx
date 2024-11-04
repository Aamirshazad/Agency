import React from 'react';

export default function Pagez() {
  return (
    <main className="w-full flex-auto mb-24">
     

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl opacity-100">
            <h2 className="block font-bold tracking-tight text-wrap-balance text-4xl  sm:text-5xl text-neutral-950">
              Our Work
            </h2>
           
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Case Study 1 */}
            <div className="flex opacity-100">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <a href="/work/family-fund">
                    <img
                      alt="FamilyFund"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      src="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=400"
                      className="h-16 w-16 color-transparent rounded-full"
                    />
                  </a>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime="2023" className="font-semibold">2023</time>
                  <span className="text-neutral-300" aria-hidden="true">/</span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Skip the bank, borrow from those you trust
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  FamilyFund is a crowdfunding platform for friends and family, allowing users to take personal loans from their network without a traditional financial institution.
                </p>
              </article>
            </div>

            {/* Case Study 2 */}
            <div className="flex opacity-100">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <a href="/work/unseal">
                    <img
                      alt="Unseal"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      src="https://media.istockphoto.com/id/1979518787/photo/ai-technology-businessman-use-laptop-artificial-intelligence-in-the-process-of-predictive.jpg?s=612x612&w=0&k=20&c=9yEoWGksFBE8DPv7pC-4IbtpstPS5yTzDWMuD2-9qXo="
                      className="h-16 w-16 color-transparent rounded-full"
                    />
                  </a>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime="2022" className="font-semibold">2022</time>
                  <span className="text-neutral-300" aria-hidden="true">/</span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Get a hold of your health
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.
                </p>
              </article>
            </div>

            {/* Case Study 3 */}
            <div className="flex opacity-100">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <a href="/work/phobia">
                    <img
                      alt="Phobia"
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?b=1&s=612x612&w=0&k=20&c=5LyslY4gssQ99CVUrUB2K75Mx2TFgnkxboAqB38OPUQ="
                      className="h-16 w-16 color-transparent rounded-full"
                    />
                  </a>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime="2022" className="font-semibold">2022</time>
                  <span className="text-neutral-300" aria-hidden="true">/</span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  Overcome your fears, find your match
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* SVG with camelCase properties */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5"
      >
        <rect width="100%" height="100%" fill="url(#patternId)" strokeWidth="0"></rect>
        <svg x="50%" y="-256" strokeWidth="0" className="overflow-visible">
          <path
            transform="translate(64 160)"
            d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            clipPath="url(#clipId)"
          ></path>
        </svg>
        <defs>
          <clipPath id="clipId">
            <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180" />
          </clipPath>
        </defs>
      </svg>
    </main>
  );
}
