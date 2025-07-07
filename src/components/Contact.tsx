
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in animation-delay-200">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 text-lg mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Mail className="w-6 h-6 text-purple-400 mr-4 hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:pavithramv064@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    pavithramv064@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Phone className="w-6 h-6 text-purple-400 mr-4 hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+916361009538" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    +91 6361009538
                  </a>
                </div>
              </div>
              
              <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <MapPin className="w-6 h-6 text-purple-400 mr-4 hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Bengaluru, Karnataka 560068</p>
                </div>
              </div>
              
              <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Linkedin className="w-6 h-6 text-purple-400 mr-4 hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 animate-fade-in animation-delay-400">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:scale-105 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:scale-105 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:scale-105 transition-all duration-300"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-purple-500/20 animate-fade-in animation-delay-600">
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            © 2024 Pavithra M V. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
