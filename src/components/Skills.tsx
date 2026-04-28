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
    <section id="skills" className="border-b-1.5 border-ink bg-cream text-ink">
      <div className="max-w-7xl mx-auto border-x-1.5 border-ink p-8 md:p-20">

        <h2 className="font-syne text-4xl md:text-6xl font-extrabold uppercase mb-20 tracking-tighter text-center">
           Expertise & Stack
        </h2>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-1.5 border-ink p-8 bg-cream transition-all duration-500 hover:border-accent hover:bg-white group shadow-[12px_12px_0px_#0a0a0a] hover:shadow-none translate-y-[-4px] hover:translate-y-0"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                {cat.icon}
              </div>
              <h3 className="font-syne text-xl font-extrabold uppercase tracking-tight mb-6 leading-tight">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map(tag => (
                  <span key={tag} className="font-syne px-3 py-1 bg-ink/5 border-1.5 border-ink/20 text-[8px] font-bold uppercase tracking-widest text-ink/80 group-hover:text-ink group-hover:border-accent/60 transition-all duration-300">
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
