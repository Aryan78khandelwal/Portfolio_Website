import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { X, Maximize2, Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ index, onSelect }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (index === 0) {
    const projectData = {
      title: "FacultyLeave",
      subtitle: "Academic Leave & Department Operations Platform",
      coverImage: "/facultyleave-cover.png",
      githubUrl: "https://github.com/Aryan78khandelwal/FacultyLeave"
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect && onSelect(projectData)}
        data-cursor="hover"
        className="group relative bg-black border border-white/10 p-0 aspect-[3/2] md:aspect-auto h-auto md:h-80 transition-all hover:-translate-y-2 hover:-translate-x-2 shadow-[0px_0px_0px_white] hover:shadow-[8px_8px_0px_white] flex flex-col justify-between overflow-hidden cursor-pointer"
      >
        <img 
          src={projectData.coverImage} 
          alt="FacultyLeave - Academic Leave & Department Operations Platform" 
          className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[10px] font-mono text-white bg-black/70 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full z-10">
          01
        </div>
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 p-2 sm:p-2.5 rounded-full border border-white/20 text-white flex items-center gap-2 text-[10px] sm:text-xs font-mono z-10">
          <span>View Details & Code</span>
          <Maximize2 size={14} />
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="hover"
      className="group relative bg-black border border-white/10 p-6 sm:p-8 aspect-[3/2] md:aspect-auto h-auto md:h-80 transition-all hover:-translate-y-2 hover:-translate-x-2 shadow-[0px_0px_0px_white] hover:shadow-[8px_8px_0px_white] flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute top-6 right-6 text-[10px] font-mono opacity-30">0{index + 1}</div>
      
      <div className="mt-auto z-10 flex flex-col gap-2">
        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">Coming Soon</h3>
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">Interactive Component / System</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-20 bg-zinc-950 min-h-screen flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
        >
          <h2 className="text-xs tracking-[0.4em] uppercase opacity-40 mb-12">Selected Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[0, 1, 2, 3].map((i) => (
            <ProjectCard key={i} index={i} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto w-full flex flex-wrap justify-between items-end mt-12 sm:mt-20 md:mt-32 gap-4 overflow-hidden"
      >
        <div className="flex flex-col">
          <span className="text-[10px] opacity-40 uppercase font-mono">Status</span>
          <span className="text-xs font-mono">Available for hire / Global</span>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[32px] sm:text-[52px] md:text-[100px] font-black select-none leading-none tracking-tighter max-w-full"
        >
          ENGINEER
        </motion.div>
      </motion.div>

      {/* Modal with Cover Page Preview and GitHub CTA */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            data-cursor="hover"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-zinc-950 border border-white/15 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 border-b border-white/10 bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-400 bg-white/10 px-2 py-0.5 rounded">01</span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  data-cursor="hover"
                  className="text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cover Image Display */}
              <div className="p-3 sm:p-6 bg-black/60 flex items-center justify-center max-h-[60vh] sm:max-h-[70vh] overflow-hidden">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[55vh] sm:max-h-[62vh] object-contain rounded-xl border border-white/10 shadow-lg"
                />
              </div>

              {/* Modal Action Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 border-t border-white/10 bg-zinc-900/80">
                <div className="w-full sm:w-auto">
                  <p className="text-xs font-mono text-zinc-400 leading-relaxed">{selectedProject.subtitle}</p>
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 sm:py-2.5 bg-white text-black font-semibold text-xs rounded-lg hover:bg-zinc-200 transition-all hover:scale-105 shadow-md group"
                  >
                    <Github size={16} />
                    <span>View Project on GitHub</span>
                    <ExternalLink size={14} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;


