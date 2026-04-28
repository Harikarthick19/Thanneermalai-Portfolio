"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-b-1.5 border-ink bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto border-x-1.5 border-ink grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-20 border-b-1.5 md:border-b-0 md:border-r-1.5 border-ink">

          <motion.div
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: 20 }}
             viewport={{ once: true }}
          >
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold uppercase mb-8 tracking-tighter">
              Hello! I am <span className="text-accent">Thanneermalai</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-ink/70 font-medium leading-relaxed">
              <p>
                 I am a FrontEnd Developer & UI/UX Designer based in Chennai, India. 
                 I specialize in building high-performance web applications that provide 
                 seamless user experiences.
              </p>
              <p>
                Currently a Computer Science student at <span className="font-bold">SVCE Chennai</span>, 
                specializing in AI & Data Science. I bridge the gap between technical complexity and user-centric aesthetics.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="p-8 md:p-20 flex items-center justify-center bg-accent/5">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="border-1.5 border-ink bg-cream shadow-[10px_10px_0px_#0a0a0a] overflow-hidden">
               <table className="w-full text-left">
                 <tbody className="text-xs md:text-sm">
                    <Row label="Location" value="Chennai, India" />
                    <Row label="Education" value="B.Tech AI & DS @ SVCE" />
                    <Row label="Batch" value="2023 – Present" />
                    <Row label="Email" value={<a href="mailto:thanneermalai1903@gmail.com" className="hover:text-accent truncate block max-w-[150px] md:max-w-none">thanneermalai1903@gmail.com</a>} />
                    <Row label="LinkedIn" value={<a href="https://www.linkedin.com/in/thanneermalai-shanmugam-719423321" target="_blank" rel="noopener noreferrer" className="hover:text-accent truncate block max-w-[150px] md:max-w-none">Thanneermalai</a>} />
                    <Row label="Phone" value="+91 9994752560" />
                    <Row label="Status" value={<span className="text-green-600 font-bold">Open to Work</span>} isLast />
                 </tbody>
               </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}

function Row({ label, value, isLast = false }: { label: string; value: React.ReactNode; isLast?: boolean }) {
  return (
    <tr className={isLast ? "" : "border-b-1.5 border-ink"}>
      <td className="p-6 font-bold uppercase text-xs tracking-widest bg-ink text-cream w-1/3">{label}</td>
      <td className="p-6 font-sans font-medium">{value}</td>
    </tr>
  );
}
