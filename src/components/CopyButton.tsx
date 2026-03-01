import React, { useState } from 'react';

export const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 text-[11px] font-mono tracking-[0.08em] text-white/50 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded cursor-pointer"
    >
      {copied ? 'COPIED ✓' : 'COPY'}
    </button>
  );
};
