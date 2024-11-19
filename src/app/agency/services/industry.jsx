"use client"
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const industries = [
  {
    title: {
      main: "BIOTECH",
      secondary: "HEALTHCARE"
    },
    description: "Empower your organization with AI and digital tools to maximize the output of your R&D.",
    image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-white"
  },
  {
    title: {
      main: "FINANCE",
      secondary: "BANKING"
    },
    description: "Transform your financial operations with cutting-edge AI solutions for improved efficiency.",
    image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-slate-50"
  },
  {
    title: {
      main: "RETAIL",
      secondary: "E-COMMERCE"
    },
    description: "Enhance customer experience and streamline operations with AI-powered solutions.",
    image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-white"
  },
  {
    title: {
      main: "MANUFACTURING",
      secondary: "LOGISTICS"
    },
    description: "Optimize production processes and supply chain with smart automation solutions.",
    image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-slate-50"
  },
  {
    title: {
      main: "EDUCATION",
      secondary: "LEARNING"
    },
    description: "Revolutionize learning experiences with adaptive AI technology and digital platforms.",
    image: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-white"
  }
];

const IndustrySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    if (sliding) return;
    setSliding(true);
    setActiveIndex((prev) => (prev + 1) % industries.length);
    setTimeout(() => setSliding(false), 500);
  };

  const handlePrev = () => {
    if (sliding) return;
    setSliding(true);
    setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);
    setTimeout(() => setSliding(false), 500);
  };

  return (
    <div className="relative h-[50vh] w-4/5 ml-16  rounded-3xl bg-transparent overflow-hidden"> {/* Changed height to 90vh and width to 4/5 */}
      {/* Navigation Arrows */}
      <div className="absolute right-1 top-1/3 bg-transparent z-20 flex flex-col items-center"> {/* Adjusted top position */}
        <button
          onClick={handlePrev}
          className="mb-2 rounded-none bg-transparent p-4 text-orange-500 transition-transform hover:translate-y-[-2px]"
          aria-label="Previous slide"
        >
          <ChevronUp className="h-12 w-12" />
        </button>
        <button
          onClick={handleNext}
          className="rounded-none bg-transparent p-4 text-orange-500 transition-transform hover:translate-y-[2px]"
          aria-label="Next slide"
        >
          <ChevronDown className="h-12 w-12" />
        </button>
      </div>

      {/* Slides Container */}
      <div 
        className="relative h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${activeIndex * 100}%)` }}
      >
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`absolute h-full w-full ${industry.bgColor}`}
            style={{ top: `${index * 100}%` }}
          >
            <div className="flex h-full items-center">
              <div className="grid w-full grid-cols-[45%_55%]">
                {/* Left Image Section */}
                <div className="relative h-full">
                  <img
                    src={industry.image}
                    alt="Industry visualization"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent mix-blend-overlay" />
                </div>

                {/* Right Content Section */}
                <div className="flex flex-col justify-center px-7 mr-6"> {/* Reduced padding */}
                  <h2 className="mb-4 text-3xl font-bold tracking-tight"> {/* Reduced text size and margin */}
                    <span className="text-gray-800">{industry.title.main}</span>
                    {" & "}
                    <span className="text-orange-500">{industry.title.secondary}</span>
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-gray-800"> {/* Reduced text size and margin */}
                    {industry.description}
                  </p>
                  <button className="group flex w-fit items-center text-base font-medium text-gray-600"> {/* Reduced text size */}
                    Learn more
                    <span className="ml-2 text-orange-500 transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySlider;