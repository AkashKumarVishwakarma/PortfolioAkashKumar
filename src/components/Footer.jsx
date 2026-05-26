import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 text-xs text-slate-500 bg-slate-950 animate-fade-in">
      {/* Modern Premium Footer Separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800/85 via-cyan-500/15 via-slate-800/85 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <Link 
          to="/" 
          className="text-base font-bold text-white tracking-tight hover:text-indigo-400 transition-colors"
        >
          CS Portfolio
        </Link>

        {/* Copyright */}
        <span className="text-center">
          © {currentYear} CS Engineering Portfolio. Designed and developed by Akash Kumar.
        </span>

        {/* Links */}
        <div className="flex gap-6 font-semibold">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <Link 
            to="/contact" 
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
