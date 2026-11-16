import { useState, useEffect, useCallback } from 'react';
import { APP_CONFIG } from '../constants/config';

export interface UseVRVideoProps {
  videoSrc?: string;
  onVideoEnd?: () => void;
}

const videoModules = import.meta.glob<string>(
  '/src/assets/*.{mp4,webm}',
  { eager: true, query: '?url', import: 'default' }
);
const detectedVideos = Object.values(videoModules);
const autoDetectedVideo = detectedVideos.length > 0 ? detectedVideos[0] : '';

export function useVRVideo({ videoSrc, onVideoEnd }: UseVRVideoProps = {}) {
  const [isAFrameLoaded, setIsAFrameLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFlipped180, setIsFlipped180] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState<number>(APP_CONFIG.DEFAULT_VIDEO_DURATION_SECONDS);
  const [isEnded, setIsEnded] = useState(false);

  const activeVideoUrl = videoSrc || autoDetectedVideo || APP_CONFIG.DEFAULT_VIDEO_FALLBACK_URL;
  const getVideo = () => document.getElementById('vr-360-video-asset') as HTMLVideoElement | null;

  useEffect(() => {
    import('aframe')
      .then(() => setIsAFrameLoaded(true))
      .catch((err) => console.error('A-Frame yüklenemedi:', err));
  }, []);

  useEffect(() => {
    if (!isAFrameLoaded) return;

    const vid = getVideo();
    if (!vid) return;

    const handleTimeUpdate = () => setCurrentTime(vid.currentTime);
    const handleLoadedMetadata = () => {
      if (vid.duration && !isNaN(vid.duration)) {
        setDuration(vid.duration);
      }
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
      onVideoEnd?.();
    };

    vid.addEventListener('timeupdate', handleTimeUpdate);
    vid.addEventListener('loadedmetadata', handleLoadedMetadata);
    vid.addEventListener('play', handlePlay);
    vid.addEventListener('pause', handlePause);
    vid.addEventListener('ended', handleEnded);

    vid.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));

    return () => {
      vid.removeEventListener('timeupdate', handleTimeUpdate);
      vid.removeEventListener('loadedmetadata', handleLoadedMetadata);
      vid.removeEventListener('play', handlePlay);
      vid.removeEventListener('pause', handlePause);
      vid.removeEventListener('ended', handleEnded);
    };
  }, [isAFrameLoaded, onVideoEnd]);

  const togglePlay = useCallback(() => {
    const vid = getVideo();
    if (!vid) return;
    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const vid = getVideo();
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  }, []);

  const toggleFlip = useCallback(() => {
    setIsFlipped180((prev) => !prev);
  }, []);

  const handleSeekStart = useCallback(() => {
    const vid = getVideo();
    if (!vid) return;
    vid.currentTime = 0;
    vid.play().then(() => setIsPlaying(true)).catch(() => {});
    setIsEnded(false);
  }, []);

  const sphereRotation = isFlipped180
    ? APP_CONFIG.VR_ROTATIONS.UPRIGHT
    : APP_CONFIG.VR_ROTATIONS.ORIGINAL;

  return {
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
  };
}
