import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative max-w-4xl mx-auto px-6 py-32 text-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none z-0" />

      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl mb-12 text-white"
        >
          The <em className="not-italic text-[#FFBF00]/90">Philosophy.</em>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8 text-muted leading-relaxed text-base md:text-lg max-w-2xl mx-auto"
        >
          <p>
  I am a UI/UX Designer and Frontend Developer with over 2 years of experience building real-world interfaces for complex manufacturing environments. My approach combines the precision of Figma with the power of React, enabling design-to-production cycles that are fast and intentional.
</p>
          <p>
  I specialize in transforming cluttered legacy systems into high-performance digital tools. Whether it is digitizing a paper-based audit system or building WCAG-compliant design systems, I focus on solving real-world access constraints through field observation and iterative design.
</p>
        </motion.div>
      </div>
    </section>
  );
}