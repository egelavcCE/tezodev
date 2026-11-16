import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Download, RotateCcw } from 'lucide-react';
import { UI_TEXT } from '../../constants/uiText';

export interface VRCompletionModalProps {
  isVisible: boolean;
  onDownloadCSV?: () => void;
  onReplay: () => void;
  onRestart?: () => void;
}

export const VRCompletionModal: React.FC<VRCompletionModalProps> = ({
  isVisible,
  onDownloadCSV,
  onReplay,
  onRestart,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-40 flex items-center justify-center bg-black/85 p-6 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
            className="relative max-w-lg w-full overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900/90 p-8 text-center text-white shadow-[0_0_50px_rgba(6,182,212,0.2)]"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/15 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              {UI_TEXT.VR_SCENE.COMPLETION.TITLE}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
              {UI_TEXT.VR_SCENE.COMPLETION.MESSAGE}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {onDownloadCSV && (
                <button
                  type="button"
                  onClick={onDownloadCSV}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 active:scale-95 shadow-lg"
                >
                  <Download className="h-4 w-4" />
                  {UI_TEXT.VR_SCENE.COMPLETION.DOWNLOAD_CSV_BUTTON}
                </button>
              )}

              <button
                type="button"
                onClick={onReplay}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-xs sm:text-sm font-medium text-slate-200 transition hover:bg-slate-700 hover:text-white active:scale-95"
              >
                <RotateCcw className="h-4 w-4" />
                {UI_TEXT.VR_SCENE.COMPLETION.REPLAY_BUTTON}
              </button>

              {onRestart && (
                <button
                  type="button"
                  onClick={onRestart}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs sm:text-sm font-medium text-slate-400 transition hover:text-slate-200 hover:bg-slate-900"
                >
                  {UI_TEXT.VR_SCENE.COMPLETION.RESTART_BUTTON}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VRCompletionModal;
