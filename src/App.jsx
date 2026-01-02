import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, Zap } from 'lucide-react';

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'Python', icon: <Code size={20} />, level: 90 },
    { name: 'JavaScript', icon: <Code size={20} />, level: 85 },
    { name: 'Machine Learning', icon: <Brain size={20} />, level: 88 },
    { name: 'RAG Systems', icon: <Database size={20} />, level: 82 },
    { name: 'Streamlit', icon: <Zap size={20} />, level: 85 },
    { name: 'Firebase', icon: <Database size={20} />, level: 80 },
  ];

  const projects = [
    {
      title: "AI Sugarcane Yield Prediction",
      description: "Machine learning project to predict sugarcane yield using soil and weather parameters.",
      tech: ["Python", "ML", "Pandas", "Scikit-learn"],
      icon: "🌱",
      link: "https://github.com/Venkatesh-107"
    },
    {
      title: "Air Quality Prediction System",
      description: "Forecasts air quality levels using weather data and time-series models.",
      tech: ["Python", "ML", "Streamlit"],
      icon: "🌍",
      link: "https://github.com/Venkatesh-107"
    },
    {
      title: "Healthcare RAG Chatbot",
      description: "Web application using RAG concepts to retrieve and answer healthcare queries.",
      tech: ["Python", "RAG", "Web App"],
      icon: "🏥",
      link: "https://github.com/Venkatesh-107"
    },
    {
      title: "Smart Noise Pollution Monitoring",
      description: "IoT-based system to measure and visualize noise levels using maps.",
      tech: ["JavaScript", "Firebase", "Leaflet.js"],
      icon: "🔊",
      link: "https://github.com/Venkatesh-107"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono mb-4">
                Available for Opportunities
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              R. Venkatesh
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4">
              AI Engineer & ML Specialist
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              Information Technology undergraduate passionate about building real-world AI applications
              for agriculture, healthcare, and environmental monitoring.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center mb-12">
              <a
                href="https://github.com/Venkatesh-107"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-cyan-500 transition-all duration-300"
              >
                <Github className="group-hover:text-cyan-400 transition-colors" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/venkatesh-r107"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-cyan-500 transition-all duration-300"
              >
                <Linkedin className="group-hover:text-cyan-400 transition-colors" size={24} />
              </a>
              <a
                href="mailto:Venkateshvenky4910@gmail.com"
                className="group relative p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-cyan-500 transition-all duration-300"
              >
                <Mail className="group-hover:text-cyan-400 transition-colors" size={24} />
              </a>
            </div>

            <a
              href="#projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                  />
                </div>
                <p className="text-sm text-slate-400 mt-2 text-right">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {project.icon}
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 rounded-lg hover:bg-cyan-500/20 transition-colors"
                    >
                      <ExternalLink size={18} className="text-cyan-400" />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            Open to internships, collaborative projects, and continuous learning.
          </p>
          <p className="text-slate-500 text-sm">
            © 2026 R. Venkatesh. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
