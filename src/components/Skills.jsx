import React from 'react';
import { motion } from 'motion/react';

const skills = [
  "CSS", "HTML", "Node.js", "JavaScript", "DSA", "C++", "Tailwind CSS", "Express.js", "MongoDB"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-8 md:px-20 bg-zinc-900 text-white min-h-[70vh] flex flex-col justify-center border-b border-white/10">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 block mb-4">Mastered Tech</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-light uppercase tracking-tight">EXPERTISE<span className="font-black italic text-white/90">_</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-x-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ x: 10 }}
              className="border-b border-white/10 pb-4 flex justify-between items-end group cursor-none"
              data-cursor="hover"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-mono opacity-40">0{index + 1}</span>
                <span className="text-3xl font-black uppercase tracking-tighter">{skill}</span>
              </div>
              <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
