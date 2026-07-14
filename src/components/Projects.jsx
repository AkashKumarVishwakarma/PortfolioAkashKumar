import React, { useState } from 'react';
import { Code2, ExternalLink, FileText } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = ['ALL', 'Full-Stack', 'Backend', 'Data & AI'];

  const projectsData = [
    {
      title: 'React Dashboard',
      category: 'Full-Stack',
      categoryLabel: 'Full-Stack',
      description: 'Devloped a centralized dashboard to organize and access multiple react applications. Implemented responsive design, routing, reusable components, and state management using React context API.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'HTML'],
      links: [
        { label: 'GitHub', href: 'https://github.com/AkashKumarVishwakarma/react-projects-dashboard', type: 'source' },
        { label: 'Live Demo', href: 'https://react-projects-dashboard.vercel.app/', type: 'demo' }
      ]
    },
    {
      title: 'Sales Analytics Dashboard',
      category: 'Data & AI',
      categoryLabel: 'Data & AI',
      description: 'Interactive dashboard for analyzing sales datasets using Python, Pandas, and Matplotlib. Includes data cleaning, KPI tracking, and visual reporting.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
      links: [
        { label: 'GitHub', href: '#', type: 'source' },
        { label: 'Live Demo', href: '#', type: 'demo' }
      ]
    },
    {
      title: 'MERN E-Commerce Platform',
      category: 'Full-Stack',
      categoryLabel: 'Full-Stack',
      description: 'Full-stack e-commerce application with authentication, shopping cart, product management, and responsive UI.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      links: [
        { label: 'GitHub', href: '#', type: 'source' },
        { label: 'Live Demo', href: '#', type: 'demo' }
      ]
    },
    {
      title: 'Task Management API',
      category: 'Backend',
      categoryLabel: 'Backend',
      description: 'REST API built using FastAPI and PostgreSQL with JWT authentication, CRUD operations, and role-based access control.',
      tech: ['FastAPI', 'PostgreSQL', 'JWT', 'Docker'],
      links: [
        { label: 'GitHub', href: '#', type: 'source' },
        { label: 'Live Demo', href: '#', type: 'demo' }
      ]
    },
    {
      title: 'Movie Recommendation System',
      category: 'Data & AI',
      categoryLabel: 'Data & AI',
      description: 'Machine learning project recommending movies using content-based filtering and cosine similarity techniques.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Numpy'],
      links: [
        { label: 'GitHub', href: '#', type: 'source' },
        { label: 'Live Demo', href: '#', type: 'demo' }
      ]
    },
    {
      title: 'Portfolio Website',
      category: 'Full-Stack',
      categoryLabel: 'Full-Stack',
      description: 'Personal portfolio website built with React and modern UI practices to showcase projects, technical skills, and development journey.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      links: [
        { label: 'GitHub', href: '#', type: 'source' },
        { label: 'Live Demo', href: '#', type: 'demo' }
      ]
    }
  ];

  const filteredProjects = activeTab === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <div className="pt-28 pb-16 animate-fade-in">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
        <p className="text-slate-400 max-w-3xl leading-relaxed">
          A collection of projects focused on full-stack development, backend systems, APIs, data visualization, and problem solving.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-6 border-b border-slate-900 pb-3 mb-12 text-xs font-bold tracking-wider">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 relative transition-colors ${activeTab === tab ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300'
              }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-indigo-500" />
            )}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900/30 border border-slate-800 rounded p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-950/5"
          >
            <div className="space-y-5">
              {/* Header: Title & Category tag */}
              <div className="">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                <span className="bg-slate-900 border border-slate-800 text-slate-500 text-[13px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wide shrink-0 mt-4 inline-block">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-slate-950 border border-slate-900 text-slate-400 px-2 py-0.5 rounded text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap gap-4 pt-5 border-t border-slate-800/80 mt-6 text-xs font-medium text-slate-400">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`flex items-center gap-1 hover:text-indigo-400 transition-colors ${idx === project.links.length - 1 && idx > 0 ? 'ml-auto' : ''
                    }`}
                >
                  {link.type === 'source' && <Code2 size={14} />}
                  {link.type === 'doc' && <FileText size={14} />}
                  {link.type === 'demo' && <ExternalLink size={14} />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
