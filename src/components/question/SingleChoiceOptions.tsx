import React from 'react';
import { Check } from 'lucide-react';
import type { QuestionOption } from '../../types/experience';
import { UI_TEXT } from '../../constants/uiText';

export interface SingleChoiceOptionsProps {
  options?: QuestionOption[];
  selectedValue: string | number | undefined;
  onChange: (value: string | number) => void;
}

export const SingleChoiceOptions: React.FC<SingleChoiceOptionsProps> = ({
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
    <div className="grid grid-cols-1 gap-2.5">
      {options.map((opt) => {
        const isSelected = selectedValue === opt.value;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`group flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${
              isSelected
                ? 'border-cyan-400 bg-cyan-950/40 text-white shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-400/40'
                : 'border-slate-800/90 bg-slate-800/30 text-slate-200 hover:border-slate-700 hover:bg-slate-800/60'
            }`}
          >
            <span className="text-sm sm:text-base font-normal">
              {opt.text}
            </span>
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${
                isSelected
                  ? 'border-cyan-400 bg-cyan-400 text-slate-950'
                  : 'border-slate-600 bg-transparent group-hover:border-slate-400'
              }`}
            >
              {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default SingleChoiceOptions;
