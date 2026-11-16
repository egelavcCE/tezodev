import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind } from 'lucide-react';
import { APP_CONFIG } from '../constants/config';

export interface SplashTransitionProps {
  title?: string;
  message: string;
  duration?: number;
  onComplete: () => void;
  isVisible?: boolean;
}

export const SplashTransition: React.FC<SplashTransitionProps> = ({
  title,
  message,
  duration = APP_CONFIG.SPLASH_DURATION_MS,
  onComplete,
  isVisible = true,
}) => {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#070913] px-6 text-center select-none"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.45, 1],
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-600/30 to-purple-600/20 blur-3xl"
            />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 flex max-w-xl flex-col items-center gap-6"
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.25)] backdrop-blur-md"
            >
              <Wind className="h-8 w-8 animate-pulse text-cyan-300" />
            </motion.div>

            {title && (
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="text-xs uppercase font-semibold tracking-widest text-cyan-400/80"
              >
                {title}
              </motion.span>
            )}

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-lg sm:text-2xl font-light leading-relaxed text-slate-100"
            >
              "{message}"
            </motion.p>

            <div className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-slate-800/80">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: duration / 1000, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashTransition;
