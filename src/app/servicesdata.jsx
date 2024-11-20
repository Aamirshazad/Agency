import React, { useState } from "react";

const servicesData = [
  {
    id: 1,
    title: "Generative AI",
    description: "Create intelligent systems that generate text, images, and videos We apply AI to optimize and revitalize your business, driving efficiency, innovation, and new growth opportunities for your business.",
    highlight: "01",
  },
  {
    id: 2,
    title: "UX & UI Design",
    description:
      "Deliver rewarding user experiences with intuitive and engaging user interfaces We apply AI to optimize and revitalize your business, driving efficiency, innovation, and new growth opportunities for your business.",
    highlight: "02",
  },
  {
    id: 3,
    title: "Cloud Consulting",
    description: "Optimize your cloud solutions for scalability and performance.",
    highlight: "03",
  },
  {
    id: 4,
    title: "Cloud Engineering",
    description:
      "Develop robust cloud infrastructures tailored to your business needs.",
    highlight: "04",
  },
  {
    id: 5,
    title: "Data Science",
    description: "Extract insights from data for strategic decision-making.",
    highlight: "05",
  },
];

const ServicesSection2 = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto mt-12">
      {/* Left Panel */}
      <div className="flex flex-col gap-4 w-full md:w-1/3">
        {servicesData.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service)}
            className={`text-left px-4 py-2 border-l-4 ${
              selectedService.id === service.id
                ? "border-orange-500 text-orange-500 font-bold"
                : "border-transparent text-gray-200 font-semibold hover:text-gray-800 hover:bg-slate-700"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-gray-300 text-6xl font-bold">{selectedService.highlight}</h2>
        <h3 className="text-3xl font-semibold text-orange-600 my-4">
          {selectedService.title}
        </h3>
        <p className="text-gray-600">{selectedService.description}</p>
        <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600">
          Learn more →
        </button>
      </div>
    </div>
  );
};

export default ServicesSection2;
