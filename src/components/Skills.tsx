"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Design", items: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"] },
    { category: "Languages", items: ["JavaScript", "Python", "Java", "SQL"] },
    { category: "Tools", items: ["Git", "VS Code", "Chrome DevTools", "Vercel", "Netlify"] },
  ];

  return (
    <section id="skills" className="border-b-1.5 border-ink bg-cream">
      <div className="max-w-7xl mx-auto border-x-1.5 border-ink p-8 md:p-20">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          <h2 className="font-syne text-5xl font-extrabold uppercase mb-16 tracking-tighter">
            Skills <span className="text-accent underline decoration-4 underline-offset-8">&amp; Tools</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="border-1.5 border-ink p-8 bg-white/50">
                <h3 className="font-bold uppercase text-lg mb-6 tracking-widest text-accent">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, sidx) => (
                    <span key={sidx} className="px-4 py-2 bg-ink text-cream font-black text-xs uppercase tracking-[0.1em] rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
