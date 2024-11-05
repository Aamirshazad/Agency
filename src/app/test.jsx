"use client"
import React from 'react';
import { Cpu, Code, Database, MessageSquare, Image, Settings, Cloud, Shield, BarChart } from 'lucide-react';

export default function HeroSectionWithServices() {
  const services = [
    { icon: <Cpu className="w-8 h-8 text-indigo-500" />, title: 'AI Development', link: '/services/ai-development' },
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: 'Custom Chatbots', link: '/services/ai-chatbots' },
    { icon: <Database className="w-8 h-8 text-teal-500" />, title: 'Data Services', link: '/services/data-mlops' },
    { icon: <MessageSquare className="w-8 h-8 text-purple-500" />, title: 'AI Writing', link: '/services/ai-writing' },
    { icon: <Image className="w-8 h-8 text-pink-500" />, title: 'AI Art & Video', link: '/services/ai-art-video' },
    { icon: <Settings className="w-8 h-8 text-green-500" />, title: 'Model Development', link: '/services/ai-models' },
    { icon: <Cloud className="w-8 h-8 text-yellow-500" />, title: 'Cloud AI', link: '/services/cloud-ai' },
    { icon: <Shield className="w-8 h-8 text-red-500" />, title: 'AI Security', link: '/services/ai-security' },
    { icon: <BarChart className="w-8 h-8 text-orange-500" />, title: 'Predictive Analytics', link: '/services/predictive-analytics' },
  ];

  return (
    <div className=''>
      {/* Services Bar Section */}
      <section className="relative overflow-hidden py-4 bg-slate-900">
        <div className="flex overflow-x-auto hide-scrollbar">
          <div className="flex animate-scroll gap-8">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="flex-shrink-0 w-48 h-20 bg-white/5 rounded-lg border border-white/10 backdrop-blur-lg shadow-lg flex flex-col items-center justify-center text-white transition-transform hover:scale-105"
              >
                {service.icon}
                <span className="mt-2 text-sm font-medium">{service.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
