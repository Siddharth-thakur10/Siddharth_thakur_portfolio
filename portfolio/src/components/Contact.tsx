import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-40 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-display mb-8 text-foreground">
          Let’s build <em className="not-italic text-muted-foreground">together.</em>
        </h2>
        
        <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-md mx-auto">
          Currently exploring opportunities in Product Management and UI/UX Frontend roles. My inbox is always open.
        </p>

        <a 
          href="mailto:sidthakur854@gmail.com" 
          className="liquid-glass rounded-full px-10 py-4 font-medium text-foreground hover:scale-[1.03] transition-transform inline-block mb-24"
        >
          <span className="relative z-10">Reach Out</span>
        </a>

        {/* Footer Links */}
        <div className="flex justify-center gap-8 text-xs tracking-widest uppercase text-muted-foreground">
          <a href="https://www.linkedin.com/in/siddharth-thakur10/" target="_blank"  className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://www.behance.net/sidthakur5" target="_blank"  className="hover:text-foreground transition-colors">Behance</a>
          
        </div>
      </motion.div>
    </section>
  );
}