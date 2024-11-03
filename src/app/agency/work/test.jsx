"use client"
import React, { useState } from 'react';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="bg-neutral-800 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-lg">My Website</h1>
          <button onClick={toggleSidebar} className="text-white">
            Menu
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 bg-neutral-950 h-full shadow-lg z-50">
          <button onClick={toggleSidebar} className="text-white p-2">
            Close
          </button>
          <ul className="mt-4">
            <li className="text-white p-2 hover:bg-neutral-800">
              <a href="#about">About Us</a>
            </li>
            <li className="text-white p-2 hover:bg-neutral-800">
              <a href="#work">Work</a>
            </li>
            <li className="text-white p-2 hover:bg-neutral-800">
              <a href="#services">Services</a>
            </li>
            <li className="text-white p-2 hover:bg-neutral-800">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="p-4">
        <section id="about" className="my-8">
          <h2 className="text-xl">About Us</h2>
          <p>Your about us content here.</p>
        </section>
        <section id="work" className="my-8">
          <h2 className="text-xl">Work</h2>
          <p>Your work content here.</p>
        </section>
        <section id="services" className="my-8">
          <h2 className="text-xl">Services</h2>
          <p>Your services content here.</p>
        </section>
        <section id="contact" className="my-8">
          <h2 className="text-xl">Contact</h2>
          <p>Your contact information here.</p>
        </section>
      </div>
    </div>
  );
};

export default MyComponent;
