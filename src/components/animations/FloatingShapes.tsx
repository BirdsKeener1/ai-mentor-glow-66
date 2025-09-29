import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingShapesProps {
  mousePosition: { x: number; y: number };
}

export const FloatingShapes = ({ mousePosition }: FloatingShapesProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sphere 1 */}
      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-20"
        style={{
          background: 'linear-gradient(135deg, hsl(270 91% 65%), hsl(326 86% 68%))',
          filter: 'blur(1px)',
        }}
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          rotateX: mousePosition.x * 0.1,
          rotateY: mousePosition.y * 0.1,
        }}
        initial={{ x: '20%', y: '30%' }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      {/* Sphere 2 */}
      <motion.div
        className="absolute w-24 h-24 rounded-full opacity-15"
        style={{
          background: 'linear-gradient(135deg, hsl(0 79% 72%), hsl(38 100% 67%))',
          filter: 'blur(1px)',
        }}
        animate={{
          x: mousePosition.x * -0.015,
          y: mousePosition.y * -0.015,
          rotateX: mousePosition.x * -0.08,
          rotateY: mousePosition.y * -0.08,
        }}
        initial={{ x: '70%', y: '20%' }}
        transition={{ type: "spring", damping: 25, stiffness: 80 }}
      />

      {/* Torus/Ring */}
      <motion.div
        className="absolute w-40 h-40 rounded-full opacity-10 border-8"
        style={{
          borderImage: 'linear-gradient(135deg, hsl(270 91% 65%), hsl(326 86% 68%)) 1',
          filter: 'blur(0.5px)',
        }}
        animate={{
          x: mousePosition.x * 0.025,
          y: mousePosition.y * 0.025,
          rotate: mousePosition.x * 0.2,
        }}
        initial={{ x: '60%', y: '60%' }}
        transition={{ type: "spring", damping: 20, stiffness: 60 }}
      />

      {/* Small floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full opacity-30"
          style={{
            background: i % 2 === 0 
              ? 'hsl(270 91% 65%)' 
              : 'hsl(0 79% 72%)',
          }}
          animate={{
            x: mousePosition.x * (0.01 + i * 0.002),
            y: mousePosition.y * (0.01 + i * 0.002),
            scale: [1, 1.2, 1],
          }}
          initial={{ 
            x: `${10 + i * 15}%`, 
            y: `${15 + i * 12}%` 
          }}
          transition={{ 
            type: "spring", 
            damping: 30 + i * 5, 
            stiffness: 100 + i * 10,
            scale: { 
              duration: 2 + i * 0.5, 
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        />
      ))}
    </div>
  );
};