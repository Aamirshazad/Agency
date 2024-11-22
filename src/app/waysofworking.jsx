import React, { useState } from "react";

const servicesData = [
  {
    id: 1,
    title: "Agile development",
    description: "Cross-functional teams use iterative methods to ensure quality: Experience working with a wide variety of frameworks supported by DevOps practices, including Scrum, Kanban and Lean Management, means our teams ensure you maintain control over your products and development processes.",
    highlight: "01",
  },
  {
    id: 2,
    title: "Agile scope management & reporting",
    description:"Faster deployments, so you can focus on your core business: Our development teams gather the information and requirements to speed up releases and save your resources, while improving development, quickly enhancing products and operationalizing real-time data to drive your decision-making processes.",
    highlight: "02",
  },
 
  {
    id: 3,
    title: "DevOps mindset",
    description:
      "Software releases that reflect your business goals: Tailored automated deployment enables us to release features on a weekly basis, making deployments a routine part of software development processes. Practices: Continuous Integration, Continuous Deployment, Feature Toggles, Canary Releases",
    highlight: "03",
  },
  {
    id: 4,
    title: "User-centric design approach",
    description: "Engaging and intuitive products attract, retain and delight users User experience (UX) and user interface (UI) specialists use a variety of tools and strategies to design practical and user-friendly solutions.Practices: Idea Generation, Design Sprint, Design Thinking, Design Systems, Wireframing, User Testing, Competitive Audit.",
    highlight: "04",
  },
 
  {
    id: 5,
    title: "AI-driven engineering", 
    description: "Increase performance and maximize operational efficiency: Real-world practice with machine learning (ML), natural language processing (NLP) and emerging artificial intelligence (AI) tools means our teams can smoothly integrate evolutive AI solutions.Tools: GPT-4, GitHub Copilot, Microsoft 365 Copilot",
    highlight: "05",
  },
 
  {
    id: 7,
    title: "Continuous deployment", 
    description: "Speed up your release cycles: Our teams combine development strategies tailored to your needs with DevOps best practices and automated deployment pipelines to deliver new functionalities on a daily basis. A discovery development approach means we can rapidly release new versions to help you validate your business ideas.Practices: Lean Development, Silicon Valley Discovery Model Tools: Docker, Rancher, Kubernetes, Bamboo CI, TeamCity, Terraform, Ansible",
    highlight: "07",
  },
  
];

const  Wayofwork = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    
    <div className="flex flex-col md:flex-row gap-16 w-full max-w-5xl mx-auto mt-12">
      {/* Left Panel */}
      <div className="flex flex-col gap-4 w-full md:w-1/4">
        {servicesData.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service)}
            className={`text-left text-lg  px-4 py-2 border-l-4 ${
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
      <div className="w-full md:w-2/3 bg-gray-100 text-justify tracking-tighter p-8 rounded-lg shadow-lg">
        <h2 className="text-gray-300 text-6xl font-bold">{selectedService.highlight}</h2>
        <h3 className="text-4xl font-semibold text-orange-600 my-4">
          {selectedService.title}
        </h3>
        <p className="text-gray-800 text-base font-medium">{selectedService.description}</p>
        <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600">
          <a href="#">Learn more →</a>
        </button>
      </div>
    </div>
  );
};

export default Wayofwork;
