
import React from 'react';
import { Code, Database, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in animation-delay-200">
            <h3 className="text-2xl font-semibold text-white mb-6">Career Summary</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Detail-oriented Software Developer skilled in designing efficient algorithms, 
              data transformations, and scalable solutions. Proficient in multiple programming 
              languages and tools, committed to driving organizational success as a collaborative 
              team player.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently working as a Software Developer Trainee at Q-gate Infotech Private Limited, 
              where I focus on advanced data transformations, spatial computations, and 3D spatial 
              data analysis to enhance performance and precision in processing complex datasets.
            </p>
          </div>
          
          <div className="grid gap-6 animate-fade-in animation-delay-400">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer">
              <Code className="w-12 h-12 text-purple-400 mb-4 hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-semibold text-white mb-2">Software Development</h4>
              <p className="text-gray-300">
                Proficient in Python, C, C++, Java, and SQL with expertise in designing 
                efficient algorithms and scalable solutions.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer">
              <Database className="w-12 h-12 text-purple-400 mb-4 hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-semibold text-white mb-2">Data Analysis</h4>
              <p className="text-gray-300">
                Experienced in exploratory data analysis (EDA), machine learning, 
                and spatial data processing using Python and SQL.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer">
              <Cpu className="w-12 h-12 text-purple-400 mb-4 hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-semibold text-white mb-2">Technical Expertise</h4>
              <p className="text-gray-300">
                Specialized in 3D spatial data analysis, geometric computations, 
                and blockchain integration for secure platform development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
