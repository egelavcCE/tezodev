import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Heart, Brain, Clock, ArrowRight } from 'lucide-react';
import { UI_TEXT } from '../../constants/uiText';

export interface WelcomeViewProps {
  onStart: () => void;
}

const SECTION_ICONS = [Compass, Heart, Brain, Clock];

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      className="w-full max-w-2xl mx-auto space-y-6"
    >
      <div className="rounded-3xl border border-slate-800 bg-slate-900/75 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/20 mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          {UI_TEXT.WELCOME.BADGE}
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          {UI_TEXT.WELCOME.TITLE}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {UI_TEXT.WELCOME.DESCRIPTION}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs text-slate-300">
          {UI_TEXT.WELCOME.SECTIONS.map((sec, index) => {
            const IconComponent = SECTION_ICONS[index % SECTION_ICONS.length];
            return (
              <div
                key={sec.TITLE}
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/50 border border-slate-800"
              >
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <IconComponent className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold text-white block">{sec.TITLE}</span>
                  <span className="text-[11px] text-slate-400">{sec.SUBTITLE}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between border-t border-slate-800/80 pt-6">
          <span className="text-xs text-slate-400">
            {UI_TEXT.WELCOME.ESTIMATED_TIME}
          </span>

          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-xl hover:opacity-95 active:scale-95 transition-all"
          >
            <span>{UI_TEXT.WELCOME.START_BUTTON}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeView;
