"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed left-0 right-0  z-50 pt-6 transition-all duration-300 ${
            isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg rounded-t-3xl' : 'bg-transparent'
        }`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <a 
                            aria-label="Home" 
                            href="/" 
                            className="group/logo relative flex items-center transition-transform duration-300 hover:scale-105"
                        >
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                                Nexus<span className="text-blue-600">AI</span>
                            </span>
                        </a>

                        <div className="flex items-center gap-x-8">
                            {/* Desktop Navigation */}
                            <nav className="hidden gap-x-8 text-sm font-semibold leading-6 lg:flex">
                                {[
                                    ['Home', '/'],
                                    ['About Us', '/about'],
                                    ['Services', '/services'],
                                    ['Portfolio', '/portfolio'],
                                    ['Blog', '/blog'],
                                    ['Contact Us', '/contact'],
                                ].map(([label, href]) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="relative text-gray-700 transition-colors duration-300 hover:text-blue-600 group"
                                    >
                                        {label}
                                        <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                                    </a>
                                ))}
                            </nav>

                            {/* Call to Action Button */}
                            <a
                                href="https://app.example.com"
                                className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-200 active:scale-95"
                            >
                                Get Started
                            </a>

                            {/* Mobile Menu Button */}
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 lg:hidden"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div
                        className={`lg:hidden transition-all duration-300 ease-in-out ${
                            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                    >
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {[
                                ['Home', '/'],
                                ['About Us', '/about'],
                                ['Services', '/services'],
                                ['Portfolio', '/portfolio'],
                                ['Blog', '/blog'],
                                ['Contact Us', '/contact'],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            ))}
                            <div className="px-3 py-3">
                                <a
                                    href="https://app.example.com"
                                    className="block w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg hover:shadow-blue-200 active:scale-95 transition-all duration-300"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}