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
    <div className="flex flex-col gap-8 rounded-2xl border border-secondary/30 dark:border-white/10 bg-accent/50 dark:bg-surface-dark p-6 md:p-12 text-center items-center transition-all duration-300 shadow-sm">
      <div className="flex flex-col gap-3 text-center">
        <div className="mx-auto bg-white dark:bg-white/10 p-3 rounded-full shadow-sm mb-2">
            <span className="material-symbols-outlined text-4xl text-primary dark:text-secondary">smart_toy</span>
        </div>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-main dark:text-white md:text-4xl">ZembilAI Asistan</h2>
        <p className="text-md mx-auto max-w-2xl text-text-main/70 dark:text-gray-400 md:text-lg">
          Yapay zeka asistanımızla Bafra Zembili hakkında her şeyi öğrenin.
        </p>
      </div>
      
      <div className="w-full max-w-2xl space-y-6">
        <div className="relative group">
          <input 
            className="w-full h-14 pl-6 pr-40 rounded-full bg-white dark:bg-surface-light-dark border border-secondary/40 dark:border-white/10 text-text-main dark:text-white placeholder:text-text-main/40 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm group-hover:shadow-md" 
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
            className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all hover:bg-primary-dark ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                Düşünüyor
              </span>
            ) : (
              <span className="truncate">Sor</span>
            )}
          </button>
        </div>

        {/* Response Area */}
        {(response || isLoading) && (
          <div className="text-left bg-white dark:bg-surface-light-dark rounded-2xl p-8 border border-secondary/20 dark:border-white/5 shadow-md min-h-[100px] animate-in fade-in slide-in-from-bottom-2 duration-500">
             {isLoading ? (
               <div className="flex items-center justify-center h-20 gap-3 text-primary dark:text-secondary">
                 <span className="material-symbols-outlined animate-bounce">fiber_manual_record</span>
                 <span className="material-symbols-outlined animate-bounce delay-100">fiber_manual_record</span>
                 <span className="material-symbols-outlined animate-bounce delay-200">fiber_manual_record</span>
               </div>
             ) : (
               <div className="prose prose-stone max-w-none text-text-main dark:text-gray-200">
                 <div className="flex items-center gap-2 mb-4 text-primary-dark dark:text-secondary font-bold border-b border-secondary/20 dark:border-white/10 pb-2">
                    <span className="material-symbols-outlined">auto_awesome</span>
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