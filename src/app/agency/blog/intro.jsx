import React from 'react';




export default function BlogSection() {
  return (
    <div className="pt-28 ml-12"style={{ opacity: 1, transform: 'none' }}>
      <h1>
        <span className="block font-display text-base font-semibold text-neutral-950">Blog</span>
        <span className="sr-only"> - </span>
        <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 text-wrap-balance sm:text-6xl">
          The latest articles and news
        </span>
      </h1>
      <div className="mt-6 max-w-3xl text-xl text-neutral-600">
        <p>Stay up-to-date with the latest industry news as our marketing team finds new ways to re-purpose old CSS tricks articles.</p>
      </div>
    </div>
  );
}
