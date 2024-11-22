"use client"
import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const industries = [
  {
    title: {
      main: "Biotech & Healthcare",
      secondary: ""
    },
    description:
      "With drug discovery and development, custom AI chatbots tailored to patients’ needs, and medical image analysis, AI & ML will introduce customized features, optimize performance, and modernize legacy data management that exceed current biotech and healthcare standards.",
    image:
      "https://images.pexels.com/photos/4031654/pexels-photo-4031654.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-white"
  },
  {
    title: {
      main: "Manufacturing and product design ",
      secondary: ""
    },
    description:
      "Integrate AI & ML into your manufacturing solutions to improve their efficiency and enable your company to benefit from preventive and predictive maintenance. Transform your operations with AI & ML while keeping pace with technological innovations.",
    image:
      "https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-slate-50"
  },
  {
    title: {
      main: "Finance & accounting",
      secondary: ""
    },
    description:
      "Enhance financial forecasting and analysis by leveraging AI-generated insights. Automate the generation of financial reports and audits, as well as streamline accounting processes.",
    image:
      "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-white"
  },
  {
    title: {
      main: "Real Estate & Property Management",
      secondary: ""
    },
    description:
      "Leverage our AI solutions for property valuation, market trend analysis, and predictive maintenance. We provide intelligent tools for tenant management, virtual property tours, and customer engagement, making real estate operations smarter and more efficient.",
    image:
      "https://images.pexels.com/photos/4161619/pexels-photo-4161619.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-slate-50"
  },
  {
    title: {
      main: "Data analytics",
      secondary: ""
    },
    description:
      "Extract insights from datasets and uncover patterns and trends that inform business decisions. Examine customer behavior and preferences to create personalized product recommendations.",
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    <div className="relative h-[60vh] w-4/5 ml-24 rounded-3xl bg-transparent overflow-hidden">
      {/* Navigation Arrows */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent z-20 flex flex-col items-center">
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
            className={`absolute h-full w-full flex items-center ${industry.bgColor}`}
            style={{ top: `${index * 100}%` }}
          >
            <div className="grid w-full grid-cols-[45%_50%] h-full">
              {/* Left Image Section */}
              <div className="relative h-full w-full">
                <img
                  src={industry.image}
                  alt="Industry visualization"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>

              {/* Right Content Section */}
              <div className="flex flex-col justify-start mt-6 px-10">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-orange-500">
                  {industry.title.main}
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-800">
                  {industry.description}
                </p>
                <button className="group flex w-fit items-center text-base font-medium text-gray-600">
                  Learn more
                  <span className="ml-2 text-orange-500 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySlider;
