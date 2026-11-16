import { useState, useMemo, useCallback } from 'react';
import type {
  AppStage,
  ProgressInfo,
  QuestionItem,
  ScoreSummary,
  SplashMessage,
  SurveyAnswers,
} from '../types/experience';
import { questions, sectionTransitions } from '../data/questions';
import { APP_CONFIG } from '../constants/config';
import { calculateScores } from '../utils/scoring';
import { downloadCSVFile } from '../utils/csvExporter';
import { saveResponses } from '../utils/storage';

export interface UseExperienceFlowReturn {
  stage: AppStage;
  currentQuestion: QuestionItem | undefined;
  currentAnswer: string | number | undefined;
  progress: ProgressInfo;
  scoreSummary: ScoreSummary;
  splashMessage: SplashMessage;
  isCsvDownloaded: boolean;
  canGoNext: boolean;
  canGoPrev: boolean;
  handleStartSurvey: () => void;
  handleAnswerChange: (value: string | number) => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleSplashComplete: () => void;
  handleDownloadCSV: () => void;
  handleProceedToVideo: () => void;
  handleRestart: () => void;
}

export function useExperienceFlow(): UseExperienceFlowReturn {
  const [stage, setStage] = useState<AppStage>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswers>({});
  const [splashMessage, setSplashMessage] = useState<SplashMessage>(sectionTransitions.toSection2);
  const [nextStageAfterSplash, setNextStageAfterSplash] = useState<AppStage>('survey');
  const [isCsvDownloaded, setIsCsvDownloaded] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Mevcut bölümdeki sorular
  const sectionQuestions = useMemo(() => {
    return questions.filter((q) => q.section === currentQuestion?.section);
  }, [currentQuestion?.section]);

  const sectionCurrentNumber = useMemo(() => {
    return sectionQuestions.findIndex((q) => q.id === currentQuestion?.id) + 1;
  }, [sectionQuestions, currentQuestion?.id]);

  // İlerleme yüzdeleri
  const progress: ProgressInfo = useMemo(() => {
    const currentNumber = currentQuestionIndex + 1;
    const totalQuestions = questions.length;
    const sectionTotalQuestions = sectionQuestions.length;
    const overallProgress = Math.round((currentNumber / totalQuestions) * 100);
    const sectionProgress = Math.round(
      (sectionCurrentNumber / (sectionTotalQuestions || 1)) * 100
    );

    return {
      currentNumber,
      totalQuestions,
      sectionCurrentNumber,
      sectionTotalQuestions,
      overallProgress,
      sectionProgress,
    };
  }, [currentQuestionIndex, sectionCurrentNumber, sectionQuestions.length]);

  // Puan hesaplaması
  const scoreSummary = useMemo(() => {
    return calculateScores(answers);
  }, [answers]);

  // Mevcut soruya verilen cevap
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  // İleri gidebilme kontrolü
  const canGoNext = useMemo(() => {
    if (!currentQuestion) return false;
    if (currentQuestion.type === 'number-counter') {
      return true;
    }
    return currentAnswer !== undefined && currentAnswer !== '';
  }, [currentQuestion, currentAnswer]);

  const canGoPrev = currentQuestionIndex > 0;

  // Anket Başlatma
  const handleStartSurvey = useCallback(() => {
    setStage('survey');
    setCurrentQuestionIndex(0);
  }, []);

  // Cevap Değişimi
  const handleAnswerChange = useCallback(
    (value: string | number) => {
      if (!currentQuestion) return;
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: value,
      }));
    },
    [currentQuestion]
  );

  // İleri Adım & Bölüm Geçiş Mantığı
  const handleNext = useCallback(() => {
    if (!currentQuestion) return;

    // Yaş seçimi hiç değiştirilmediyse varsayılan değeri kaydet
    if (currentQuestion.type === 'number-counter' && currentAnswer === undefined) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: currentQuestion.defaultValue ?? APP_CONFIG.DEFAULT_AGE,
      }));
    }

    // Bölüm 1 Bitişi (Soru 5 -> Soru 6)
    if (currentQuestionIndex === 4) {
      setSplashMessage(sectionTransitions.toSection2);
      setNextStageAfterSplash('survey');
      setCurrentQuestionIndex((prev) => prev + 1);
      setStage('splash');
      return;
    }

    // Bölüm 2 Bitişi (Soru 6 -> Soru 7)
    if (currentQuestionIndex === 5) {
      setSplashMessage(sectionTransitions.toSection3);
      setNextStageAfterSplash('survey');
      setCurrentQuestionIndex((prev) => prev + 1);
      setStage('splash');
      return;
    }

    // Bölüm 3 Bitişi (Soru 14 -> Soru 15)
    if (currentQuestionIndex === 13) {
      setSplashMessage(sectionTransitions.toSection4);
      setNextStageAfterSplash('survey');
      setCurrentQuestionIndex((prev) => prev + 1);
      setStage('splash');
      return;
    }

    // Bölüm 4 Bitişi (Tüm sorular tamamlandı - Soru 34)
    if (currentQuestionIndex === questions.length - 1) {
      const finalSummary = calculateScores(answers);
      saveResponses(answers, finalSummary);

      setSplashMessage(sectionTransitions.toVideoPrep);
      setNextStageAfterSplash('video-ready');
      setStage('splash');
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  }, [currentQuestion, currentAnswer, currentQuestionIndex, answers]);

  // Geri Adım
  const handlePrev = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }, [currentQuestionIndex]);

  // Splash Ekranı Tamamlandığında
  const handleSplashComplete = useCallback(() => {
    setStage(nextStageAfterSplash);
  }, [nextStageAfterSplash]);

  // CSV İndirme
  const handleDownloadCSV = useCallback(() => {
    downloadCSVFile(scoreSummary);
    setIsCsvDownloaded(true);
  }, [scoreSummary]);

  // "Videoya Geçelim" Tıklaması
  const handleProceedToVideo = useCallback(() => {
    if (!isCsvDownloaded) {
      downloadCSVFile(scoreSummary);
      setIsCsvDownloaded(true);
    }
    setStage('video');
  }, [isCsvDownloaded, scoreSummary]);

  // Sıfırdan Yeniden Başlatma
  const handleRestart = useCallback(() => {
    setStage('welcome');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsCsvDownloaded(false);
  }, []);

  return {
    stage,
    currentQuestion,
    currentAnswer,
    progress,
    scoreSummary,
    splashMessage,
    isCsvDownloaded,
    canGoNext,
    canGoPrev,
    handleStartSurvey,
    handleAnswerChange,
    handleNext,
    handlePrev,
    handleSplashComplete,
    handleDownloadCSV,
    handleProceedToVideo,
    handleRestart,
  };
}
