import React from 'react';
import { Brain, Glasses } from 'lucide-react';
import { UI_TEXT } from '../../constants/uiText';

export const AppHeader: React.FC = () => {
  return (
    <header className="relative z-10 border-b border-slate-800/60 bg-slate-950/40 backdrop-blur-lg">
      <div className="max-w-4xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Brain className="h-4 w-4" />
          </div>
          <div>
            <span className="text-sm font-semibold tracking-tight text-white block leading-none">
              {UI_TEXT.APP.TITLE}
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-mono mt-0.5 block">
              {UI_TEXT.APP.SUBTITLE}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Glasses className="h-4 w-4 text-cyan-400" />
          <span className="hidden sm:inline">{UI_TEXT.APP.COMPATIBILITY_BADGE}</span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
