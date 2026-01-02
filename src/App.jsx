import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, Code2, Brain, Database, Zap, Award } from 'lucide-react';

const LovablePortfolio = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      title: "AI Sugarcane Yield Prediction",
      description: "ML-powered agricultural intelligence system predicting crop yields using environmental data",
      tech: ["Python", "Scikit-learn", "Pandas"],
      icon: "🌱",
      category: "ai",
      gradient: "from-green-400 to-emerald-600",
      link: "https://github.com/Venkatesh-107"
    },
    {
      title: "Air Quality Prediction",
      description: "Real-time environmental monitoring with time-series forecasting models",
      tech: ["Python", "Streamlit", "ML"],
      icon: "🌍",
      category: "ai",
      gradient: "from-blue-400 to-cyan-600",
      link: "https://github.com/Venkatesh-107"
    },
    {
      title: "Healthcare RAG Chatbot",
      description: "Intelligent medical assistant using retrieval-augmented generation",
      tech: ["Python", "RAG", "NLP"],
      icon: "🏥",
      category: "ai",
      gradient: "from-red-400 to-pink-600",
      link: "https://github.com/Venkatesh-107"
    },
    {
      title: "Noise Pollution Monitor",
      description: "IoT-based real-time noise tracking with interactive map visualization",
      tech: ["JavaScript", "Firebase", "Leaflet"],
      icon: "🔊",
      category: "web",
      gradient: "from-purple-400 to-violet-600",
      link: "https://github.com/Venkatesh-107"
    }
  ];

  const skills = [
    { name: "Python", level: 90, icon: <Code2 size={20} />, color: "bg-yellow-500" },
    { name: "JavaScript", level: 85, icon: <Code2 size={20} />, color: "bg-yellow-400" },
    { name: "Machine Learning", level: 88, icon: <Brain size={20} />, color: "bg-purple-500" },
    { name: "RAG Systems", level: 82, icon: <Database size={20} />, color: "bg-blue-500" },
    { name: "Streamlit", level: 85, icon: <Zap size={20} />, color: "bg-red-500" },
    { name: "Firebase", level: 80, icon: <Database size={20} />, color: "bg-orange-500" },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-full mb-8 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Venkatesh
              </span>
            </h1>

            {/* Title */}
            <p className="text-3xl md:text-4xl font-bold text-white/90 mb-4">
              AI Engineer & ML Specialist
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Building intelligent systems that solve real-world problems in agriculture,
              healthcare, and environmental monitoring
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:Venkateshvenky4910@gmail.com"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center mt-12">
              {[
                { icon: <Github size={20} />, link: "https://github.com/Venkatesh-107" },
                { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/venkatesh-r107" },
                { icon: <Mail size={20} />, link: "mailto:Venkateshvenky4910@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-white/60 text-lg">Technologies I work with daily</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${skill.color} rounded-lg`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`h-full ${skill.color} rounded-full`}
                  />
                </div>
                <p className="text-sm text-white/40 mt-2 text-right">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-white/60 text-lg mb-8">Real-world applications making an impact</p>

            {/* Filter Tabs */}
            <div className="inline-flex gap-2 p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              {['all', 'ai', 'web'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${activeTab === tab
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'text-white/60 hover:text-white'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-6xl">{project.icon}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink size={20} className="text-purple-400" />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80"
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
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 mb-2">
            Open to internships, collaborative projects, and continuous learning
          </p>
          <p className="text-white/40 text-sm">
            © 2026 R. Venkatesh • Built with React & Tailwind CSS
          </p>
        </div>
      </footer>

      <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
    </div>
  );
};

export default LovablePortfolio;
