'use client';

import React from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative inline-flex items-center justify-between p-1 w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-inner"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`w-6 h-6 rounded-full bg-white dark:bg-indigo-600 flex items-center justify-center shadow-md transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-3.5 h-3.5 text-white" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-500" />
        )}
      </span>
      <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none text-xs font-semibold">
        <Sun className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-slate-400 opacity-60' : 'opacity-0'}`} />
        <Moon className={`w-3.5 h-3.5 ${theme === 'dark' ? 'opacity-0' : 'text-slate-500 opacity-60'}`} />
      </div>
    </button>
  );
};
