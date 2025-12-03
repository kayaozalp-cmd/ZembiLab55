import React, { useEffect, useState } from 'react';

interface HeaderProps {
  onOpenAbout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAbout }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Logo Section - Top Centered */}
      <div className="flex justify-center items-center py-6 md:py-8 w-full">
        <a className="flex items-center justify-center transition-transform hover:scale-105 duration-300" href="#">
          <div className="dark:bg-white/90 dark:px-4 dark:py-2 dark:rounded-2xl transition-colors duration-300">
            <img 
              alt="ZembiLab Logo" 
              className="h-24 md:h-32 w-auto object-contain drop-shadow-sm" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAafZX62OkHTfK6WbEkPUtdASHiTmLTlmsgdu_VZWZBdo7S_lgBmWah7Jlzk9I409Gy0sG8jM4vn_diezsapougDTSqBSMBs0WosQSP14_DMlDUB6E8uwDWJYjVn2idT9I6ia5T6RNtHQjH0Nt1-11C6pVVDWrG2pHvp7MiLNYj5Rv5Hf1v7GdFD6CeZ60tCtUFFSQMm6hyJaI9LQtAhWcyylGfsF0EENtsvPPBS0bdeWBdnWEYLxvPT7RhGVmDaShpRXCcHKCN5CY"
            />
          </div>
        </a>
      </div>

      {/* Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-y border-solid border-secondary/30 dark:border-white/10 py-4 w-full bg-white/50 dark:bg-surface-dark/50 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center pl-4">
          <button className="text-text-main dark:text-white hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center gap-10 items-center">
          <a 
            className="text-text-main dark:text-gray-200 text-base font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors cursor-pointer" 
            onClick={(e) => { e.preventDefault(); onOpenAbout(); }}
            href="#"
          >
            Hakkında
          </a>
          <a className="text-text-main dark:text-gray-200 text-base font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="https://instagram.com" target="_blank" rel="noreferrer">İnstagram</a>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary-dark transition-colors shadow-sm">
            <span className="truncate">Laboratuvarı Keşfet</span>
          </button>
        </div>

        {/* Right Side Actions (Theme Toggle & Mobile CTA) */}
        <div className="flex items-center gap-3 pr-4 md:absolute md:right-0 md:pr-10">
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 dark:bg-white/10 text-primary-dark dark:text-secondary hover:bg-secondary/40 dark:hover:bg-white/20 transition-all duration-300"
            aria-label="Koyu Modu Değiştir"
          >
            <span className="material-symbols-outlined text-xl">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Mobile CTA (Visible only on mobile) */}
          <div className="md:hidden flex items-center">
             <button className="flex cursor-pointer items-center justify-center rounded-full h-9 px-5 bg-primary text-white text-xs font-bold leading-normal tracking-[0.015em] hover:bg-primary-dark transition-colors shadow-sm">
              Keşfet
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};