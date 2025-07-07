
import React from 'react';
import { Code, Database, Tool, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "C++", "Java", "SQL"]
    },
    {
      title: "Web Development",
      icon: Database,
      skills: ["HTML", "CSS"]
    },
    {
      title: "Tools & Platforms",
      icon: Tool,
      skills: ["PyCharm", "VS Code", "Jupyter Notebook", "Power BI", "Git", "NetBeans IDE", "Ganache"]
    },
    {
      title: "Domains",
      icon: Database,
      skills: ["Data Analytics", "Machine Learning", "Web Development", "Spatial Data Processing"]
    }
  ];

  const certifications = [
    "Python",
    "Data Analyst"
  ];

  const achievements = [
    "Active participant in 'Sentinel Hack' 3.0 and 4.0 (2022, 2023)"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <category.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Award className="w-6 h-6 text-purple-400 mr-2" />
              Certifications
            </h3>
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">•</span>
                  {cert}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Award className="w-6 h-6 text-purple-400 mr-2" />
              Achievements
            </h3>
            <div className="space-y-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
