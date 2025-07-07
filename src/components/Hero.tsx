
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 hover:scale-110 transition-transform duration-300 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">PV</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300">
            PAVITHRA M V
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-300 mb-6 animate-fade-in animation-delay-200">
            Software Developer & Data Analyst
          </p>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Detail-oriented Software Developer skilled in designing efficient algorithms, 
            data transformations, and scalable solutions. Committed to driving organizational 
            success as a collaborative team player.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in animation-delay-600">
            <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Bengaluru, Karnataka 560068</span>
            </div>
            <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91 6361009538</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in animation-delay-800">
            <a
              href="mailto:pavithramv064@gmail.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a
              href="#"
              className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a
              href="#"
              className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
