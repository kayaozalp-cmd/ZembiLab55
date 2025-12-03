import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Logo Section - Top Centered */}
      <div className="flex justify-center items-center py-6 md:py-8 w-full">
        <a className="flex items-center justify-center transition-transform hover:scale-105 duration-300" href="#">
          <img 
            alt="ZembiLab Logo" 
            className="h-24 md:h-32 w-auto object-contain drop-shadow-sm" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAafZX62OkHTfK6WbEkPUtdASHiTmLTlmsgdu_VZWZBdo7S_lgBmWah7Jlzk9I409Gy0sG8jM4vn_diezsapougDTSqBSMBs0WosQSP14_DMlDUB6E8uwDWJYjVn2idT9I6ia5T6RNtHQjH0Nt1-11C6pVVDWrG2pHvp7MiLNYj5Rv5Hf1v7GdFD6CeZ60tCtUFFSQMm6hyJaI9LQtAhWcyylGfsF0EENtsvPPBS0bdeWBdnWEYLxvPT7RhGVmDaShpRXCcHKCN5CY"
          />
        </a>
      </div>

      {/* Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-y border-solid border-black/10 dark:border-white/10 py-4 w-full">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-black dark:text-white hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center gap-10 items-center">
          <a className="text-black dark:text-white text-base font-medium leading-normal hover:text-primary transition-colors" href="#about">Hakkında</a>
          <a className="text-black dark:text-white text-base font-medium leading-normal hover:text-primary transition-colors" href="https://instagram.com" target="_blank" rel="noreferrer">İnstagram Sayfamız</a>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Laboratuvarı Keşfet</span>
          </button>
        </div>

         {/* Mobile CTA (Visible only on mobile) */}
        <div className="md:hidden flex items-center">
           <button className="flex cursor-pointer items-center justify-center rounded-full h-9 px-5 bg-primary text-white text-xs font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            Keşfet
          </button>
        </div>
      </header>
    </div>
  );
};