import React from 'react';
import { Cpu, Code, Database, MessageSquare, Image, Settings, Cloud, Shield, BarChart } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Cpu className="w-12 h-12 text-indigo-500" />,
      title: 'AI Development & Integration',
      description: 'Building intelligent systems tailored to your business needs using state-of-the-art AI technologies.',
      link: '/services/ai-development'
    },
    {
      icon: <Code className="w-12 h-12 text-blue-500" />,
      title: 'Custom AI Agents & Chatbots',
      description: 'Creating custom AI agents to improve customer interaction and streamline your processes.',
      link: '/services/ai-chatbots'
    },
    {
      icon: <Database className="w-12 h-12 text-teal-500" />,
      title: 'Data Services & MLOps',
      description: 'Ensuring reliable data pipelines and optimized machine learning operations for seamless AI deployment.',
      link: '/services/data-mlops'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-500" />,
      title: 'Generative AI Writing & Editing',
      description: 'Harnessing AI to generate and edit content, saving time and enhancing creativity.',
      link: '/services/ai-writing'
    },
    {
      icon: <Image className="w-12 h-12 text-pink-500" />,
      title: 'Generative AI Art & Video',
      description: 'Creating AI-generated visuals and videos for impactful brand representation.',
      link: '/services/ai-art-video'
    },
    {
      icon: <Settings className="w-12 h-12 text-green-500" />,
      title: 'AI Model Development',
      description: 'Developing custom AI models to meet the unique demands of your industry and goals.',
      link: '/services/ai-models'
    },
    {
      icon: <Cloud className="w-12 h-12 text-yellow-500" />,
      title: 'Cloud AI Solutions',
      description: 'Deploying scalable AI solutions on cloud platforms for accessibility and performance optimization.',
      link: '/services/cloud-ai'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'AI Security & Compliance',
      description: 'Implementing secure and compliant AI systems to protect data and ensure regulatory adherence.',
      link: '/services/ai-security'
    },
    {
      icon: <BarChart className="w-12 h-12 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Leveraging data to provide predictive insights that drive business decisions and strategies.',
      link: '/services/predictive-analytics'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-12 bg-gradient-to-r from-indigo-400 to-blue-600 text-transparent bg-clip-text animate-fade-in">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="p-8 bg-white/5 rounded-xl backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-300">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
