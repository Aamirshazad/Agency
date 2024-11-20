import React from 'react';

export default function AIservices() {
  return (
    <div className="mt-20    rounded-3xl py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center place-items-center place-content-center ">
          <div className="max-w-2xl" style={{ opacity: 1, transform: 'none' }}>
            <h2>
            
              <span className="sr-only"> - </span>
              <span className="block font-display  tracking-tight text-wrap-balance text-6xl font-medium sm:text-5xl text-white">
              Companies choose us as their AI Automation & ML development partner
              </span>
            </h2>
            <div className="mt-6 text-xl text-neutral-300">
              {/* <p>We are a group of like-minded people who share the same core values.</p> */}
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
                    <strong className="font-semibold text-orange-500">A proven track record:</strong> With several successful projects completed, CortixAI is an ideally suited AI & ML development company with validated expertise across various industries and markets.
                  </div>
                </div>
              </li>

              {/* Trust */}
              <li className="text-base text-neutral-300 ">
                <div style={{ opacity: 1, transform: 'none' }}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-red-400 after:bg-green-500 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-orange-500">Leading AI & ML specialists:</strong> We don’t care when our team works just as long as they are working every waking second.
                  </div>
                </div>
              </li>

              {/* Compassion */}
              <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                <div style={{ opacity: 1, transform: 'none' }}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-red-400 after:bg-green-500 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-orange-500">Cost-effective engineering:</strong> Develop an AI & ML project and maximize your return on investment (ROI) without compromising on quality and delivery timeline.
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
