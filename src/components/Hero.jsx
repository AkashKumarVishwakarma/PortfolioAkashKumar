import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code2, Server, Globe } from 'lucide-react';
import About from './About';
import akashImg from '../assets/akashIMG.png';

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
    <div className="animate-fade-in">
      {/* Landing Info Section - Occupies Full Screen height (min-h-screen) */}
      <div className="min-h-screen flex items-center pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
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

        {/* Right Side: Sleek Modern Profile Image Container */}
        <div className="lg:col-span-5 relative group flex justify-center items-center">
          {/* Subtle ambient backglow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative w-full max-w-[320px] aspect-[4/5] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 shadow-2xl backdrop-blur-sm">
            {/* Dark gradient overlay at the bottom to transition smoothly to text */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent z-10 transition-opacity duration-300"></div>
            
            {/* Profile Image */}
            <img
              src={akashImg}
              alt="Akash Kumar Profile"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* Overlaid details at the bottom of the card */}
            <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end">
              <span className="text-white font-bold text-xl tracking-wide uppercase drop-shadow-sm">
                Akash Kumar
              </span>
              <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-mono mt-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Software Developer</span>
              </div>
            </div>

            {/* Light reflect line on top border */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Featured Projects Block */}
    <div className="py-24 border-t border-slate-900/40">
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
