import type { ScoreSummary, SurveyAnswers } from '../types/experience';
import { APP_CONFIG } from '../constants/config';

export interface StoredSubmission {
  answers: SurveyAnswers;
  summary: ScoreSummary;
  timestamp: string;
}

/**
 * Yanıtları ve puan özetini localStorage'a kaydeder
 */
export function saveResponses(answers: SurveyAnswers, summary: ScoreSummary): boolean {
  try {
    const payload: StoredSubmission = {
      answers,
      summary,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(APP_CONFIG.STORAGE_KEY, JSON.stringify(payload));
    return true;
  } catch (err) {
    console.error('LocalStorage kaydı başarısız oldu:', err);
    return false;
  }
}

/**
 * Son kaydedilen veriyi çeker
 */
export function loadResponses(): StoredSubmission | null {
  try {
    const raw = localStorage.getItem(APP_CONFIG.STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredSubmission) : null;
  } catch (err) {
    console.error('LocalStorage okuma başarısız oldu:', err);
    return null;
  }
}

/**
 * Kayıtlı araştırma verilerini temizler
 */
export function clearResponses(): void {
  try {
    localStorage.removeItem(APP_CONFIG.STORAGE_KEY);
  } catch (err) {
    console.error('LocalStorage temizleme başarısız oldu:', err);
  }
}
