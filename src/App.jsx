import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      {/* Reset window scroll coordinates on route transition */}
      <ScrollToTop />

      <div className="bg-slate-950 min-h-screen text-slate-300 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Dynamic Route Viewport */}
        <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <Routes>
            {/* Home route containing landing banner, featured cards, and about me */}
            <Route path="/" element={<Hero />} />
            
            {/* Sub-pages */}
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer Branding */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
