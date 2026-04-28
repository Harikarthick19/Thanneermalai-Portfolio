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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="min-h-screen pt-16 md:pt-20 flex flex-col border-b-1.5 border-ink bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col md:grid md:grid-cols-2 border-x-1.5 border-ink">
        {/* Left Column - Name & CTA */}
        <div className="p-6 md:p-16 flex flex-col justify-center border-b-1.5 md:border-b-0 md:border-r-1.5 border-ink bg-white/50 relative overflow-hidden min-h-[500px] md:min-h-0">
          
          {/* Background Photo */}
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
            className="w-full max-w-full overflow-hidden relative z-20"
          >
            <motion.div variants={itemVariants} className="overflow-hidden max-w-full">
              <h1 className="font-syne text-[clamp(2rem,7vw,3.8rem)] leading-[0.95] font-extrabold uppercase tracking-tighter mb-8 text-ink">
                THANNEER<br />
                MALAI <span className="text-accent underline decoration-4 decoration-ink/10 underline-offset-8">S.</span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-base md:text-xl font-bold uppercase tracking-widest text-accent mb-6 leading-none">
                FrontEnd Developer & UI/UX Designer
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-sm md:text-lg max-w-md mb-10 leading-relaxed font-bold text-ink/70">
                Crafting bold, functional, and detail-oriented digital experiences. 
                CS student at SVCE specializing in AI & DS.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#projects"
                className="group relative bg-ink text-cream px-8 py-4 md:px-10 md:py-5 text-center uppercase font-black tracking-[0.2em] text-[10px] md:text-xs border-1.5 border-ink overflow-hidden transition-all duration-300 shadow-[6px_6px_0px_#FF4D1C] hover:shadow-none translate-y-[-4px] hover:translate-y-0"
              >
                View My Work
              </Link>
              <Link 
                href="#contact"
                className="group relative bg-white text-ink px-8 py-4 md:px-10 md:py-5 text-center uppercase font-black tracking-[0.2em] text-[10px] md:text-xs border-1.5 border-ink overflow-hidden transition-all duration-300 shadow-[6px_6px_0px_#0a0a0a] hover:shadow-none translate-y-[-4px] hover:translate-y-0"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Stats */}
        <div className="bg-accent overflow-hidden flex flex-col justify-center items-center relative p-12 md:p-16 border-t-1.5 md:border-t-0 border-ink">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 gap-px bg-ink border-1.5 border-ink w-full max-w-sm shadow-[15px_15px_0px_#0a0a0a] md:shadow-[20px_20px_0px_#0a0a0a]"
          >
            <StatBox value="3+" label="Projects" />
            <StatBox value="2" label="Interns" />
            <StatBox value="2" label="Certs" />
            <StatBox value="7.1" label="CGPA" />
          </motion.div>

          <div
            className="hidden md:flex absolute bottom-10 flex-col items-center gap-3 cursor-pointer group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Scroll Down</span>
            <div className="p-3 border-1.5 border-white rounded-full group-hover:bg-white group-hover:text-accent transition-all">
              <ArrowDown size={20} className="text-white group-hover:text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-cream p-4 md:p-6 aspect-square flex flex-col items-center justify-center text-center group transition-all duration-500 hover:bg-ink hover:text-white">
      <span className="font-syne text-2xl md:text-3xl font-extrabold text-accent group-hover:text-white group-hover:scale-110 transition-all duration-500">{value}</span>
      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest mt-2 md:mt-3 opacity-50 group-hover:opacity-100">{label}</span>
    </div>
  );
}
