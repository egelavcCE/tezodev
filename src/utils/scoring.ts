import type { ScoreSummary, SurveyAnswers } from '../types/experience';
import { APP_CONFIG } from '../constants/config';
import { questions } from '../data/questions';

/**
 * 5'li Likert ters madde puanını çevirir (6 - rawScore)
 */
export function recodeReversedScore(rawScore: number): number {
  if (rawScore <= 0) return 0;
  return APP_CONFIG.LIKERT_REVERSE_BASE - rawScore;
}

/**
 * Psikolojik İyi Oluş Ölçeği (8 Madde - 1-7 Likert) puanlarını hesaplar
 */
export function calculateWellBeingScores(answers: SurveyAnswers): {
  scores: Record<string, number>;
  total: number;
} {
  const scores: Record<string, number> = {};
  let total = 0;

  for (let i = 1; i <= 8; i++) {
    const key = `wb_${i}`;
    const score = Number(answers[key] ?? 0);
    scores[key] = score;
    total += score;
  }

  return { scores, total };
}

/**
 * Kişisel Nostalji Ölçeği (20 Madde - 1-5 Likert) puanlarını ve ters maddeleri hesaplar
 */
export function calculateNostalgiaScores(answers: SurveyAnswers): {
  rawScores: Record<string, number>;
  recodedScores: Record<string, number>;
  total: number;
} {
  const rawScores: Record<string, number> = {};
  const recodedScores: Record<string, number> = {};
  let total = 0;

  for (let i = 1; i <= 20; i++) {
    const key = `nos_${i}`;
    const raw = Number(answers[key] ?? 0);
    rawScores[key] = raw;

    const qConfig = questions.find((q) => q.id === key);
    const isReversed = qConfig?.isReversed ?? false;
    const scoredValue = isReversed ? recodeReversedScore(raw) : raw;

    recodedScores[key] = scoredValue;
    total += scoredValue;
  }

  return { rawScores, recodedScores, total };
}

/**
 * Katılımcı yanıtlarından eksiksiz istatistik ve puan özetini derler
 */
export function calculateScores(answers: SurveyAnswers): ScoreSummary {
  const participantId = `P_${Date.now()}_${Math.floor(Math.random() * 900 + 100)}`;
  const completedAt = new Date().toLocaleString('tr-TR');

  const demographics = {
    age: answers['demo_age'] ?? '',
    gender: String(answers['demo_gender'] ?? ''),
    education: String(answers['demo_education'] ?? ''),
    grade: String(answers['demo_grade'] ?? ''),
    socioEconomic: String(answers['demo_ses'] ?? ''),
  };

  const momentaryEmotionScore = Number(answers['emotion_state'] ?? 0);
  const wellBeing = calculateWellBeingScores(answers);
  const nostalgia = calculateNostalgiaScores(answers);

  return {
    participantId,
    completedAt,
    demographics,
    momentaryEmotionScore,
    wellBeingTotalScore: wellBeing.total,
    wellBeingScores: wellBeing.scores,
    nostalgiaRawScores: nostalgia.rawScores,
    nostalgiaRecodedScores: nostalgia.recodedScores,
    nostalgiaTotalScore: nostalgia.total,
  };
}
