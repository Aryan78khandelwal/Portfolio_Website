import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleMobileScroll = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    // Delay programmatic scroll to let the mobile dropdown exit animation complete
    setTimeout(() => {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', targetId);
      }
    }, 50);
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: -10,
      transition: { 
        duration: 0.2,
        ease: "easeInOut",
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-4 md:py-6 border-b border-white/10 flex justify-between items-center text-sm uppercase tracking-widest font-mono bg-black/70 backdrop-blur-md"
    >
      {/* Logo - Exactly as original */}
      <a 
        href="#home" 
        data-cursor="hover" 
        className="text-4xl tracking-tighter normal-case font-signature text-white outline-none"
      >
        Kumar Aryan
      </a>

      {/* Desktop Navigation - Exactly as original (hidden on mobile) */}
      <div className="hidden md:flex gap-12 text-xs tracking-widest uppercase opacity-60">
        <a href="#about" data-cursor="hover" className="hover:opacity-100 transition-opacity">About</a>
        <a href="#projects" data-cursor="hover" className="hover:opacity-100 transition-opacity">Projects</a>
        <a href="#skills" data-cursor="hover" className="hover:opacity-100 transition-opacity">Expertise</a>
        <a href="#contact" data-cursor="hover" className="hover:opacity-100 transition-opacity">Contact</a>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        onClick={toggleMenu} 
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className="md:hidden p-2 text-white hover:opacity-75 transition-opacity outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu (Right Aligned card style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-[80%] right-6 w-48 bg-zinc-950/95 backdrop-blur-xl border border-white/10 z-40 flex flex-col items-stretch py-3 px-2 gap-1 rounded-lg shadow-2xl shadow-black/80"
          >
            <motion.a
              key="#about"
              variants={linkVariants}
              href="#about"
              onClick={(e) => handleMobileScroll(e, "#about")}
              className="text-xs font-light uppercase tracking-wider py-2.5 px-4 rounded-md text-left text-white hover:bg-white/10 hover:text-white transition-all opacity-70 hover:opacity-100"
            >
              About
            </motion.a>
            <motion.a
              key="#projects"
              variants={linkVariants}
              href="#projects"
              onClick={(e) => handleMobileScroll(e, "#projects")}
              className="text-xs font-light uppercase tracking-wider py-2.5 px-4 rounded-md text-left text-white hover:bg-white/10 hover:text-white transition-all opacity-70 hover:opacity-100"
            >
              Projects
            </motion.a>
            <motion.a
              key="#skills"
              variants={linkVariants}
              href="#skills"
              onClick={(e) => handleMobileScroll(e, "#skills")}
              className="text-xs font-light uppercase tracking-wider py-2.5 px-4 rounded-md text-left text-white hover:bg-white/10 hover:text-white transition-all opacity-70 hover:opacity-100"
            >
              Expertise
            </motion.a>
            <motion.a
              key="#contact"
              variants={linkVariants}
              href="#contact"
              onClick={(e) => handleMobileScroll(e, "#contact")}
              className="text-xs font-light uppercase tracking-wider py-2.5 px-4 rounded-md text-left text-white hover:bg-white/10 hover:text-white transition-all opacity-70 hover:opacity-100"
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
