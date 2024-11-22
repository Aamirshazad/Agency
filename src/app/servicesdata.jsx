import React, { useState } from "react";

const servicesData = [
  {
    id: 1,
    title: "Intelligent Chatbots & Virtual Assistants",
    description: "Develop advanced conversational AI agents for customer support, lead generation, and service automation, ensuring 24/7 interaction and improved user engagement.",
    highlight: "01",
  },
  {
    id: 2,
    title: "Custom AI SaaS Applications",
    description:
      "Build tailored AI-driven SaaS solutions to address specific business challenges, such as predictive analytics, inventory management, and personalized marketing automation.",
    highlight: "02",
  },
  {
    id: 3,
    title: "Intelligent Workflow Automation",
    description: "Combine CRM/SaaS with tools like Zapier or Integromat to automate workflows across platforms like email, Slack, and billing systems.",
    highlight: "03",
  },
  {
    id: 4,
    title: "AI Model Development and Fine-Tuning",
    description:
      "Build and fine-tune AI models tailored to specific use cases, ensuring high performance and accuracy. Specialize in custom training for models like GPT, Stable Diffusion, or TensorFlow for business-specific tasks.",
    highlight: "04",
  },
  {
    id: 5,
    title: "End-to-End AI System Deployment",
    description: "Provide full-cycle deployment of AI solutions, from system design and development to implementation and ongoing maintenance, ensuring seamless integration with your infrastructure.",
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
                : "border-transparent text-neutral-500 font-semibold hover:text-gray-800 hover:bg-slate-700"
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
