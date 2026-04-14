import { motion } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: '5S Smart Audit App', 
    desc: 'End-to-end UX for a mobile-first enterprise audit system. Digitized paper processes, cutting audit completion time by 50%.',
    tags: ['UX Design', 'Process Digitalization', 'B2B'],
    metric: '50% Time Saved',
    type: 'internal',
    link: '#'
  },
  { 
    id: 2, 
    title: 'HP Setu Intranet', 
    desc: 'Redesigned the corporate site into an active hub with restructured information architecture and IT app directories.',
    tags: ['IA', 'Visual Design', 'Employee Engagement'],
    metric: 'Improved Engagement',
    type: 'internal',
    link: '#'
  },
  { 
    id: 3, 
    title: 'FinFree Wellness', 
    desc: 'Financial wellness mobile app focusing on reducing cognitive load for non-finance users through intuitive dashboards.',
    tags: ['FinTech', 'Data Viz', 'Figma'],
    metric: 'End-to-end UX',
    type: 'behance',
    link: 'https://www.behance.net/gallery/238324263/FinFree?platform=direct' 
  },
  { 
    id: 4, 
    title: 'Sangathan – CSR Portal', 
    desc: 'Led UI/UX design from wireframing to high-fidelity prototypes, improving information discoverability for employees.',
    tags: ['Web Design', 'Accessibility', 'Prototyping'],
    metric: 'UX-First Approach',
    type: 'behance',
    link: 'https://www.behance.net/gallery/238262681/Sangathan-(CSR-Portal)'
  },
  { 
    id: 5, 
title: 'Website Redesign Experience', 
desc: 'Redesigned a digital platform with a focus on usability, visual consistency, and a scalable component-based design system to enhance overall user experience.',
tags: ['UI/UX Design', 'Website Redesign', 'Design System'],
metric: 'Improved User Experience',
type: 'behance',
link: 'https://www.behance.net/gallery/247499657/Redesigning-for-Better-Experience'
  },
  { 
    id: 6, 
    title: 'Visual Campaign Assets', 
    desc: 'Designed modular digital assets and component-based systems for multi-platform digital campaigns.',
    tags: ['Visual Design', 'Branding', 'Components'],
    metric: 'Brand Consistency',
    type: 'behance',
    link: 'https://www.behance.net/sidthakur5'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      // Add 'as const' here to tell TypeScript this is a fixed easing curve
      ease: [0.16, 1, 0.3, 1] as const 
    } 
  }
};

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-glow opacity-20 pointer-events-none z-0" />

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-display mb-16 text-white relative z-10"
      >
        Selected <em className="not-italic text-[#FFBF00]/90">Works.</em>
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {projects.map((project) => (
          <div key={project.id} className="relative group">
            <motion.div 
              variants={itemVariants}
              className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-[6px] relative flex flex-col justify-end p-8 min-h-[380px] transition-colors duration-500 hover:border-[#FFBF00]/30"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFBF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[#FFBF00] text-xs font-medium tracking-widest uppercase">
                    {project.metric}
                  </span>
                  {project.type === 'internal' ? (
                    <div className="flex items-center gap-1.5 text-white/30 text-[10px] uppercase tracking-tighter">
                      <Lock size={10} /> Internal Project
                    </div>
                  ) : (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-[#FFBF00] transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl font-display text-white mb-3 group-hover:text-[#FFBF00] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] uppercase tracking-wider text-white/50 border border-white/10 rounded-full px-3 py-1 group-hover:border-[#FFBF00]/20 group-hover:text-[#FFBF00]/80 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}