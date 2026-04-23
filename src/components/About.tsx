"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-b-1.5 border-ink bg-cream">
      <div className="max-w-7xl mx-auto border-x-1.5 border-ink grid md:grid-cols-2">
        <div className="p-8 md:p-20 border-r-1.5 border-ink">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <h2 className="font-syne text-5xl font-extrabold uppercase mb-12 tracking-tighter">
              About <span className="text-accent underline decoration-4 underline-offset-8">Me</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-balance">
              <p>
                I am a disciplined and driven Computer Science student at <span className="font-bold">SVCE Chennai</span>, specializing in Artificial Intelligence &amp; Data Science. My journey is fueled by a hunger for practical learning and a commitment to excellence.
              </p>
              <p>
                As a FrontEnd Developer with a keen eye for design, I bridge the gap between technical complexity and user-centric aesthetics. I don&apos;t just write code; I design experiences that leave a lasting impact.
              </p>
              <p>
                Detail-oriented by nature, I thrive in environments that challenge my problem-solving skills. Whether it&apos;s optimizing a React component or wireframing a complex user flow in Figma, I bring 100% to the table.
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
            <div className="border-1.5 border-ink bg-cream shadow-[10px_10px_0px_#0a0a0a]">
              <table className="w-full text-left">
                <tbody>
                  <Row label="Location" value="Chennai, India" />
                  <Row label="Education" value="B.Tech Artificial Intelligence and Data Science @ SVCE" />
                  <Row label="Batch" value="2023 – Present" />
                  <Row label="Email" value={<a href="https://mail.google.com" className="hover:text-accent transition-colors cursor-pointer">shanmugamharikarthick@gmail.com</a>} />
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
