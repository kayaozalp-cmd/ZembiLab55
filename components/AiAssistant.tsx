import React, { useState, useCallback } from 'react';
import { askZembilAI } from '../services/geminiService';
import { renderMarkdownWithLinks } from '../utils/markdownUtils';

export const AiAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = useCallback(async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null); // Clear previous response
    
    const result = await askZembilAI(query);
    
    setResponse(result);
    setIsLoading(false);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAsk();
    }
  };

  return (
    <div className="flex flex-col gap-10 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 md:p-10 text-center items-center transition-all duration-300">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-black dark:text-white md:text-4xl">ZembilAI Asistan</h2>
        <p className="text-md mx-auto max-w-2xl text-black/60 dark:text-white/60 md:text-lg">
          Yapay zeka asistanımızla Bafra Zembili hakkında her şeyi öğrenin.
        </p>
      </div>
      
      <div className="w-full max-w-2xl space-y-6">
        <div className="relative">
          <input 
            className="w-full h-14 pl-6 pr-40 rounded-full bg-background-light dark:bg-background-dark border border-black/10 dark:border-white/10 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm" 
            placeholder="Bafra Zembili hakkında merak ettiklerini sor..." 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button 
            onClick={handleAsk}
            disabled={isLoading || !query.trim()}
            className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all hover:opacity-90 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                Düşünüyor...
              </span>
            ) : (
              <span className="truncate">Yapay Zekaya Sor</span>
            )}
          </button>
        </div>

        {/* Response Area */}
        {(response || isLoading) && (
          <div className="text-left bg-white/10 dark:bg-black/20 rounded-2xl p-6 border border-black/5 dark:border-white/5 shadow-inner min-h-[100px] animate-in fade-in slide-in-from-bottom-2 duration-500">
             {isLoading ? (
               <div className="flex items-center justify-center h-20 gap-3 text-primary">
                 <span className="material-symbols-outlined animate-bounce">fiber_manual_record</span>
                 <span className="material-symbols-outlined animate-bounce delay-100">fiber_manual_record</span>
                 <span className="material-symbols-outlined animate-bounce delay-200">fiber_manual_record</span>
               </div>
             ) : (
               <div className="prose prose-invert max-w-none">
                 <div className="flex items-center gap-2 mb-4 text-primary font-bold border-b border-primary/20 pb-2">
                    <span className="material-symbols-outlined">smart_toy</span>
                    <span>ZembilAI Cevabı:</span>
                 </div>
                 {renderMarkdownWithLinks(response || "")}
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
};