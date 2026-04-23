"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Layout, 
  Search, 
  Sparkles, 
  Wrench 
} from "lucide-react";

const skillCategories = [
  {
    icon: <Code2 size={40} />,
    title: "Frontend Dev",
    tags: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: <Palette size={40} />,
    title: "UI/UX Design",
    tags: ["Figma", "Interaction Design", "Wireframing", "Prototyping"],
  },
  {
    icon: <Layout size={40} />,
    title: "Architecture",
    tags: ["Component Design", "State Management", "Dynamic UI"],
  },
  {
    icon: <Search size={40} />,
    title: "Testing & QA",
    tags: ["UI Testing", "Debugging", "Performance Optimization"],
  },
  {
    icon: <Sparkles size={40} />,
    title: "AI Tools",
    tags: ["Prompt Engineering", "LLM Integration", "AI-assisted Dev"],
  },
  {
    icon: <Wrench size={40} />,
    title: "Tools",
    tags: ["Git", "VS Code", "MongoDB", "AWS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b-1.5 border-ink bg-ink text-cream">
      <div className="max-w-7xl mx-auto border-x-1.5 border-cream/20 p-8 md:p-20">

        <h2 className="font-syne text-4xl md:text-6xl font-extrabold uppercase mb-20 tracking-tighter text-center">
           Expertise <span className="text-accent">&</span> Stack
        </h2>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-1.5 border-cream/10 p-10 hover:border-accent transition-all duration-500 hover:bg-cream/5 group"
            >
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-8">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-cream/5 border border-cream/10 text-[10px] font-black uppercase tracking-[0.2em] text-cream/60 group-hover:text-cream group-hover:border-accent/40 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
