import React from 'react';
import { CopyButton } from './CopyButton';

interface QuoteData {
  text: string;
  accentWord: string;
  accentColorHex: string;
  accentColorName: string;
}

interface QuoteResultsViewProps {
  title: string;
  subtitle?: string;
  quoteData: QuoteData;
  results: any[];
  onAccentChange: (word: string) => void;
  onReset: () => void;
  isKidsMode?: boolean;
}

export const QuoteResultsView: React.FC<QuoteResultsViewProps> = ({
  title,
  subtitle,
  quoteData,
  results,
  onAccentChange,
  onReset,
  isKidsMode
}) => {
  // Split quote into words and punctuation to make words clickable
  const words = quoteData.text.split(/([ \n.,!?]+)/);

  const handleWordClick = (word: string) => {
    const cleanWord = word.replace(/[^a-zA-Z0-9'-]/g, '');
    if (cleanWord.length > 0) {
      onAccentChange(cleanWord.toUpperCase());
    }
  };

  return (
    <div className="animate-fade-slide pb-20">
      <div className="mb-12">
        <h1 className="text-[24px] font-mono tracking-widest text-[#b8860b] mb-2 uppercase">GENERATED FOR:</h1>
        <h2 className="text-[40px] font-serif text-white leading-tight">{title}</h2>
        {subtitle && <div className="text-[14px] font-mono text-white/50 mt-2">{subtitle}</div>}
      </div>

      <hr className="border-white/10 mb-12" />

      <div className="mb-12">
        <h3 className="text-[14px] font-mono tracking-widest text-white/50 mb-4 uppercase">QUOTE PREVIEW</h3>
        <div className="bg-white/5 border border-white/10 rounded p-8">
          <div className="text-[24px] font-sans font-bold leading-relaxed uppercase mb-8">
            {words.map((part, i) => {
              const cleanPart = part.replace(/[^a-zA-Z0-9'-]/g, '').toUpperCase();
              const isAccent = cleanPart === quoteData.accentWord.toUpperCase() && cleanPart.length > 0;
              
              if (part.trim().length === 0 || cleanPart.length === 0) {
                return <span key={i}>{part}</span>;
              }

              return (
                <span
                  key={i}
                  onClick={() => handleWordClick(part)}
                  className={`cursor-pointer transition-colors ${isAccent ? '' : 'text-white hover:text-white/70'}`}
                  style={isAccent ? { color: quoteData.accentColorHex } : {}}
                  title="Click to set as accent word"
                >
                  {isAccent ? `[${part}]` : part}
                </span>
              );
            })}
          </div>
          <div className="flex items-center gap-4 text-[12px] font-mono text-white/50">
            <div className="flex items-center gap-2">
              <span>Accent colour:</span>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: quoteData.accentColorHex }} />
              <span style={{ color: quoteData.accentColorHex }}>{quoteData.accentColorName}</span>
            </div>
            <span>|</span>
            <span>[TAP ANY WORD TO CHANGE ACCENT]</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {results.map((res, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-sm border border-[#b8860b] text-[#b8860b] rounded-full w-6 h-6 flex items-center justify-center">{idx + 1}</span> 
              <h3 className="text-[16px] font-mono tracking-wider text-white uppercase">{res.model}</h3>
            </div>

            <div className="flex flex-col gap-4">
              {res.prompts.map((p: any, pIdx: number) => (
                <div key={pIdx} className="relative bg-white/5 border border-white/10 rounded p-4 pt-10">
                  <CopyButton text={p.text} />
                  {p.label && <div className="absolute top-3 left-4 text-[10px] font-mono text-[#b8860b] uppercase">{p.label}</div>}
                  <pre className="text-[12px] font-mono leading-[1.7] text-white/75 whitespace-pre-wrap break-words font-sans">
                    {p.text}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isKidsMode && (
        <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded text-[12px] font-mono text-white/50 flex gap-3">
          <span className="text-[#b8860b]">ℹ</span>
          <p>All quotes are original and copyright-free. No licensed characters or brand IP are used in this generator.</p>
        </div>
      )}

      <hr className="border-white/10 my-12" />

      <button
        onClick={onReset}
        className="w-full py-[12px] bg-transparent border border-white/20 text-white font-mono text-sm rounded hover:bg-white/5 transition-colors cursor-pointer"
      >
        ← NEW SESSION
      </button>
    </div>
  );
};
