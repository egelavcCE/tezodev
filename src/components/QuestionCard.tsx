import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import type { ProgressInfo, QuestionItem } from '../types/experience';
import { UI_TEXT } from '../constants/uiText';
import { APP_CONFIG } from '../constants/config';
import ProgressHeader from './common/ProgressHeader';
import AgeSelector from './question/AgeSelector';
import SingleChoiceOptions from './question/SingleChoiceOptions';
import LikertOptions from './question/LikertOptions';

export interface QuestionCardProps {
  question: QuestionItem;
  progress: ProgressInfo;
  selectedAnswer: string | number | undefined;
  onAnswerChange: (value: string | number) => void;
  onNext: () => void;
  onPrev: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  progress,
  selectedAnswer,
  onAnswerChange,
  onNext,
  onPrev,
  canGoPrev,
  canGoNext,
}) => {
  const currentAgeValue =
    typeof selectedAnswer === 'number'
      ? selectedAnswer
      : question.defaultValue ?? APP_CONFIG.DEFAULT_AGE;

  const isLastQuestion = progress.currentNumber === progress.totalQuestions;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <ProgressHeader sectionTitle={question.sectionTitle} progress={progress} />

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/75 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

          {question.instruction && (
            <div className="mb-4 flex items-start gap-2.5 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-3.5 text-xs sm:text-sm text-cyan-200/90 leading-relaxed">
              <Info className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
              <span>{question.instruction}</span>
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug">
              {question.question}
            </h2>
          </div>

          <div className="space-y-3">
            {question.type === 'number-counter' && (
              <AgeSelector
                value={currentAgeValue}
                min={question.min}
                max={question.max}
                onChange={onAnswerChange}
              />
            )}

            {question.type === 'single-choice' && (
              <SingleChoiceOptions
                options={question.options}
                selectedValue={selectedAnswer}
                onChange={onAnswerChange}
              />
            )}

            {question.type === 'likert' && (
              <LikertOptions
                options={question.options}
                selectedValue={selectedAnswer}
                onChange={onAnswerChange}
              />
            )}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-800/80 pt-5">
            <button
              type="button"
              onClick={onPrev}
              disabled={!canGoPrev}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium transition-all ${
                canGoPrev
                  ? 'border border-slate-700 bg-slate-800/70 text-slate-200 hover:bg-slate-700 hover:text-white active:scale-95'
                  : 'cursor-not-allowed text-slate-600 opacity-40'
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>{UI_TEXT.QUESTION.NAV_PREV}</span>
            </button>

            <button
              type="button"
              onClick={onNext}
              disabled={!canGoNext}
              className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-lg ${
                canGoNext
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 hover:shadow-cyan-500/20 active:scale-95'
                  : 'cursor-not-allowed bg-slate-800 text-slate-500 opacity-50'
              }`}
            >
              <span>{isLastQuestion ? UI_TEXT.QUESTION.NAV_FINISH : UI_TEXT.QUESTION.NAV_NEXT}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuestionCard;
