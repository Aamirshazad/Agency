import React from 'react';

export default function VisionSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-800 to-slate-900 py-24">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -left-8 top-16 h-64  bg-red-600 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -right-8 bottom-16 h-64 w-64 bg-blue-300 opacity-20 rounded-full blur-2xl animate-none "></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-blue-600 text-transparent bg-clip-text animate-fade-in">
          Harnessing AI for a Brighter Future
        </h2>

        {/* Section Description */}
        <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto animate-fade-in delay-500">
          We believe technology is the answer to the world's greatest challenges.
          It’s also the cause, so we find ourselves in a bit of a catch-22 situation.
        </p>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-8 animate-fade-in delay-700">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
