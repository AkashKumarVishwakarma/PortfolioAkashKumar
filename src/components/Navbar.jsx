import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import akLogo from '../assets/akLOGO.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Skills', to: '/skills' },
    // { label: 'Engineering Experience', to: '/experience' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-950/80 backdrop-blur-md py-3 shadow-lg'
        : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3.5 group"
          >
            <img
              src={akLogo}
              alt="Akash Kumar Logo"
              className="h-10 md:h-12 w-auto object-contain rounded-md border border-amber-500/20 shadow-md shadow-amber-500/5 transition-all duration-300 group-hover:border-amber-500/40 group-hover:scale-[1.02]"
            />
            <div className="flex flex-col justify-center">
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                Akash Kumar
              </span>
              <span className="text-slate-400 text-xs md:text-sm pl-0.5">Software Developer</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `relative py-1 text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-indigo-400 font-semibold' : 'text-slate-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 rounded-full animate-pulse" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium border border-slate-800 transition-all shadow-sm hover:border-slate-700"
          >
            <FileText size={16} className="text-slate-400" />
            Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 hover:text-white p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-[64px] left-0 w-full bg-slate-950/95 border-b border-slate-900 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors hover:text-white ${isActive ? 'text-indigo-400 border-l-2 border-indigo-500 pl-3 font-semibold' : 'text-slate-400 pl-3'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-md text-base font-medium border border-slate-800 transition-all"
          >
            <FileText size={18} className="text-slate-400" />
            Resume
          </a>
        </div>
      </div>

      {/* Subtle Navbar Separator */}
      <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800/80 via-indigo-500/10 via-slate-800/80 to-transparent transition-opacity duration-300 ${
        scrolled ? 'opacity-100' : 'opacity-40'
      }`} />
    </nav>
  );
}
