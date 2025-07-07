
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Q-gate Infotech Private Limited",
      location: "Bengaluru, Karnataka",
      position: "Software Developer Trainee",
      duration: "November 2024 - Present",
      responsibilities: [
        "Designed and implemented optimized algorithms for advanced data transformations and spatial computations, enhancing performance and precision in processing complex datasets.",
        "Worked on projects involving 3D spatial data analysis and geometric computations, ensuring scalability and accuracy in deliverables."
      ]
    },
    {
      company: "AI Bricks",
      location: "Bengaluru, Karnataka",
      position: "Data Analyst Intern",
      duration: "October 2023 - April 2024",
      responsibilities: [
        "Performed exploratory data analysis (EDA) on large datasets using Python and SQL, identifying key patterns and trends to enhance model accuracy and system reliability."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 md:mb-16 animate-fade-in animation-delay-${(index + 1) * 200}`}>
              <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-slate-900 absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10 hover:scale-125 transition-transform duration-300"></div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-purple-300 font-medium">{exp.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-300 transition-colors duration-300">{exp.position}</h3>
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center mb-4">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                    
                    <ul className="text-gray-300 space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start hover:text-white transition-colors duration-300">
                          <span className="text-purple-400 mr-2 mt-2">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
