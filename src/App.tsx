import React, { useState } from 'react';
import { questions } from './data/questions';
import { generatePrompts } from './data/promptLogic';
import { ProgressBar } from './components/ProgressBar';
import { QuestionStep } from './components/QuestionStep';
import { ResultsView } from './components/ResultsView';
import { SettingsModal } from './components/SettingsModal';
import { Settings } from 'lucide-react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [results, setResults] = useState<any[] | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleAnswer = (value: any) => {
    const questionId = questions[currentStep].id;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setResults(generatePrompts(answers));
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  };

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
                key={currentStep} // Force re-render for animation
                question={currentQuestion} 
                value={currentValue} 
                onChange={handleAnswer} 
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
          <ResultsView 
            results={results} 
            animal={answers.animal} 
            onReset={handleReset} 
          />
        )}
      </div>

      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
}
