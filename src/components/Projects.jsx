import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Github, ExternalLink, Plus, Minus } from 'lucide-react';

const PROJECTS = [
  {
    id: 'facultyleave',
    number: '01',
    title: 'FacultyLeave',
    subtitle: 'Academic Leave & Department Operations Platform',
    description:
      'A full-stack platform to streamline faculty leave management and automate department operations with role-based access, real-time tracking, and smart analytics.',
    category: 'Full-Stack System',
    status: 'Operational',
    coverImage: '/facultyleave-cover.png',
    githubUrl: 'https://github.com/Aryan78khandelwal/FacultyLeave',
    technologies: ['Node.js', 'MongoDB', 'React', 'Tailwind CSS', 'Recharts'],
    isExpandable: true,
  },
  {
    id: 'project-02',
    number: '02',
    title: 'Coming Soon',
    subtitle: 'Interactive Component / System',
    description: null,
    category: 'System in Development',
    status: 'Standby',
    coverImage: null,
    githubUrl: null,
    technologies: [],
    isExpandable: false,
  },
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState('facultyleave');
  const shouldReduceMotion = useReducedMotion();

  const toggleProject = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const panelVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.2 },
          },
    },
    expanded: {
      opacity: 1,
      height: 'auto',
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.3, delay: 0.05 },
          },
    },
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-20 bg-zinc-950 min-h-screen flex flex-col justify-between border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] tracking-[0.4em] font-mono uppercase opacity-50 block mb-4">
            Engineering Log // Index
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-light uppercase tracking-tight">
            SELECTED
            <span className="block sm:inline font-black italic text-white/90">
              _WORKS
            </span>
          </h2>
        </motion.div>

        {/* Ledger Container */}
        <div className="w-full">
          {/* Technical Ledger Header Bar (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 border-b border-white/20 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 select-none">
            <div className="flex items-center gap-8 md:gap-12 flex-1 min-w-0">
              <span className="w-6 shrink-0">No.</span>
              <span>Project / Specification</span>
            </div>
            <div className="flex items-center gap-8 shrink-0">
              <span className="hidden md:block">Status</span>
              <span className="w-8 text-center">Entry</span>
            </div>
          </div>

          {/* Ledger Rows */}
          <div className="border-t sm:border-t-0 border-b border-white/10 divide-y divide-white/10">
            {PROJECTS.map((project) => {
              const isExpanded = expandedId === project.id;
              const isExpandable = project.isExpandable;

              return (
                <div key={project.id} className="group/row">
                  {isExpandable ? (
                    /* Interactive Project Ledger Row */
                    <button
                      type="button"
                      id={`project-trigger-${project.id}`}
                      aria-expanded={isExpanded}
                      aria-controls={`project-panel-${project.id}`}
                      onClick={() => toggleProject(project.id)}
                      data-cursor="hover"
                      className="w-full text-left py-6 sm:py-8 px-4 sm:px-6 md:px-8 transition-colors flex items-center justify-between gap-4 group hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:bg-white/[0.04]"
                    >
                      <div className="flex items-center gap-4 sm:gap-8 md:gap-12 min-w-0 flex-1">
                        <span className="text-xs sm:text-sm font-mono text-zinc-500 tracking-widest shrink-0">
                          {project.number}
                        </span>

                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 min-w-0">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-white transition-colors truncate">
                            {project.title}
                          </h3>
                          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider hidden sm:block truncate max-w-xs md:max-w-md">
                            {project.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 sm:gap-8 shrink-0">
                        <div className="hidden md:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>{project.status}</span>
                        </div>

                        <span
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 group-hover:border-white/50 group-hover:text-white transition-colors"
                          aria-hidden="true"
                        >
                          {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                        </span>
                      </div>
                    </button>
                  ) : (
                    /* Quiet, Non-Expandable Coming Soon Row */
                    <div className="w-full py-6 sm:py-8 px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4 opacity-40 select-none cursor-default">
                      <div className="flex items-center gap-4 sm:gap-8 md:gap-12 min-w-0 flex-1">
                        <span className="text-xs sm:text-sm font-mono text-zinc-500 tracking-widest shrink-0">
                          {project.number}
                        </span>

                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 min-w-0">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-400 truncate">
                            {project.title}
                          </h3>
                          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider hidden sm:block truncate max-w-xs md:max-w-md">
                            {project.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 sm:gap-8 shrink-0">
                        <div className="hidden md:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                          <span>{project.status}</span>
                        </div>

                        <span
                          className="w-8 h-8 flex items-center justify-center text-zinc-600 font-mono text-sm"
                          aria-hidden="true"
                        >
                          —
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Expanded Content Panel */}
                  {isExpandable && (
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`project-panel-${project.id}`}
                          role="region"
                          aria-labelledby={`project-trigger-${project.id}`}
                          variants={panelVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          className="overflow-hidden bg-zinc-950/40 border-t border-white/10"
                        >
                          <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                              {/* Left Column: Cover Preview Artwork */}
                              <div className="lg:col-span-7 flex flex-col gap-3">
                                <div className="border border-white/10 bg-black/80 rounded-lg overflow-hidden shadow-2xl">
                                  {/* Technical Preview Header */}
                                  <div className="flex items-center justify-between px-3.5 py-2 bg-zinc-900/60 border-b border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                                    <span className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                                      FIG. 01 // INTERFACE_VIEW
                                    </span>
                                    <span className="opacity-50">CANVAS_REF: 01</span>
                                  </div>

                                  {/* Cover Image */}
                                  <div className="p-2 sm:p-4 bg-zinc-950/80 flex items-center justify-center">
                                    <img
                                      src={project.coverImage}
                                      alt={`${project.title} - ${project.subtitle}`}
                                      className="w-full h-auto max-h-[480px] object-contain rounded border border-white/5"
                                      loading="lazy"
                                    />
                                  </div>
                                </div>

                                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest px-1">
                                  <span>SOURCE: REPOSITORY ARCHIVE</span>
                                  <span>FORMAT: MONOCHROME UI</span>
                                </div>
                              </div>

                              {/* Right Column: Project Specifications & Details */}
                              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                                <div className="space-y-6">
                                  {/* Metadata Tags */}
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-[10px] font-mono text-zinc-400 bg-white/10 border border-white/10 px-2.5 py-0.5 rounded uppercase tracking-widest">
                                      SYS.ID // {project.number}
                                    </span>
                                    <span className="text-[10px] font-mono text-zinc-400 border border-white/10 px-2.5 py-0.5 rounded uppercase tracking-widest">
                                      {project.category}
                                    </span>
                                  </div>

                                  {/* Titles */}
                                  <div>
                                    <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                                      {project.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm font-mono text-zinc-300 uppercase tracking-wide leading-relaxed">
                                      {project.subtitle}
                                    </p>
                                  </div>

                                  {/* Description */}
                                  <div className="border-t border-b border-white/10 py-5 space-y-2">
                                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 block">
                                      System Overview
                                    </span>
                                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                                      {project.description}
                                    </p>
                                  </div>

                                  {/* Technologies */}
                                  {project.technologies && project.technologies.length > 0 && (
                                    <div className="space-y-3">
                                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 block">
                                        Technologies &amp; Architecture
                                      </span>
                                      <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                          <span
                                            key={tech}
                                            className="px-3 py-1 border border-white/15 bg-white/[0.03] text-[10px] font-mono uppercase tracking-widest text-zinc-300 hover:border-white/40 transition-colors"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                {/* GitHub Call to Action */}
                                {project.githubUrl && (
                                  <div className="pt-4">
                                    <a
                                      href={project.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      data-cursor="hover"
                                      className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all rounded shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                    >
                                      <Github size={16} />
                                      <span>View Project on GitHub</span>
                                      <ExternalLink
                                        size={14}
                                        className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                      />
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Branding Bar */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 1 }}
        className="max-w-6xl mx-auto w-full flex flex-wrap justify-between items-end mt-12 sm:mt-20 md:mt-32 gap-4 overflow-hidden"
      >
        <div className="flex flex-col">
          <span className="text-[10px] opacity-40 uppercase font-mono">Status</span>
          <span className="text-xs font-mono">Available for hire / Global</span>
        </div>
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 100 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.5, ease: 'easeOut' }}
          className="text-[32px] sm:text-[52px] md:text-[100px] font-black select-none leading-none tracking-tighter max-w-full"
        >
          ENGINEER
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
