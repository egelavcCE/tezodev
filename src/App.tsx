import React from 'react';
import { UI_TEXT } from './constants/uiText';
import { useExperienceFlow } from './hooks/useExperienceFlow';
import AmbientBackground from './components/common/AmbientBackground';
import AppHeader from './components/common/AppHeader';
import WelcomeView from './components/views/WelcomeView';
import VideoReadyView from './components/views/VideoReadyView';
import QuestionCard from './components/QuestionCard';
import SplashTransition from './components/SplashTransition';
import VRVideoScene from './components/VRVideoScene';

export const App: React.FC = () => {
  const {
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
  } = useExperienceFlow();

  return (
    <div className="relative min-h-screen w-full bg-[#070913] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden font-sans">
      <AmbientBackground />

      <SplashTransition
        isVisible={stage === 'splash'}
        title={splashMessage.title}
        message={splashMessage.message}
        onComplete={handleSplashComplete}
      />

      {stage !== 'video' && <AppHeader />}

      <main className="relative z-10 flex-1 flex flex-col justify-center px-4 py-6 sm:py-10 max-w-4xl w-full mx-auto">
        {stage === 'welcome' && <WelcomeView onStart={handleStartSurvey} />}

        {stage === 'survey' && currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            progress={progress}
            selectedAnswer={currentAnswer}
            onAnswerChange={handleAnswerChange}
            onNext={handleNext}
            onPrev={handlePrev}
            canGoPrev={canGoPrev}
            canGoNext={canGoNext}
          />
        )}

        {stage === 'video-ready' && (
          <VideoReadyView
            scoreSummary={scoreSummary}
            isCsvDownloaded={isCsvDownloaded}
            onProceed={handleProceedToVideo}
            onDownloadCSV={handleDownloadCSV}
          />
        )}

        {stage === 'video' && (
          <div className="fixed inset-0 z-50">
            <VRVideoScene onDownloadCSV={handleDownloadCSV} onRestart={handleRestart} />
          </div>
        )}
      </main>

      {stage !== 'video' && (
        <footer className="relative z-10 border-t border-slate-900 py-3 text-center text-[11px] text-slate-500">
          {UI_TEXT.APP.FOOTER}
        </footer>
      )}
    </div>
  );
};

export default App;
