import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[auto] md:min-h-screen flex flex-col md:flex-row border-b border-white/10 overflow-hidden pt-16 md:pt-24">
      {/* Left Content */}
      <div className="flex-1 px-6 py-12 sm:px-8 sm:py-16 md:p-12 md:pl-20 flex flex-col justify-center md:border-r border-white/10 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 space-y-4"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 block">Engineered Systems</span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-light leading-none tracking-tight uppercase">
            HELLO, I’M A <br />
            <span className="font-black italic text-white/90">DEVELOPER_</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm text-zinc-400 max-w-xs mb-10 leading-relaxed font-mono uppercase"
        >
          I build full-stack web applications with React, Node.js, Express, and MongoDB, while learning machine learning and deep learning to create intelligent, useful experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <a
            href="#projects"
            data-cursor="hover"
            className="inline-block px-6 py-3 bg-white text-black text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="inline-block px-6 py-3 border border-white/30 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-white hover:border-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View Resume
          </a>
          <a
            href="#contact"
            data-cursor="hover"
            className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white border-b border-white/20 hover:border-white/60 pb-px transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right Visual Section (Geometric/Brutalist) — desktop only */}
      <div className="flex-1 bg-zinc-950 relative overflow-hidden hidden md:flex items-center justify-center p-20">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        </div>
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="text-[12vw] font-black opacity-5 select-none leading-none tracking-tighter text-center"
        >
          KUMAR ARYAN
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[300px] h-[300px] border border-white/10 rounded-full flex items-center justify-center"
        >
           <div className="w-1 h-[300px] bg-white/5" />
           <div className="w-[300px] h-1 bg-white/5 absolute" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
