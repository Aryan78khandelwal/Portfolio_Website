import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-8 md:px-20 bg-black text-white min-h-[80vh] flex flex-col justify-center border-b border-white/10">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 order-1 md:order-1"
        >
          <span className="text-[10px] tracking-[0.4em] font-mono uppercase opacity-50 block mb-6 md:mb-8">System Profile</span>
          <h2 className="text-5xl md:text-8xl font-light uppercase tracking-tight leading-none mb-8 md:mb-10">
            THE <br />
            <span className="font-black italic">ENGINEER_</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-zinc-400 font-mono text-[10px] md:text-xs uppercase leading-loose tracking-wider max-w-md">
            <p>
              Driven by the intersection of logic and aesthetics, I specialize in building robust digital architectures that scale. My approach is rooted in brutalist precision and high-performance engineering.
            </p>
            <p>
              With a deep focus on Node.js systems and complex data structures, I bridge the gap between abstract algorithmic efficiency and pixel-perfect user interfaces.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square md:h-[500px] bg-zinc-900 border border-white/10 flex items-center justify-center group overflow-hidden order-2 md:order-2"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
          
          <div className="z-10 flex flex-col items-center gap-12">
            <div className="grid grid-cols-2 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <motion.div 
                   key={i}
                   animate={{ 
                     opacity: [0.2, 0.8, 0.2],
                     scale: [1, 1.1, 1] 
                   }}
                   transition={{ 
                     duration: 4, 
                     delay: i * 0.5, 
                     repeat: Infinity 
                   }}
                   className="w-16 h-16 border border-white/20"
                 />
               ))}
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-30">
              Operational Matrix / 01
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
