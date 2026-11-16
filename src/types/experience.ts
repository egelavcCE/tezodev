/**
 * Araştırma bölümlerinin kimlikleri
 */
export type SectionId = 1 | 2 | 3 | 4;

/**
 * Deneyim aşamaları
 */
export type AppStage =
  | 'welcome'
  | 'survey'
  | 'splash'
  | 'video-ready'
  | 'video';

/**
 * Soru giriş türleri
 */
export type QuestionType = 'number-counter' | 'single-choice' | 'likert';

/**
 * Seçenek arayüzü
 */
export interface QuestionOption {
  id: string;
  text: string;
  value: number | string;
  label?: string;
}

/**
 * Ölçek ve anket maddesi arayüzü
 */
export interface QuestionItem {
  id: string;
  section: SectionId;
  sectionTitle: string;
  questionNumber: number; // 1 - 34 arası global soru no
  title: string;
  question: string;
  instruction?: string;
  type: QuestionType;
  options?: QuestionOption[];
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: number;
  isReversed?: boolean; // Ters puanlanan nostalji maddeleri için (6 - hamPuan)
}

/**
 * Katılımcı yanıtları
 */
export type SurveyAnswers = Record<string, string | number>;

/**
 * Demografik veri yapısı
 */
export interface DemographicsData {
  age?: number | string;
  gender?: string;
  education?: string;
  grade?: string;
  socioEconomic?: string;
}

/**
 * Puanlama ve istatistik özeti
 */
export interface ScoreSummary {
  participantId: string;
  completedAt: string;
  demographics: DemographicsData;
  momentaryEmotionScore: number;
  wellBeingTotalScore: number;
  wellBeingScores: Record<string, number>;
  nostalgiaRawScores: Record<string, number>;
  nostalgiaRecodedScores: Record<string, number>;
  nostalgiaTotalScore: number;
}

/**
 * Splash geçiş mesajı yapısı
 */
export interface SplashMessage {
  title: string;
  message: string;
}

/**
 * İlerleme durumu yapısı
 */
export interface ProgressInfo {
  currentNumber: number;
  totalQuestions: number;
  sectionCurrentNumber: number;
  sectionTotalQuestions: number;
  overallProgress: number;
  sectionProgress: number;
}
