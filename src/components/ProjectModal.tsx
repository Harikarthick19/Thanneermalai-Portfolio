"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cream border-1.5 border-ink max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 hover:bg-ink hover:text-cream transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="font-syne text-4xl font-extrabold uppercase mb-4 tracking-tighter">
            {project.title}
          </h2>
          <p className="text-lg text-ink/70 mb-8">{project.fullDescription}</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-ink text-cream font-black text-xs uppercase tracking-[0.1em]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t-1.5 border-ink">
              <a
                href="#contact"
                className="inline-block bg-accent text-cream px-8 py-4 font-black uppercase tracking-[0.2em] text-sm hover:bg-ink transition-colors"
              >
                Interested? Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
