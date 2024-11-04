"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "The team at Studio went above and beyond with our onboarding, even finding a way to access the user's microphone without triggering one of those annoying permission dialogs.",
    author: "Sarah Johnson",
    role: "Product Manager",
    companyLogo: "/api/placeholder/184/36",
  },
  {
    id: 2,
    text: "Working with Studio has transformed our entire development process. Their attention to detail and innovative solutions are unmatched.",
    author: "Michael Chen",
    role: "CTO",
    companyLogo: "/api/placeholder/184/36",
  },
  {
    id: 3,
    text: "The level of creativity and technical expertise they bring to each project is exceptional. Highly recommended!",
    author: "Emma Williams",
    role: "CEO",
    // companyLogo: "/api/placeholder/184/36",
  }
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative overflow-hidden rounded-3xl w-4/5 place-items-center ml-24  bg-gradient-to-br from-gray-600 to-gray-800 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px] opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-5xl ">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.10 }}
          className="relative"
        >
          {/* Main testimonial content */}
          <div className="mx-auto max-w-3xl">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.10 }}
              className="relative"
            >
              <Quote className="absolute -top-8 -left-4 h-16 w-16 text-blue-500/20" />
              
              <blockquote className="relative">
                <p className="text-xl md:text-3xl font-medium text-white leading-relaxed text-center px-8">
                  {testimonials[activeIndex].text}
                </p>
                
                <div className="mt-5 flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px]">
                    <div className="h-full w-full rounded-full bg-slate-600" />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg font-semibold text-white">
                      {testimonials[activeIndex].author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                  {/* <img
                    alt="Company logo"
                    className="mt-6 h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
                    src={testimonials[activeIndex].companyLogo}
                  /> */}
                </div>
              </blockquote>
            </motion.div>

            {/* Navigation dots */}
            <div className="mt-10 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}