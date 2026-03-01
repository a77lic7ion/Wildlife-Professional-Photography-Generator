import React from 'react';

interface Option {
  value?: string;
  label?: string;
  desc?: string;
}

interface Question {
  id: string;
  title: string;
  text: string;
  subtext?: string;
  type: string;
  placeholder?: string;
  options?: any[];
  getOptions?: (answers: any) => any[];
}

interface QuestionStepProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
  answers: any;
}

export const QuestionStep: React.FC<QuestionStepProps> = ({ question, value, onChange, answers }) => {
  const options = question.getOptions ? question.getOptions(answers) : (question.options || []);

  if (question.type === 'chip-grid') {
    return (
      <div className="animate-fade-slide">
        <div className="text-[11px] font-mono tracking-[0.20em] text-[#b8860b] mb-4 uppercase">{question.title}</div>
        <h2 className="text-[28px] font-serif text-white mb-2">{question.text}</h2>
        {question.subtext && <p className="text-sm font-mono text-white/50 mb-8">{question.subtext}</p>}
        
        <div className="flex flex-wrap gap-2">
          {options.map((opt: string) => (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`px-4 py-2 rounded text-sm font-mono transition-colors border cursor-pointer ${
                value === opt 
                  ? 'bg-[#b8860b]/15 border-[#b8860b] text-white' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (question.type === 'text-chip') {
    return (
      <div className="animate-fade-slide">
        <div className="text-[11px] font-mono tracking-[0.20em] text-[#b8860b] mb-4 uppercase">{question.title}</div>
        <h2 className="text-[28px] font-serif text-white mb-8">{question.text}</h2>
        
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          className="w-full bg-white/5 border border-white/10 rounded px-[18px] py-[14px] text-white font-mono text-sm focus:outline-none focus:border-[#b8860b] transition-colors mb-6"
        />
        
        <div className="flex flex-wrap gap-2">
          {options.map((opt: string) => (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors border cursor-pointer ${
                value === opt 
                  ? 'bg-[#b8860b]/15 border-[#b8860b] text-white' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (question.type === 'single-select') {
    return (
      <div className="animate-fade-slide">
        <div className="text-[11px] font-mono tracking-[0.20em] text-[#b8860b] mb-4 uppercase">{question.title}</div>
        <h2 className="text-[28px] font-serif text-white mb-2">{question.text}</h2>
        {question.subtext && <p className="text-sm font-mono text-white/50 mb-8">{question.subtext}</p>}
        
        <div className="flex flex-col gap-[10px]">
          {options.map((opt: any) => {
            const isSelected = value === opt.value;
            return (
              <div
                key={opt.value}
                onClick={() => onChange(opt.value)}
                className={`flex items-start p-[16px] px-[20px] rounded cursor-pointer transition-all border ${
                  isSelected 
                    ? 'bg-[#b8860b]/15 border-[#b8860b]' 
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                <div className={`mt-0.5 shrink-0 w-[18px] h-[18px] rounded-full border flex items-center justify-center mr-4 ${
                  isSelected ? 'border-[#b8860b] bg-[#b8860b]' : 'border-white/30'
                }`}>
                  {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <div>
                  <div className="text-[14px] font-mono text-white mb-1">{opt.label}</div>
                  {opt.desc && (
                    <div className="text-[12px] font-mono text-white/45 leading-relaxed">{opt.desc}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (question.type === 'multi-select') {
    const selectedValues = Array.isArray(value) ? value : [];
    
    const toggleValue = (val: string) => {
      if (selectedValues.includes(val)) {
        onChange(selectedValues.filter(v => v !== val));
      } else {
        onChange([...selectedValues, val]);
      }
    };

    return (
      <div className="animate-fade-slide">
        <div className="text-[11px] font-mono tracking-[0.20em] text-[#b8860b] mb-4 uppercase">{question.title}</div>
        <h2 className="text-[28px] font-serif text-white mb-2">{question.text}</h2>
        {question.subtext && <p className="text-sm font-mono text-white/50 mb-8">{question.subtext}</p>}
        
        <div className="flex flex-col gap-[10px]">
          {options.map((opt: any) => {
            const isSelected = selectedValues.includes(opt.value);
            return (
              <div
                key={opt.value}
                onClick={() => toggleValue(opt.value)}
                className={`flex items-start p-[16px] px-[20px] rounded cursor-pointer transition-all border ${
                  isSelected 
                    ? 'bg-[#b8860b]/15 border-[#b8860b]' 
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                <div className={`mt-0.5 shrink-0 w-[18px] h-[18px] rounded-[3px] border flex items-center justify-center mr-4 ${
                  isSelected ? 'border-[#b8860b] bg-[#b8860b]' : 'border-white/30'
                }`}>
                  {isSelected && <span className="text-white text-[10px]">✓</span>}
                </div>
                <div>
                  <div className="text-[14px] font-mono text-white mb-1">{opt.label}</div>
                  {opt.desc && (
                    <div className="text-[12px] font-mono text-white/45 leading-relaxed">{opt.desc}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};
