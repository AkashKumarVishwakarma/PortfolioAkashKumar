import React from 'react';
import { MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 text-slate-400 bg-slate-950 animate-fade-in">
      {/* Modern Premium Footer Separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800/85 via-indigo-500/20 via-slate-800/85 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-10 border-b border-slate-900/60">

          {/* Left Text Content */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Akash Kumar</h2>
            <span className="text-indigo-400 font-semibold text-base">Software Developer</span>

            <div className="flex flex-col space-y-2.5 pt-3">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <MapPin size={16} className="text-indigo-400" />
                <span>Bhadohi, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Icon Content */}
          <div className="flex flex-wrap items-center gap-6 lg:gap-0 text-white">
            {/* GitHub */}
            <a
              href="https://github.com/AkashKumarVishwakarma"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="flex items-center justify-center p-2 rounded-xl border border-slate-800 bg-slate-900/40 transition-all duration-300 group-hover:border-slate-700 group-hover:bg-slate-900/80 group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <span className="font-semibold text-sm">GitHub</span>
            </a>

            <div className="hidden sm:block h-6 w-[1px] bg-slate-800/85 mx-5" />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akashkumarvishwakarma/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="flex items-center justify-center p-2 rounded-xl border border-slate-800 bg-slate-900/40 transition-all duration-300 group-hover:border-slate-700 group-hover:bg-slate-900/80 group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current text-[#0a66c2]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="font-semibold text-sm">LinkedIn</span>
            </a>

            <div className="hidden sm:block h-6 w-[1px] bg-slate-800/85 mx-5" />

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Akash_Kumar_Vishwakarma/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="flex items-center justify-center p-2 rounded-xl border border-slate-800 bg-slate-900/40 transition-all duration-300 group-hover:border-slate-700 group-hover:bg-slate-900/80 group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#FFA116] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.102 17.93l-2.697 2.607c-.466.451-1.211.451-1.677 0L6.753 15.93c-.466-.45-1.211-.45-1.677 0a1.135 1.135 0 000 1.62l4.975 4.808c1.398 1.35 3.657 1.35 5.055 0l4.975-4.808a1.135 1.135 0 000-1.62c-.466-.45-1.211-.45-1.677 0l-.382.37z" />
                  <path d="M5.076 8.07c-.466-.451-1.211-.451-1.677 0a1.135 1.135 0 000 1.62l4.975 4.808c.466.451 1.211.451 1.677 0a1.135 1.135 0 000-1.62L5.076 8.07z" />
                  <path d="M18.424 8.07c-.466-.451-1.211-.451-1.677 0a1.135 1.135 0 000 1.62l3.298 3.187c.466.451 1.211.451 1.677 0a1.135 1.135 0 000-1.62l-3.298-3.187z" />
                  <path d="M16.747 4.883l-3.342-3.228c-1.398-1.35-3.657-1.35-5.055 0L3.375 6.463a1.135 1.135 0 000 1.62c.466.45 1.211.45 1.677 0l4.975-4.808c.466-.45 1.211-.45 1.677 0l3.342 3.228c.466.45 1.211.45 1.677 0a1.135 1.135 0 000-1.62z" />
                </svg>
              </div>
              <span className="font-semibold text-sm">LeetCode</span>
            </a>

            <div className="hidden sm:block h-6 w-[1px] bg-slate-800/85 mx-5" />

            {/* Email */}
            <a
              href="mailto:akashkumargyn2002@gmail.com"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="flex items-center justify-center p-2 rounded-xl border border-slate-800 bg-slate-900/40 transition-all duration-300 group-hover:border-slate-700 group-hover:bg-slate-900/80 group-hover:scale-105">
                <Mail size={20} className="text-violet-400" />
              </div>
              <span className="font-semibold text-sm">Email</span>
            </a>
          </div>

        </div>

        {/* Bottom Text / Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <span>© 2026 Akash Kumar. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
