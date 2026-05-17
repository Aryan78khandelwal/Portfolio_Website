import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    const handleHoverStart = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('data-cursor') === 'hover'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full z-50 pointer-events-none mix-blend-difference hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
