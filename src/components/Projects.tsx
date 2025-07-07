
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Relevant Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
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
