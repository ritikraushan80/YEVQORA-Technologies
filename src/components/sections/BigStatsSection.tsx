'use client';

import React from 'react';

export const BigStatsSection: React.FC = () => {
  const stats = [
    { value: '99.999%', label: 'SLA Uptime Guarantee' },
    { value: '250M+', label: 'Data Transferred Daily' },
    { value: '50ms', label: 'Global Solid Latency' },
    { value: '12+', label: 'Exabyte Data Pipeline Ready' },
  ];

  return (
    <section className="py-16 bg-slate-50/80 dark:bg-[#090d16] border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center space-y-2 shadow-sm hover:border-indigo-500/50 transition-colors"
            >
              <div className="text-3xl sm:text-4xl md:text-4xl font-bold text-indigo-600 dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-400 dark:via-sky-400 dark:to-blue-500 dark:bg-clip-text font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
