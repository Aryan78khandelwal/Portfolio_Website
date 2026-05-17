/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import CustomCursor from './components/CustomCursor.jsx';
import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-12 border-t border-white/10 bg-black"
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <div>
            <div className="text-3xl font-signature tracking-tight mb-4">Kumar Aryan</div>
            <p className="text-[10px] font-mono uppercase opacity-30 leading-relaxed max-w-[200px]">
              Crafting high-performance digital systems with architectural precision.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono uppercase opacity-50 tracking-widest">Connect_</span>
            <div className="flex gap-6">
              <a href="https://github.com/Aryan78khandelwal" data-cursor="hover" className="text-zinc-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kumar-aryan-b97b23323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" data-cursor="hover" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/a.r.y.a.n_khandelwal?igsh=OTJ2N3poM3lkNWc0" data-cursor="hover" className="text-zinc-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/Aryan78eng" data-cursor="hover" className="text-zinc-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between gap-8 text-right">
            <div className="flex items-center gap-4 bg-zinc-900/50 p-3 rounded-full border border-white/5 w-fit ml-auto">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest opacity-50 whitespace-nowrap">Available for hire</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest opacity-20 font-mono">
              © 2026 KUMAR ARYAN / ENGINEERED WITH PRECISION
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

