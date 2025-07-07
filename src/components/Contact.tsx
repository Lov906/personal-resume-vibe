
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 text-lg mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-400 mr-4" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:pavithramv064@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                    pavithramv064@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-purple-400 mr-4" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+916361009538" className="text-gray-300 hover:text-purple-400 transition-colors">
                    +91 6361009538
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Bengaluru, Karnataka 560068</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 text-purple-400 mr-4" />
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-700 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-purple-500/20">
          <p className="text-gray-400">
            © 2024 Pavithra M V. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
