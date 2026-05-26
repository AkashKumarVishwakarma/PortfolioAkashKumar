import React from 'react';
import { BookOpen, Code, Lightbulb, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-8 border-t border-slate-900 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Story */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">Computer Science Journey</h2>
          <p className="text-slate-400 leading-relaxed text-base">
            I am a Computer Science student passionate about software development, backend engineering, and data-driven applications. I enjoy building real-world projects that combine clean design, efficient logic, and scalable architecture.
          </p>
          <p className="text-slate-400 leading-relaxed text-base">
            My primary interests include full-stack web development, backend systems, data visualization, and problem solving using data structures and algorithms. I have hands-on experience working with technologies such as Python, React, Node.js, MongoDB, PostgreSQL, and modern JavaScript frameworks.
          </p>
          <p className="text-slate-400 leading-relaxed text-base">
            Through continuous learning and project-based development, I am improving my skills in system design, APIs, database management, and modern software
            engineering practices.
          </p>
        </div>

        {/* Right Side: Quick Stats / Focus Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded hover:border-slate-750 transition-colors">
            <div className="w-10 h-10 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Education</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Pursuing a Bachelor's degree in CSE with strong foundations in programming, operating systems, databases, computer networks, and software engineering.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded hover:border-slate-750 transition-colors">
            <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <Code size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Web Development</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Building responsive and full-stack web applications using React, Node.js, Express, MongoDB, and modern frontend technologies.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded hover:border-slate-750 transition-colors">
            <div className="w-10 h-10 rounded bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4">
              <BookOpen size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Problem Solving</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Practicing data structures and algorithms to improve logical thinking, coding efficiency, and software problem-solving skills.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded hover:border-slate-750 transition-colors">
            <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Lightbulb size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Current Focus</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Currently exploring backend development, REST APIs, database systems, deep learning, and scalable application architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
