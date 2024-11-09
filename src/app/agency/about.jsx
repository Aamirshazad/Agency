import React from 'react';

export default function ContactSection() {
  return (
    <div className="w-4/5 mb-9 mt-40 shadow-2xl shadow-blue-600 mx-auto rounded-3xl bg-neutral-950 px-6 py-20 sm:py-32 md:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl  font-semibild text-white text-wrap-balance sm:text-4xl ">
          We are a fully remote agency based in Pakistan Islamabad.
          </h2>
          <div className="mt-6 flex">
            <a
              className="inline-flex rounded-2xl px-4 py-1.5 text-sm  transition bg-white text-neutral-950 hover:bg-neutral-200"
              href="/contact"
            >
              <span className="relative text-2xl top-px">Get Started Today</span>
            </a>
          </div>
          <div className="mt-10 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white">Our offices</h3>
            <ul role="list" className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <li>
                <address className="text-sm not-italic text-neutral-300">
                  <strong className="text-white">Copenhagen</strong>
                  <br />
                  1 Carlsberg Gate
                  <br />
                  1260, Islamabad, Pakistan
                </address>
              </li>
              <li>
                <address className="text-sm not-italic text-neutral-300">
                  <strong className="text-white">Billund</strong>
                  <br />
                  24 Lego Allé
                  <br />
                  7190, Islamabad, Pakistan
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
