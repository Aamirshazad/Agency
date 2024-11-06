import React from 'react';

export default function Statistics() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20 mb-20">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div>
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
            {/* Statistic 1 */}
            <div
              className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-red-500 after:bg-green-500 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
              style={{ opacity: 1, transform: 'none' }}
            >
              <dt className="mt-2 text-base   ">Employees</dt>
              <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">15 </dd>
            </div>

            {/* Statistic 2 */}
            <div
              className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-red-500 after:bg-green-500 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
              style={{ opacity: 1, transform: 'none' }}
            >
              <dt className="mt-2 text-base ">Placated clients</dt>
              <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">40+</dd>
            </div>

            {/* Statistic 3 */}
            <div
              className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-red-500 after:bg-green-500 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
              style={{ opacity: 1, transform: 'none' }}
            >
              <dt className="mt-2 text-base ">Projects</dt>
              <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">50+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
