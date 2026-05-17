import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const ProjectCard = ({ index }) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="hover"
      className="group relative bg-black border border-white/10 p-8 h-64 md:h-80 transition-all hover:-translate-y-2 hover:-translate-x-2 shadow-[0px_0px_0px_white] hover:shadow-[8px_8px_0px_white] flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute top-6 right-6 text-[10px] font-mono opacity-30">0{index + 1}</div>
      
      <div className="mt-auto z-10 flex flex-col gap-2">
        <h3 className="text-3xl font-black uppercase tracking-tighter">Coming Soon</h3>
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">Interactive Component / System</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-8 md:px-20 bg-zinc-950 min-h-screen flex flex-col justify-between">
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
            <ProjectCard key={i} index={i} />
          ))}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto w-full flex flex-wrap justify-between items-end mt-20 md:mt-32 gap-4"
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
          className="text-[40px] sm:text-[60px] md:text-[100px] font-black select-none leading-none tracking-tighter overflow-hidden"
        >
          ENGINEER
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
