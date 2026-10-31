import React from 'react';
import { Target, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onDownloadClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-950/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-slate-900 font-extrabold tracking-tight text-xl font-display whitespace-nowrap shrink-0 group"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-900 flex items-center justify-center text-amber-400 shadow-sm border border-emerald-800">
            <Target className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </div>
          <span className="flex items-center tracking-tight">
            1CLICK<span className="text-emerald-800 font-black ml-0.5">EXITS</span>
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#video-demo" className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0">
            Software Demo
          </a>
          <a href="#source-tracking" className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0">
            Source Tracking
          </a>
          <a href="#workflow" className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0">
            3-Step Workflow
          </a>
          <a href="#dossiers" className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0">
            Owner Dossiers
          </a>
          <a href="#features" className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0">
            Feature Breakdown
          </a>
          <a href="#pricing" className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0">
            Pricing & Plans (From $197)
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://1clickleads.com/b/exit"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onDownloadClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold text-white bg-emerald-900 hover:bg-emerald-800 active:scale-95 shadow-sm border border-emerald-950/20 transition-all whitespace-nowrap shrink-0"
          >
            <span>View Plans (From $197)</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </a>
        </div>
      </div>
    </header>
  );
};
