import { motion } from 'framer-motion';

const experience = [
  {
    role: "UI/UX Developer",
    company: "Hindustan Platinum",
    duration: "Feb 2024 — Present",
    desc: "Owning end-to-end product design for internal corporate users. Delivered 5+ enterprise products including audit apps and intranet portals, reducing compliance discrepancies and improving engagement.",
  },
  {
    role: "Media & Graphics Coordinator",
    company: "CompSA, DYPIEMR",
    duration: "2021 — 2023",
    desc: "Led a team to develop cohesive component-based design systems and visual assets for digital campaigns across multiple platforms.",
  },
  {
    role: "Bachelor of Engineering (B.E.) in CS",
    company: "DYPIEMR, Pune",
    duration: "2020 — 2024",
    desc: "Completed engineering degree with a focus on Computer Science, graduating with a high SGPA of 8.8.",
  }
];

export default function Resume() {
  return (
    <section id="resume" className="max-w-4xl mx-auto px-6 py-32 relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-display mb-20 text-center text-white relative z-10"
      >
        <em className="not-italic text-[#FFBF00]/90">Experience.</em>
      </motion.h2>

      <div className="space-y-16 mb-20 relative z-10">
        <div className="absolute left-0 md:left-[20%] top-2 bottom-0 w-[1px] bg-gradient-to-b from-[#FFBF00]/60 via-white/10 to-transparent hidden md:block" />

        {experience.map((job, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-4 md:gap-16 relative z-10 group"
          >
            <div className="md:w-[20%] text-[#FFBF00]/80 text-sm shrink-0 pt-2 font-medium tracking-wide">
              {job.duration}
            </div>
            <div className="md:w-[80%]">
              <h3 className="text-2xl font-display text-white mb-2 group-hover:text-white/90 transition-colors">
                {job.role}
              </h3>
              <div className="text-white/60 mb-4 text-xs uppercase tracking-widest font-medium">
                {job.company}
              </div>
              <p className="text-muted text-sm leading-relaxed max-w-xl">
                {job.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center relative z-10"
      >
        <a 
  href="/Siddharth_Thakur_Resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="relative group px-12 py-4 rounded-full bg-[#FFBF00] text-black font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,191,0,0.3)]"
>
  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
  DOWNLOAD FULL RESUME
</a>
      </motion.div>
    </section>
  );
}