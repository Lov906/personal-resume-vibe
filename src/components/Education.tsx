
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "T John Institute of Technology",
      location: "Bangalore, Karnataka",
      degree: "B.E. in Computer Science and Engineering",
      duration: "August 2020 - July 2024",
      cgpa: "8.43"
    },
    {
      institution: "NMKRV PU College",
      location: "Bangalore, Karnataka",
      degree: "Pre-University Course (PCMCs)",
      duration: "October 2018 - May 2020",
      percentage: "73.8%"
    },
    {
      institution: "St Joseph Public School",
      location: "Bangalore, Karnataka",
      degree: "High School",
      duration: "April 2018",
      percentage: "89.6%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">{edu.institution}</h4>
                  <p className="text-gray-400">{edu.location}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="flex items-center justify-end mb-2">
                    <Calendar className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-purple-300 font-medium">{edu.duration}</span>
                  </div>
                  {edu.cgpa && (
                    <div className="flex items-center justify-end">
                      <GraduationCap className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-white font-semibold">CGPA: {edu.cgpa}</span>
                    </div>
                  )}
                  {edu.percentage && (
                    <div className="flex items-center justify-end">
                      <GraduationCap className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-white font-semibold">Percentage: {edu.percentage}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
