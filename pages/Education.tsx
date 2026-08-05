
import React from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="pt-28 pb-8">
      <div className="max-w-4xl">
        <div className="stagger-1 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Education & <span className="text-orange-600 dark:text-orange-500">Experience</span>
          </h2>
          <p className="text-zinc-500 text-lg">
            Academic degrees, research affiliations, and university teaching roles at FEUP.
          </p>
        </div>
        
        {/* Academic Education Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8 stagger-2">
            <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-500 text-sm font-bold">
              🎓
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Academic Education
            </h3>
          </div>

          <div className="space-y-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 ml-[11px] hidden md:block transition-colors"></div>
            
            {EDUCATION_DATA.map((edu, index) => (
              <div key={edu.id} className={`md:pl-10 relative stagger-${Math.min(index + 2, 5)}`}>
                <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-white dark:bg-zinc-950 border-2 border-orange-600 dark:border-orange-500 z-10 hidden md:block transition-colors"></div>
                
                <div className="bg-white dark:bg-zinc-900/10 border border-zinc-200 dark:border-zinc-800/50 p-8 rounded-3xl hover:border-orange-500/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] transition-all duration-500 group shadow-sm dark:shadow-none">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 bg-orange-600/10 dark:bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-500 text-xs font-bold rounded-full">
                      {edu.status}
                    </span>
                    <span className="text-orange-600 dark:text-orange-500/80 mono text-xs font-bold bg-orange-500/5 px-3 py-1 rounded-full group-hover:bg-orange-500/20 transition-all shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors leading-snug mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 font-medium mb-6">
                    {edu.institution}
                  </p>
                  
                  <ul className="space-y-3">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-zinc-500 flex items-start gap-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-400 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600/50 dark:bg-orange-500/50 mt-2 shrink-0 group-hover:bg-orange-500 group-hover:scale-125 transition-all"></span>
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience & Affiliations Section */}
        <section>
          <div className="flex items-center gap-3 mb-8 stagger-3">
            <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-500 text-sm font-bold">
              💼
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Professional Experience & Affiliations
            </h3>
          </div>

          <div className="space-y-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 ml-[11px] hidden md:block transition-colors"></div>
            
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={exp.id} className={`md:pl-10 relative stagger-${Math.min(index + 3, 5)}`}>
                <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-white dark:bg-zinc-950 border-2 border-orange-600 dark:border-orange-500 z-10 hidden md:block transition-colors"></div>
                
                <div className="bg-white dark:bg-zinc-900/10 border border-zinc-200 dark:border-zinc-800/50 p-8 rounded-3xl hover:border-orange-500/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] transition-all duration-500 group shadow-sm dark:shadow-none">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold rounded-full border border-zinc-200 dark:border-zinc-700">
                      {exp.category}
                    </span>
                    <span className="text-orange-600 dark:text-orange-500/80 mono text-xs font-bold bg-orange-500/5 px-3 py-1 rounded-full group-hover:bg-orange-500/20 transition-all shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors leading-snug mb-2">
                    {exp.role}
                  </h4>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 font-medium mb-6">
                    {exp.employer}
                  </p>
                  
                  <ul className="space-y-3">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="text-zinc-500 flex items-start gap-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-400 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600/50 dark:bg-orange-500/50 mt-2 shrink-0 group-hover:bg-orange-500 group-hover:scale-125 transition-all"></span>
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Education;

