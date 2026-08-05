
import React from 'react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange, isDarkMode, toggleDarkMode }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Education & Experience', id: 'education' },
    { name: 'Publications', id: 'publications' },
    { name: 'Projects', id: 'projects' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => onPageChange('home')}
          className="group text-zinc-900 dark:text-zinc-100 font-bold text-lg md:text-xl tracking-tight hover:text-orange-600 dark:hover:text-orange-500 transition-all focus:outline-none flex items-center gap-1.5"
        >
          <span className="text-orange-600 dark:text-orange-500 font-mono font-black">&lt;</span>
          <span>João Oliveira</span>
          <span className="text-orange-600 dark:text-orange-500 font-mono font-black">/&gt;</span>
        </button>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`relative py-1 text-xs font-bold uppercase tracking-widest transition-all focus:outline-none group ${
                  currentPage === item.id
                    ? 'text-orange-600 dark:text-orange-500'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                  currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Theme Toggle Switch */}
          <button 
            onClick={toggleDarkMode}
            className="flex items-center gap-2 p-1.5 px-3 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 transition-all hover:scale-105 active:scale-95 group/toggle"
            aria-label="Toggle theme"
          >
            <span className={`text-xs transition-all duration-300 ${!isDarkMode ? 'text-orange-600 scale-110 rotate-0' : 'text-zinc-400 opacity-40 rotate-45'}`}>☀️</span>
            <div className="w-9 h-5 bg-zinc-300 dark:bg-zinc-800 rounded-full relative transition-colors duration-500">
              <div 
                className={`absolute top-1 left-1 h-3 w-3 rounded-full transition-all duration-300 shadow-sm ${
                  isDarkMode 
                    ? 'translate-x-4 bg-orange-500 shadow-orange-500/50' 
                    : 'translate-x-0 bg-white shadow-zinc-400'
                }`}
              ></div>
            </div>
            <span className={`text-xs transition-all duration-300 ${isDarkMode ? 'text-orange-500 scale-110 rotate-0' : 'text-zinc-400 opacity-40 -rotate-45'}`}>🌙</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
