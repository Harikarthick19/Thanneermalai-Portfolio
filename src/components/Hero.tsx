"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imageClicked, setImageClicked] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen pt-20 flex flex-col border-b-1.5 border-ink bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col md:grid md:grid-cols-2 border-x-1.5 border-ink">
        <div className="p-8 md:p-16 flex flex-col justify-center border-r-1.5 border-ink bg-white/50 relative overflow-hidden">
          <div 
            onClick={() => setImageClicked(!imageClicked)}
            className={`absolute inset-0 z-0 pointer-events-auto mix-blend-multiply cursor-pointer transition-all duration-300 ${
              imageClicked ? "opacity-100" : "opacity-70 blur-sm"
            }`}
          >
            <Image 
              src="/profile.jpg" 
              alt="Profile Background" 
              fill 
              className="object-cover object-center"
              priority
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-full overflow-hidden relative z-10"
          >
            <motion.div variants={itemVariants} className="overflow-hidden max-w-full">
              <h1 className="font-syne text-[clamp(1.8rem,5vw,3.2rem)] leading-[1.1] font-extrabold uppercase tracking-tighter mb-8 text-ink">
                THANNEER<br />
                MALAI <span className="text-accent underline decoration-4 decoration-ink/10 underline-offset-8">S.</span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl font-bold uppercase tracking-widest text-accent mb-6 leading-none">
                FrontEnd Developer & UI/UX Designer
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base md:text-lg max-w-md mb-10 leading-relaxed font-bold text-ink/70">
                Crafting bold, functional, and detail-oriented digital experiences. CS student at SVCE specializing in Artificial Intelligence &amp; Data Science.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link 
                href="#projects"
                className="group relative bg-ink text-cream px-10 py-5 uppercase font-black tracking-[0.2em] text-xs border-1.5 border-ink overflow-hidden transition-all duration-300 shadow-[6px_6px_0px_#FF4D1C] hover:shadow-none translate-y-[-4px] hover:translate-y-0"
              >
                View My Work
              </Link>
              <Link 
                href="#contact"
                className="group relative bg-white text-ink px-10 py-5 uppercase font-black tracking-[0.2em] text-xs border-1.5 border-ink overflow-hidden transition-all duration-300 shadow-[6px_6px_0px_#0a0a0a] hover:shadow-none translate-y-[-4px] hover:translate-y-0"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="bg-accent overflow-hidden flex flex-col justify-center items-center relative p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-green-50 border-1.5 border-green-600 rounded-full mb-8">
              <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(22,163,74,0.5)]" />
              <span className="text-green-800 text-[10px] font-black uppercase tracking-[0.2em]">Available for work</span>
            </div>
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold uppercase mb-6 leading-tight text-ink tracking-tight">
              Let&apos;s create something <br /> amazing together
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-ink/80 mb-8 max-w-xs">
              I&apos;m excited to collaborate on innovative projects. Let&apos;s talk about your next big idea.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-ink font-black uppercase tracking-[0.2em] text-xs hover:gap-4 transition-all duration-300 border-b-1.5 border-ink pb-2"
            >
              Get in touch <ArrowDown size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
