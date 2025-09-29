import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Mesh Background */}
      <motion.div
        className="animated-mesh"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Additional Moving Gradients */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(270 91% 65% / 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(0 79% 72% / 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};