
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-28 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center md:justify-start stagger-1">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            <div className="image-ring"></div>
            <div className="absolute inset-0 bg-orange-500 rounded-full animate-glow blur-xl opacity-20"></div>
            <div className="absolute inset-0 border-2 border-orange-500/30 rounded-full scale-105"></div>
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-50 dark:border-zinc-950 bg-white dark:bg-zinc-900 shadow-2xl z-10 flex flex-col items-center justify-center transition-colors duration-500">
              {PERSONAL_INFO.photo ? (
                <img 
                  src={PERSONAL_INFO.photo} 
                  alt={PERSONAL_INFO.fullName} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-8 text-center flex flex-col items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-24 h-24 text-orange-600 dark:text-orange-500 opacity-90 transition-opacity duration-700">
                    <circle cx="100" cy="100" r="12" fill="currentColor" />
                    <path d="M100 88 V35 H145" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M100 112 V165 H55" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M112 100 H165 V65" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M88 100 H35 V135" fill="none" stroke="currentColor" strokeWidth="4" />
                    <circle cx="145" cy="35" r="5" fill="currentColor" />
                    <circle cx="55" cy="165" r="5" fill="currentColor" />
                    <circle cx="165" cy="65" r="5" fill="currentColor" />
                    <circle cx="35" cy="135" r="5" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="stagger-2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 leading-tight">
              {PERSONAL_INFO.fullName}
            </h1>
            <div className="h-1.5 w-24 bg-orange-600 dark:bg-orange-500 mt-4 mb-4 rounded-full"></div>
            <p className="text-lg text-orange-600 dark:text-orange-500 mono font-semibold">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              {PERSONAL_INFO.institution}
            </p>
          </div>
          
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base md:text-lg max-w-xl stagger-3">
            {PERSONAL_INFO.presentation}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 stagger-4">
            <a 
              href={`https://orcid.org/${PERSONAL_INFO.orcid}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:border-orange-500 hover:text-orange-500 transition-all flex items-center gap-2.5 group shadow-sm"
              title="View ORCID Profile"
            >
              <svg className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 256 256">
                <circle cx="128" cy="128" r="128" fill="#A6CE39"/>
                <path d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.5-56.8 53.5h-41.8V79.1zm15.4 14.1v78.9h25.2c26.9 0 41.7-16.5 41.7-39.4 0-21.3-13.8-39.5-41.3-39.5h-25.6zM86.3 51.9c0 5.2-4.2 9.4-9.4 9.4-5.2 0-9.4-4.2-9.4-9.4 0-5.2 4.2-9.4 9.4-9.4 5.2 0 9.4 4.2 9.4 9.4z" fill="#FFF"/>
              </svg>
              <span>ORCID: <span className="mono">{PERSONAL_INFO.orcid}</span></span>
            </a>

            <a 
              href={`https://www.cienciavitae.pt/portal/${PERSONAL_INFO.cienciaId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:border-orange-500 hover:text-orange-500 transition-all flex items-center gap-2.5 group shadow-sm"
              title="View Ciência Vitae Profile"
            >
              <span>Ciência ID: <span className="mono">{PERSONAL_INFO.cienciaId}</span></span>
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2 stagger-4">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="px-8 py-3 bg-orange-600 dark:bg-orange-500 text-white dark:text-black font-bold rounded-full hover:bg-orange-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20">
              Contact Me
            </a>
            <span className="text-sm text-zinc-500 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              {PERSONAL_INFO.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
