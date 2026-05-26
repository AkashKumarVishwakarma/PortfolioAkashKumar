import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'TechNova Solutions',
      companyUrl: '#',
      startYear: 'PRESENT',
      endYear: '2023',
      points: [
        'Architected and deployed a microservice using Rust, reducing API latency by 40%.',
        'Collaborated with the data science team to optimize SQL queries for large datasets.',
        'Implemented automated CI/CD pipelines using GitHub Actions, cutting deployment time in half.'
      ],
      active: true
    },
    {
      title: 'Backend Developer Co-op',
      company: 'DataStream Inc.',
      companyUrl: '#',
      startYear: '2022',
      endYear: '2022',
      points: [
        'Developed RESTful APIs in Python (Django) to serve real-time analytics to the frontend dashboard.',
        'Wrote comprehensive unit and integration tests, increasing code coverage to 85%.',
        'Participated in daily stand-ups and agile sprint planning sessions.'
      ],
      active: false
    }
  ];

  return (
    <div className="pt-28 pb-16 animate-fade-in">
      <div className="space-y-4 mb-16">
        <h2 className="text-3xl font-bold text-white tracking-tight">Engineering Experience</h2>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-12 relative group">
            {/* Timeline Year Indicators (Left Column on Desktop) */}
            <div className="md:col-span-2 flex md:flex-col items-baseline md:items-end justify-start text-xs font-mono font-bold tracking-widest text-slate-500 pt-1">
              <span className={exp.active ? 'text-indigo-400' : 'text-slate-500'}>{exp.startYear}</span>
              <span className="mx-2 md:hidden">—</span>
              <span className="text-[10px] md:mt-1">{exp.endYear}</span>
            </div>

            {/* Vertical Line with Node Dot (Center Column on Desktop) */}
            <div className="hidden md:col-span-1 md:flex flex-col items-center relative">
              {/* Dot */}
              <div className={`w-3.5 h-3.5 rounded-full border-2 z-15 transition-colors duration-300 ${
                exp.active 
                  ? 'bg-indigo-500 border-indigo-500 shadow-md shadow-indigo-500/50' 
                  : 'bg-slate-950 border-slate-700 group-hover:border-slate-500'
              }`} />
              
              {/* Line (Only draw if not the last item) */}
              {index < experiences.length - 1 && (
                <div className="w-[1px] bg-slate-800 flex-1 absolute top-3.5 bottom-0 -z-10" />
              )}
            </div>

            {/* Experience Details Card (Right Column on Desktop) */}
            <div className="md:col-span-9 bg-slate-900/40 border border-slate-800 rounded p-6 hover:border-slate-750 transition-all duration-300">
              <div className="flex items-start gap-4">
                {/* Icon Box */}
                <div className="w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <Briefcase size={18} />
                </div>

                {/* Header */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {exp.title}
                  </h3>
                  <a 
                    href={exp.companyUrl} 
                    className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors inline-block"
                  >
                    {exp.company}
                  </a>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="list-disc pl-5 mt-6 space-y-3 text-sm text-slate-400 leading-relaxed marker:text-slate-600">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
