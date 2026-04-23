"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    date: "Jun – Jul 2025",
    company: "Titan Company Limited, Hosur",
    role: "Digital Automation Technology Intern",
    description: "Spearheading initiatives in IIoT & MES/SCADA integration for manufacturing efficiency. Developed real-time data visualization pipelines for assembly line monitoring.",
  },
  {
    date: "Jan – Feb 2025",
    company: "Big Bucks Pvt Ltd, Chennai",
    role: "Cloud Computing Intern",
    description: "Optimized AWS cloud infrastructure and assisted in scalable deployment strategies. Worked on containerization and automated CI/CD pipelines.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b-1.5 border-ink bg-cream">
      <div className="max-w-7xl mx-auto border-x-1.5 border-ink">
        <div className="border-b-1.5 border-ink p-8 md:p-16 text-center">
          <h2 className="font-syne text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">
            Career <span className="text-accent underline decoration-8 underline-offset-8">Path</span>
          </h2>
        </div>

        <div>
          {experiences.map((exp, idx) => (
            <div key={exp.company} className="grid md:grid-cols-4 border-b-1.5 border-ink last:border-b-0 group hover:bg-white transition-colors duration-500">
               <div className="p-8 md:p-12 border-b-1.5 md:border-b-0 md:border-r-1.5 border-ink flex items-center md:justify-center group-hover:bg-accent group-hover:text-ink transition-all duration-700">
                  <span className="font-black uppercase tracking-[0.3em] text-xs underline underline-offset-8 decoration-2 decoration-accent group-hover:decoration-ink">
                    {exp.date}
                  </span>
               </div>
               <div className="md:col-span-3 p-8 md:p-16">
                  <motion.div
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: 20 }}
                     viewport={{ once: true }}
                  >
                    <h3 className="font-syne text-3xl md:text-4xl font-extrabold uppercase mb-4 tracking-tighter">{exp.company}</h3>
                    <p className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-8">{exp.role}</p>
                    <p className="text-lg md:text-xl max-w-3xl leading-relaxed opacity-80 font-medium">{exp.description}</p>
                  </motion.div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
