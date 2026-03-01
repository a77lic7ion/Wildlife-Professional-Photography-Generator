import React from 'react';
import { CopyButton } from './CopyButton';

interface ResultsViewProps {
  results: any[];
  animal: string;
  onReset: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ results, animal, onReset }) => {
  const totalModels = results.length > 0 ? results[0].prompts.length : 0;

  return (
    <div className="animate-fade-slide pb-20">
      <div className="mb-12">
        <h1 className="text-[40px] font-serif text-white mb-2 leading-tight">{animal}</h1>
        <div className="text-[11px] font-mono tracking-[0.12em] text-white/35 uppercase">
          {results.length} VARIATIONS — {totalModels} MODELS
        </div>
      </div>

      <hr className="border-white/10 mb-12" />

      <div className="flex flex-col gap-12">
        {results.map((res, idx) => (
          <div key={idx}>
            <div className="mb-6">
              <h3 className="text-[16px] font-serif text-[#b8860b] mb-2 flex items-center gap-2">
                <span className="font-mono text-sm border border-[#b8860b] rounded-full w-6 h-6 flex items-center justify-center">{idx + 1}</span> 
                {res.title}
              </h3>
              <p className="text-[12px] font-mono text-white/45 italic">"{res.description}"</p>
            </div>

            <div className="flex flex-col gap-6">
              {res.prompts.map((p: any, pIdx: number) => (
                <div key={pIdx}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                    <span className="text-[11px] font-mono tracking-wider text-white/60 uppercase">MODEL: {p.model}</span>
                  </div>
                  <div className="relative bg-white/5 border border-white/10 rounded p-4 pt-10">
                    <CopyButton text={p.text} />
                    <pre className="text-[12px] font-mono leading-[1.7] text-white/75 whitespace-pre-wrap break-words font-sans">
                      {p.text}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
            
            {idx < results.length - 1 && <hr className="border-white/10 mt-12" />}
          </div>
        ))}
      </div>

      <hr className="border-white/10 my-12" />

      <button
        onClick={onReset}
        className="w-full py-[12px] bg-[#b8860b] text-black font-mono font-bold text-sm rounded hover:bg-[#d4a017] transition-colors cursor-pointer"
      >
        NEW SESSION
      </button>
    </div>
  );
};
