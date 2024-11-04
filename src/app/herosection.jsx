import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <main className="w-full flex-auto bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-10 sm:pt-32 md:pt-40 pb-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-24 h-72 w-72 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
          <div className="absolute -right-4 bottom-24 h-72 w-72 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
        </div>

        {/* Main content container */}
        <div className="relative mx-auto -mt-20 max-w-2xl lg:max-w-none p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <Star className="w-7 h-7 text-green-600" />
              <span className="text-lg font-bold text-gray-800">NexusAI </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative max-w-3xl mx-auto text-center space-y-14">
            <h1 className="font-display text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-red-800 to-blue-700 text-transparent bg-clip-text leading-tight">
              <span className="inline-block animate-fade-in duration-150">
               Artificial Intelligence
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text animate-fadeIn animation-delay-100">
              Development Agency
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
              We are a Artificial Intelligence development agency working at the intersection of design and technology. 
              Creating innovative solutions that push the boundaries of what's possible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fadeIn animation-delay-300">
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold transition-all duration-300 hover:bg-blue-50 hover:scale-105 shadow-lg shadow-white/10"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 text-white border border-white/20 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-neutral-400 mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-neutral-400 mt-1">Happy Clients</div>
              </div>
              <div className="text-center md:col-span-1 col-span-2">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-neutral-400 mt-1">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}