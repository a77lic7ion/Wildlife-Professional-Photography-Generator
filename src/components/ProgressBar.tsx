import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex gap-1 mb-8">
      {Array.from({ length: totalSteps }).map((_, i) => {
        let bgColor = 'bg-white/10';
        if (i < currentStep) bgColor = 'bg-[#b8860b]';
        else if (i === currentStep) bgColor = 'bg-[#d4a017]';
        
        return (
          <div 
            key={i} 
            className={`h-[3px] flex-1 rounded-full transition-colors duration-400 ${bgColor}`}
          />
        );
      })}
    </div>
  );
};
