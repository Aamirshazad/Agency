"use client";
import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"; // Import icons from Heroicons

const CaseStudyCard = ({ author, date, title, buttonText, imageUrl, type }) => {
  return (
    <div className="relative w-80 h-96 flex-shrink-0 rounded-xl overflow-hidden shadow-lg  hover:shadow-2xl transition-transform transform hover:scale-105 group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x600";
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-4 text-white bg-gradient-to-t from-black via-transparent">
        {type && (
          <div className="bg-white text-black text-xs px-3 py-1 rounded-full inline-block font-medium mb-2">
            {type}
          </div>
        )}
        <h3 className="font-bold text-xl leading-tight mb-3">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
          <div className="flex items-center gap-2">
            {author && <span>{author}</span>}
            {date && <span className="ml-2 text-gray-400">{date}</span>}
          </div>
        </div>
        <button className="bg-orange-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CaseStudySection = () => {
  const caseStudies = [
    {
      author: "Catalin Arghiroiu",
      date: "2024/06/20",
      title: "How to Mitigate Shadow AI Risks in Software Development Life Cycles?",
      buttonText: "Read more",
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=500&q=80",
      type: "Guide",
    },
    {
      author: "On-Demand Webinar",
      date: "",
      title: "Data Security in Generative AI – Challenges & Best Practices",
      buttonText: "Get access",
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=500&q=80",
      type: "On-Demand",
    },
    {
      author: "Greg Goodwin",
      date: "2024/03/21",
      title:
        "How Telecommunications Operators Are Using AI to Boost Customer Experience",
      buttonText: "Read more",
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=500&q=80",
      type: "",
    },
    {
      author: "SoftwareMind Guide",
      date: "",
      title: "Choosing the Best Cloud Provider for AI Goals",
      buttonText: "Download",
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=500&q=80",
      type: "Guide",
    },
  ];

  // Ref for the scroll container
  const scrollContainerRef = useRef(null);

  // Function to scroll horizontally
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll amount
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative p-8">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition z-10"
      >
        <ChevronLeftIcon className="h-6 w-6" /> {/* Chevron left icon */}
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition z-10"
      >
        <ChevronRightIcon className="h-6 w-6" /> {/* Chevron right icon */}
      </button>

      {/* Case Studies Section */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-hidden scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={index}
            author={study.author}
            date={study.date}
            title={study.title}
            buttonText={study.buttonText}
            imageUrl={study.imageUrl}
            type={study.type}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudySection;
