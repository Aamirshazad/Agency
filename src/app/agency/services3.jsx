import React from 'react';

export default function ServicesSection() {
  return (
    <div className="mx-auto my-28 max-w-7xl px-6 lg:px-8 mt-16">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:flex lg:items-center lg:justify-start"> 
        <div className="mt-12 lg:mt-0 lg:w-[35rem] lg:flex-none lg:group-even/section:order-first">
            <div style={{ opacity: 1, transform: 'none' }}>
             
              <h2 className="mt-2 font-semibold text-3xl  tracking-tight  sm:text-4xl">
              Our AI Automation Process 
              </h2>
              <div className="mt-6">
                <div className="space-y-6 text-base leading-7 text-neutral-200">
                  <p>
                    Organizations across various sectors are leveraging generative AI to drive innovation and streamline operations.
                  </p>
                  <p>
                    From automating repetitive tasks to enhancing decision-making processes, generative AI can transform workflows and productivity.
                  </p>
                  <p>
                    Discover how you can implement AI-driven solutions to propel your organization forward.
                  </p>
                </div>
              </div>
              
              {/* New UL component added here */}
              <ul role="list" className="mt-4 flex flex-wrap gap-4">
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-blue-700">Consulting Phase </li>
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-blue-700">Identifying Scope</li>
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-blue-700">MVP (Minimum Viable Product)</li>
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-blue-700">End-to-end Development</li>
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-blue-700">Scaling</li>
                <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-blue-700">Maintenance </li>
              </ul>

              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="#"
                  className="inline-block rounded-md bg-neutral-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-neutral-950 hover:ring-neutral-950/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                >
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
                
              
              </div>
            </div>
          </div>
          
         

         
          <div className="flex justify-center lg:justify-end">
            <div className="w-[32rem] flex-none lg:w-[40rem]" style={{ transform: 'none' }}>
              <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full transition-all duration-300">
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
                          className="w-full bg-neutral-300 object-cover transition-transform duration-300 hover:scale-95"
                          sizes="(min-width: 1024px) 40rem, 32rem"
                          srcSet="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400 655w"
                          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400"
                          style={{ aspectRatio: '655 / 680' }}
                        />
                      </foreignObject>
                    </g>
                    <use href="#shape" strokeWidth="2" className="stroke-red-500/10"></use>
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
        </div>
      </div>
    </div>
  );
}
