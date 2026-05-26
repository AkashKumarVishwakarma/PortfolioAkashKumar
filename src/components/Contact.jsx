import React, { useState } from 'react';
import { Mail, MapPin, Link2, Code2, Download, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000); // Clear alert after 5s
    }, 1500);
  };

  return (
    <div className="pt-28 pb-16 animate-fade-in">
      <div className="space-y-4 mb-16">
        <h2 className="text-3xl font-bold text-white tracking-tight">Get in Touch</h2>
        <p className="text-slate-400 max-w-3xl leading-relaxed">
          Interested in collaborating or have a question about a specific project? Reach out using the form below or connect via the provided channels. I am always open to discussing new engineering challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 bg-slate-900/30 border border-slate-800 rounded p-8 space-y-6">
          {status === 'success' && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded flex items-center gap-3 text-sm">
              <CheckCircle size={18} className="shrink-0" />
              <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
                disabled={status === 'sending'}
                className="w-full bg-slate-950/60 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 rounded px-4 py-2.5 outline-none text-slate-100 placeholder:text-slate-500 transition-colors text-sm"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane.doe@example.com"
                required
                disabled={status === 'sending'}
                className="w-full bg-slate-950/60 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 rounded px-4 py-2.5 outline-none text-slate-100 placeholder:text-slate-500 transition-colors text-sm"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label htmlFor="subject" className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              disabled={status === 'sending'}
              className="w-full bg-slate-950/60 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 rounded px-4 py-2.5 outline-none text-slate-100 placeholder:text-slate-500 transition-colors text-sm"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Detailed description of your inquiry..."
              required
              rows={6}
              disabled={status === 'sending'}
              className="w-full bg-slate-950/60 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 rounded px-4 py-2.5 outline-none text-slate-100 placeholder:text-slate-500 transition-colors text-sm resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded text-sm font-semibold border border-slate-800 hover:border-slate-700 transition-all shadow-sm flex items-center gap-2 group disabled:opacity-50"
            >
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              <Send size={14} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </button>
          </div>
        </form>

        {/* Right Side: Details & Connect */}
        <div className="lg:col-span-5 space-y-6">
          {/* Contact Details Card */}
          <div className="bg-slate-900/30 border border-slate-800 rounded p-6 space-y-5">
            <h3 className="text-lg font-bold text-white mb-2">Contact Details</h3>
            
            <div className="flex gap-4">
              <Mail className="text-slate-500 mt-1 shrink-0" size={18} />
              <div>
                <p className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">Email</p>
                <a href="mailto:hello@csportfolio.dev" className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                  hello@csportfolio.dev
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-slate-500 mt-1 shrink-0" size={18} />
              <div>
                <p className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">Location</p>
                <p className="text-sm font-semibold text-slate-200">San Francisco, CA</p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Remote OK</p>
              </div>
            </div>
          </div>

          {/* Connect Card */}
          <div className="bg-slate-900/30 border border-slate-800 rounded p-6 space-y-6">
            <h3 className="text-lg font-bold text-white mb-2">Connect</h3>
            
            <div className="space-y-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors text-sm font-semibold"
              >
                <Link2 size={16} className="text-slate-500" />
                <span>LinkedIn Profile</span>
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors text-sm font-semibold"
              >
                <Code2 size={16} className="text-slate-500" />
                <span>GitHub Repositories</span>
              </a>
            </div>

            <div className="border-t border-slate-800 pt-5">
              <p className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-3.5">
                Professional Documentation
              </p>
              <a
                href="/resume.pdf"
                download
                className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-200 py-3 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Download size={16} className="text-slate-500" />
                <span>Download Resume.pdf</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
