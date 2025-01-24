import React from 'react';
import { Code, Database, Brain, Terminal, Cpu, LineChart, GitBranch, Globe, Layers, Rocket, MessageSquare, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold">TechSolutions</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
              <a href="#work" className="text-gray-600 hover:text-indigo-600">Work</a>
              <a href="#process" className="text-gray-600 hover:text-indigo-600">Process</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </nav>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming Data into 
              <span className="text-indigo-300"> Intelligent Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert data science and software development services to drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                View Projects
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-600">
              Comprehensive solutions in data science and software development
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Machine Learning",
                description: "Custom ML solutions for complex business problems"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Data Analytics",
                description: "Transform raw data into actionable insights"
              },
              {
                icon: <Terminal className="w-8 h-8" />,
                title: "Software Development",
                description: "Scalable and efficient software solutions"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "AI Integration",
                description: "Intelligent automation and AI-powered systems"
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Predictive Analytics",
                description: "Future-focused data modeling and forecasting"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "Cloud Solutions",
                description: "Robust cloud infrastructure and deployment"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition group">
                <div className="text-indigo-600 mb-4 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="inline-flex items-center text-indigo-600 hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Discovery",
                description: "Understanding your needs and objectives"
              },
              {
                icon: <Layers className="w-12 h-12" />,
                title: "Planning",
                description: "Detailed roadmap and architecture design"
              },
              {
                icon: <Terminal className="w-12 h-12" />,
                title: "Development",
                description: "Agile implementation and testing"
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Deployment",
                description: "Smooth launch and continuous support"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-indigo-600 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
                title: "AI-Powered Analytics Dashboard",
                category: "Machine Learning"
              },
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
                title: "Predictive Market Analysis",
                category: "Data Science"
              },
              {
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
                title: "Enterprise Software Platform",
                category: "Development"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                  <span className="text-indigo-400 text-sm mb-2">{project.category}</span>
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing Together</h2>
              <p className="text-indigo-200 mb-8">
                Ready to transform your ideas into reality? Get in touch with us to discuss your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MessageSquare className="w-6 h-6 text-indigo-400" />
                  <span>contact@techsolutions.dev</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-indigo-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-indigo-300"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-indigo-300"
                ></textarea>
                <button className="w-full bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-indigo-50 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-6 h-6 text-indigo-400" />
                <span className="text-xl font-bold">TechSolutions</span>
              </div>
              <p className="text-indigo-300">
                Transforming businesses through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-indigo-300">
                <li><a href="#" className="hover:text-white">Machine Learning</a></li>
                <li><a href="#" className="hover:text-white">Data Analytics</a></li>
                <li><a href="#" className="hover:text-white">Software Development</a></li>
                <li><a href="#" className="hover:text-white">Cloud Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-indigo-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Projects</a></li>
                <li><a href="#" className="hover:text-white">Process</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-indigo-400 hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-indigo-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-indigo-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-indigo-900 mt-12 pt-8 text-center text-indigo-400">
            <p>&copy; 2024 TechSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;