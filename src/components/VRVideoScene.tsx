import React, { useEffect, useState } from 'react';
import { UI_TEXT } from '../constants/uiText';
import { useVRVideo } from '../hooks/useVRVideo';
import VRControlBar from './vr/VRControlBar';
import VRCompletionModal from './vr/VRCompletionModal';

export interface VRVideoSceneProps {
  videoSrc?: string;
  onVideoEnd?: () => void;
  onDownloadCSV?: () => void;
  onRestart?: () => void;
}

export const VRVideoScene: React.FC<VRVideoSceneProps> = ({
  videoSrc,
  onVideoEnd,
  onDownloadCSV,
  onRestart,
}) => {
  const [isInVRMode, setIsInVRMode] = useState(false);

  const {
    isAFrameLoaded,
    isPlaying,
    isMuted,
    isFlipped180,
    currentTime,
    duration,
    isEnded,
    activeVideoUrl,
    sphereRotation,
    togglePlay,
    toggleMute,
    toggleFlip,
    handleSeekStart,
  } = useVRVideo({ videoSrc, onVideoEnd });

  // VR moduna girip çıkmayı takip et
  useEffect(() => {
    if (!isAFrameLoaded) return;
    const scene = document.querySelector('a-scene');
    if (!scene) return;

    const onEnterVR = () => setIsInVRMode(true);
    const onExitVR = () => setIsInVRMode(false);

    scene.addEventListener('enter-vr', onEnterVR);
    scene.addEventListener('exit-vr', onExitVR);

    return () => {
      scene.removeEventListener('enter-vr', onEnterVR);
      scene.removeEventListener('exit-vr', onExitVR);
    };
  }, [isAFrameLoaded]);

  if (!isAFrameLoaded) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-[#070913] text-slate-200">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
          <p className="text-xs uppercase tracking-widest text-cyan-400/80 font-mono">
            {UI_TEXT.VR_SCENE.LOADING}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black select-none">
      <a-scene
        embedded
        vr-mode-ui="enabled: true"
        device-orientation-permission-ui="enabled: true"
        className="h-full w-full"
      >
        <a-assets timeout="30000">
          <video
            id="vr-360-video-asset"
            src={activeVideoUrl}
            loop={false}
            playsInline
            crossOrigin="anonymous"
            preload="auto"
          />
        </a-assets>

        <a-videosphere src="#vr-360-video-asset" rotation={sphereRotation} />

        <a-camera position="0 1.6 0" look-controls="enabled: true" wasd-controls="enabled: false">
          <a-cursor color="#22d3ee" fuse={false} raycaster="objects: .clickable" />

          {/* VR modunda video bittiğinde kamera önünde gösterilecek bilgi paneli */}
          {isEnded && (
            <a-entity position="0 0 -2">
              <a-plane
                color="#050d1a"
                opacity="0.92"
                width="2.4"
                height="1.1"
                position="0 0 0"
              />
              <a-text
                value="Deneyim Tamamlandi!\n\nLutfen VR gozlugunu cikarin\nve ekrani kontrol edin."
                align="center"
                color="#22d3ee"
                width="2.1"
                position="0 0.05 0.01"
                wrap-count="30"
              />
            </a-entity>
          )}
        </a-camera>
      </a-scene>

      {/* HTML kontroller — VR moduna girilince otomatik gizlenir */}
      {!isEnded && !isInVRMode && (
        <VRControlBar
          isPlaying={isPlaying}
          isMuted={isMuted}
          isFlipped180={isFlipped180}
          currentTime={currentTime}
          duration={duration}
          onTogglePlay={togglePlay}
          onSeekStart={handleSeekStart}
          onToggleMute={toggleMute}
          onToggleFlip={toggleFlip}
        />
      )}

      {/* HTML bitiş modalı — VR modunda değilken göster */}
      {!isInVRMode && (
        <VRCompletionModal
          isVisible={isEnded}
          onDownloadCSV={onDownloadCSV}
          onReplay={handleSeekStart}
          onRestart={onRestart}
        />
      )}
    </div>
  );
};

export default VRVideoScene;
