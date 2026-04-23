"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI Chat Application",
      description: "A modern chat application powered by AI",
      image: "/project1.jpg",
      tags: ["React", "AI", "TypeScript"],
      fullDescription: "An advanced AI-powered chat application with real-time messaging and intelligent responses.",
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis",
      image: "/project2.jpg",
      tags: ["Next.js", "Charts", "Analytics"],
      fullDescription: "A comprehensive data visualization platform with interactive charts and real-time analytics.",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution",
      image: "/project3.jpg",
      tags: ["Next.js", "Stripe", "Database"],
      fullDescription: "A complete e-commerce platform with product management, checkout, and payment integration.",
    },
  ];

  return (
    <section id="projects" className="border-b-1.5 border-ink bg-cream">
      <div className="max-w-7xl mx-auto border-x-1.5 border-ink p-8 md:p-20">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          <h2 className="font-syne text-5xl font-extrabold uppercase mb-16 tracking-tighter">
            Featured <span className="text-accent underline decoration-4 underline-offset-8">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
                className="border-1.5 border-ink bg-white/50 overflow-hidden cursor-pointer hover:shadow-[8px_8px_0px_#FF4D1C] transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="text-accent font-black text-2xl">{project.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 uppercase">{project.title}</h3>
                  <p className="text-sm text-ink/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-ink/10 text-xs font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
