"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Code } from "lucide-react";

export default function FreelanceServices() {
  const services = [
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "Beautiful and functional interface designs that users love.",
    },
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      description: "High-performance React and Next.js applications.",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Optimization",
      description: "Fast, efficient, and scalable web applications.",
    },
  ];

  return (
    <section className="border-b-1.5 border-ink bg-cream">
      <div className="max-w-7xl mx-auto border-x-1.5 border-ink p-8 md:p-20">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          <h2 className="font-syne text-5xl font-extrabold uppercase mb-16 tracking-tighter">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="border-1.5 border-ink p-8 bg-white/50 hover:bg-accent/10 transition-colors duration-300"
              >
                <div className="text-accent mb-6">{service.icon}</div>
                <h3 className="font-bold text-xl mb-4 uppercase">{service.title}</h3>
                <p className="text-lg leading-relaxed text-ink/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
