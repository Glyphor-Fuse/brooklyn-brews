import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useReducedMotion } from '../motion/useReducedMotion';

interface SignatureInteractionProps {
  type: 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress';
  children?: React.ReactNode;
  className?: string;
  text?: string; // For marquee or specific text effects
}

export const SignatureInteraction = ({ type, children, className = '', text }: SignatureInteractionProps) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Parallax Hooks
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Sticky Progress Hooks
  const { scrollYProgress: pageProgress } = useScroll();
  const scaleX = useSpring(pageProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (shouldReduceMotion) {
    return <div className={className}>{children || text}</div>;
  }

  switch (type) {
    case 'text-reveal':
      return (
        <motion.div
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }}
          className={className}
        >
          {children}
        </motion.div>
      );

    case 'clip-reveal':
      return (
        <motion.div
          initial={{ clipPath: 'inset(10% 10% 10% 10%)', opacity: 0 }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'circOut' }}
          className={className}
        >
          {children}
        </motion.div>
      );

    case 'parallax':
      return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
          <motion.div style={{ y }}>
            {children}
          </motion.div>
        </div>
      );

    case 'marquee':
      return (
        <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
          </motion.div>
        </div>
      );

    case 'sticky-progress':
      return (
        <motion.div
          className={className}
          style={{ scaleX, transformOrigin: "0%" }}
        />
      );

    default:
      return <div className={className}>{children}</div>;
  }
};