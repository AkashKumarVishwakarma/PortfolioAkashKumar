import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ExternalLink, Code2, Server, Globe } from 'lucide-react';
import About from './About';

export default function Hero() {
  const heroTags = ['Java', 'Python', 'MongoDB', 'React', 'SQL', 'Node.js', 'Git'];

  const featuredProjects = [
    {
      title: 'Sales Analytics Dashboard',
      description: 'Interactive dashboard built using Python, Pandas, and Matplotlib for analyzing sales datasets. Includes data cleaning, visualization, trend analysis, and KPI reporting.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'streamlit'],
      sourceUrl: '#',
      imageType: 'server',
    },
    {
      title: 'MERN E-Commerce Platform',
      description: 'Full-stack e-commerce application with authentication, product management, cart functionality, and payment integration. Built using React, Node.js, Express, and MongoDB.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      sourceUrl: '#',
      demoUrl: '#',
      imageType: 'analytics',
    },
    {
      title: 'Movie Recommendation System',
      description: 'Machine learning project that recommends movies based on user preferences using cosine similarity and content-based filtering.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Numpy'],
      sourceUrl: '#',
      imageType: 'code',
    }
  ];

  return (
    <div className="pt-28 pb-16 animate-fade-in">
      {/* Landing Info & Terminal Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left Side: Headline & Bio */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Aspiring software engineer building real-world applications using Python, React, and backend technologies.
          </h1>
          <p className="text-base md:text-md text-slate-400 leading-relaxed max-w-2xl">
            I am a software developer passionate about backend engineering, data analysis, and modern web development. I enjoy building real-world projects using Python, React, Node.js, and databases while continuously improving problem-solving and system design skills.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-900 border border-slate-800 text-slate-300 px-3.5 py-1.5 rounded text-sm font-medium tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Sleek Terminal Window */}
        <div className="lg:col-span-5">
          <div className="w-full aspect-square max-w-md mx-auto bg-slate-900/60 border border-slate-800 rounded-lg shadow-2xl backdrop-blur-md overflow-hidden flex flex-col relative group">
            {/* Window bar */}
            <div className="h-10 bg-slate-950/80 border-b border-slate-800/80 px-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/85"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/85"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/85"></span>
              </div>
              <span className="text-xs text-slate-500 font-mono">portfolio.sh</span>
              <div className="w-10"></div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-6 font-mono text-sm text-slate-400 space-y-4 overflow-y-auto">
              <div>
                <span className="text-indigo-400">guest@cs-portfolio</span>:<span className="text-cyan-400">~</span>$ neofetch
              </div>
              <div className="flex gap-4">
                <div className="text-indigo-500 hidden sm:block font-bold">
                  {` /\\_/\\
( o.o )
 > ^ <`}
                </div>
                <div className="space-y-1 text-xs">
                  <p><span className="text-slate-300 font-semibold">User:</span> CSE Student & Developer</p>
                  <p><span className="text-slate-300 font-semibold">Focus:</span> Full-Stack Web Dev / MERN</p>
                  <p><span className="text-slate-300 font-semibold">Languages:</span> C++, JS, Python, Java, Rust</p>
                  <p><span className="text-slate-300 font-semibold">Frameworks:</span> Next.js, React, Node.js</p>
                  <p><span className="text-slate-300 font-semibold">Status:</span> Seeking Internships & Full-Time</p>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-indigo-400">guest@cs-portfolio</span>:<span className="text-cyan-400">~</span>$ curl -s api.github.com/users/active
              </div>
              <div className="text-xs text-slate-500 bg-slate-950/50 p-2.5 rounded border border-slate-800 font-mono leading-relaxed">
                {`{
  "name": "CSE Student",
  "specialization": "Full-Stack Web Development",
  "dsa": "Proficient (C++ & Java)",
  "open_to_work": true
}`}
              </div>

              <div className="animate-pulse flex items-center gap-1">
                <span className="text-indigo-400">guest@cs-portfolio</span>:<span className="text-cyan-400">~</span>$ <span className="w-2 h-4 bg-indigo-500 inline-block"></span>
              </div>
            </div>

            {/* Subtle Terminal Glow Icon overlaying */}
            <div className="absolute right-4 bottom-4 text-slate-800/20 group-hover:text-indigo-500/10 transition-colors duration-300">
              <Terminal size={120} />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Block */}
      <div className="pt-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
          <Link
            to="/projects"
            className="flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
          >
            VIEW ALL
            <span className="group-hover:translate-x-1 transition-transform duration-200">➔</span>
          </Link>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded overflow-hidden flex flex-col group hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/10"
            >
              {/* Project Card Header Visual (Gray Placeholder with Icons) */}
              <div className="h-44 bg-slate-900 border-b border-slate-800 flex items-center justify-center relative overflow-hidden">
                {/* SVG Visual Background Grid */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>

                {project.imageType === 'server' && (
                  <Server size={48} className="text-slate-700 group-hover:text-indigo-400 transition-colors duration-300" />
                )}
                {project.imageType === 'analytics' && (
                  <Globe size={48} className="text-slate-700 group-hover:text-cyan-400 transition-colors duration-300" />
                )}
                {project.imageType === 'code' && (
                  <Code2 size={48} className="text-slate-700 group-hover:text-violet-400 transition-colors duration-300" />
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-950 border border-slate-900 text-slate-400 px-2 py-0.5 rounded text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer Links */}
                <div className="flex gap-4 pt-6 border-t border-slate-800/80 mt-6 text-xs font-medium text-slate-400">
                  <a
                    href={project.sourceUrl}
                    className="flex items-center gap-1 hover:text-indigo-400 transition-colors"
                  >
                    <Code2 size={14} />
                    View Source
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-1 hover:text-indigo-400 transition-colors ml-auto"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded About Section */}
      <About />
    </div>
  );
}
