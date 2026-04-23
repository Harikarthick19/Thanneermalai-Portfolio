"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-b-1.5 border-ink bg-cream">
      <div className="max-w-7xl mx-auto border-x-1.5 border-ink">
        <div className="grid md:grid-cols-2 divide-x-1.5 border-ink">
          <div className="p-8 md:p-20">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
            >
              <h2 className="font-syne text-4xl md:text-6xl font-extrabold uppercase mb-12 leading-[0.9] tracking-tighter text-balance">
                Got a project <br /> in mind? <br />
                <span className="text-accent underline decoration-4 underline-offset-8">Let's talk.</span>
              </h2>

              <div className="space-y-8 mt-16">
                 <ContactLink 
                    icon={<Mail className="text-accent group-hover:text-ink" />} 
                    label="shanmugamharikarthick@gmail.com" 
                    href="https://mail.google.com"
                 />
                 <ContactLink 
                    icon={<Phone className="text-accent group-hover:text-ink" />} 
                    label="+91 999 475 2560" 
                    href="tel:+919994752560"
                 />
                 <ContactLink 
                    icon={<MapPin className="text-accent group-hover:text-ink" />} 
                    label="Chennai, India" 
                    href="#"
                 />
              </div>
            </motion.div>
          </div>

          <div className="p-8 md:p-20 flex flex-col justify-center items-center bg-white/40">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              className="text-center w-full max-w-md"
            >
              <div className="inline-flex items-center gap-3 px-8 py-3 bg-green-50 border-1.5 border-green-600 rounded-full mb-12">
                 <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(22,163,74,0.5)]" />
                 <span className="text-green-800 text-[10px] font-black uppercase tracking-[0.2em]">Available for work</span>
              </div>
              <p className="text-2xl font-bold mb-12 leading-relaxed text-ink/80 tracking-tight text-balance">
                 I'm currently seeking new challenges and collaborative opportunities. 
                 Let's build something exceptional together.
              </p>

              <a 
                 href="https://mail.google.com"
                 className="inline-block w-full bg-ink text-cream px-12 py-6 uppercase font-black tracking-[0.3em] text-xs border-1.5 border-ink hover:bg-cream hover:text-ink transition-all shadow-[12px_12px_0px_#FF4D1C] hover:shadow-none hover:translate-x-3 hover:translate-y-3"
              >
                 Say Hello
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 md:p-16 border-t-1.5 border-ink flex flex-col md:flex-row justify-between items-center gap-8 bg-white/20">
          <div className="font-syne text-3xl font-extrabold tracking-tighter">
             TS<span className="text-accent">.</span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-center">
             THANNEERMALAI S — FrontEnd Developer & Designer
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
             © {new Date().getFullYear()} / Chennai, India
          </div>
        </footer>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-6 group w-fit"
    >
      <div className="p-4 border-1.5 border-ink bg-white group-hover:bg-accent transition-all duration-500 shadow-[4px_4px_0px_#0a0a0a] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
        {icon}
      </div>
      <span className="font-black uppercase tracking-[0.2em] text-[10px] border-b-1.5 border-transparent group-hover:border-ink transition-all">
        {label}
      </span>
    </a>
  );
}
