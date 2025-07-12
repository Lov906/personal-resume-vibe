
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'PAVITHRA M V';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Simple Avatar */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
          <span className="text-3xl font-bold text-white">PV</span>
        </div>

        {/* Typewriter Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {text}
          <span className="animate-pulse text-purple-400">|</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-purple-400 font-semibold mb-4">
          Software Developer & Data Analyst
        </p>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Crafting digital experiences with cutting-edge technology and innovative solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300">
            <Mail className="w-5 h-5 mr-2 inline" />
            Contact Me
          </button>
          <button className="px-6 py-3 border-2 border-purple-600 text-purple-400 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
            <Download className="w-5 h-5 mr-2 inline" />
            Download CV
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:pavithramv064@gmail.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="w-12 h-12 bg-gray-800 border border-purple-600/30 rounded-lg flex items-center justify-center hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-purple-400 hover:text-purple-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
