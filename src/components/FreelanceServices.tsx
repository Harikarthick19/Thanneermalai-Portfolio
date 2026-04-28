"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description: "Expertise in Figma, high-fidelity prototyping, user flows, and creating intuitive visual languages for complex digital products.",
  },
  {
    title: "Web Development",
    description: "Building fast, SEO-optimized, and fully responsive web applications using React.js, Next.js, and modern CSS architectures.",
  },
  {
    title: "Design Audit & Review",
    description: "Deep-dives into existing products to identify UX friction, accessibility gaps, and visual inconsistencies with actionable feedback.",
  },
  {
    title: "AI-Assisted Dev",
    description: "Leveraging LLMs and custom prompt engineering to accelerate development cycles and integrate intelligent features into your apps.",
  },
];

export default function FreelanceServices() {
  return (
    <section id="freelance" className="border-b-1.5 border-ink bg-cream text-ink">
      <div className="max-w-7xl mx-auto border-x-1.5 border-ink">
        <div className="p-8 md:p-16 border-b-1.5 border-ink">
          <h2 className="font-syne text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-center md:text-left">
             Creative <span className="text-accent underline decoration-4 underline-offset-8">Solutions</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-cream p-10 md:p-14 hover:bg-accent group transition-all duration-500 cursor-default"
            >
              <h3 className="font-syne text-2xl md:text-4xl font-extrabold uppercase mb-6 group-hover:text-ink leading-tight tracking-tighter">
                {service.title}
              </h3>
              <p className="text-ink/60 group-hover:text-ink/80 text-base md:text-lg leading-relaxed transition-colors duration-500 font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
