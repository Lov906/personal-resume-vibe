
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Based Genuine Hospital Recommendation Using Blockchain",
      description: "Developed a secure platform for predicting hospital and treatment costs using AI, integrated with blockchain for fundraising and data integrity.",
      technologies: ["AI", "Blockchain", "Python", "Machine Learning"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Analysis & Aeroplane Game",
      description: "Built a weather data processing tool with a UI and designed a 2D obstacle-avoidance game.",
      technologies: ["Python", "UI Design", "Game Development", "Data Processing"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Relevant Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer animate-fade-in animation-delay-${(index + 1) * 200}`}>
              <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed hover:text-white transition-colors duration-300">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
