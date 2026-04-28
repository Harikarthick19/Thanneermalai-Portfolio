"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "AI Vaccine Distribution System",
    category: "AI, ML, Python, Health",
    number: "01",
    description: "A comprehensive AI-driven ecosystem designed to tackle global vaccine logistics, featuring demand forecasting and real-time distribution tracking.",
    tech: ["Python", "TensorFlow", "FastAPI"],
  },
  {
    title: "Realtime Bin Tracing (Titan MES)",
    category: "IIoT, SCADA, MES, Automation",
    number: "02",
    description: "Factory-floor tracking system utilizing IIoT sensors and SCADA integration to trace bin movements across the production line in real-time.",
    tech: ["MQTT", "Node.js", "Grafana"],
  },
  {
    title: "Deepfake Video Detection",
    category: "AI, ML, Computer Vision",
    number: "03",
    description: "Security platform that identifies digital video manipulations using a hybrid CNN-LSTM architecture to combat disinformation and identity theft.",
    tech: ["PyTorch", "OpenCV", "LSTM"],
  },
  {
    title: "SVCE Seat Finder",
    category: "React, Web App, UI/UX",
    number: "04",
    description: "Lightweight application for students to locate available library seating in real-time using interactive floor plans and fast response times.",
    tech: ["React.js", "Firebase", "Tailwind"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="border-b-1.5 border-ink bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto border-x-1.5 border-ink">
        {/* Header - Cleaned up */}
        <div className="p-10 md:p-12 border-b-1.5 border-ink text-center">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold uppercase tracking-tighter">
              Featured <span className="text-accent underline decoration-4 underline-offset-8">Projects</span>
            </h2>
        </div>
        
        {/* Proper 2x2 Grid Layout with robust lines */}
        <div className="grid md:grid-cols-2 gap-px bg-ink border-b-1.5 border-ink">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col p-8 md:p-12 bg-cream hover:bg-ink transition-all duration-500 cursor-pointer min-h-[450px] relative overflow-hidden"
            >
              {/* Top Row: Number & View Icon */}
              <div className="flex justify-between items-start mb-8 w-full">
                <span className="text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-70 group-hover:text-cream transition-colors duration-500">
                  {project.number}
                </span>
                <div className="p-2 border-1.5 border-ink/30 group-hover:border-cream/50 group-hover:text-cream transition-all duration-500">
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                </div>
              </div>
              
              {/* Content Area */}
              <div className="flex flex-col flex-1">
                <h3 className="font-syne text-2xl md:text-[2.2rem] font-extrabold uppercase mb-6 leading-tight tracking-tighter group-hover:text-cream transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-sm md:text-lg opacity-70 font-medium group-hover:text-cream/90 border-l-4 border-accent pl-6 mb-12 leading-relaxed transition-all duration-500">
                  {project.description}
                </p>
                
                {/* Fixed Bottom Tags */}
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.tech.map(tag => (
                    <span 
                      key={tag} 
                      className="px-4 py-1.5 border-1.5 border-ink/40 text-[10px] font-black uppercase tracking-[0.2em] text-ink group-hover:text-white group-hover:border-white/60 transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
