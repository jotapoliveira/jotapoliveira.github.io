
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="pt-28 pb-8">
      <div className="stagger-1 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Research <span className="text-orange-600 dark:text-orange-500">Initiatives</span></h2>
        <p className="text-zinc-500 text-lg">Contracted research projects, intelligent railway systems, and industry collaborations.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {PROJECTS_DATA.map((project, index) => {
          const isExpanded = selectedId === project.id;
          
          return (
            <div 
              key={project.id} 
              onClick={() => toggleProject(project.id)}
              className={`relative flex flex-col overflow-hidden border transition-all duration-700 cursor-pointer group stagger-${Math.min(index + 2, 5)} ${
                isExpanded 
                  ? 'border-orange-600 dark:border-orange-500 bg-white dark:bg-zinc-900/40 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(249,115,22,0.2)]' 
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/20 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 shadow-sm dark:shadow-none'
              }`}
            >
              <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-8 lg:items-center">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                        project.status === 'Ongoing' 
                        ? 'bg-orange-600 dark:bg-orange-500 text-white dark:text-black' 
                        : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">{project.period}</span>
                    </div>
                    {project.grantCode && (
                      <span className="text-zinc-400 dark:text-zinc-500 mono text-xs">Ref: {project.grantCode}</span>
                    )}
                  </div>
                  
                  <h3 className={`text-3xl md:text-4xl font-bold mb-2 transition-colors ${isExpanded ? 'text-orange-600 dark:text-orange-500' : 'text-zinc-900 dark:text-zinc-100 group-hover:text-orange-500'}`}>
                    {project.name}
                  </h3>
                  <p className="text-orange-600/90 dark:text-orange-500/90 text-xs font-bold mono uppercase tracking-wider mb-3">Role: {project.role}</p>
                  <p className="text-sm font-semibold text-zinc-500 mb-4">{project.designation}</p>
                  
                  <p className={`text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 transition-opacity ${isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                    {project.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 transition-all ${isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-tighter text-zinc-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {!isExpanded && (
                  <div className="hidden lg:block w-36 h-36 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                )}
              </div>

              <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1500px] opacity-100 border-t border-zinc-100 dark:border-zinc-800/50' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 mb-3">Project Overview & Objectives</h4>
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base md:text-lg">
                        {project.fullDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 mb-3">Funding Entity</h4>
                        <div className="flex items-center gap-3 px-4 py-3 bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl transition-colors">
                          <span className="text-orange-600 dark:text-orange-500 text-sm font-bold">🏛️</span>
                          <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">{project.funder}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 mb-3">Research Domains</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <div key={tag} className="flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-500"></span>
                              <span className="text-[10px] font-bold text-orange-600 dark:text-orange-500 uppercase">{tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-xl">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                      <div className="absolute bottom-6 left-6">
                        <span className="text-xs font-bold text-orange-400 dark:text-orange-500 mono uppercase tracking-widest">{project.name} Research</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="px-8 md:px-10 pb-10 flex justify-center">
                  <button className="text-zinc-400 dark:text-zinc-600 hover:text-orange-500 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-colors">
                    Click to minimize <span className="rotate-180">↑</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

