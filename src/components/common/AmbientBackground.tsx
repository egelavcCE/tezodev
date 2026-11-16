import React from 'react';
import { motion } from 'framer-motion';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.18, 0.35, 0.18], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-indigo-700/25 via-cyan-600/15 to-transparent blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-purple-800/20 via-blue-900/15 to-transparent blur-[140px]"
      />
    </div>
  );
};

export default AmbientBackground;
