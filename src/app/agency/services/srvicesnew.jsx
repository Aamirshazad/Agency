"use client";
import React from "react";

const ServicesCard = ({ icon, title, description, imageUrl = "" }) => {
  return (
    <div className="group relative w-80 h-64 flex-shrink-0 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Default State */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-orange-500 group-hover:opacity-0 transition-opacity duration-300">
        {/* White header section */}
        <div className="bg-white p-6 rounded-t-3xl mb-4">
          <div className="flex items-start">
            <div className="text-orange-500">{icon}</div>
            <h3 className="text-orange-500 font-medium ml-3">{title}</h3>
          </div>
        </div>
        {/* Description section */}
        <div className="px-6">
          <p className="text-white">{description}</p>
        </div>
      </div>

      {/* Hover State */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {imageUrl ? (
          <div className="relative h-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
              <h3 className="text-xl font-medium text-orange-500 flex items-center justify-between">
                {title}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </h3>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const ServicesSection3 = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Dedicated development teams",
      description: "Select from a global pool of experts that can ramp up or down according to your business goals.",
      imageUrl: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Custom software development",
      description: "Select from a global pool of experts that can ramp up or down according to your business goals.",
      imageUrl: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "AI-powered solutions",
      description: "Integrate AI solutions to transform your business processes and boost efficiency.",
      imageUrl: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2m0 0l2-2m-2 2V6m-6 4a2 2 0 104 0 2 2 0 10-4 0z"
          />
        </svg>
      ),
      title: "Cloud solutions",
      description: "Leverage cloud computing for scalable and secure infrastructure.",
      imageUrl: "https://images.pexels.com/photos/136403/pexels-photo-136403.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v8m4-4H8"
          />
        </svg>
      ),
      title: "Cybersecurity",
      description: "Protect your business with state-of-the-art cybersecurity solutions.",
      imageUrl: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h8m0 0v4m0-4V8"
          />
        </svg>
      ),
      title: "Data analytics",
      description: "Turn your data into actionable insights with advanced analytics.",
      imageUrl: "https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    // Add more services here (Example below)
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2m0 0l2-2m-2 2V6m-6 4a2 2 0 104 0 2 2 0 10-4 0z"
          />
        </svg>
      ),
      title: "Cloud solutions",
      description: "Leverage cloud computing for scalable and secure infrastructure.",
      imageUrl: "https://images.pexels.com/photos/136403/pexels-photo-136403.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v8m4-4H8"
          />
        </svg>
      ),
      title: "Cybersecurity",
      description: "Protect your business with state-of-the-art cybersecurity solutions.",
      imageUrl: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h8m0 0v4m0-4V8"
          />
        </svg>
      ),
      title: "Data analytics",
      description: "Turn your data into actionable insights with advanced analytics.",
      imageUrl: "https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServicesCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
        />
      ))}
    </div>
  );
};

export default ServicesSection3;
