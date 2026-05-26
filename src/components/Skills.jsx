import React from 'react';
import { Code2, Server, Layout, Database } from 'lucide-react';

export default function Skills() {
  const languages = [
    { name: 'JavaScript / TS', level: 'Advanced', percent: 90 },
    { name: 'Python', level: 'Advanced', percent: 85 },
    { name: 'SQL / MongoDB', level: 'Proficient', percent: 80 },
    { name: 'Java', level: 'Proficient', percent: 75 },
    { name: 'C++ / C', level: 'Intermediate', percent: 60 }
  ];

  const tools = [
    'Git & GitHub',
    'Jupyter Notebooks',
    'VS Code',
    'pandas & Matplotlib',
    'Postman',
    'Linux',
    'Docker',
  ];

  const frameworks = [
    { title: 'React', desc: 'Frontend UI' },
    { title: 'Next.js', desc: 'Fullstack Apps' },
    { title: 'Node.js & Express', desc: 'Backend APIs (MERN)' },
    { title: 'Numpy & Pandas', desc: 'Data Analysis' },
    { title: 'Scikit-learn', desc: 'Machine Learning' },
    { title: 'MongoDB & SQL', desc: 'Database Systems' }
  ];

  return (
    <div className="pt-28 pb-16 animate-fade-in">
      <div className="space-y-4 mb-16">
        <h2 className="text-3xl font-bold text-white tracking-tight">Tech Stack</h2>
        <p className="text-slate-400 max-w-3xl leading-relaxed">
          Technologies and tools I work with while building full-stack applications, backend systems, and software projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
        {/* Languages Block (Left Column) */}
        <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800 rounded p-8">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-indigo-400" size={22} />
            <h3 className="text-xl font-bold text-white">Languages</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-200">{lang.name}</span>
                  <span className="text-slate-500 font-mono text-xs">{lang.level}</span>
                </div>
                {/* Progress Bar Container */}
                <div className="h-2 w-full bg-slate-950 border border-slate-900 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infra & Tools Block (Right Column) */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Server className="text-cyan-400" size={22} />
            <h3 className="text-xl font-bold text-white">Tools & Platforms</h3>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-2">
            {tools.map((tool) => (
              <span 
                key={tool}
                className="bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-semibold px-3 py-2 rounded-md transition-all shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Frameworks & Libraries Grid (Bottom Block) */}
      <div className="bg-slate-900/40 border border-slate-800 rounded p-8">
        <div className="flex items-center gap-3 mb-8">
          <Layout className="text-violet-400" size={22} />
          <h3 className="text-xl font-bold text-white">Frameworks & Libraries</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {frameworks.map((fw) => (
            <div 
              key={fw.title}
              className="bg-slate-950/40 border border-slate-800 p-5 rounded hover:border-slate-700 transition-colors"
            >
              <h4 className="text-base font-bold text-white mb-1">{fw.title}</h4>
              <p className="text-xs text-slate-500 font-medium">{fw.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
