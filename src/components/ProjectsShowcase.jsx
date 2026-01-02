import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "AI Sugarcane Yield Prediction",
        description: "Machine learning project to predict sugarcane yield using soil and weather parameters, focused on agricultural decision support.",
        tech: ["Python", "ML", "Pandas", "Scikit-learn"],
        icon: "🌱",
        link: "https://github.com/Venkatesh-107"
    },
    {
        id: 2,
        title: "Air Quality Prediction System",
        description: "Forecasts air quality levels using weather data and time-series models for environmental monitoring.",
        tech: ["Python", "ML", "Streamlit"],
        icon: "🌍",
        link: "https://github.com/Venkatesh-107"
    },
    {
        id: 3,
        title: "Healthcare RAG Chatbot",
        description: "Simple web application using RAG concepts to retrieve and answer healthcare-related queries.",
        tech: ["Python", "RAG", "Web App"],
        icon: "🏥",
        link: "https://github.com/Venkatesh-107"
    },
    {
        id: 4,
        title: "Smart Noise Pollution Monitoring",
        description: "IoT-based system to measure and visualize noise levels using map-based visualization.",
        tech: ["JavaScript", "Firebase", "Leaflet.js"],
        icon: "🔊",
        link: "https://github.com/Venkatesh-107"
    }
];

const ProjectsShowcase = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="fixed bottom-20 left-8 z-50 pointer-events-auto">
            <div className="jarvis-glass p-4 rounded-lg jarvis-corner-border max-w-md">
                <div className="text-xs uppercase tracking-widest mb-3 text-[#00f3ff]">
                    📂 Featured_Projects
                </div>
                <div className="space-y-2">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="p-3 bg-black/40 border border-[#00f3ff]/20 rounded cursor-pointer hover:border-[#00f3ff]/60 transition-all"
                            onClick={() => window.open(project.link, '_blank')}
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">{project.icon}</span>
                                <div className="flex-1">
                                    <div className="text-[11px] font-bold text-[#00f3ff] uppercase tracking-wide">
                                        {project.title}
                                    </div>
                                    <div className="text-[9px] opacity-60 mt-1">
                                        {project.description}
                                    </div>
                                    <div className="flex gap-1 mt-2 flex-wrap">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[7px] px-2 py-0.5 bg-[#00f3ff]/10 border border-[#00f3ff]/30 rounded uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <ExternalLink size={12} className="opacity-40" />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-3 pt-3 border-t border-[#00f3ff]/10">
                    <a
                        href="https://github.com/Venkatesh-107?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[9px] uppercase tracking-widest text-[#00f3ff]/60 hover:text-[#00f3ff] transition-colors flex items-center gap-1"
                    >
                        <Github size={10} />
                        View All Repositories →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsShowcase;
