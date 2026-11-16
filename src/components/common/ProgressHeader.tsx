import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { ProgressInfo } from '../../types/experience';
import { UI_TEXT } from '../../constants/uiText';

export interface ProgressHeaderProps {
  sectionTitle: string;
  progress: ProgressInfo;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  sectionTitle,
  progress,
}) => {
  const {
    currentNumber,
    totalQuestions,
    sectionCurrentNumber,
    sectionTotalQuestions,
    overallProgress,
    sectionProgress,
  } = progress;

  return (
    <div className="mb-4 space-y-2">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-medium">
            <Sparkles className="h-3 w-3" />
            {sectionTitle}
          </span>
          <span className="text-slate-400">
            ({sectionCurrentNumber} / {sectionTotalQuestions})
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-cyan-400">
          <span>
            {UI_TEXT.PROGRESS.QUESTION_PREFIX} {currentNumber} / {totalQuestions}
          </span>
          <span className="text-slate-500">•</span>
          <span className="font-semibold text-slate-300">%{overallProgress}</span>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>{UI_TEXT.PROGRESS.GENERAL_LABEL}</span>
          <span className="font-mono text-cyan-400">%{overallProgress}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80 border border-slate-700/40">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full"
            initial={false}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5">
          <span>{UI_TEXT.PROGRESS.SECTION_LABEL}</span>
          <span className="font-mono text-purple-400">%{sectionProgress}</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-slate-800/60 border border-slate-700/30">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
            initial={false}
            animate={{ width: `${sectionProgress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressHeader;
