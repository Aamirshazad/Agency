"use client"

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [bgImage, setBgImage] = useState(0);

  // Array of background images
  const bgImages = [
    'bg-[url("https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=400")]',
    'bg-[url("https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=400")]',
    'bg-[url("https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=400")]',
  ];

  // Cycle through background images
  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prev) => (prev + 1) % bgImages.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`w-full flex-auto transition-all duration-1000 ${bgImages[bgImage]} bg-cover bg-center`}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-10 sm:pt-32 md:pt-16 pb-16 rounded-lg ">
        {/* Decorative Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-24 h-72 w-72 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          <div className="absolute -right-4 bottom-24 h-72 w-72 rounded-full bg-slate-900 opacity-20 blur-xl animate-pulse"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative mx-auto max-w-2xl lg:max-w-none p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          {/* Title and Subtitle */}
          <div className="relative max-w-3xl mx-auto text-center space-y-14 -mt-7">
            <h1 className="font-display text-3xl sm:text-6xl md:text-7xl p-1 font-bold tracking-losely bg-gradient-to-r from-red-800 to-blue-700 text-transparent bg-clip-text leading-tight">
              <span className="inline-block animate-out hover:animate-out ">AI</span>
              <br />
              <span className="inline-block bg-gradient-to-r from-red-800 tracking-tightly to-white  text-transparent bg-clip-text animate-slide-up">
                Automation Agency
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto animate-fade-in delay-500">
              We are a leading AI development agency merging design with cutting-edge technology to create innovative solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in delay-700">
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
