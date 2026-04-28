"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Project {
  title: string;
  category: string;
  number: string;
  description: string;
  tech: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-ink/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.98, opacity: 0 }}
          className="bg-cream w-full max-w-5xl border-1.5 border-ink overflow-auto max-h-[90vh] relative shadow-[20px_20px_0px_#FF4D1C] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button Top Right */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 border-1.5 border-ink bg-cream hover:bg-ink hover:text-cream transition-all z-50"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:grid md:grid-cols-2 divide-x-1.5 divide-ink min-h-[500px] overflow-hidden">
            {/* Left Side (50%) */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-zinc-50/20 overflow-hidden">
               <span className="font-syne text-5xl md:text-7xl opacity-10 mb-6 block pointer-events-none">
                 {project.number}
               </span>
               <div className="flex flex-wrap gap-2 mb-6">
                  {project.category.split(',').map(tag => (
                    <span key={tag} className="bg-accent text-cream text-[9px] font-black uppercase tracking-widest px-2 py-1">
                      {tag.trim()}
                    </span>
                  ))}
               </div>
               <h2 className="font-syne text-2xl md:text-[2.5rem] font-extrabold uppercase leading-tight tracking-tighter text-ink break-words overflow-hidden max-w-full">
                 {project.title}
               </h2>
            </div>
            
            {/* Right Side (50%) */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white/20 overflow-hidden">
              <div className="mb-10">
                <h3 className="font-black uppercase tracking-[0.3em] text-[10px] mb-4 text-ink opacity-30 border-b border-ink/10 pb-2">Analysis & Overview</h3>
                <p className="text-base md:text-lg leading-relaxed text-ink/80 font-medium">
                  {project.description}
                </p>
              </div>
              
              <div>
                <h3 className="font-black uppercase tracking-[0.3em] text-[10px] mb-4 text-ink opacity-30 border-b border-ink/10 pb-2">Technology Stack</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 border-1.5 border-ink text-[10px] font-black uppercase tracking-widest bg-white shadow-[3px_3px_0px_#0a0a0a]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
