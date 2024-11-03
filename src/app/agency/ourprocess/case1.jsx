import React from 'react';

const Case1 = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 mt-20 lg:px-8 mr-8 group/section [counter-increment:section]"> {/* Changed max-w-7xl to max-w-6xl */}
      <div className="mx-auto max-w-xl lg:max-w-none"> {/* Changed max-w-2xl to max-w-xl */}
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
          <div className="flex justify-center">
            <div className="w-[30rem] flex-none lg:w-[40rem]" style={{ opacity: 1, transform: 'none' }}> {/* Changed w-[33.75rem] to w-[30rem] and lg:w-[45rem] to lg:w-[40rem] */}
              <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full grayscale transition-all duration-300">
                <svg viewBox="0 0 655 680" fill="none" className="h-full">
                  <g clipPath="url(#clip)">
                    <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                      <foreignObject width="655" height="680">
                        <img
                          alt="Placeholder Image"
                          loading="lazy"
                          width="2400"
                          height="1800"
                          decoding="async"
                          className="w-full bg-neutral-100 object-cover transition-transform duration-300 hover:scale-95 hover:grayscale-0"
                          sizes="(min-width: 1024px) 41rem, 31rem"
                          srcSet="https://via.placeholder.com/655x680.png 655w"
                          src="https://via.placeholder.com/655x680.png"
                          style={{ color: 'transparent', aspectRatio: '655 / 680' }}
                        />
                      </foreignObject>
                    </g>
                    <use href="#shape" strokeWidth="2" className="stroke-neutral-950/10"></use>
                  </g>
                  <defs>
                    <clipPath id="clip">
                      <path
                        id="shape"
                        d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-[30rem] lg:flex-none lg:group-even/section:order-first"> {/* Changed lg:w-[37rem] to lg:w-[30rem] */}
            <div style={{ opacity: 1, transform: 'none' }}>
              <div
                className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                aria-hidden="true"
              ></div>
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Discover
              </h2>
              <div className="mt-6">
                <div className="space-y-6 text-base leading-7 text-neutral-600">
                  <p>
                    Educators, medical professionals, and business leaders are using generative AI to boost their
                    productivity and enhance their offerings.
                  </p>
                  <p>
                    Generative AI can help generate creative ideas, write personalized content, and improve overall
                    efficiency.
                  </p>
                  <p>
                    The possibilities are endless—let's explore how you can leverage this technology to achieve your
                    goals.
                  </p>
                </div>
              </div>
              
              {/* New UL component added here */}
              <ul role="list" className="mt-4 flex flex-wrap gap-4">
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">In-depth questionnaires</li>
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">Feasibility studies</li>
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">Blood samples</li>
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">Employee surveys</li>
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">Proofs-of-concept</li>
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">Forensic audit</li>
              </ul>

              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="#"
                  className="inline-block rounded-md bg-neutral-950 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-neutral-950 hover:ring-neutral-950/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                >
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="#"
                  className="inline-block rounded-md px-3.5 py-1.5 text-sm font-semibold text-neutral-950 ring-1 ring-neutral-950 hover:ring-neutral-950/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                >
                  Get started <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case1;
