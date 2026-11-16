/**
 * Uygulama genel yapılandırma sabitleri
 */
export const APP_CONFIG = {
  STORAGE_KEY: 'vr_psychology_study_responses',
  SPLASH_DURATION_MS: 1800,
  DEFAULT_AGE: 21,
  MIN_AGE: 15,
  MAX_AGE: 99,
  AGE_PRESETS: [18, 19, 20, 21, 22, 23, 24, 25, 28, 30] as const,
  VR_ROTATIONS: {
    UPRIGHT: '0 -90 180',
    ORIGINAL: '0 -90 0',
  } as const,
  DEFAULT_VIDEO_DURATION_SECONDS: 52,
  DEFAULT_VIDEO_FALLBACK_URL: '/videos/video.mp4',
  LIKERT_REVERSE_BASE: 6, // 5'li Likert ters çevirme: 6 - hamPuan
  TOTAL_QUESTIONS: 34,
} as const;
