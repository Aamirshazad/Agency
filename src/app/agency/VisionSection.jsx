import React from 'react';

export default function VisionSection() {
  return (
    <section className="relative  md:mx-32 rounded-3xl  bg-gradient-to-b md:my-44 shadow-xl shadow-purple-950 from-[#181342] via-[#010527] to-[#2e0202] text-white py-24">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background decorative elements */}
        {/* <div className="absolute -left-8 top-16 h-64  bg-red-600 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -right-8 bottom-16 h-64 w-64 bg-blue-300 opacity-20 rounded-full blur-2xl animate-none "></div> */}
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-blue-600 text-transparent bg-clip-text animate-fade-in">
        Shaping the Future with AI Innovation
        </h2>

        {/* Section Description */}
        <p className="text-lg font-serif sm:text-xl text-neutral-300 max-w-3xl mx-auto animate-fade-in delay-500">
        AI is transforming the world—unlocking new opportunities, solving complex problems, and driving growth. At CortexAI, we turn challenges into breakthroughs with the power of intelligent automation.
        </p>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-8 animate-fade-in delay-700">
          <a
            href="./agency/Contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Let's Start
          </a>
        </div>
      </div>
    </section>
  );
}
