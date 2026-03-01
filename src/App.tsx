import React, { useState } from 'react';
import { questions as photoQuestions } from './data/questions';
import { generatePrompts as generatePhotoPrompts } from './data/promptLogic';
import { motivationalQuestions, generateMotivationalPrompts } from './data/motivational';
import { kidsQuestions, generateKidsPrompts } from './data/kids';
import { ProgressBar } from './components/ProgressBar';
import { QuestionStep } from './components/QuestionStep';
import { ResultsView } from './components/ResultsView';
import { QuoteResultsView } from './components/QuoteResultsView';
import { SettingsModal } from './components/SettingsModal';
import { Settings } from 'lucide-react';

type AppMode = 'home' | 'photography' | 'motivational' | 'kids';

export default function App() {
  const [appMode, setAppMode] = useState<AppMode>('home');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [results, setResults] = useState<any>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [customAccentWord, setCustomAccentWord] = useState<string | null>(null);

  const getQuestions = () => {
    if (appMode === 'photography') return photoQuestions;
    if (appMode === 'motivational') return motivationalQuestions;
    if (appMode === 'kids') return kidsQuestions;
    return [];
  };

  const questions = getQuestions();

  const handleAnswer = (value: any) => {
    const questionId = questions[currentStep].id;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      generateCurrentPrompts(null);
    }
  };

  const generateCurrentPrompts = (accentWordOverride: string | null) => {
    if (appMode === 'photography') {
      setResults(generatePhotoPrompts(answers));
    } else if (appMode === 'motivational') {
      setResults(generateMotivationalPrompts(answers, accentWordOverride));
    } else if (appMode === 'kids') {
      setResults(generateKidsPrompts(answers, accentWordOverride));
    }
  };

  const handleAccentChange = (word: string) => {
    setCustomAccentWord(word);
    generateCurrentPrompts(word);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAppMode('home');
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
    setCustomAccentWord(null);
  };

  const renderHome = () => (
    <div className="animate-fade-slide flex flex-col items-center justify-center min-h-[80vh]">
      <div className="border border-white/10 rounded-lg p-8 bg-white/5 w-full max-w-md">
        <h1 className="text-[24px] font-serif text-white mb-8 text-center uppercase tracking-widest">Wildlife Prompt Studio</h1>
        
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => setAppMode('photography')}
            className="w-full p-4 border border-white/10 hover:border-[#b8860b] hover:bg-[#b8860b]/10 rounded text-left transition-all cursor-pointer group"
          >
            <div className="font-mono text-sm text-white group-hover:text-[#b8860b] mb-1">Wildlife Photography Generator</div>
            <div className="font-mono text-xs text-white/40">Fine art photography prompts</div>
          </button>
          
          <button 
            onClick={() => setAppMode('motivational')}
            className="w-full p-4 border border-white/10 hover:border-[#b8860b] hover:bg-[#b8860b]/10 rounded text-left transition-all cursor-pointer group"
          >
            <div className="font-mono text-sm text-white group-hover:text-[#b8860b] mb-1">Motivational Posters</div>
            <div className="font-mono text-xs text-white/40">Quote-intelligent, animal-led designs</div>
          </button>
          
          <button 
            onClick={() => setAppMode('kids')}
            className="w-full p-4 border border-white/10 hover:border-[#b8860b] hover:bg-[#b8860b]/10 rounded text-left transition-all cursor-pointer group"
          >
            <div className="font-mono text-sm text-white group-hover:text-[#b8860b] mb-1">Kids Room Wall Art</div>
            <div className="font-mono text-xs text-white/40">Warm, safe, and wonder-filled</div>
          </button>
        </div>
      </div>
    </div>
  );

  if (appMode === 'home') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#b8860b] selection:text-black">
        <button 
          onClick={() => setIsSettingsOpen(true)}
          className="fixed top-6 right-6 p-2 text-white/40 hover:text-[#b8860b] transition-colors cursor-pointer z-40"
          title="API Settings"
        >
          <Settings size={20} />
        </button>
        <div className="max-w-[680px] mx-auto px-5 py-10">
          {renderHome()}
        </div>
        <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const currentValue = answers[currentQuestion.id];
  
  const isNextDisabled = () => {
    if (currentQuestion.type === 'text-chip') return !currentValue || currentValue.trim() === '';
    if (currentQuestion.type === 'multi-select') return !currentValue || currentValue.length === 0;
    return !currentValue;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#b8860b] selection:text-black">
      <button 
        onClick={() => setIsSettingsOpen(true)}
        className="fixed top-6 right-6 p-2 text-white/40 hover:text-[#b8860b] transition-colors cursor-pointer z-40"
        title="API Settings"
      >
        <Settings size={20} />
      </button>

      <div className="max-w-[680px] mx-auto px-5 py-10">
        {!results ? (
          <>
            <ProgressBar currentStep={currentStep} totalSteps={questions.length} />
            
            <div className="min-h-[400px]">
              <QuestionStep 
                key={currentStep}
                question={currentQuestion} 
                value={currentValue} 
                onChange={handleAnswer}
                answers={answers}
              />
            </div>

            <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`px-6 py-3 font-mono text-sm tracking-wider transition-colors cursor-pointer ${
                  currentStep === 0 
                    ? 'text-transparent cursor-default' 
                    : 'text-white/50 hover:text-white border border-white/20 rounded'
                }`}
              >
                BACK
              </button>
              
              <button
                onClick={handleNext}
                disabled={isNextDisabled()}
                className={`px-8 py-3 font-mono font-bold text-sm tracking-wider rounded transition-colors cursor-pointer ${
                  isNextDisabled()
                    ? 'bg-white/5 text-white/20 cursor-not-allowed'
                    : 'bg-[#b8860b] text-black hover:bg-[#d4a017]'
                }`}
              >
                {currentStep === questions.length - 1 ? 'GENERATE' : 'NEXT'}
              </button>
            </div>
          </>
        ) : (
          appMode === 'photography' ? (
            <ResultsView 
              results={results} 
              animal={answers.animal} 
              onReset={handleReset} 
            />
          ) : (
            <QuoteResultsView
              title={answers.animal}
              subtitle={appMode === 'kids' ? `Ages ${answers['age-group'].replace('age-', '')} · ${answers.lesson}` : undefined}
              quoteData={results.quoteData}
              results={results.results}
              onAccentChange={handleAccentChange}
              onReset={handleReset}
              isKidsMode={appMode === 'kids'}
            />
          )
        )}
      </div>

      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
}

