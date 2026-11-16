import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { APP_CONFIG } from '../../constants/config';
import { UI_TEXT } from '../../constants/uiText';

export interface AgeSelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export const AgeSelector: React.FC<AgeSelectorProps> = ({
  value,
  min = APP_CONFIG.MIN_AGE,
  max = APP_CONFIG.MAX_AGE,
  onChange,
}) => {
  const handleDecrement = () => {
    onChange(Math.max(min, value - 1));
  };

  const handleIncrement = () => {
    onChange(Math.min(max, value + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 space-y-6">
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={handleDecrement}
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/80 text-white shadow-lg transition-all hover:bg-slate-700 hover:border-cyan-500/50 active:scale-90"
          aria-label={UI_TEXT.QUESTION.AGE_DECREASE_ARIA}
        >
          <Minus className="h-6 w-6 text-cyan-400" />
        </button>

        <div className="flex min-w-[140px] flex-col items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/25 px-6 py-3 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <span className="font-mono text-5xl font-bold tracking-tight text-white">
            {value}
          </span>
          <span className="text-[11px] uppercase tracking-wider text-cyan-400/80 mt-1">
            {UI_TEXT.QUESTION.AGE_LABEL}
          </span>
        </div>

        <button
          type="button"
          onClick={handleIncrement}
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/80 text-white shadow-lg transition-all hover:bg-slate-700 hover:border-cyan-500/50 active:scale-90"
          aria-label={UI_TEXT.QUESTION.AGE_INCREASE_ARIA}
        >
          <Plus className="h-6 w-6 text-cyan-400" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-slate-400 mr-1 text-[11px]">
          {UI_TEXT.QUESTION.QUICK_SELECT_LABEL}
        </span>
        {APP_CONFIG.AGE_PRESETS.map((agePreset) => (
          <button
            key={agePreset}
            type="button"
            onClick={() => onChange(agePreset)}
            className={`px-2.5 py-1 rounded-lg border transition-all text-xs font-mono ${
              value === agePreset
                ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200'
                : 'border-slate-800 bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-700/40'
            }`}
          >
            {agePreset}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AgeSelector;
