import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds loading
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      // Easing-like progress function (fast initially, slowing down)
      const rawProgress = (currentStep / steps);
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      const newProgress = Math.min(Math.round(easedProgress * 100), 100);
      
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onComplete, 400); // Wait a bit after reaching 100%
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white px-4 md:px-8"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full max-w-xs sm:max-w-sm md:max-w-md">
        
        {/* Progress Text */}
        <div className="flex justify-between w-full text-[8px] sm:text-[10px] uppercase font-mono tracking-wider sm:tracking-widest opacity-50">
          <span>System Initialization</span>
          <span>{progress}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>

        {/* Branding */}
        <div className="text-2xl sm:text-3xl font-signature tracking-tight mt-2 md:mt-4 text-center">Kumar Aryan</div>
        
        {/* Status indicator */}
        <div className="flex items-center gap-3 sm:gap-4 mt-6 md:mt-8">
           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
           <span className="text-[8px] sm:text-[10px] uppercase font-mono tracking-wider sm:tracking-widest opacity-40 text-center">
             {progress < 100 ? "Compiling Assets..." : "System Ready."}
           </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
