import React from 'react';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-4 md:py-6 border-b border-white/10 flex justify-between items-center text-sm uppercase tracking-widest font-mono bg-black/70 backdrop-blur-md"
    >
      <a href="#home" data-cursor="hover" className="text-4xl tracking-tighter normal-case font-signature text-white outline-none">Kumar Aryan</a>
      <div className="flex gap-12 text-xs tracking-widest uppercase opacity-60">
        <a href="#about" data-cursor="hover" className="hover:opacity-100 transition-opacity">About</a>
        <a href="#projects" data-cursor="hover" className="hover:opacity-100 transition-opacity">Projects</a>
        <a href="#skills" data-cursor="hover" className="hover:opacity-100 transition-opacity">Expertise</a>
        <a href="#contact" data-cursor="hover" className="hover:opacity-100 transition-opacity">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
