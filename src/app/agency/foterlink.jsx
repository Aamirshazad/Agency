import React from 'react';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-20 w-full sm:mt-24 lg:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div style={{ opacity: 1, transform: 'none' }}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <nav>
              <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {/* Work Section */}
                <li>
                  <div className="font-display text-sm font-semibold tracking-wider ">Work</div>
                  <ul role="list" className="mt-4 text-sm text-neutral-200">
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="/work/family-fund">
                        FamilyFund
                      </a>
                    </li>
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-450" href="/work/unseal">
                        Unseal
                      </a>
                    </li>
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="/work/phobia">
                        Phobia
                      </a>
                    </li>
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-450" href="/work">
                        See all <span aria-hidden="true">→</span>
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Company Section */}
                <li>
                  <div className="font-display text-sm font-semibold tracking-wider ">Company</div>
                  <ul role="list" className="mt-4 text-sm text-neutral-200">
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="/about">
                        About
                      </a>
                    </li>
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="/process">
                        Process
                      </a>
                    </li>
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="/blog">
                        Blog
                      </a>
                    </li>
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="/contact">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Connect Section */}
                <li>
                  <div className="font-display text-sm font-semibold tracking-wider ">Connect</div>
                  <ul role="list" className="mt-4 text-sm text-neutral-200">
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="https://facebook.com">
                        Facebook
                      </a>
                    </li>
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="https://instagram.com">
                        Instagram
                      </a>
                    </li>
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="https://github.com">
                        GitHub
                      </a>
                    </li>
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="https://dribbble.com">
                        Dribbble
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            {/* Newsletter Section */}
            <div className="flex lg:justify-end">
              <form className="max-w-sm">
                <h2 className="font-display text-sm font-semibold tracking-wider ">
                  Sign up for our newsletter
                </h2>
                <p className="mt-4 text-sm text-neutral-200">
                  Subscribe to get the latest design news, articles, resources and inspiration.
                </p>
                <div className="relative mt-6">
                  <input
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-2xl border border-neutral-200 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-100 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring-neutral-950/5"
                  />
                  <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                      type="submit"
                      aria-label="Submit"
                      className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                    >
                      <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
            <a aria-label="Home" href="/" className="flex items-center">
              <svg viewBox="0 0 130 32" aria-hidden="true" className="group/logo h-8">
                <svg viewBox="0 0 32 32" aria-hidden="true" preserveAspectRatio="xMinYMid meet">
                  <rect
                    clipPath="url(#clipPathId)"
                    className="h-8 transition-all duration-300 fill-neutral-100 w-0 group-hover/logo:w-8"
                  ></rect>
                  <use href="#pathId" className="stroke-neutral-950" fill="none" strokeWidth="1.5"></use>
                  <defs>
                    <path
                      id="pathId"
                      d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                    ></path>
                    <clipPath id="clipPathId">
                      <use href="#pathId"></use>
                    </clipPath>
                  </defs>
                </svg>
                <path
                  className="fill-neutral-950"
                  d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"
                ></path>
              </svg>
            </a>
            <p className="text-sm text-neutral-100">© CortixAI Agency Inc. 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
