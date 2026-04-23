"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm border-b-1.5 border-ink z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="#" className="font-syne text-2xl font-extrabold tracking-tighter">
            TS<span className="text-accent">.</span>
          </Link>

          <div className="hidden md:flex gap-12 items-center">
            <Link href="#about" className="uppercase font-black text-xs tracking-[0.2em] hover:text-accent transition-colors">About</Link>
            <Link href="#skills" className="uppercase font-black text-xs tracking-[0.2em] hover:text-accent transition-colors">Skills</Link>
            <Link href="#experience" className="uppercase font-black text-xs tracking-[0.2em] hover:text-accent transition-colors">Experience</Link>
            <Link href="#projects" className="uppercase font-black text-xs tracking-[0.2em] hover:text-accent transition-colors">Projects</Link>
            <Link href="#contact" className="uppercase font-black text-xs tracking-[0.2em] hover:text-accent transition-colors">Contact</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden pb-8 border-t-1.5 border-ink">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="#about" onClick={() => setIsOpen(false)} className="uppercase font-black text-xs tracking-[0.2em] hover:text-accent transition-colors block py-2">About</Link>
              <Link href="#skills" onClick={() => setIsOpen(false)} className="uppercase font-black text-xs tracking-[0.2em] hover:text-accent transition-colors block py-2">Skills</Link>
              <Link href="#experience" onClick={() => setIsOpen(false)} className="uppercase font-black text-xs tracking-[0.2em] hover:text-accent transition-colors block py-2">Experience</Link>
              <Link href="#projects" onClick={() => setIsOpen(false)} className="uppercase font-black text-xs tracking-[0.2em] hover:text-accent transition-colors block py-2">Projects</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="uppercase font-black text-xs tracking-[0.2em] hover:text-accent transition-colors block py-2">Contact</Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
