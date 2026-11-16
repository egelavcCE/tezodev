import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Download } from 'lucide-react';
import type { ScoreSummary } from '../../types/experience';
import { UI_TEXT } from '../../constants/uiText';

export interface VideoReadyViewProps {
  scoreSummary: ScoreSummary;
  isCsvDownloaded: boolean;
  onProceed: () => void;
  onDownloadCSV: () => void;
}

export const VideoReadyView: React.FC<VideoReadyViewProps> = ({
  scoreSummary,
  isCsvDownloaded,
  onProceed,
  onDownloadCSV,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-xl mx-auto space-y-6"
    >
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900/85 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <CheckCircle2 className="h-7 w-7" />
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
          {UI_TEXT.VIDEO_READY.TITLE}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          {UI_TEXT.VIDEO_READY.DESCRIPTION}
        </p>

        <div className="mb-6 grid grid-cols-2 gap-3 text-left">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
            <span className="text-[11px] text-slate-400 block">
              {UI_TEXT.VIDEO_READY.WELL_BEING_LABEL}
            </span>
            <span className="font-mono text-xl font-bold text-cyan-400">
              {scoreSummary.wellBeingTotalScore}
              <span className="text-xs text-slate-500 font-normal ml-1">
                {UI_TEXT.VIDEO_READY.WELL_BEING_MAX}
              </span>
            </span>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
            <span className="text-[11px] text-slate-400 block">
              {UI_TEXT.VIDEO_READY.NOSTALGIA_LABEL}
            </span>
            <span className="font-mono text-xl font-bold text-purple-400">
              {scoreSummary.nostalgiaTotalScore}
              <span className="text-xs text-slate-500 font-normal ml-1">
                {UI_TEXT.VIDEO_READY.NOSTALGIA_MAX}
              </span>
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <motion.button
            type="button"
            onClick={onProceed}
            animate={{
              boxShadow: [
                '0 0 15px rgba(6,182,212,0.25)',
                '0 0 30px rgba(6,182,212,0.5)',
                '0 0 15px rgba(6,182,212,0.25)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 py-4 text-base font-bold text-white shadow-xl hover:opacity-95 active:scale-98 transition-all"
          >
            <Play className="h-5 w-5 fill-current" />
            <span>{UI_TEXT.VIDEO_READY.PROCEED_BUTTON}</span>
          </motion.button>

          <button
            type="button"
            onClick={onDownloadCSV}
            className={`w-full flex items-center justify-center gap-2 rounded-2xl border py-3 text-xs sm:text-sm font-semibold transition-all ${
              isCsvDownloaded
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                : 'border-slate-700 bg-slate-800/60 text-slate-200 hover:bg-slate-700/60 hover:text-white'
            }`}
          >
            <Download className="h-4 w-4" />
            <span>
              {isCsvDownloaded
                ? UI_TEXT.VIDEO_READY.DOWNLOADED_BUTTON
                : UI_TEXT.VIDEO_READY.DOWNLOAD_BUTTON}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoReadyView;
