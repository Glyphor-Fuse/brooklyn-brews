import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../motion/useReducedMotion';

interface SignatureEffectProps {
  children: React.ReactNode;
  effect: 'magnetic' | 'glitch' | 'scale';
  className?: string;
}

export const SignatureEffect = ({ children, effect, className = '' }: SignatureEffectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || effect !== 'magnetic') return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (effect === 'magnetic') {
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Default fallback
  return <div className={className}>{children}</div>;
};