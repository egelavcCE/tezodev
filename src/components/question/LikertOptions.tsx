import React from 'react';
import { Check } from 'lucide-react';
import type { QuestionOption } from '../../types/experience';
import { UI_TEXT } from '../../constants/uiText';

export interface LikertOptionsProps {
  options?: QuestionOption[];
  selectedValue: string | number | undefined;
  onChange: (value: string | number) => void;
}

export const LikertOptions: React.FC<LikertOptionsProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  if (!options || options.length === 0) {
    return (
      <p className="text-xs text-slate-400 italic py-2">
        {UI_TEXT.QUESTION.NO_OPTIONS_PLACEHOLDER}
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {options.map((opt) => {
        const isSelected = Number(selectedValue) === Number(opt.value);
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`group flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
              isSelected
                ? 'border-cyan-400 bg-cyan-950/45 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)] ring-1 ring-cyan-400/30'
                : 'border-slate-800/90 bg-slate-800/25 text-slate-200 hover:border-slate-700 hover:bg-slate-800/50'
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-semibold ${
                  isSelected
                    ? 'bg-cyan-400 text-slate-950'
                    : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                }`}
              >
                {opt.value}
              </span>
              <span className="text-xs sm:text-sm font-normal">
                {opt.text}
              </span>
            </div>

            <div
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                isSelected
                  ? 'border-cyan-400 bg-cyan-400 text-slate-950'
                  : 'border-slate-600 bg-transparent group-hover:border-slate-400'
              }`}
            >
              {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default LikertOptions;
