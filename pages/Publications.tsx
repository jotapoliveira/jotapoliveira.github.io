
import React from 'react';
import { PUBLICATIONS_DATA, ACTIVITIES_DATA } from '../constants';

const Publications: React.FC = () => {
  return (
    <div className="pt-28 pb-8">
      <div className="flex justify-between items-end mb-16 stagger-1">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Scientific <span className="text-orange-600 dark:text-orange-500">Output</span></h2>
          <p className="text-zinc-500 text-lg">Conference papers, dissertations, and scientific event presentations.</p>
        </div>
        <div className="hidden md:block text-zinc-500 dark:text-zinc-600 mono text-xs uppercase tracking-widest bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 transition-colors">
          {PUBLICATIONS_DATA.length} Publications
        </div>
      </div>

      <div className="grid gap-8 mb-20">
        {PUBLICATIONS_DATA.map((pub, index) => (
          <div key={pub.id} className={`group p-8 md:p-10 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] bg-white dark:bg-zinc-900/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 hover:border-orange-500/40 transition-all duration-500 stagger-${Math.min(index + 2, 5)} shadow-sm dark:shadow-none`}>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 bg-orange-600 dark:bg-orange-500 text-white dark:text-black text-xs font-black rounded-full uppercase">{pub.year}</span>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-bold rounded-full">{pub.type}</span>
                  {pub.status && (
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold rounded-full">
                      {pub.status}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-3 leading-tight">
                  {pub.title}
                </h3>
                <p className="text-orange-600/90 dark:text-orange-500/90 font-mono text-xs mb-3">{pub.venue}</p>
                <p className="text-zinc-500 dark:text-zinc-400 mb-6 font-medium italic opacity-80 text-sm">Authors: {pub.authors}</p>
                
                <div className="relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-zinc-200 dark:bg-zinc-800 rounded-full group-hover:bg-orange-500/50 transition-colors"></div>
                  <div className="pl-5">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 mb-2 font-black">Abstract</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">{pub.abstract}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activities & Conference Presentations */}
      <div className="stagger-4">
        <h3 className="text-3xl font-bold mb-8 tracking-tight flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          Oral Presentations & Scientific Events
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACTIVITIES_DATA.map((act) => (
            <div key={act.id} className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-orange-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-500 rounded-full">
                    {act.type}
                  </span>
                  <span className="text-xs mono text-zinc-400">{act.date}</span>
                </div>
                <h4 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-2 leading-snug">
                  {act.title}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{act.event}</p>
              </div>
              {act.location && (
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                  <span>Location</span>
                  <span className="font-semibold text-zinc-600 dark:text-zinc-300">{act.location}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;

