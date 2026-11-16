import React from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, FlipVertical } from 'lucide-react';
import { UI_TEXT } from '../../constants/uiText';

export interface VRControlBarProps {
  isPlaying: boolean;
  isMuted: boolean;
  isFlipped180: boolean;
  currentTime: number;
  duration: number;
  onTogglePlay: () => void;
  onSeekStart: () => void;
  onToggleMute: () => void;
  onToggleFlip: () => void;
}

export const VRControlBar: React.FC<VRControlBarProps> = ({
  isPlaying,
  isMuted,
  isFlipped180,
  currentTime,
  duration,
  onTogglePlay,
  onSeekStart,
  onToggleMute,
  onToggleFlip,
}) => {
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex justify-center px-4">
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/80 px-4 py-2.5 backdrop-blur-xl shadow-2xl">
        <button
          type="button"
          onClick={onTogglePlay}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all hover:bg-cyan-500/30 active:scale-95"
          title={isPlaying ? UI_TEXT.VR_SCENE.PAUSE_TOOLTIP : UI_TEXT.VR_SCENE.PLAY_TOOLTIP}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
        </button>

        <button
          type="button"
          onClick={onSeekStart}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 border border-slate-700 transition-all hover:text-white hover:bg-slate-700 active:scale-95"
          title={UI_TEXT.VR_SCENE.REWIND_TOOLTIP}
        >
          <RotateCcw className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={onToggleMute}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 border border-slate-700 transition-all hover:text-white hover:bg-slate-700 active:scale-95"
          title={isMuted ? UI_TEXT.VR_SCENE.UNMUTE_TOOLTIP : UI_TEXT.VR_SCENE.MUTE_TOOLTIP}
        >
          {isMuted ? <VolumeX className="h-4 w-4 text-red-400" /> : <Volume2 className="h-4 w-4 text-cyan-400" />}
        </button>

        <button
          type="button"
          onClick={onToggleFlip}
          className={`flex items-center gap-1.5 px-3 h-10 rounded-xl border text-xs font-medium transition-all ${
            isFlipped180
              ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
              : 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white'
          }`}
          title={UI_TEXT.VR_SCENE.FLIP_BUTTON_PREFIX}
        >
          <FlipVertical className="h-4 w-4" />
          <span className="hidden sm:inline">
            {UI_TEXT.VR_SCENE.FLIP_BUTTON_PREFIX} (
            {isFlipped180 ? UI_TEXT.VR_SCENE.FLIP_UPRIGHT : UI_TEXT.VR_SCENE.FLIP_ORIGINAL})
          </span>
        </button>

        <div className="flex items-center gap-2 px-2 text-xs font-mono text-slate-300">
          <span>{formatTime(currentTime)}</span>
          <span className="text-slate-600">/</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default VRControlBar;
