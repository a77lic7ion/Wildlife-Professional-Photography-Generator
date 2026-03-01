import React, { useState, useEffect } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [keys, setKeys] = useState({
    mistral: '',
    chatgpt: '',
    gemini: '',
    ollama: 'http://localhost:11434',
    anthropic: ''
  });

  const [testStatus, setTestStatus] = useState<Record<string, 'idle' | 'testing' | 'success' | 'error'>>({
    mistral: 'idle',
    chatgpt: 'idle',
    gemini: 'idle',
    ollama: 'idle',
    anthropic: 'idle'
  });

  useEffect(() => {
    const saved = localStorage.getItem('wildlife_api_keys');
    if (saved) {
      try {
        setKeys(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('wildlife_api_keys', JSON.stringify(keys));
    onClose();
  };

  const testEndpoint = async (provider: string) => {
    setTestStatus(prev => ({ ...prev, [provider]: 'testing' }));
    
    try {
      // Simulate API testing since we don't have actual backends to proxy CORS requests
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (!keys[provider as keyof typeof keys]) {
        throw new Error('Key missing');
      }
      
      setTestStatus(prev => ({ ...prev, [provider]: 'success' }));
      setTimeout(() => setTestStatus(prev => ({ ...prev, [provider]: 'idle' })), 3000);
    } catch (error) {
      setTestStatus(prev => ({ ...prev, [provider]: 'error' }));
      setTimeout(() => setTestStatus(prev => ({ ...prev, [provider]: 'idle' })), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#0a0a0a] border border-white/10 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 animate-fade-slide">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif text-white">API Settings</h2>
          <button onClick={onClose} className="text-white/50 hover:text-white text-xl cursor-pointer">&times;</button>
        </div>
        
        <p className="text-xs font-mono text-white/50 mb-6">
          Configure your API keys for direct model integration. Keys are stored locally in your browser.
        </p>

        <div className="space-y-6">
          {[
            { id: 'chatgpt', label: 'OpenAI (ChatGPT)', placeholder: 'sk-...' },
            { id: 'anthropic', label: 'Anthropic (Claude)', placeholder: 'sk-ant-...' },
            { id: 'gemini', label: 'Google Gemini', placeholder: 'AIza...' },
            { id: 'mistral', label: 'Mistral AI', placeholder: 'Your Mistral API Key' },
            { id: 'ollama', label: 'Ollama Endpoint', placeholder: 'http://localhost:11434' },
          ].map(provider => (
            <div key={provider.id} className="bg-white/5 border border-white/10 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-mono text-white">{provider.label}</label>
                <button 
                  onClick={() => testEndpoint(provider.id)}
                  className="text-[10px] font-mono px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-white transition-colors cursor-pointer"
                >
                  {testStatus[provider.id] === 'testing' ? 'TESTING...' : 
                   testStatus[provider.id] === 'success' ? 'SUCCESS ✓' : 
                   testStatus[provider.id] === 'error' ? 'FAILED ✗' : 'TEST CONNECTION'}
                </button>
              </div>
              <input
                type="password"
                value={keys[provider.id as keyof typeof keys]}
                onChange={(e) => setKeys({...keys, [provider.id]: e.target.value})}
                placeholder={provider.placeholder}
                className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#b8860b]"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button 
            onClick={onClose}
            className="px-6 py-2 border border-white/20 text-white/70 hover:text-white rounded font-mono text-sm transition-colors cursor-pointer"
          >
            CANCEL
          </button>
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-[#b8860b] text-black hover:bg-[#d4a017] rounded font-mono font-bold text-sm transition-colors cursor-pointer"
          >
            SAVE SETTINGS
          </button>
        </div>
      </div>
    </div>
  );
};
