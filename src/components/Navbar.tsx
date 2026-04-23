"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Freelance", href: "#freelance" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-cream ${
      scrolled ? "h-16 shadow-lg" : "h-20"
    }`}>
      {/* Align with section borders: max-w-7xl + border-x */}
      <div className="max-w-7xl mx-auto h-full border-x-1.5 border-ink px-8 md:px-16 flex items-center justify-between">
        <Link href="/" className="font-syne text-3xl font-extrabold tracking-tighter group">
          TS<span className="text-accent group-hover:pl-1 transition-all">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link 
            href="#contact"
            className="bg-ink text-cream px-8 py-2.5 uppercase text-[10px] font-black tracking-widest border-1.5 border-ink hover:bg-cream hover:text-ink transition-all shadow-[4px_4px_0px_#FF4D1C] hover:shadow-none translate-y-[-2px] hover:translate-y-0"
          >
             Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`h-0.5 w-6 bg-ink transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`h-0.5 w-6 bg-ink transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <div className={`h-0.5 w-6 bg-ink transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-cream border-y-1.5 border-ink overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto border-x-1.5 border-ink p-8 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter border-b border-ink/5 pb-2 block hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-ink text-cream px-8 py-4 uppercase text-sm font-black tracking-widest border-1.5 border-ink text-center mt-4"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
