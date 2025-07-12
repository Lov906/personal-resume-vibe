
import React from 'react';
import { Code, Database, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Crafting Digital Excellence
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Software Developer specializing in cutting-edge technologies 
                and innovative solutions. With expertise in 3D spatial data analysis and 
                advanced algorithms, I transform complex challenges into elegant digital experiences.
              </p>
              <p>
                Currently pushing boundaries at Q-gate Infotech, where I design optimized 
                algorithms for spatial computations and geometric data processing, ensuring 
                scalability and precision in every project.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: '2+', label: 'Years Experience' },
                { number: '10+', label: 'Projects Completed' },
                { number: '5+', label: 'Technologies Mastered' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Cards */}
          <div>
            <div className="grid gap-6">
              {[
                {
                  icon: Code,
                  title: 'Software Development',
                  description: 'Expert in Python, Java, C++, and modern frameworks with a focus on scalable solutions.',
                },
                {
                  icon: Database,
                  title: 'Data Analysis',
                  description: 'Advanced EDA, machine learning, and spatial data processing expertise.',
                },
                {
                  icon: Cpu,
                  title: '3D Spatial Computing',
                  description: 'Specialized in geometric computations and 3D data visualization.',
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
